import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import ClarityCallForm from "@/components/shared/form/appForms/ClarityCallForm";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for a Clarity Call | Private Coaching with Lady Cyd Nigeria",
  description:
    "Apply for private 1:1 trauma-informed coaching with Lady Cyd. Identity restoration, family systems healing, and generational pattern work for high-achieving women in Nigeria and Africa. Christian Kingdom coaching.",
  keywords: [
    "trauma-informed coach Nigeria",
    "private Christian life coach Africa",
    "identity crisis coach",
    "trauma healing for high-achieving women",
    "family systems coach Africa",
    "Kingdom coach for women",
  ],
};

/* ─── Data ───────────────────────────────────────────────────────── */

const callIncludes = [
  {
    icon: <MessageCircle size={18} />,
    title: "Private & Focused",
    desc: "Uninterrupted space, no agenda except the honest work of understanding where you are and what is truly driving it.",
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: "Honest Discernment",
    desc: "Together you and Lady Cyd discern what is truly at the root and whether private one-on-one coaching is the right and honest next step for you.",
  },
  {
    icon: <Clock size={18} />,
    title: "Clarity on Your Next Step",
    desc: "You leave with a precise understanding of where you are, what has been shaping it, and what the right path forward looks like — whether that path continues with Lady Cyd or not.",
  },
];

const processSteps = [
  {
    number: "01",
    label: "Apply",
    desc: "Complete the application below. Be honest — the more you share, the more useful the call will be.",
  },
  {
    number: "02",
    label: "Review",
    desc: "Lady Cyd personally reviews every application and responds to those she believes are the right fit for this work.",
  },
  {
    number: "03",
    label: "Schedule",
    desc: "If your application is accepted, you will receive a booking link to choose your session time.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(197,75,140,0.14) 0%, transparent 70%)",
          }}
        />
        {/* Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-6 mt-32 sm:mt-44 pb-16">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="Private 1:1 Coaching" light />
          </div>

          <div
            className="animate-fade-in-up font-cinzel font-light tracking-[0.25em] uppercase"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "clamp(0.65rem, 1.4vw, 0.85rem)",
              animationDelay: "100ms",
            }}
          >
            Apply for a
          </div>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{
              color: "var(--primary)",
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              animationDelay: "200ms",
            }}
          >
            Clarity Call
          </p>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "350ms" }}
          >
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <div
            className="animate-fade-in-up max-w-2xl"
            style={{ animationDelay: "500ms" }}
          >
            <p
              className="font-sans text-lg leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              A private, focused session with Lady Cyd. This is the threshold where you
              and Lady Cyd discern together whether you are ready for the most intimate
              and rigorous level of transformation work available. This is not open to everyone.
            </p>
          </div>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-4"
            style={{ animationDelay: "650ms" }}
          >
            <a
              href="#application"
              className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-8 py-3 transition-all duration-200"
              style={{
                background: "var(--primary)",
                color: "white",
                border: "1px solid var(--primary)",
              }}
            >
              Begin Application <ArrowRight size={14} />
            </a>
            <LinkButton to="/transformation-pathway" variant="outlineLight" size="sm">
              Learn About the Pathway
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT IS A CLARITY CALL?
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <AnimateOnScroll animation="left" className="flex flex-col gap-6">
            <SectionBreadcrumb title="What to Expect" align="left" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              A session built for{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                depth, not performance.
              </span>
            </h2>
            <OrnamentalDivider theme="light" className="justify-start" />
            <p
              className="font-sans text-[17px] leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              A Clarity Call is not a general coaching taster. It is a structured,
              intentional session designed to help you move from internal overwhelm and
              reactive patterns into clear understanding and a defined next step.
            </p>
            <p
              className="font-sans text-[17px] leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Lady Cyd will create the conditions for you to be fully honest and will use
              her training in trauma-informed coaching and her working knowledge of identity
              and systemic patterns to help you see what you may not be able to see alone.
            </p>
          </AnimateOnScroll>

          {/* Right — What's included */}
          <AnimateOnScroll animation="right" delay={150} className="flex flex-col gap-4">
            <p
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Every session includes
            </p>
            {callIncludes.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="up" delay={i * 80}>
                <div
                  className="flex gap-4 items-start p-5 border"
                  style={{ borderColor: "var(--border)", background: "var(--secondary)" }}
                >
                  <span style={{ color: "var(--primary)", marginTop: 2 }}>{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <p
                      className="font-cinzel text-xs tracking-wider uppercase"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-sans text-[17px] leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THE PROCESS — 3 STEPS
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-14">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="How It Works" light />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Three steps to your{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                session.
              </span>
            </h2>
            <OrnamentalDivider theme="light" />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.number} animation="up" delay={i * 120}>
                <div
                  className="flex flex-col gap-5 p-8 relative border"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Step number */}
                  <span
                    className="font-cormorant font-light leading-none"
                    style={{ color: "var(--gold)", opacity: 0.3, fontSize: "4rem" }}
                  >
                    {step.number}
                  </span>
                  {/* Gold accent line */}
                  <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.5 }} />
                  {/* Label */}
                  <p
                    className="font-cinzel text-sm tracking-wider uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    {step.label}
                  </p>
                  {/* Description */}
                  <p
                    className="font-sans text-[17px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          APPLICATION FORM
      ══════════════════════════════════════════════════ */}
      <section
        id="application"
        className="section-padding"
        style={{ background: "var(--secondary)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="Your Application" align="center" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Tell Lady Cyd{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                about you.
              </span>
            </h2>
            <OrnamentalDivider theme="light" className="justify-center" />
            <p
              className="font-sans text-[17px] leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Be honest. Be specific. The quality of your application determines the depth
              of your session — and Lady Cyd reads every one personally.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale">
            <div
              className="border p-6 sm:p-10"
              style={{ borderColor: "rgba(197,75,140,0.15)", background: "var(--card)" }}
            >
              <ClarityCallForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          NOT READY YET? — Gentle nudge to WHOLE Life Design
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(197,75,140,0.10) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll
          animation="up"
          className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10"
        >
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--gold)" }}
          >
            Not quite ready?
          </p>
          <OrnamentalDivider theme="light" />
          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            Begin with{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              WHOLE Life Design™.
            </span>
          </h2>
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            If a private Clarity Call feels like a big step right now, begin in the foundational
            ecosystem. WHOLE Life Design™ is the free formation environment where you receive Lady
            Cyd&apos;s structured teachings, access courses and resources, attend Healing Harbour
            Live (the free monthly masterclass), and get clear on exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/whole-life-design" variant="primary" size="lg" className="gap-3">
              Explore WHOLE Life Design™
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
