'use server';

import { z } from 'zod';
import { resend } from '@/lib/email/resend';
import { AssessmentResultsEmail } from '@/lib/email/templates/assessment-results';
import { SoulAuditEmail1 } from '@/lib/email/templates/soul-audit-email-1';
import { SoulAuditEmail2 } from '@/lib/email/templates/soul-audit-email-2';
import { SoulAuditEmail3 } from '@/lib/email/templates/soul-audit-email-3';
import type { WoundType } from '@/lib/assessment/questions';
import type { Scores } from '@/lib/assessment/scoring';
import { woundResults } from '@/lib/assessment/results';
import { type SoulAuditWoundId, soulAuditWoundMap } from '@/lib/assessment/soul-audit-wounds';
import { subscribeToConvertKit, tagSubscriberByWound } from '@/lib/convertkit';

const FROM = process.env.RESEND_FROM_EMAIL ?? 'noreply@ladycyd.online';
const SOUL_AUDIT_PDF_URL = process.env.SOUL_AUDIT_PDF_URL ?? '';
const TO = process.env.LADY_CYD_EMAIL ?? 'Hello@ladycyd.online';
// Inbox notification per submission is opt-in: set NOTIFY_ON_ASSESSMENT=true once Lady Cyd confirms she wants it.
const NOTIFY_ON_ASSESSMENT = process.env.NOTIFY_ON_ASSESSMENT === 'true';

async function notifyLadyCyd(data: { source: string; name: string; email: string; detail: string }) {
  if (!NOTIFY_ON_ASSESSMENT) return;
  try {
    await resend.emails.send({
      from: `Grit & Graceful <${FROM}>`,
      to: TO,
      replyTo: data.email,
      subject: `New ${data.source} submission — ${data.name}`,
      text: `${data.name} <${data.email}>\n${data.detail}\n\nSource: ${data.source}`,
    });
  } catch (err) {
    console.error('[assessment] notification email failed:', err);
  }
}

const resultsSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  primary: z.enum(['identity', 'relational', 'purpose', 'legacy', 'rhythm', 'voice']),
  scores: z.object({
    identity: z.number(),
    relational: z.number(),
    purpose: z.number(),
    legacy: z.number(),
    rhythm: z.number(),
    voice: z.number(),
  }),
  multipleActive: z.boolean(),
});

export async function sendAssessmentResults(data: {
  name: string;
  email: string;
  primary: WoundType;
  scores: Scores;
  multipleActive: boolean;
}): Promise<{ success: boolean; error?: string }> {
  const parsed = resultsSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid data.' };
  }

  const { name, email, primary, scores, multipleActive } = parsed.data;
  const result = woundResults[primary as WoundType];
  const firstName = name.split(' ')[0];

  try {
    // Save the contact in ConvertKit (non-blocking — don't fail the whole action if CK errors)
    await subscribeToConvertKit(email, firstName, 'wound-point-assessment').catch((e) =>
      console.error('[assessment] ConvertKit subscribe error:', e)
    );
    await tagSubscriberByWound(email, primary).catch((e) =>
      console.error('[assessment] ConvertKit tag error:', e)
    );

    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: `Your Wound Point Assessment — ${result.name}`,
      react: AssessmentResultsEmail({
        name,
        primary: primary as WoundType,
        scores,
        multipleActive,
        pdfUrl: SOUL_AUDIT_PDF_URL || undefined,
      }),
    });

    await notifyLadyCyd({
      source: 'Wound Point Assessment (quiz)',
      name,
      email,
      detail: `Primary wound point: ${result.name}`,
    });

    return { success: true };
  } catch (err) {
    console.error('[assessment] results email failed:', err);
    return { success: false, error: 'Could not send your results email. Please try again.' };
  }
}

/* ─── Soul Audit 3-email sequence ────────────────────────────────── */

const WOUND_IDS = ['identity', 'worth', 'voice', 'trust', 'purpose', 'rhythm', 'control', 'grief', 'relational', 'legacy'] as const;

const soulAuditSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  wounds: z.array(z.enum(WOUND_IDS)).length(3),
});

export async function submitSoulAudit(data: {
  name: string;
  email: string;
  wounds: SoulAuditWoundId[];
}): Promise<{ success: boolean; error?: string }> {
  const parsed = soulAuditSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Please check your details and select exactly 3 wound points.' };
  }

  const { name, email, wounds } = parsed.data;
  const firstName = name.split(' ')[0];
  const woundObjects = wounds.map((id) => soulAuditWoundMap[id]);

  // +48 hours and +5 days from now
  const email2At = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
  const email3At = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString();

  try {
    // Subscribe + tag in ConvertKit (non-blocking — don't fail the whole action if CK errors)
    await subscribeToConvertKit(email, firstName, 'soul-audit').catch((e) =>
      console.error('[soul-audit] ConvertKit subscribe error:', e)
    );
    await Promise.allSettled(
      wounds.map((w) => tagSubscriberByWound(email, w))
    );

    // Email 1 — immediate
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: `Your Soul Audit results are here, ${firstName}.`,
      react: SoulAuditEmail1({ name, wounds: woundObjects, pdfUrl: SOUL_AUDIT_PDF_URL || undefined }),
    });

    await notifyLadyCyd({
      source: 'Soul Audit (PDF)',
      name,
      email,
      detail: `Selected wound points: ${woundObjects.map((w) => w.name).join(', ')}`,
    });

    // Email 2 — +48 hours
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: 'There is something deeper beneath what your Soul Audit revealed.',
      react: SoulAuditEmail2({ name, wounds: woundObjects }),
      scheduledAt: email2At,
    });

    // Email 3 — +5 days
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: 'You named it. Now let us work on it together.',
      react: SoulAuditEmail3({ name }),
      scheduledAt: email3At,
    });

    return { success: true };
  } catch (err) {
    console.error('[soul-audit] email sequence failed:', err);
    return { success: false, error: 'Could not send your results. Please try again.' };
  }
}
