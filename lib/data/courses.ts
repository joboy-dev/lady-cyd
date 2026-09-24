export interface Course {
  id: string;
  title: string;
  price: string;
  free: boolean;
  description: string;
  image: string;
  selarUrl: string;
}

export const courses: Course[] = [
  {
    id: "soul-restoration-audit",
    title: "The Soul Restoration Audit™",
    price: "Free",
    free: true,
    description:
      "A reflective coaching and self-awareness tool. You do not need to have everything figured out to begin — answer honestly about where you are right now and let the audit show you what has been shaping you.",
    image:
      "https://files.selar.co/product-images/2026/products/CYD/the-soul-restoration-audi-selar.com-6a66ab1edd91d.png",
    selarUrl: "https://selar.com/soul-restoration-audit",
  },
  {
    id: "whole-life-design",
    title: "WHOLE Life Design™",
    price: "Free",
    free: true,
    description:
      "Join the free, safe restoration community for high-capacity women privately carrying too much. Get tools to stop performing, be seen, and heal.",
    image:
      "https://files.selar.co/product-images/2026/products/CYD/whole-life-design-selar.com-6a56a5673e0bf.png",
    selarUrl: "https://selar.com/whole-life-design",
  },
  {
    id: "alignment-governance-framework",
    title: "The Alignment & Governance Framework",
    price: "₦5,000",
    free: false,
    description:
      "A 7-day transformational framework for the woman navigating a transitional season — naming your season, aligning identity, governing emotions, restoring boundaries, reordering relationships, reclaiming authority, and integrating change.",
    image:
      "https://files.selar.co/product-images/2026/products/CYD/the-alignment-governance--selar.com-695f1c331c16e.png",
    selarUrl: "https://selar.com/thealignmentgovernanceframework",
  },
  {
    id: "fruit-of-the-spirit",
    title: "The Fruit of the Spirit in Me",
    price: "₦6,000",
    free: false,
    description:
      "Explores the nine spiritual fruits — Love, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, and Self-control — as practical, cultivable qualities that reflect God's love and grace to those around us.",
    image:
      "https://files.selar.co/product-images/2024/products/CYD/the-fruit-of-the-spirit-i-selar.co-666791c9d1115.png",
    selarUrl: "https://selar.com/Fruitofthespiritforkids",
  },
  {
    id: "eternal-encounters",
    title: "Eternal Encounters",
    price: "₦20,000",
    free: false,
    description:
      "15 positivity-filled affirmations designed to ignite passion, deepen connection, and cultivate lasting love in romantic partnerships.",
    image:
      "https://files.selar.co/product-images/2024/products/CYD/eternal-encounters-selar.co-6608bbe11db11.png",
    selarUrl: "https://selar.com/Eternalencounters",
  },
];
