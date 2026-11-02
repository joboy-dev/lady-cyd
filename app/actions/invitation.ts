'use server';

import { z } from 'zod';
import { resend } from '@/lib/email/resend';
import { InvitationNotificationEmail } from '@/lib/email/templates/invitation-notification';
import { InvitationConfirmationEmail } from '@/lib/email/templates/invitation-confirmation';
import { invitationSchema } from '@/lib/validators/general';
import { buildInvitationSections } from '@/lib/data/invitation-sections';

type InvitationData = z.infer<typeof invitationSchema>;

const FROM = process.env.RESEND_FROM_EMAIL ?? 'noreply@ladycyd.online';
const TO = process.env.LADY_CYD_EMAIL ?? 'Hello@ladycyd.online';

export async function submitInvitation(
  data: InvitationData
): Promise<{ success: boolean; error?: string }> {
  const parsed = invitationSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Please check your entries and try again.' };
  }

  const invitation = parsed.data;

  try {
    // Notification to Lady Cyd (reply-to set to the requester so she can reply directly)
    await resend.emails.send({
      from: `Grit & Graceful <${FROM}>`,
      to: TO,
      replyTo: invitation.email,
      subject: `New Invitation Request — ${invitation.event_name} (${invitation.full_name})`,
      react: InvitationNotificationEmail({
        name: invitation.full_name,
        email: invitation.email,
        eventName: invitation.event_name,
        sections: buildInvitationSections(invitation),
      }),
    });

    // Confirmation to the requester
    await resend.emails.send({
      from: `Lady Cyd <${FROM}>`,
      to: invitation.email,
      subject: 'Thank You for Inviting Lady Cyd',
      react: InvitationConfirmationEmail({ name: invitation.full_name }),
    });

    return { success: true };
  } catch (err) {
    console.error('[invitation] email send failed:', err);
    return {
      success: false,
      error: 'Something went wrong sending your request. Please email Hello@ladycyd.online directly.',
    };
  }
}
