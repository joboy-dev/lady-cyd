import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { SELAR_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "The WHOLE™ Pathway™ | 5-Stage Journey to Wholeness | Lady Cyd",
  description:
    "Five stages from recognition to wholeness: Recognize, Reveal, Rebuild, Restore, WHOLE™. The structured transformational pathway by Lady Cyd — Grit & Graceful Coaching Company — for high-capacity women returning to God's original design.",
  keywords: [
    "soul restoration coach",
    "identity restoration coach",
    "trauma-informed coaching for Christian women",
    "WHOLE™ Pathway Lady Cyd",
    "WHOLE Life Design",
    "Wound Point Assessment",
  ],
};

const stages = [
  {
    code: "01",
    name: "RECOGNIZE",
    tagline: "Encounter the message.",
    description:
      "RECOGNIZE is where it begins — before a programme, before a community, before a decision. Free content, teachings, podcast episodes, social media, speaking engagements, newsletter content, and public resources. This is where women first encounter the work of Lady Cyd and Grit & Graceful Coaching Company.",
    what: [
      "Free teachings, reflections, and written content via The Journal",
      "META-FORMATION HQ Podcast — Identity, Emotional Wellness, Leadership, Faith",
      "Social media content and speaking engagements",
      "Lady Cyd's Substack newsletter — bi-weekly, always free",
    ],
    forWho:
      "Any woman who has encountered the message and felt something stir — who knows, even before she can name it, that this work is for her.",
    cta: null,
    dark: false,
  },
  {
    code: "02",
    name: "REVEAL",
    tagline: "Take the Wound Point Assessment.",
    description:
      "REVEAL is the diagnostic gateway into the ecosystem. The Wound Point Assessment is where every woman begins. Through ten wound categories — Identity, Purpose, Capacity, Rhythm, Relational, Voice, Generational, Stewardship, Leadership, and Legacy — she identifies where alignment has been compromised and where her restoration work should begin.",
    what: [
      "The Wound Point Assessment — the ten wound categories that map her restoration journey",
      "Identification of her primary and secondary wound points",
      "Clarity on where alignment has broken down and where to begin",
      "A defined pathway forward into the ecosystem",
    ],
    forWho:
      "Every woman entering the Grit & Graceful ecosystem. The Wound Point Assessment is the first step — without exception.",
    cta: { label: "Take The Wound Point Assessment", href: "/whole/assessment", external: false },
    dark: true,
  },
  {
    code: "03",
    name: "REBUILD",
    tagline: "Enter WHOLE Life Design™.",
    description:
      "REBUILD is the foundational formation layer. WHOLE Life Design™ is the learning ecosystem where women return to God's original design through Biblical truth, emotional formation, transformational teaching, practical tools, and intentional community. It is not a course platform — it is a developmental environment.",
    what: [
      "Foundational Courses — structured learning for identity and formation",
      "Guided Learning Experiences — cohort-based formation journeys",
      "Community Conversations — intentional peer connection and accountability",
      "Growth Resources — frameworks, tools, and formation materials",
      "Formation Tools — practitioner-grade instruments for personal transformation",
      "Healing Harbour Live — Free Monthly Masterclass (exclusively inside WHOLE Life Design™)",
    ],
    forWho:
      "The woman who has taken the Wound Point Assessment and is ready to enter a structured, intentional environment for formation — not just information.",
    cta: { label: "Explore WHOLE Life Design™", href: "/whole-life-design", external: false },
    dark: false,
  },
  {
    code: "04",
    name: "RESTORE",
    tagline: "Attend Healing Harbour Live.",
    description:
      "RESTORE is where the monthly work happens. Healing Harbour Live is the free monthly masterclass exclusively available inside WHOLE Life Design™. Every 4th Friday. 90 Minutes. Zoom + Skool Live. One Wound Point. One Framework. One Pathway Forward. This is not a general teaching session — it is structured, targeted restoration work.",
    what: [
      "Free Monthly Masterclass — every 4th Friday, 90 minutes",
      "One Wound Point addressed per session with a full framework",
      "Live on Zoom + Skool — accessible wherever you are",
      "A single, clear pathway forward from each session",
      "Exclusively available inside WHOLE Life Design™",
    ],
    forWho:
      "Every woman inside WHOLE Life Design™. Healing Harbour Live exists as the consistent, structured, free monthly touchpoint — the heartbeat of the ecosystem.",
    cta: { label: "Register For Healing Harbour Live", href: "/inner-circle", external: false },
    dark: true,
  },
  {
    code: "05",
    name: "WHOLE™",
    tagline: "Enter the flagship coaching programme.",
    description:
      "WHOLE™ is the primary transformational coaching experience within the Grit & Graceful ecosystem. Designed for high-capacity women who have moved through the foundational stages and are ready for the most intimate, rigorous, and structured level of personal transformation available. WHOLE™ is not open yet — but it is coming.",
    what: [
      "Identity Restoration — rebuilding selfhood at the root",
      "Emotional Formation — structured healing of emotional architecture",
      "Spiritual Alignment — reconnecting with God's original design",
      "Relational Health — healing the relational patterns that govern how she loves and leads",
      "Purpose Clarity — defining assignment and building from it",
      "Sustainable Rhythms — designing a life that can hold what she is building",
      "Legacy Building — intentionally constructing what remains",
    ],
    forWho:
      "High-capacity women who have done the foundational work and are ready for the most rigorous, intimate level of transformation. Available by application only.",
    cta: null,
    dark: false,
    comingSoon: true,
  },
];

export default function TransformationPathwayPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(197,75,140,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-8 mt-32 sm:mt-40 pb-20">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="The WHOLE™ Pathway™" light />
          </div>

          <h1
            className="font-cormorant font-light leading-[1.05] max-w-4xl animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "150ms" }}
          >
            Five stages.{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              One destination:
            </span>{" "}
            WHOLE™.
          </h1>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            <p
              className="font-sans text-lg leading-relaxed max-w-2xl font-light"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              This is not a programme. It is a pathway — a structured, intentional journey from
              where you are to where you were always designed to be. Each stage is a threshold.
              Each threshold is an invitation toward WHOLE™.
            </p>
            <p
              className="font-cinzel text-xs tracking-widest uppercase mt-4"
              style={{ color: "var(--gold)", opacity: 0.65 }}
            >
              A Grit &amp; Graceful Coaching Company Experience
            </p>
          </div>

          {/* Stage index */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            {stages.map((s) => (
              <a
                key={s.code}
                href={`#stage-${s.code}`}
                className="font-cinzel text-xs tracking-widest uppercase px-4 py-2 transition-colors duration-200"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--gold)",
                }}
              >
                {s.code} · {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STAGE SECTIONS
      ══════════════════════════════════════════════════ */}
      {stages.map((stage, i) => (
        <section
          key={stage.code}
          id={`stage-${stage.code}`}
          className="section-padding relative overflow-hidden"
          style={{
            background: stage.dark ? "var(--dark-section)" : "var(--background)",
          }}
        >
          {/* Subtle radial accent */}
          {stage.dark && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  i % 2 === 0
                    ? "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(197,75,140,0.07) 0%, transparent 60%)"
                    : "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
              }}
            />
          )}

          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start relative z-10">
            {/* Left — Stage identifier */}
            <AnimateOnScroll animation={i % 2 === 0 ? "left" : "right"} className="flex flex-col gap-4 lg:sticky lg:top-32">
              <span
                className="font-cinzel text-6xl sm:text-7xl font-light leading-none"
                style={{
                  color: stage.dark ? "rgba(201,168,76,0.2)" : "rgba(197,75,140,0.15)",
                }}
              >
                {stage.code}
              </span>
              <div>
                <h2
                  className="font-cinzel text-2xl sm:text-3xl tracking-widest uppercase"
                  style={{ color: stage.dark ? "var(--gold)" : "var(--primary)" }}
                >
                  {stage.name}
                </h2>
                {stage.comingSoon && (
                  <span
                    className="inline-block mt-2 font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 border"
                    style={{
                      color: "var(--gold)",
                      borderColor: "rgba(201,168,76,0.4)",
                    }}
                  >
                    Coming Soon
                  </span>
                )}
              </div>
              <OrnamentalDivider
                theme={stage.dark ? "light" : "dark"}
                className="justify-start"
              />
            </AnimateOnScroll>

            {/* Right — Content */}
            <AnimateOnScroll animation={i % 2 === 0 ? "right" : "left"} delay={100} className="flex flex-col gap-8">
              {/* Tagline */}
              <p
                className="font-cormorant italic leading-snug"
                style={{
                  color: stage.dark ? "rgba(255,255,255,0.85)" : "var(--foreground)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                }}
              >
                &ldquo;{stage.tagline}&rdquo;
              </p>

              {/* Description */}
              <p
                className="font-sans text-[17px] leading-relaxed"
                style={{
                  color: stage.dark
                    ? "rgba(255,255,255,0.6)"
                    : "var(--muted-foreground)",
                }}
              >
                {stage.description}
              </p>

              {/* What's available */}
              <div className="flex flex-col gap-4">
                <p
                  className="font-cinzel text-xs tracking-widest uppercase"
                  style={{ color: stage.dark ? "var(--gold)" : "var(--primary)" }}
                >
                  What is available at this stage
                </p>
                <ul className="flex flex-col gap-3">
                  {stage.what.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span
                        className="mt-1 shrink-0 text-xs"
                        style={{
                          color: stage.dark ? "var(--gold)" : "var(--primary)",
                        }}
                      >
                        ✦
                      </span>
                      <span
                        className="font-sans text-[17px] leading-relaxed"
                        style={{
                          color: stage.dark
                            ? "rgba(255,255,255,0.65)"
                            : "var(--muted-foreground)",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For who */}
              <div
                className="flex gap-4 items-start p-5 border-l-2"
                style={{
                  borderColor: stage.dark ? "var(--gold)" : "var(--primary)",
                  background: stage.dark
                    ? "rgba(255,255,255,0.03)"
                    : "var(--secondary)",
                }}
              >
                <div className="flex flex-col gap-1">
                  <p
                    className="font-cinzel text-[10px] tracking-widest uppercase"
                    style={{ color: stage.dark ? "var(--gold)" : "var(--primary)" }}
                  >
                    This stage is for
                  </p>
                  <p
                    className="font-cormorant italic text-lg leading-snug"
                    style={{
                      color: stage.dark ? "rgba(255,255,255,0.75)" : "var(--foreground)",
                    }}
                  >
                    {stage.forWho}
                  </p>
                </div>
              </div>

              {/* CTA */}
              {stage.cta && (
                <div>
                  <LinkButton
                    to={stage.cta.href}
                    variant={stage.dark ? "outlineGold" : "primary"}
                    size="md"
                    className="gap-3"
                  >
                    {stage.cta.label}
                    <ArrowRight size={14} />
                  </LinkButton>
                </div>
              )}
              {stage.comingSoon && (
                <div>
                  <button
                    disabled
                    className="inline-flex items-center gap-3 font-cinzel text-sm tracking-widest uppercase px-5 py-2.5 border cursor-not-allowed opacity-40"
                    style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                  >
                    WHOLE™ — Coming Soon
                  </button>
                </div>
              )}
            </AnimateOnScroll>
          </div>

          {/* Stage connector — not on last */}
          {i < stages.length - 1 && (
            <div className="max-w-5xl mx-auto mt-16 relative z-10">
              <OrnamentalDivider theme={stage.dark ? "light" : "dark"} />
            </div>
          )}
        </section>
      ))}

      {/* ══════════════════════════════════════════════════
          EDEN LIFE DESIGN CALLOUT
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--secondary)" }}
      >
        <AnimateOnScroll animation="up" className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch gap-8 sm:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-4 sm:gap-5 flex-1">
            <SectionBreadcrumb title="REBUILD — Stage 03" />
            <h2
              className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Ready to enter the{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                formation ecosystem?
              </span>
            </h2>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              WHOLE Life Design™ is the foundational learning ecosystem — the place where women
              return to God&apos;s original design through structured courses, guided learning,
              community, formation tools, and Healing Harbour Live (the free monthly masterclass).
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <LinkButton to="/whole-life-design" variant="primary" size="md" className="gap-3">
                Explore WHOLE Life Design™
                <ArrowRight size={14} />
              </LinkButton>
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-4 py-2.5 border transition-all duration-200"
                style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
              >
                <ShoppingBag size={12} />
                Browse Courses
              </a>
            </div>
          </div>

          {/* Accent block */}
          <div
            className="shrink-0 w-full sm:w-56 flex flex-col gap-3 sm:gap-4 p-5 sm:p-8 border-t-2 sm:border-t-0 sm:border-l-2"
            style={{ borderColor: "var(--primary)", background: "var(--card)" }}
          >
            {[
              "Foundational Courses",
              "Guided Learning Experiences",
              "Community Conversations",
              "Formation Tools",
              "Healing Harbour Live",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-xs shrink-0" style={{ color: "var(--primary)" }}>✦</span>
                <span className="font-sans text-sm" style={{ color: "var(--muted-foreground)" }}>{item}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,75,140,0.14) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--primary)" }}
          >
            Every journey begins with one step.
          </p>
          <OrnamentalDivider theme="light" />
          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            The first step is{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              The Wound Point Assessment.
            </span>
          </h2>
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            You do not need to have it all figured out. You do not need to be ready for every
            stage. You need to take one step — and the Wound Point Assessment is where that begins.
            Every woman enters the ecosystem here.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/whole/assessment" variant="primary" size="lg" className="gap-3">
              Take The Wound Point Assessment
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/about" variant="outlineLight" size="lg">
              Learn About Lady Cyd
            </LinkButton>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
