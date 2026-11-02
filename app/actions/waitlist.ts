'use server';

import { z } from 'zod';
import { resend } from '@/lib/email/resend';
import { subscribeToConvertKit, tagSubscriberById } from '@/lib/convertkit';

const FROM = process.env.RESEND_FROM_EMAIL ?? 'noreply@ladycyd.online';
const TO = process.env.LADY_CYD_EMAIL ?? 'Hello@ladycyd.online';

const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required').max(80),
  email: z.string().email('Please enter a valid email address'),
});

export async function joinGatheringWaitlist(
  data: z.infer<typeof waitlistSchema>
): Promise<{ success: boolean; error?: string }> {
  const parsed = waitlistSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Please enter a valid name and email address.' };
  }

  const { name, email } = parsed.data;

  const result = await subscribeToConvertKit(email, name.split(' ')[0], 'gathering-waitlist');
  if (!result.success) return result;

  await tagSubscriberById(email, process.env.CONVERTKIT_TAG_GATHERING_WAITLIST).catch((e) =>
    console.error('[waitlist] ConvertKit tag error:', e)
  );

  try {
    await resend.emails.send({
      from: `Grit & Graceful <${FROM}>`,
      to: TO,
      replyTo: email,
      subject: `Gathering waitlist — ${name}`,
      text: `${name} <${email}> joined the Grit & Graceful Gathering waitlist.`,
    });
  } catch (err) {
    console.error('[waitlist] notification email failed:', err);
  }

  return { success: true };
}
