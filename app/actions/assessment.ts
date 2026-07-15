'use server';

import { z } from 'zod';
import { resend } from '@/lib/email/resend';
import { AssessmentResultsEmail } from '@/lib/email/templates/assessment-results';
import { AssessmentPdfRequestEmail } from '@/lib/email/templates/assessment-pdf-request';
import type { WoundType } from '@/lib/assessment/questions';
import type { Scores } from '@/lib/assessment/scoring';
import { woundResults } from '@/lib/assessment/results';

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
