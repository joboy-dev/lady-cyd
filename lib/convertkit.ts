const API_KEY = process.env.CONVERTKIT_API_KEY;
// const FORM_ID = process.env.CONVERTKIT_FORM_ID;

if (!API_KEY) throw new Error('Missing CONVERTKIT_API_KEY environment variable');
// if (!FORM_ID) throw new Error('Missing CONVERTKIT_FORM_ID environment variable');

const BASE = 'https://api.kit.com/v4';

const headers = {
  'Content-Type': 'application/json',
  'X-Kit-Api-Key': API_KEY,
};

/* ─── Types ───────────────────────────────────────────────────────── */

interface KitSubscriber {
  id: number;
  first_name: string;
  email_address: string;
  state: string;
  created_at: string;
  fields: Record<string, string>;
}

interface KitSubscribersResponse {
  subscribers: KitSubscriber[];
  pagination: {
    has_previous_page: boolean;
    has_next_page: boolean;
    start_cursor: string;
    end_cursor: string;
    per_page: number;
  };
}

/* ─── Helpers ─────────────────────────────────────────────────────── */

/**
 * Look up a subscriber by email address.
 * Returns the subscriber object if found, null if not.
 */
export async function getSubscriberByEmail(
  email: string
): Promise<KitSubscriber | null> {
  const url = new URL(`${BASE}/subscribers`);
  url.searchParams.set('email_address', email);
  url.searchParams.set('status', 'all'); // include inactive/cancelled too

  const res = await fetch(url.toString(), { headers });

  if (!res.ok) {
    const body = await res.text();
    console.error('[kit] getSubscriberByEmail failed:', res.status, body);
    return null;
  }

  const data: KitSubscribersResponse = await res.json();
  return data.subscribers[0] ?? null;
}

/**
 * Create a brand-new subscriber.
 * Returns the created subscriber or null on failure.
 */
export async function createSubscriber(
  email: string,
  firstName: string,
  source?: string
): Promise<KitSubscriber | null> {
  const res = await fetch(`${BASE}/subscribers`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email_address: email,
      first_name: firstName,
      state: 'active',
      ...(source ? { fields: { source } } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('[kit] createSubscriber failed:', res.status, body);
    return null;
  }

  const data: { subscriber: KitSubscriber } = await res.json();
  return data.subscriber;
}

/**
 * Add an existing subscriber (by ID) to the configured form.
 */
// export async function addSubscriberToForm(
//   subscriberId: number
// ): Promise<boolean> {
//   const res = await fetch(`${BASE}/forms/${FORM_ID}/subscribers/${subscriberId}`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({}),
//   });

//   if (!res.ok) {
//     const body = await res.text();
//     console.error('[kit] addSubscriberToForm failed:', res.status, body);
//     return false;
//   }

//   return true;
// }

/* ─── Tagging ─────────────────────────────────────────────────────── */

import type { SoulAuditWoundId } from '@/lib/assessment/soul-audit-wounds';

const WOUND_TAG_IDS: Record<SoulAuditWoundId, string | undefined> = {
  identity: process.env.CONVERTKIT_TAG_IDENTITY,
  worth: process.env.CONVERTKIT_TAG_WORTH,
  voice: process.env.CONVERTKIT_TAG_VOICE,
  trust: process.env.CONVERTKIT_TAG_TRUST,
  purpose: process.env.CONVERTKIT_TAG_PURPOSE,
  rhythm: process.env.CONVERTKIT_TAG_RHYTHM,
  control: process.env.CONVERTKIT_TAG_CONTROL,
  grief: process.env.CONVERTKIT_TAG_GRIEF,
  relational: process.env.CONVERTKIT_TAG_RELATIONAL,
  legacy: process.env.CONVERTKIT_TAG_LEGACY,
};

/**
 * Apply a ConvertKit tag to a subscriber by email address.
 * Silently skips if the tag ID env var is not set.
 */
export async function tagSubscriberByWound(
  email: string,
  wound: SoulAuditWoundId
): Promise<void> {
  const tagId = WOUND_TAG_IDS[wound];
  if (!tagId) return;

  const res = await fetch(`${BASE}/tags/${tagId}/subscribers`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email_address: email }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`[kit] tagSubscriberByWound(${wound}) failed:`, res.status, body);
  }
}

/* ─── Main export ─────────────────────────────────────────────────── */

/**
 * Upsert-safe subscribe flow:
 * 1. Check if subscriber already exists by email.
 * 2a. If yes  → add existing subscriber to the form by ID (no duplicate created).
 * 2b. If no   → create subscriber, then add to form by ID.
 * `source` is stored as a custom field and tags where the sign-up came from.
 */
export async function subscribeToConvertKit(
  email: string,
  firstName: string,
  source?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    let subscriber = await getSubscriberByEmail(email);

    if (!subscriber) {
      subscriber = await createSubscriber(email, firstName, source);
    }

    if (!subscriber) {
      return { success: false, error: 'Could not add you to the list. Please try again.' };
    }

    // const added = await addSubscriberToForm(subscriber.id);

    // if (!added) {
    //   return { success: false, error: 'Could not add you to the list. Please try again.' };
    // }

    return { success: true };
  } catch (err) {
    console.error('[kit] subscribeToConvertKit error:', err);
    return { success: false, error: 'Network error. Please try again.' };
  }
}
