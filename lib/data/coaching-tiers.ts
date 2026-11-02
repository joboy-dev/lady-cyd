export interface CoachingTier {
  id: string;
  name: string;
  subtitle: string;
  intro: string[];
  /** Optional line shown between the intro and the includes list (e.g. Gathering themes). */
  themes?: { lead: string; items: string };
  /**
   * Price shown on the card, e.g. "₦250,000". Leave undefined until Lady Cyd confirms —
   * the Investment line is hidden while this is empty. The Gathering stays unpriced.
   */
  investment?: string;
  includes: string[];
  bestFor?: string;
  groupNote?: string;
  cta: string;
  /** "apply" opens the Clarity Call form with this tier preselected; "waitlist" opens the waitlist form. */
  ctaType: "apply" | "waitlist";
  /** "Which experience is right for you?" mapping */
  match: { need: string; label: string };
}

export const coachingTiers: CoachingTier[] = [
  {
    id: "governance-journey",
    name: "The Governance Journey",
    subtitle: "12-Week Private Coaching",
    intro: [
      "For the woman ready for deep, sustained transformation.",
      "A high-touch one-on-one coaching experience designed to help you work through identity, emotional patterns, personal governance, relationships, family systems and execution over a sustained period.",
    ],
    investment: undefined,
    includes: [
      "3 private 75-minute coaching sessions",
      "Personal Transformation & Governance Assessment",
      "Individual coaching roadmap",
      "Between-session reflection and implementation assignments",
      "Personal pattern-mapping exercises",
      "Identity and internal-governance work",
      "Family/relational systems exploration where relevant",
      "Practical execution and accountability framework",
      "Private coaching support between sessions within agreed boundaries",
      "1 additional 60-minute integration session",
      "Access to selected Lady Cyd resources during the coaching period",
    ],
    bestFor:
      "women who know the issue is deeper than one conversation and are ready to do sustained work.",
    cta: "Apply for 12-Week Coaching",
    ctaType: "apply",
    match: {
      need: "Lady Cyd, I need deep, sustained transformation.",
      label: "The Governance Journey — 12-Week",
    },
  },
  {
    id: "reconstruction-journey",
    name: "The Reconstruction Journey",
    subtitle: "6-Week Private Coaching",
    intro: [
      "For the woman ready to address a specific season, pattern or transition with focused support.",
      "This is a concentrated coaching container for women who need clarity, intervention and a practical pathway forward.",
    ],
    investment: undefined,
    includes: [
      "1 private 75-minute coaching sessions",
      "Personal Transformation & Governance Assessment",
      "Individual coaching roadmap",
      "Pattern and root-issue exploration",
      "Between-session implementation assignments",
      "Accountability and progress tracking",
      "1 additional 45-minute integration session",
    ],
    bestFor:
      "women navigating a major transition, recurring pattern, leadership challenge or personal decision.",
    cta: "Apply for 6-Week Coaching",
    ctaType: "apply",
    match: {
      need: "Lady Cyd, I have a specific pattern, transition or season I need help navigating.",
      label: "The Reconstruction Journey — 6-Week",
    },
  },
  {
    id: "governance-intensive",
    name: "The Governance Intensive",
    subtitle: "Private Strategic Intensive",
    intro: [
      "One focused conversation. One defined challenge. One strategic pathway forward.",
      "For the woman who does not need a long-term coaching container but needs an experienced thinking partner to help her gain clarity and determine her next move.",
    ],
    investment: undefined,
    includes: [
      "90-minute private coaching intensive",
      "Pre-session reflection questionnaire",
      "Focused exploration of the presenting issue",
      "Root-pattern identification",
      "Strategic action framework",
      "Written next-step recommendations",
    ],
    bestFor:
      "a decision, transition, relationship challenge, leadership issue, personal governance challenge or situation requiring focused intervention.",
    cta: "Book a Governance Intensive",
    ctaType: "apply",
    match: {
      need: "Lady Cyd, I need focused clarity around one issue.",
      label: "The Governance Intensive",
    },
  },
  {
    id: "grit-graceful-gathering",
    name: "The Grit & Graceful Gathering",
    subtitle: "Group Coaching & Formation",
    intro: [
      "A structured group experience for women who want to grow alongside other women while receiving teaching, coaching, reflection and practical formation.",
    ],
    themes: {
      lead: "Each cohort focuses on a defined theme such as:",
      items:
        "Identity. Regulation. Relationships. Generational Patterns. Personal Governance. Leadership.",
    },
    includes: [
      "6-week group coaching experience",
      "Weekly live teaching + coaching sessions",
      "Guided reflection exercises",
      "Practical implementation assignments",
      "Peer learning and community",
      "Selected Lady Cyd resources",
      "Private community access for the duration of the cohort",
    ],
    groupNote: "Group size: intentionally limited.",
    cta: "Join the Waitlist",
    ctaType: "waitlist",
    match: {
      need: "Lady Cyd, I want structured growth within a community.",
      label: "The Grit & Graceful Gathering — 6-Week",
    },
  },
];

/** Options for the Clarity Call form's "Which experience are you interested in?" field. */
export const clarityCallTierOptions = [
  ...coachingTiers
    .filter((t) => t.ctaType === "apply")
    .map((t) => ({ value: t.id, label: `${t.name} — ${t.subtitle}` })),
  { value: "not-sure", label: "Not sure yet" },
];

export function tierLabel(value?: string): string {
  return clarityCallTierOptions.find((o) => o.value === value)?.label ?? "Not specified";
}
