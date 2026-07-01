'use server';

import { z } from 'zod';
import { subscribeToConvertKit } from '@/lib/convertkit';

const subscribeSchema = z.object({
  name: z.string().min(1, 'Name is required').max(80),
  email: z.string().email('Please enter a valid email address'),
  source: z.string().optional(),
});

type SubscribeData = z.infer<typeof subscribeSchema>;

export async function subscribe(
  data: SubscribeData
): Promise<{ success: boolean; error?: string }> {
  const parsed = subscribeSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Please enter a valid name and email address.' };
  }

  const { name, email, source } = parsed.data;
  return subscribeToConvertKit(email, name, source);
}
