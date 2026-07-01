'use server';

import { z } from 'zod';
import { resend } from '@/lib/email/resend';
import { ClarityCallNotificationEmail } from '@/lib/email/templates/clarity-call-notification';
import { ClarityCallConfirmationEmail } from '@/lib/email/templates/clarity-call-confirmation';
import { clarityCallSchema } from '@/lib/validators/general';

type ClarityCallData = z.infer<typeof clarityCallSchema>;

const FROM = process.env.RESEND_FROM_EMAIL ?? 'noreply@ladycyd.online';
const TO = process.env.LADY_CYD_EMAIL ?? 'Hello@ladycyd.online';

export async function submitClarityCall(
  data: ClarityCallData
): Promise<{ success: boolean; error?: string }> {
  const parsed = clarityCallSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Please check your entries and try again.' };
  }

  const { name, email, heard_via, current_place, desired_outcome, readiness } = parsed.data;

  try {
    // Send notification to Lady Cyd (reply-to set to applicant so she can reply directly)
    await resend.emails.send({
      from: `Grit & Graceful <${FROM}>`,
      to: TO,
      replyTo: email,
      subject: `New Clarity Call Application — ${name}`,
      react: ClarityCallNotificationEmail({
        name,
        email,
        heard_via,
        current_place,
        desired_outcome,
        readiness,
      }),
    });

    // Send confirmation to applicant
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: email,
      subject: 'Your Clarity Call Application Has Been Received',
      react: ClarityCallConfirmationEmail({ name }),
    });

    return { success: true };
  } catch (err) {
    console.error('[clarity-call] email send failed:', err);
    return {
      success: false,
      error: 'Something went wrong sending your application. Please email Hello@ladycyd.online directly.',
    };
  }
}
