'use client'

import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import RandomLadyCydImage from "@/components/shared/RandomLadyCydImage";
import { SELAR_URL } from "@/lib/constants/site";
import { ArrowRight, ChevronDown, ShoppingBag } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

const benefits = [
  {
    number: "01",
    title: "Identity Restored",
    body: "You discover who you truly are — beyond the roles, the titles, and what you produce. Your identity is rebuilt at the root, not the surface.",
  },
  {
    number: "02",
    title: "Patterns Dismantled",
    body: "The hidden trauma-driven cycles that quietly govern your decisions, relationships, and self-worth are named, understood, and broken.",
  },
  {
    number: "03",
    title: "Legacy Established",
    body: "You don't just heal for yourself. You break what has been broken in your lineage and build something entirely different for those who come after you.",
  },
];

const stages = [
  {
    code: "01",
    name: "ENTER",
    tagline: "Choose to stop carrying alone what was never meant to be carried alone.",
    description: "Join the Healing Harbour. The community receives you. The journey begins.",
  },
  {
    code: "02",
    name: "ENCOUNTER",
    tagline: "Transformation begins in the mind before it moves to the life.",
    description: "Engage with teachings, frameworks, and resources that shift your perspective and awaken your awareness.",
  },
  {
    code: "03",
    name: "ENGAGE",
    tagline: "This is where theory becomes practice and insight becomes change.",
    description: "Go deeper through structured group programmes, workshops, and immersive experiences.",
  },
  {
    code: "04",
    name: "ELEVATE",
    tagline: "Apply for a Clarity Call — the threshold of intimate transformation.",
    description: "This is not open to everyone. It is for the woman who is truly ready to do the deep work.",
  },
  {
    code: "05",
    name: "EMERGE",
    tagline: "Not who you were. Who you were always called to become.",
    description: "You emerge healed in your identity, clear in your purpose, and bold in your legacy.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Lady Cyd helped me to deal with imposter syndrome and let me to actually start creating. I went from zero discipline to being able to build my own company as a teenager.",
    name: "Ruth",
  },
  {
    quote:
      "I met Lady Cyd at a retreat she was invited to speak at. I am glad I went. Not only did she show me how to up level my mind but she helped me detox lies I built around my life. I recommend that every woman, girl, lady, listens to Lady Cyd.",
    name: "I.J.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        {/* Radial glow behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(197,75,140,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Subtle texture lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.3) 80px, rgba(201,168,76,0.3) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-8 mt-32 sm:mt-20 pb-20">
          {/* Pre-headline badge */}
          <div className="hidden sm:flex items-center gap-3 animate-fade-in-up">
            <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.6 }} />
            <p
              className="font-cinzel text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Trauma-Informed Coach · Family Systems Strategist · Generational Restoration
            </p>
            <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.6 }} />
          </div>

          {/* Main headline */}
          <h1
            className="font-cormorant font-light text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-4xl animate-fade-in-up"
            style={{ color: "var(--hero-foreground)", animationDelay: "150ms" }}
          >
            She Who Is Restored in Her Identity{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              Becomes Unstoppable
            </span>{" "}
            in Her Legacy.
          </h1>

          {/* Ornament */}
          <div className="animate-fade-in-up w-full max-w-sm" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full" />
          </div>

          {/* Sub-headline */}
          <div className="animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl font-sans font-light"
              style={{ color: "var(--hero-foreground)", opacity: 0.75 }}
            >
              I guide high-capacity women through the sacred, structured work of identity restoration,
              trauma healing, and generational rebuilding — so they can lead their lives, their families,
              and their legacies from a place of wholeness, not wounds.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <LinkButton to="/inner-circle" variant="primary" size="lg" className="gap-3">
              Enter the Healing Harbour
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/transformation-pathway" variant="outlineGold" size="lg">
              Explore the Transformation Pathway
            </LinkButton>
          </div>

          {/* Scroll cue */}
          <div className="mt-8 flex flex-col items-center gap-2 opacity-40 animate-fade-in-up" style={{ animationDelay: "750ms" }}>
            <span className="font-cinzel text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              Scroll
            </span>
            <ChevronDown size={16} style={{ color: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — WHO SHE IS FOR
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Is This You?" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              She carries more than most people see.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
              On the outside she is capable, accomplished, and moving — a professional, an entrepreneur, a leader, a builder. On the inside, something is unresolved.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Generational cycles and family wounds that quietly shape her decisions, relationships, and self-worth",
              "A deep sense of calling that feels blocked, delayed, or distorted by unhealed identity fractures",
              "Burnout and misalignment — giving everything to her work, ministry, or family while running on empty inside",
              "The weight of being the woman who holds everything together, with no safe space to be held herself",
            ].map((pain, i) => (
              <AnimateOnScroll key={i} animation="up" delay={i * 100}>
                <div
                  className="flex gap-4 items-start p-6 bg-card rounded-sm border-l-2 h-full"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <span
                    className="font-cinzel text-xs tracking-widest mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground/80 font-sans leading-relaxed text-sm">{pain}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center">
            <p
              className="font-cormorant italic text-2xl sm:text-3xl"
              style={{ color: "var(--primary)" }}
            >
              She is not broken. She is burdened.
            </p>
            <p className="text-muted-foreground mt-2 font-sans text-sm">
              And there is a difference — and a way through.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — THREE KEY BENEFITS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What Changes" />
            <h2 className="font-cormorant font-light text-4xl sm:text-5xl leading-tight">
              The work is deep. The results are{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                generational.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.number} animation="up" delay={i * 150}>
                <div className="flex flex-col gap-5 p-8 bg-secondary rounded-sm h-full">
                  <span
                    className="font-cinzel text-4xl font-light"
                    style={{ color: "var(--gold)", opacity: 0.5 }}
                  >
                    {b.number}
                  </span>
                  <div className="h-px w-8" style={{ background: "var(--primary)" }} />
                  <h3 className="font-cormorant text-2xl font-semibold">{b.title}</h3>
                  <p className="text-muted-foreground font-sans text-[17px] leading-relaxed">{b.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — TRANSFORMATION PATHWAY
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(197,75,140,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-14 relative z-10">
          <AnimateOnScroll animation="left" className="flex flex-col gap-4">
            <SectionBreadcrumb title="The Transformation Pathway" light align="left" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight max-w-2xl"
              style={{ color: "var(--dark-section-foreground)" }}
            >
              Five stages. One destination:{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Wholeness.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-0">
            {stages.map((stage, i) => (
              <AnimateOnScroll key={stage.code} animation="up" delay={i * 80}>
              <div
                className="group flex gap-6 sm:gap-10 items-start py-8 border-b last:border-b-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                {/* Number */}
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <span
                    className="font-cinzel text-3xl sm:text-4xl font-light"
                    style={{ color: "var(--gold)", opacity: 0.35 }}
                  >
                    {stage.code}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-cinzel text-lg tracking-widest uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    {stage.name}
                  </h3>
                  <p
                    className="font-cormorant italic text-xl sm:text-2xl"
                    style={{ color: "var(--dark-section-foreground)" }}
                  >
                    {stage.tagline}
                  </p>
                  <p
                    className="font-sans text-[17px] leading-relaxed"
                    style={{ color: "var(--dark-section-foreground)", opacity: 0.55 }}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <LinkButton to="/transformation-pathway" variant="outlineGold" size="sm" className="gap-3">
              See the Full Pathway
              <ArrowRight size={14} />
            </LinkButton>
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              <ShoppingBag size={12} />
              Browse Courses
              <ArrowRight size={12} />
            </a>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — ABOUT SNIPPET
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <AnimateOnScroll animation="left">
          <div className="w-full aspect-3/4 max-w-sm mx-auto lg:mx-0 rounded-sm overflow-hidden">
            <RandomLadyCydImage />
          </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll animation="right">
          <div className="flex flex-col gap-7">
            <div>
              <SectionBreadcrumb title="About Lady Cyd" align="left" className="mb-3" />
              <h2 className="font-cormorant font-light text-4xl sm:text-5xl leading-tight">
                I am not here to motivate you.{" "}
                <span className="italic" style={{ color: "var(--primary)" }}>
                  I am here to restructure you.
                </span>
              </h2>
            </div>
            <OrnamentalDivider theme="dark" />
            <p className="font-sans text-muted-foreground leading-relaxed">
              I am Cyd Chioma Alex-Emenike — a Trauma-Informed Transformational Coach, Family Systems Strategist,
              and Generational Restoration Guide. I did not arrive at this work through theory alone.
              I arrived through the long, costly, sacred road of my own healing.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              My work sits at the intersection of trauma science, family systems theory, prophetic identity, and Kingdom discipleship.
              It is structured and transformational at the root — not surface-level inspiration.
            </p>
            <div className="flex flex-col gap-2 py-4 border-l-2 pl-5" style={{ borderColor: "var(--gold)" }}>
              <p className="font-cormorant italic text-xl" style={{ color: "var(--foreground)" }}>
                Women who came confused and left clear.
              </p>
              <p className="font-cormorant italic text-xl" style={{ color: "var(--foreground)" }}>
                Women who came burdened and left free.
              </p>
              <p className="font-cormorant italic text-xl" style={{ color: "var(--foreground)" }}>
                Women who came with broken houses — and left building ordered ones.
              </p>
            </div>
            <LinkButton to="/about" variant="outline" size="sm" className="self-start gap-3">
              Read Lady Cyd&apos;s Full Story
              <ArrowRight size={14} />
            </LinkButton>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "var(--secondary)" }}>
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Transformation Stories" />
            <h2 className="font-cormorant font-light text-4xl sm:text-5xl leading-tight">
              Women who walked through the{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                harbour.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} animation="scale" delay={i * 150}>
              <div
                className="flex flex-col gap-6 p-8 bg-card rounded-sm relative h-full"
                style={{ boxShadow: "0 2px 20px rgba(197,75,140,0.06)" }}
              >
                <span
                  className="font-cormorant text-6xl leading-none absolute top-4 left-6"
                  style={{ color: "var(--primary)", opacity: 0.15 }}
                >
                  "
                </span>
                <p className="font-cormorant italic text-xl leading-relaxed text-foreground/85 mt-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-cinzel text-xs text-white shrink-0"
                    style={{ background: "var(--primary)" }}
                  >
                    {t.name[0]}
                  </div>
                  <span className="font-cinzel text-xs tracking-widest uppercase text-muted-foreground">
                    {t.name}
                  </span>
                </div>
              </div>              </AnimateOnScroll>            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — HEALING HARBOUR CTA
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
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--primary)" }}
          >
            The Healing Harbour
          </p>
          <OrnamentalDivider />
          <h2
            className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
            style={{ color: "var(--hero-foreground)" }}
          >
            Before the Programme. Before the Mentorship.{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              There Is the Harbour.
            </span>
          </h2>
          <p
            className="font-sans text-lg leading-relaxed"
            style={{ color: "var(--hero-foreground)", opacity: 0.7 }}
          >
            The Healing Harbour is Lady Cyd's free inner circle community — a curated, intentional space for high-capacity women who are beginning, continuing, or deepening their journey of healing, identity restoration, and generational transformation.
          </p>
          <p
            className="font-cormorant italic text-2xl"
            style={{ color: "var(--hero-foreground)", opacity: 0.6 }}
          >
            It is not a holding room. It is the beginning of the work.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3 text-left w-full max-w-md">
            {[
              "A sisterhood that sees, holds, and walks with you",
              "Weekly live sessions, prayer, Bible study, and prophetic insight",
              "Resources designed to build — not merely inspire",
              "First access to coaching programmes and opportunities",
              "Transformational book reading and review",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span style={{ color: "var(--gold)" }} className="mt-0.5 shrink-0">✦</span>
                <span className="font-sans text-sm" style={{ color: "var(--hero-foreground)", opacity: 0.75 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <LinkButton to="/inner-circle" variant="primary" size="lg" className="mt-4 gap-3">
            Enter the Healing Harbour
            <ArrowRight size={16} />
          </LinkButton>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
