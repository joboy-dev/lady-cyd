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
  title: "The Transformation Pathway | 5-Stage Journey to Wholeness | Lady Cyd",
  description:
    "Five stages from healing to wholeness: Enter, Encounter, Engage, Elevate, Emerge. Structured trauma-informed coaching pathway for women breaking generational cycles and restoring identity through Christian family systems work.",
  keywords: [
    "generational patterns coaching",
    "soul restoration coach",
    "identity restoration coach",
    "family systems coach Africa",
    "transformation coaching for women",
    "trauma-informed coaching for Christian women",
  ],
};

const stages = [
  {
    code: "01",
    name: "ENTER",
    tagline: "Choose to stop carrying alone what was never meant to be carried alone.",
    description:
      "Every journey begins with a decision. ENTER is the act of choosing — choosing to stop isolating in your pain, choosing to be received by a community that understands the weight you carry, and choosing to take the first step toward the life you were designed for.",
    what: [
      "Join the Healing Harbour inner circle community (free)",
      "Receive a welcome and orientation into Lady Cyd's world",
      "Connect with a sisterhood of women walking the same road",
      "Access your first resources — teachings, reflections, and community sessions",
    ],
    forWho:
      "Any woman who knows something is unresolved inside her and is ready to stop carrying it alone.",
    cta: { label: "Enter the Healing Harbour", href: "/inner-circle", external: false },
    dark: false,
  },
  {
    code: "02",
    name: "ENCOUNTER",
    tagline: "Transformation begins in the mind before it moves to the life.",
    description:
      "ENCOUNTER is where the foundations shift. Through teachings, frameworks, and carefully curated content, you begin to see what you could not see before — the patterns, the roots, the inherited agreements that have been quietly shaping your world. Awareness is the beginning of change.",
    what: [
      "Weekly teachings, Bible studies, and prophetic insight sessions",
      "Access to Lady Cyd's signature frameworks on identity and family systems",
      "Transformational book reading club and guided review",
      "Live community calls and Q&A sessions",
    ],
    forWho:
      "The woman who is in the Healing Harbour and is actively engaging — showing up, consuming, reflecting, and beginning to see herself differently.",
    cta: null,
    dark: true,
  },
  {
    code: "03",
    name: "ENGAGE",
    tagline: "This is where theory becomes practice and insight becomes change.",
    description:
      "ENGAGE is the immersive layer. Here, the structured work deepens through group coaching programmes, workshops, and intensive experiences designed to move transformation from the head to the hands — from understanding to actual, embodied change in how you live, relate, and lead.",
    what: [
      "Structured group coaching programmes (cohort-based)",
      "Signature workshops and intensives",
      "Immersive retreat experiences",
      "Accountability and peer coaching structures",
    ],
    forWho:
      "The woman who has encountered the work and is ready to go deeper — to do it, not just understand it.",
    cta: { label: "Browse Courses & Programmes", href: SELAR_URL, external: true },
    dark: false,
  },
  {
    code: "04",
    name: "ELEVATE",
    tagline: "Apply for a Clarity Call — the threshold of intimate transformation.",
    description:
      "ELEVATE is not open to everyone. It is for the woman who has moved through the earlier stages, who has done the work in community, and who is now ready for the most intimate and intensive form of transformation available — private, one-on-one coaching with Lady Cyd herself.",
    what: [
      "One-on-one private coaching containers with Lady Cyd",
      "Deep-dive identity and family systems work",
      "Personalised transformation framework and roadmap",
      "Access by application and Clarity Call only",
    ],
    forWho:
      "The woman who is serious, who has demonstrated readiness, and who is willing to invest deeply in her own transformation.",
    cta: { label: "Apply for a Clarity Call", href: "/work-with-me" },
    dark: true,
    gated: true,
  },
  {
    code: "05",
    name: "EMERGE",
    tagline: "Not who you were. Who you were always called to become.",
    description:
      "EMERGE is not an end — it is a beginning. The woman who walks through the full pathway emerges healed in her identity, clear in her calling, and equipped to lead her life, her family, and her legacy from a place of wholeness rather than wounds. She becomes the woman who breaks the cycle and builds something different.",
    what: [
      "A healed and restored sense of self — at the root",
      "Clarity on calling, purpose, and Kingdom assignment",
      "Broken generational cycles and rebuilt family patterns",
      "The capacity to lead, love, and build from wholeness",
    ],
    forWho:
      "Every woman who enters the pathway with honesty, commitment, and the willingness to do the deep work.",
    cta: { label: "Begin Your Journey — Enter", href: "/inner-circle" },
    dark: false,
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
            <SectionBreadcrumb title="The Transformation Pathway" light />
          </div>

          <h1
            className="font-cormorant font-light leading-[1.05] max-w-4xl animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "150ms" }}
          >
            Five stages.{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              One destination:
            </span>{" "}
            Wholeness.
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
              where you are to where you were always designed to be. Each stage is a threshold. Each
              threshold is an invitation.
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
                {stage.gated && (
                  <span
                    className="inline-block mt-2 font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 border"
                    style={{
                      color: "var(--gold)",
                      borderColor: "rgba(201,168,76,0.4)",
                    }}
                  >
                    By Application Only
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
                className="font-sans text-base leading-relaxed"
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
                        className="font-sans text-sm leading-relaxed"
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
                  {stage.cta.external ? (
                    <a
                      href={stage.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 font-cinzel text-sm tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                        stage.dark
                          ? 'border border-gold text-gold hover:bg-gold hover:text-foreground'
                          : 'bg-primary text-white hover:bg-primary/85'
                      }`}
                    >
                      <ShoppingBag size={14} />
                      {stage.cta.label}
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <LinkButton
                      to={stage.cta.href}
                      variant={stage.dark ? "outlineGold" : "primary"}
                      size="md"
                      className="gap-3"
                    >
                      {stage.cta.label}
                      <ArrowRight size={14} />
                    </LinkButton>
                  )}
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
          COURSES CALLOUT
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--secondary)" }}
      >
        <AnimateOnScroll animation="up" className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch gap-8 sm:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-4 sm:gap-5 flex-1">
            <SectionBreadcrumb title="ENGAGE — Stage 03" />
            <h2
              className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Ready to go deeper?{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Browse the courses.
              </span>
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Lady Cyd’s structured courses and programmes are available on Selar — the ENGAGE
              layer of the pathway, where insight becomes lived change. Browse what is currently
              open for enrolment.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <a
                href={SELAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 sm:gap-3 font-cinzel text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase px-4 sm:px-6 py-3 bg-primary text-white hover:bg-primary/85 transition-all duration-200"
              >
                <ShoppingBag size={15} />
                Browse Courses on Selar
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Accent block */}
          <div
            className="shrink-0 w-full sm:w-56 flex flex-col gap-3 sm:gap-4 p-5 sm:p-8 border-t-2 sm:border-t-0 sm:border-l-2"
            style={{ borderColor: "var(--primary)", background: "white" }}
          >
            {[
              "Group coaching cohorts",
              "Signature workshops",
              "Immersive intensives",
              "Retreat experiences",
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
              entering the Harbour.
            </span>
          </h2>
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            You do not need to have it all figured out. You do not need to be ready for every
            stage. You need to take one step — and the Healing Harbour is where that step begins.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/inner-circle" variant="primary" size="lg" className="gap-3">
              Enter the Healing Harbour
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
