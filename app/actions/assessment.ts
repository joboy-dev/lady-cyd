'use server';

import { z } from 'zod';
import { resend } from '@/lib/email/resend';
import { AssessmentResultsEmail } from '@/lib/email/templates/assessment-results';
import { AssessmentPdfRequestEmail } from '@/lib/email/templates/assessment-pdf-request';
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

const pdfSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
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

  try {
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: `Your Wound Point Assessment — ${result.name}`,
      react: AssessmentResultsEmail({ name, primary: primary as WoundType, scores, multipleActive }),
    });

    return { success: true };
  } catch (err) {
    console.error('[assessment] results email failed:', err);
    return { success: false, error: 'Could not send your results email. Please try again.' };
  }
}

export async function requestSoulAuditPDF(data: {
  name: string;
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  const parsed = pdfSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Please enter a valid name and email.' };
  }

  const { name, email } = parsed.data;

  try {
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: 'Your Soul Audit PDF — The 10 Wound Points™ Assessment',
      react: AssessmentPdfRequestEmail({ name, pdfUrl: SOUL_AUDIT_PDF_URL }),
    });

    return { success: true };
  } catch (err) {
    console.error('[assessment] PDF request email failed:', err);
    return { success: false, error: 'Could not send your email. Please try again.' };
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
      react: SoulAuditEmail1({ name, wounds: woundObjects }),
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
