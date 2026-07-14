import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import SubscribeForm from "@/components/shared/form/appForms/SubscribeForm";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "WHOLE Life Design™ | Foundational Learning Ecosystem | Lady Cyd",
  description:
    "WHOLE Life Design™ is the foundational learning ecosystem of Grit & Graceful Coaching Company — where high-capacity women return to God's original design through Biblical truth, emotional formation, transformational teaching, and intentional community.",
  keywords: [
    "WHOLE Life Design Lady Cyd",
    "Grit and Graceful Coaching Company",
    "formation ecosystem for women",
    "Healing Harbour Live masterclass",
    "soul restoration coach Africa",
    "identity restoration for women",
  ],
};

const transitions = [
  { from: "Information", to: "Formation" },
  { from: "Survival", to: "Stewardship" },
  { from: "Reaction", to: "Intentional Design" },
  { from: "Confusion", to: "Clarity" },
  { from: "Drifting", to: "Deliberate Living" },
];

const pillars = [
  {
    number: "01",
    title: "Clarity",
    body: "You stop managing confusion and start operating from a defined understanding of who you are, what you carry, and where you are going.",
  },
  {
    number: "02",
    title: "Language",
    body: "You gain the vocabulary to name what has been happening inside you — the patterns, the wounds, the dynamics — and to speak about your experience with precision.",
  },
  {
    number: "03",
    title: "Awareness",
    body: "You develop the capacity to see what you could not see before — the inherited architecture that has been quietly shaping your decisions, relationships, and sense of self.",
  },
  {
    number: "04",
    title: "Frameworks",
    body: "You receive structured, practitioner-grade frameworks for understanding and navigating identity, emotional health, relational dynamics, and Kingdom assignment.",
  },
  {
    number: "05",
    title: "Foundation",
    body: "You build an internal foundation that does not collapse under pressure — one rooted in Biblical truth, self-knowledge, and intentional design.",
  },
  {
    number: "06",
    title: "Community",
    body: "You enter a carefully tended ecosystem of women who are serious about formation — not surface-level encouragement, but real, structured, intentional transformation together.",
  },
];

const features = [
  {
    number: "01",
    title: "Foundational Courses",
    body: "Structured learning experiences that form the core of the WHOLE Life Design™ curriculum. Each course is built to produce actual formation — not just information.",
  },
  {
    number: "02",
    title: "Guided Learning Experiences",
    body: "Cohort-based formation journeys that take women through structured transformation processes in community — with accountability, peer engagement, and intentional design.",
  },
  {
    number: "03",
    title: "Community Conversations",
    body: "Intentional, facilitated spaces for women inside the ecosystem to connect, process, and build alongside one another. Not a chat group — a formation community.",
  },
  {
    number: "04",
    title: "Growth Resources",
    body: "Frameworks, tools, guided reflections, and curated resources designed to produce measurable change — resources that work on you long after you engage with them.",
  },
  {
    number: "05",
    title: "Formation Tools",
    body: "Practitioner-grade instruments for personal transformation — tools drawn from Lady Cyd's coaching practice, adapted for the formation journey inside WHOLE Life Design™.",
  },
  {
    number: "06",
    title: "Healing Harbour Live",
    body: "The free monthly masterclass — exclusively available inside WHOLE Life Design™. Every 4th Friday. 90 Minutes. One Wound Point. One Framework. One Pathway Forward.",
    highlight: true,
  },
];

const forWho = [
  "The high-capacity woman who has been performing from wounds instead of building from wholeness",
  "The woman who is spiritually serious but feels like her healing and her faith have not fully met",
  "The leader, entrepreneur, or ministry builder who senses that something is misaligned at the root",
  "The woman who has tried information and motivation — and knows she needs actual formation",
  "The woman who suspects her family history is shaping her present in ways she cannot fully name",
  "The woman who is done with surface-level spaces and wants structured, intentional transformation",
];

const testimonials = [
  {
    quote:
      "Working with Lady Cyd helped me to deal with imposter syndrome and let me to actually start creating. I went from zero discipline to being able to build my own company as a teenager.",
    name: "Ruth",
    role: "",
  },
  {
    quote:
      "I met Lady Cyd at a retreat she was invited to speak at. I am glad I went. Not only did she show me how to up level my mind but she helped me detox lies I built around my life. I recommend that every woman, girl, lady, listens to Lady Cyd.",
    name: "I.J.",
    role: "",
  },
  {
    quote:
      "Lady Cyd has a gift for helping you see what you couldn't see on your own. The clarity I gained was unlike anything I'd experienced in any other coaching space.",
    name: "Nicola",
    role: "Interior Decorator & Life Coach",
  },
  {
    quote:
      "The frameworks Lady Cyd teaches are not motivational — they are structural. I left understanding why I was doing what I was doing, and with a real path forward.",
    name: "Eunice",
    role: "Entrepreneur",
  },
];

const pathwayStages = [
  { code: "01", name: "RECOGNIZE", current: false },
  { code: "02", name: "REVEAL", current: false },
  { code: "03", name: "REBUILD", current: true, label: "WHOLE Life Design™" },
  { code: "04", name: "RESTORE", current: false },
  { code: "05", name: "WHOLE™", current: false, comingSoon: true },
];

export default function EdenLifeDesignPage() {
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
              "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(197,75,140,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-8 mt-32 sm:mt-44 pb-20">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="A Grit & Graceful Coaching Company Experience · Founded by Lady Cyd" light />
          </div>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{ color: "var(--primary)", fontSize: "clamp(3rem, 8vw, 6.5rem)", animationDelay: "150ms" }}
          >
            <span className="font-cormorant font-light tracking-widest uppercase" style={{ fontSize: "0.88em", verticalAlign: "middle", letterSpacing: "0.25em" }}>WHOLE</span>{" "}Life Design™
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <h1
            className="font-cormorant font-light leading-tight max-w-3xl animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", animationDelay: "400ms" }}
          >
            Return to God&apos;s Original Design.
          </h1>

          <div className="animate-fade-in-up max-w-2xl" style={{ animationDelay: "550ms" }}>
            <p
              className="font-sans text-lg leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              You Know Something Needs to Change. You Just Have Not Had the Language, the
              Framework, or the Foundation to Know Where to Begin.
            </p>
            <p
              className="font-cormorant italic text-xl sm:text-2xl mt-4"
              style={{ color: "var(--gold)", opacity: 0.85 }}
            >
              WHOLE Life Design™ is where that changes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <LinkButton to="#enter" variant="primary" size="lg" className="gap-3">
              Begin WHOLE Life Design™
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/transformation-pathway" variant="outlineLight" size="lg">
              See The WHOLE Pathway™
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT IS EDEN LIFE DESIGN?
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What It Is" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Not a course platform.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                A developmental environment.
              </span>
            </h2>
          </div>

          <OrnamentalDivider />

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-[17px]">
            <p>
              WHOLE Life Design™ is the foundational learning ecosystem of Grit &amp; Graceful
              Coaching Company — the place where women return to God&apos;s original design through
              Biblical truth, emotional formation, transformational teaching, practical tools, and
              intentional community.
            </p>
            <p>
              It is the REBUILD stage of The WHOLE Pathway™ — the environment where women who have
              taken the Wound Point Assessment and identified their wound points enter to begin the
              structured work of formation. Not motivation. Not inspiration. Formation.
            </p>
            <p>
              WHOLE Life Design™ exists because most women have access to more information than they
              can process — but very few have access to a structured, intentional environment where
              that information becomes actual formation. WHOLE Life Design™ is that environment.
            </p>
          </div>

          <div
            className="border-l-2 pl-6 py-2"
            style={{ borderColor: "var(--gold)" }}
          >
            <p
              className="font-cormorant italic text-xl sm:text-2xl leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              &ldquo;You did not arrive broken. You arrived without a map.
              WHOLE Life Design™ gives you the map — and walks with you as you use it.&rdquo;
            </p>
            <p
              className="font-cinzel text-xs tracking-widest uppercase mt-3"
              style={{ color: "var(--primary)" }}
            >
              — Lady Cyd Alex-Emenike (fondly called Lady Cyd)
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY IT EXISTS — TRANSITIONS TABLE
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(197,75,140,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto flex flex-col gap-12 relative z-10">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Why It Exists" light />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              From where you are{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                to where you were designed to be.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-0">
            {transitions.map((t, i) => (
              <AnimateOnScroll key={t.from} animation="up" delay={i * 80}>
                <div
                  className="flex items-center gap-6 sm:gap-10 py-6 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="font-cormorant italic text-xl sm:text-2xl flex-1 text-right"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {t.from}
                  </p>
                  <span className="font-cinzel text-xs tracking-widest shrink-0" style={{ color: "var(--gold)" }}>
                    →
                  </span>
                  <p
                    className="font-cormorant text-xl sm:text-2xl font-semibold flex-1"
                    style={{ color: "var(--primary)" }}
                  >
                    {t.to}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT WOMEN GAIN
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What You Gain" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Six things every woman{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                walks away with.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.number} animation="up" delay={i * 100}>
                <div className="flex flex-col gap-5 p-8 bg-card border border-primary/10 hover:border-primary/30 transition-colors duration-300 h-full">
                  <span
                    className="font-cinzel text-4xl font-light"
                    style={{ color: "var(--gold)", opacity: 0.45 }}
                  >
                    {p.number}
                  </span>
                  <div className="h-px w-8" style={{ background: "var(--primary)" }} />
                  <h3 className="font-cormorant text-2xl font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground font-sans text-[17px] leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT IS INSIDE
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What Is Inside" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Six layers.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                One ecosystem.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <AnimateOnScroll key={feat.number} animation="up" delay={i * 80}>
                <div
                  className="flex flex-col gap-4 p-8 h-full transition-colors duration-200"
                  style={{
                    background: feat.highlight ? "rgba(197,75,140,0.06)" : "var(--secondary)",
                    border: feat.highlight ? "1px solid rgba(197,75,140,0.25)" : "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-cinzel text-xs tracking-widest"
                      style={{ color: "var(--gold)", opacity: 0.6 }}
                    >
                      {feat.number}
                    </span>
                    {feat.highlight && (
                      <span
                        className="font-cinzel text-[9px] tracking-widest uppercase px-2 py-0.5 border"
                        style={{ color: "var(--primary)", borderColor: "rgba(197,75,140,0.4)" }}
                      >
                        Free Monthly
                      </span>
                    )}
                  </div>
                  <div className="h-px w-8" style={{ background: feat.highlight ? "var(--primary)" : "var(--gold)" }} />
                  <h3 className="font-cormorant text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                    {feat.title}
                  </h3>
                  <p className="font-sans text-[17px] leading-relaxed text-muted-foreground">
                    {feat.body}
                  </p>
                  {feat.highlight && (
                    <p className="font-cinzel text-[10px] tracking-widest uppercase" style={{ color: "var(--primary)" }}>
                      Exclusively Inside WHOLE Life Design™
                    </p>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHO IT IS FOR
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Who It Is For" light />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              You will know{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                if this is for you.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-4">
            {forWho.map((item, i) => (
              <AnimateOnScroll key={i} animation="up" delay={i * 80}>
                <div
                  className="flex gap-4 items-start p-6 h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "2px solid var(--primary)",
                  }}
                >
                  <span
                    className="font-cinzel text-xs tracking-widest mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {item}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center">
            <p
              className="font-cormorant italic text-2xl sm:text-3xl"
              style={{ color: "var(--primary)" }}
            >
              If you read this and felt seen — you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHERE IT SITS — WHOLE PATHWAY VISUAL
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Where It Sits In Your Journey" />
            <h2
              className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              WHOLE Life Design™ is Stage 03 of{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                The WHOLE Pathway™.
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="up" delay={100}>
            <div className="flex flex-col sm:flex-row items-stretch gap-0">
              {pathwayStages.map((stage, i) => (
                <div
                  key={stage.code}
                  className="flex-1 flex flex-col items-center gap-3 p-5 sm:p-6 text-center relative"
                  style={{
                    background: stage.current ? "var(--primary)" : "var(--card)",
                    borderTop: `2px solid ${stage.current ? "var(--primary)" : "var(--border)"}`,
                  }}
                >
                  <span
                    className="font-cinzel text-xs tracking-widest"
                    style={{ color: stage.current ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)", opacity: stage.comingSoon ? 0.5 : 1 }}
                  >
                    {stage.code}
                  </span>
                  <p
                    className="font-cinzel text-xs tracking-wider uppercase"
                    style={{
                      color: stage.current ? "white" : stage.comingSoon ? "var(--muted-foreground)" : "var(--foreground)",
                      opacity: stage.comingSoon ? 0.5 : 1,
                    }}
                  >
                    {stage.name}
                  </p>
                  {stage.label && (
                    <span
                      className="font-cinzel text-[9px] tracking-widest uppercase px-2 py-0.5"
                      style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                    >
                      You Are Here
                    </span>
                  )}
                  {stage.comingSoon && (
                    <span
                      className="font-cinzel text-[9px] tracking-widest uppercase"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Coming Soon
                    </span>
                  )}
                  {i < pathwayStages.length - 1 && (
                    <span
                      className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 font-cinzel text-xs"
                      style={{ color: "var(--gold)" }}
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="up" delay={200} className="flex flex-col items-center gap-4 text-center">
            <p className="font-sans text-muted-foreground text-[17px] leading-relaxed max-w-2xl">
              Begin with the Wound Point Assessment (Stage 02 — REVEAL). Once you have identified your
              wound points, enter WHOLE Life Design™ (Stage 03 — REBUILD) to begin the structured
              formation work.
            </p>
            <LinkButton to="/transformation-pathway" variant="outline" size="sm" className="gap-3">
              See The Full WHOLE Pathway™
              <ArrowRight size={13} />
            </LinkButton>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(197,75,140,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Transformation Stories" light />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              Women who walked through.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Emerged different.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} animation="scale" delay={i * 120}>
                <div
                  className="flex flex-col gap-5 p-8 relative h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="font-cormorant text-6xl leading-none absolute top-4 left-6"
                    style={{ color: "var(--primary)", opacity: 0.2 }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="font-cormorant italic text-xl leading-relaxed mt-6"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {t.quote}
                  </p>
                  <div
                    className="flex items-center gap-3 pt-4 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center font-cinzel text-xs text-white shrink-0"
                      style={{ background: "var(--primary)" }}
                    >
                      {t.name[0]}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="font-cinzel text-xs tracking-widest uppercase"
                        style={{ color: "var(--gold)", opacity: 0.7 }}
                      >
                        {t.name}
                      </span>
                      {t.role && (
                        <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                          {t.role}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THE PROMISE + ENTER CTA
      ══════════════════════════════════════════════════ */}
      <section
        id="enter"
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(197,75,140,0.15) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--primary)" }}
          >
            The promise of WHOLE Life Design™
          </p>
          <OrnamentalDivider theme="light" />
          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            You will not leave the same.{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              You will leave equipped.
            </span>
          </h2>
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Not motivated. Not inspired for a week. Equipped — with language, frameworks, a
            foundation, and a community — to actually live the life you were designed for.
            That is the promise of WHOLE Life Design™.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/inner-circle" variant="primary" size="lg" className="gap-3">
              Begin WHOLE Life Design™
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/inner-circle" variant="outlineLight" size="lg">
              Register For Healing Harbour Live
            </LinkButton>
          </div>

          <div className="w-full pt-4 border-t border-white/10">
            <p
              className="font-cinzel text-[10px] tracking-widest uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Or join The Journal — stay connected with Lady Cyd's bi-weekly writings
            </p>
            <SubscribeForm source="whole-life-design" />
          </div>

          <p
            className="font-cinzel text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Free to enter · A Grit &amp; Graceful Coaching Company Experience · Founded by Lady Cyd Alex-Emenike
          </p>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
