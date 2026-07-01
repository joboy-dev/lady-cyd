import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import ImageComponent from "@/components/shared/Image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Lady Cyd | Certified Trauma-Informed Coach Nigeria | Cyd Alex-Emenike",
  description:
    "Meet Cyd Chioma Alex-Emenike — Certified trauma-informed transformational coach, family systems strategist, and generational restoration guide. Christian coaching for women in Nigeria and Africa seeking identity healing and breaking generational patterns.",
  keywords: [
    "Cyd Chioma Alex-Emenike",
    "Lady Cyd coach",
    "trauma-informed coach Nigeria",
    "Christian coaching for women Africa",
    "generational patterns coaching",
    "identity restoration coach",
    "women's transformation coach",
  ],
};

const roleTitles = [
  "Soul Restoration Strategist",
  "Trauma-Informed Coach",
  "Keynote Speaker",
  "Author",
];

const certifications = [
  {
    title: "Trauma-Informed Coaching Certification",
    detail: "A formal certification equipping Lady Cyd to work with high-capacity leaders navigating complex emotional experiences, identity wounds, and unresolved personal and generational trauma — with trauma-informed awareness and structured, evidence-informed care.",
  },
  {
    title: "Advanced Leadership Formation Programme",
    detail: "Trained · Under the Mentorship of Debola Deji-Kurunmi — transformational coach, bestselling author, and one of Africa's most respected leadership development architects. This programme developed her capacity for structured leadership thinking, high-capacity women's development, and the systematic formation of visionary leaders.",
  },
  {
    title: "Advanced Formation & Leadership Studies",
    detail: "Mathetheuo Institute · Under Dr. Dele Osunmakinde — a rigorous formation programme designed to develop leaders of depth, character, and sustained influence.",
  },
];

const methodologyStages = [
  {
    number: "01",
    name: "Regulation",
    description:
      "Understanding how the nervous system holds pain and how accumulated stress, trauma, and pressure shape leadership patterns — and rebuilding the internal capacity to lead from stability rather than survival.",
    result: "She leads from regulation, not reaction.",
  },
  {
    number: "02",
    name: "Roots",
    description:
      "Mapping the invisible architecture of family systems, inherited roles, relational dynamics, and generational patterns that shaped how she loves, leads, and processes pain.",
    result: "She understands what she inherited and consciously chooses what she carries forward.",
  },
  {
    number: "03",
    name: "Reconstruction",
    description:
      "Rebuilding identity from the inside out — separating self-worth from performance, productivity, responsibility, and external validation.",
    result: "She leads from identity, not performance.",
  },
  {
    number: "04",
    name: "Reintegration",
    description:
      "Creating sustainable internal alignment through structured practices, emotional integration, value congruence, and intentional living that supports long-term transformation.",
    result: "Her wholeness becomes sustainable, embodied, and self-led.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Identity Restoration",
    body: "Before strategy, before systems, before success — there must be a healed self. Lady Cyd's foundational work helps women excavate and rebuild their sense of self at the root, not the surface. This is where everything begins.",
  },
  {
    number: "02",
    title: "Trauma-Informed Healing",
    body: "Drawing on trauma science, somatic awareness, and Kingdom truth, the work meets women in the deep places — the shame, the wounds, the hidden agreements with pain — and walks them through structured, intentional healing.",
  },
  {
    number: "03",
    title: "Generational Rebuilding",
    body: "The goal is never just personal healing. The goal is a changed lineage. Lady Cyd's work equips women to interrupt the cycles that have governed their family lines and to build something ordered, whole, and lasting for generations to come.",
  },
];

export default function AboutPage() {
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
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 60%, rgba(197,75,140,0.13) 0%, transparent 65%)",
          }}
        />

        {/* Subtle horizontal lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 mt-32 sm:mt-44 pb-20">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            {/* Text side */}
            <div className="flex flex-col gap-6">
              <div className="animate-fade-in-up">
                <SectionBreadcrumb title="About Lady Cyd" light align="left" />
              </div>

              <h1
                className="font-cormorant font-light leading-[1.05] animate-fade-in-up"
                style={{ color: "white", fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "150ms" }}
              >
                Cyd <br />{" "}
                <span className="italic" style={{ color: "var(--primary)" }}>
                  Alex-Emenike
                </span>
              </h1>

              <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <p
                  className="font-cinzel text-xs tracking-[0.25em] uppercase"
                  style={{ color: "var(--gold)", opacity: 0.75 }}
                >
                  Soul Restoration Coach for High-Capacity Leaders
                </p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "450ms" }}>
                <OrnamentalDivider theme="light" className="justify-start" />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "550ms" }}>
                <p
                  className="font-cormorant italic text-xl sm:text-2xl leading-relaxed max-w-lg"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  &ldquo;I did not arrive at this work through theory alone. I arrived through the
                  long, costly, deeply personal road of my own restoration.&rdquo;
                </p>
              </div>
            </div>

            {/* Image side */}
            <AnimateOnScroll animation="right" delay={200}>
            <div className="w-full max-w-sm lg:max-w-full aspect-3/4 relative overflow-hidden mx-auto rounded-sm">
              <ImageComponent
                src="/images/lady-cyd/image-6.jpg"
                alt="Cyd Alex-Emenike - Lady Cyd"
                objectFit="cover"
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>
            </AnimateOnScroll>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════
          HER STORY — CHAPTER 1
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionBreadcrumb title="Her Story" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight text-center"
              style={{ color: "var(--foreground)" }}
            >
              She walked the road{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                before she built the map.
              </span>
            </h2>
          </div>

          <OrnamentalDivider theme="dark" />

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-[17px]">
            <p>
              Cyd Alex-Emenike — known as Lady Cyd — is not a coach who found a course and built a
              business. She is a woman who was taken through the furnace, rebuilt from the inside
              out, and equipped to walk others through the same structured, transformational work of
              restoration.
            </p>
            <p>
              Her own journey began in the private places, the quiet grief of wounded family
              systems, the slow discovery of how deeply inherited pain shapes identity, and the
              relentless, costly pursuit of wholeness in the face of cycles that seemed determined
              to repeat themselves.
            </p>
            <p>
              What she discovered through that process was not only personal freedom. It was a
              methodology. A framework. A map.
            </p>
            <p>
              She came to understand that most women who are high-functioning and high-achieving are
              not thriving from wholeness, they are performing from wounds. That beneath the
              capability, the productivity, the language of resilience, and the leadership gifting,
              there is often an unaddressed identity wound quietly governing everything.
            </p>
            <p>
              That understanding became the foundation of everything she does today.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          PULLQUOTE
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(197,75,140,0.09) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll animation="scale" className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center relative z-10">
          <span style={{ color: "var(--gold)", opacity: 0.4 }} className="font-cinzel text-xs tracking-widest uppercase">
            ✦ ✦ ✦
          </span>
          <p
            className="font-cormorant italic leading-relaxed"
            style={{ color: "white", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            &ldquo;My work is not motivation. It is {" "}
            <span style={{ color: "var(--primary)" }}>restoration</span>{" "}
            &rdquo;
          </p>
          <OrnamentalDivider theme="light" />
          <p
            className="font-cinzel text-xs tracking-widest uppercase"
            style={{ color: "var(--gold)" }}
          >
            — Cyd Alex-Emenike
          </p>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          HER STORY — CHAPTER 2: THE METHODOLOGY
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <SectionBreadcrumb title="The Methodology" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              The Integral Restoration{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Framework
              </span>
            </h2>
            <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Where neuroscience, systems thinking, and strategic restoration meet.
            </p>
          </div>

          <OrnamentalDivider theme="dark" />

          <p className="font-sans text-muted-foreground leading-[1.9] text-[17px]">
            Most leadership development addresses what you do. The Integral Restoration™ Framework
            addresses who you are beneath what you do. It is a four-stage restoration process
            designed for high-capacity leaders whose external excellence has outpaced their internal
            wholeness — leaders who are performing at the highest levels while privately carrying
            unresolved pain, fragmented identity, and accumulated pressure that no productivity
            system has ever been able to fix.
          </p>

          <div className="flex flex-col gap-8">
            {methodologyStages.map((stage, i) => (
              <AnimateOnScroll key={stage.number} animation="up" delay={i * 80}>
                <div
                  className="flex flex-col gap-3 border-l-2 pl-6"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-cinzel text-xs tracking-widest"
                      style={{ color: "var(--gold)", opacity: 0.7 }}
                    >
                      {stage.number}
                    </span>
                    <h3
                      className="font-cinzel text-sm tracking-widest uppercase"
                      style={{ color: "var(--foreground)" }}
                    >
                      {stage.name}
                    </h3>
                  </div>
                  <p className="font-sans text-[17px] leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                  <p
                    className="font-cormorant italic text-base"
                    style={{ color: "var(--primary)" }}
                  >
                    Result: {stage.result}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          BEYOND THE PLATFORM
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4">
            <SectionBreadcrumb title="Beyond The Platform" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight text-center"
              style={{ color: "var(--foreground)" }}
            >
              The woman{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                behind the work.
              </span>
            </h2>
          </AnimateOnScroll>

          <OrnamentalDivider theme="dark" />

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-[17px]">
            <p>
              Lady Cyd is an author and has carried her message across Africa and beyond —
              speaking to women leaders, ministry communities, purpose-driven builders, and
              high-capacity women navigating the intersection of identity, assignment, and
              restoration.
            </p>
            <p>
              She is the Founder of{" "}
              <span className="text-foreground font-medium">Grit &amp; Graceful Coaching Company</span>
              {" "}— the professional vehicle through which she delivers coaching, formation programmes,
              and transformational experiences to high-capacity women.
            </p>
            <p>
              She is married to her lover, friend, and covenant partner, Alex Emenike, and
              together they are raising a family anchored in faith, purpose, and Kingdom
              intentionality.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THREE PILLARS
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: "var(--secondary)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="The Work" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Three pillars.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                One integrated transformation.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.number} animation="up" delay={i * 150}>
              <div
                className="flex flex-col gap-5 p-8 bg-card border border-primary/10 hover:border-primary/30 transition-colors duration-300 h-full"
              >
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
          CREDENTIALS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Credentials &amp; Titles" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Grounded in practice.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Qualified in truth.
              </span>
            </h2>
          </AnimateOnScroll>

          {/* Role Titles */}
          <div className="flex flex-col gap-3">
            <p
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Roles &amp; Titles
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {roleTitles.map((c, i) => (
                <AnimateOnScroll key={c} animation="left" delay={i * 60}>
                <div
                  className="flex items-center gap-4 px-6 py-4 border border-border hover:border-primary/30 transition-colors duration-200"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: "var(--primary)" }}
                  />
                  <span className="font-cinzel text-xs tracking-wider uppercase text-foreground/80">
                    {c}
                  </span>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Formal Certifications */}
          <div className="flex flex-col gap-3">
            <p
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Formal Certifications &amp; Training
            </p>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <AnimateOnScroll key={cert.title} animation="up" delay={i * 80}>
                <div
                  className="flex gap-4 items-start p-6 border border-border hover:border-primary/20 transition-colors duration-200"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: "var(--gold)" }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-cinzel text-xs tracking-wider uppercase text-foreground/90">
                      {cert.title}
                    </p>
                    <p className="font-sans text-[17px] leading-relaxed text-muted-foreground">
                      {cert.detail}
                    </p>
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT WOMEN SAY
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(197,75,140,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Transformation Stories" light />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              She walks them through.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                They emerge different.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
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
            ].map((t, i) => (
              <AnimateOnScroll key={t.name} animation="scale" delay={i * 150}>
              <div
                className="flex flex-col gap-6 p-8 relative h-full"
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
                <p className="font-cormorant italic text-xl leading-relaxed mt-6"
                  style={{ color: "rgba(255,255,255,0.8)" }}>
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
                  <span
                    className="font-cinzel text-xs tracking-widest uppercase"
                    style={{ color: "var(--gold)", opacity: 0.7 }}
                  >
                    {t.name}
                  </span>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — BEGIN THE JOURNEY
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(197,75,140,0.12) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
          <p className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "var(--primary)" }}>
            Ready to begin?
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
            The diagnostic gateway into the ecosystem. Through ten wound categories, every woman
            identifies where alignment has been compromised and where her restoration work should begin.
            Everything in the Grit &amp; Graceful ecosystem flows from here.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/whole/assessment" variant="primary" size="lg" className="gap-3">
              Take The Wound Point Assessment
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/transformation-pathway" variant="outlineLight" size="lg">
              See The WHOLE Pathway™
            </LinkButton>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
