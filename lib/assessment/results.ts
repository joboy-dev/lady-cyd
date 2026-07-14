import type { WoundType } from './questions';

export interface WoundResult {
  name: string;
  tagline: string;
  description: string;
  /** Primary CTA — varies by wound type */
  primaryCta: { label: string; href: string };
  /** Always shown alongside primary as a secondary option */
  secondaryCta: { label: string; href: string };
}

export const woundResults: Record<WoundType, WoundResult> = {
  identity: {
    name: 'The Identity Wound',
    tagline: 'The Performance Has Become The Person.',
    description:
      "You have adapted so successfully to expectations, environments, and roles that you have lost reliable access to who you actually are beneath them. The version of you that the world sees is real — but it is not complete. The work begins here: returning to the woman beneath the performance.",
    primaryCta: { label: 'Register For Healing Harbour Live', href: '/inner-circle' },
    secondaryCta: { label: 'Apply For a Clarity Call', href: '/work-with-me' },
  },
  relational: {
    name: 'The Relational Wound',
    tagline: 'Visible To Everyone. Witnessed By Almost No One.',
    description:
      "You are surrounded and still carrying this alone. The loneliness you feel is not the absence of people — it is the presence of people who cannot access the true, unedited version of you. The work begins here: building the kind of relationships and community that can actually hold what you carry.",
    primaryCta: { label: 'Register For Healing Harbour Live', href: '/inner-circle' },
    secondaryCta: { label: 'Apply For a Clarity Call', href: '/work-with-me' },
  },
  purpose: {
    name: 'The Purpose Wound',
    tagline: 'Productive. Effective. Privately Misaligned.',
    description:
      "The achievements are real. The impact is visible. And something still feels slightly off-centre — because portions of what you have built were constructed under pressure and expectation rather than divine clarity and personal alignment. The work begins here: finding the exact assignment, not just a good one.",
    primaryCta: { label: 'Apply For a Clarity Call', href: '/work-with-me' },
    secondaryCta: { label: 'Explore WHOLE Life Design™', href: '/whole-life-design' },
  },
  legacy: {
    name: 'The Legacy Wound',
    tagline: 'She Is Creating Impact. She Has Not Yet Designed Inheritance.',
    description:
      "You are building something significant — and very little of it is structurally designed to continue beyond your direct presence. The work begins here: moving from impact thinking to inheritance architecture. Building with the next generation in mind as a daily reflex.",
    primaryCta: { label: 'Apply For a Clarity Call', href: '/work-with-me' },
    secondaryCta: { label: 'Explore WHOLE Life Design™', href: '/whole-life-design' },
  },
  rhythm: {
    name: 'The Rhythm Wound',
    tagline: 'Your Nervous System Has Forgotten What Safe Feels Like.',
    description:
      "Your body has been in survival mode for longer than you realise. The exhaustion that will not shift with rest, the inability to slow down without guilt, the persistent tension — these are not personality traits. They are physiological responses to prolonged pressure. The work begins here: teaching your nervous system what safety actually feels like.",
    primaryCta: { label: 'Register For Healing Harbour Live', href: '/inner-circle' },
    secondaryCta: { label: 'Apply For a Clarity Call', href: '/work-with-me' },
  },
  voice: {
    name: 'The Voice Wound',
    tagline: 'She Has The Word. She Is Still Negotiating Permission To Say It.',
    description:
      "The insight is present. The wisdom is real. The conviction is clear. And something continues to edit, filter, or silence it before it reaches the room. The work begins here: identifying what conditioned you to hold your voice back — and dismantling that agreement permanently.",
    primaryCta: { label: 'Register For Healing Harbour Live', href: '/inner-circle' },
    secondaryCta: { label: 'Apply For a Clarity Call', href: '/work-with-me' },
  },
};

export const woundLabels: Record<WoundType, string> = {
  identity: 'Identity Wound',
  relational: 'Relational Wound',
  purpose: 'Purpose Wound',
  legacy: 'Legacy Wound',
  rhythm: 'Rhythm Wound',
  voice: 'Voice Wound',
};
