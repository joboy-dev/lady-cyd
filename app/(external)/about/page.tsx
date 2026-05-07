import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Lady Cyd | Cyd Alex-Emenike",
  description:
    "Trauma-Informed Coach, Family Systems Strategist, and Generational Restoration Guide. Learn about Lady Cyd's journey, methodology, and the work she does with high-capacity women.",
};

/* Role titles — directly from client brief */
const roleTitles = [
  "Trauma-Informed Transformational Coach",
  "Family Systems Strategist",
  "Generational Restoration Guide",
  "Kingdom Formation Discipler",
  "Writer & Speaker",
];

/* Formal certifications — as stated in client brief */
const certifications = [
  {
    title: "Trauma-Informed Coaching",
    detail: "Certified — formal certification equipping her to work with women navigating complex emotional experiences, identity fracture, and unresolved personal and generational trauma with clinical sensitivity and structured care.",
  },
  {
    title: "Minister's Formation — Certified Graduate",
    detail: "Mathetheuo School of Ministry · Under the Apostolic Mentorship of Dr. Dele Osunmakinde. A rigorous formation programme designed to develop and release ministers into their Kingdom mandate.",
  },
  {
    title: "Intensive Leadership Discipleship Programme",
    detail: "Certified · Under the Mentorship of Debola Deji-Kurunmi (DDK) — one of Africa's foremost leadership development voices. This programme sharpened her capacity for structured thinking, disciplined leadership formation, and the systematic development of high-capacity women.",
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
    body: "Drawing on trauma science, somatic awareness, and Kingdom truth, the work meets women in the deep places — the shame, the fractures, the hidden agreements with pain — and walks them through structured, intentional healing.",
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

        <div className="section-padding relative z-10 pt-40 pb-20">
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
                Cyd Chioma{" "}
                <span className="italic" style={{ color: "var(--primary)" }}>
                  Alex-Emenike
                </span>
              </h1>

              <div className="flex flex-col gap-1 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                {[
                  "Trauma-Informed Coach",
                  "Family Systems Strategist",
                  "Generational Restoration Guide",
                ].map((title) => (
                  <p
                    key={title}
                    className="font-cinzel text-xs tracking-[0.25em] uppercase"
                    style={{ color: "var(--gold)", opacity: 0.75 }}
                  >
                    {title}
                  </p>
                ))}
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
                  long, costly, sacred road of my own healing.&rdquo;
                </p>
              </div>
            </div>

            {/* Image placeholder side */}
            <AnimateOnScroll animation="right" delay={200}>
            <div
              className="w-full max-w-sm lg:max-w-full aspect-3/4 relative overflow-hidden flex items-end justify-center mx-auto"
              style={{
                background:
                  "linear-gradient(160deg, var(--dark-section) 0%, rgba(197,75,140,0.12) 100%)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,3,8,0.8) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10 p-6 text-center mb-2">
                <p className="font-great-vibes text-3xl" style={{ color: "var(--primary)" }}>
                  Lady Cyd
                </p>
                <p
                  className="font-cinzel text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--gold)", opacity: 0.5 }}
                >
                  Photo coming soon
                </p>
              </div>
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

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-base">
            <p>
              Cyd Chioma Alex-Emenike — known as Lady Cyd — is not a coach who found a course and
              built a business. She is a woman who was taken through the furnace, rebuilt from the
              inside out, and then commissioned to walk others through the same sacred, structured
              work of transformation.
            </p>
            <p>
              Her own journey began in the private places — the quiet grief of fractured family
              systems, the slow discovery of how deeply inherited pain shapes identity, and the
              relentless, costly pursuit of wholeness in the face of cycles that seemed determined
              to repeat themselves. What she discovered through that process was not only personal
              freedom — it was a methodology. A framework. A map.
            </p>
            <p>
              She came to understand that most women who are high-functioning and high-achieving
              are not thriving from wholeness — they are performing from wounds. That beneath the
              capability, the productivity, the spiritual vocabulary, and the leadership gifting,
              there is often an unaddressed identity fracture quietly governing everything.
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
            &ldquo;I am not here to motivate you. I am here to{" "}
            <span style={{ color: "var(--primary)" }}>restructure you</span>.{" "}
            That is a different thing entirely.&rdquo;
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
          <div className="flex flex-col gap-4">
            <SectionBreadcrumb title="The Methodology" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight text-center"
              style={{ color: "var(--foreground)" }}
            >
              Where science, faith, and{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                systems meet.
              </span>
            </h2>
          </div>

          <OrnamentalDivider theme="dark" />

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-base">
            <p>
              Lady Cyd&apos;s work sits at the intersection of four distinct disciplines — and the
              integration of all four is what makes it unlike anything else available to women
              today.
            </p>
            <p>
              <strong className="text-foreground font-medium">Trauma science</strong> provides the
              understanding of how the nervous system holds pain, how early experiences wire
              identity, and what it actually takes — physiologically and psychologically — to heal
              at the root rather than manage symptoms at the surface.
            </p>
            <p>
              <strong className="text-foreground font-medium">Family systems theory</strong> makes
              visible the invisible architecture of the family — the roles, the patterns, the
              unspoken rules, the relational dynamics passed across generations — and gives women
              the tools to understand what they inherited and how to choose differently.
            </p>
            <p>
              <strong className="text-foreground font-medium">Prophetic identity</strong> addresses
              the spiritual dimension of who a woman is — her calling, her design, her God-given
              purpose — and the way that unhealed wounds distort, delay, or disqualify women from
              walking in that identity with clarity and confidence.
            </p>
            <p>
              <strong className="text-foreground font-medium">Kingdom discipleship</strong> anchors
              all transformation in Scripture, prayer, and a relational posture toward God — not
              as a religious add-on, but as the bedrock from which all lasting change grows.
            </p>
            <p>
              This is not surface-level work. It is not a weekend workshop or a motivational
              programme. It is deep, structured, transformational work — and it produces deep,
              structured, lasting results.
            </p>
          </div>
        </AnimateOnScroll>
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
                className="flex flex-col gap-5 p-8 bg-white border border-primary/10 hover:border-primary/30 transition-colors duration-300 h-full"
              >
                <span
                  className="font-cinzel text-4xl font-light"
                  style={{ color: "var(--gold)", opacity: 0.45 }}
                >
                  {p.number}
                </span>
                <div className="h-px w-8" style={{ background: "var(--primary)" }} />
                <h3 className="font-cormorant text-2xl font-semibold">{p.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{p.body}</p>
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
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">
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
          CTA — JOIN THE HEALING HARBOUR
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
            The first step is entering the Harbour.{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Everything grows from there.
            </span>
          </h2>
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            The Healing Harbour is Lady Cyd&apos;s free inner circle community — where the journey
            begins, the sisterhood receives you, and transformation takes root.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/inner-circle" variant="primary" size="lg" className="gap-3">
              Enter the Healing Harbour
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/transformation-pathway" variant="outlineLight" size="lg">
              See the Transformation Pathway
            </LinkButton>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
