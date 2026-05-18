import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import HarbourJoinForm from "@/components/shared/HarbourJoinForm";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Healing Harbour | Free Christian Coaching Community for Women | Lady Cyd",
  description:
    "Join Lady Cyd's free inner circle community — Christian coaching for women seeking healing from family trauma, identity restoration, and breaking generational patterns. Trauma-informed support for high-capacity women in Nigeria and Africa.",
  keywords: [
    "Christian coaching for women Africa",
    "trauma coach for women",
    "healing from family trauma",
    "generational healing coach",
    "women's transformation coach",
    "free coaching community",
  ],
};

const benefits = [
  {
    number: "01",
    title: "A Sisterhood That Holds You",
    body: "You are not joining a group chat. You are entering a carefully tended community of women who understand the weight you carry — women who will walk with you, pray with you, and refuse to let you do this alone.",
  },
  {
    number: "02",
    title: "Weekly Live Sessions",
    body: "Consistent, structured, and intentional. Live teaching sessions, Bible study, prayer, and prophetic insight — delivered regularly so that momentum is built and maintained, not lost between events.",
  },
  {
    number: "03",
    title: "Resources That Build",
    body: "Not inspiration to consume and forget. Resources designed to produce actual, measurable change — frameworks, reflections, tools, and content that work on you long after you engage with them.",
  },
  {
    number: "04",
    title: "First Access to Everything",
    body: "As a Healing Harbour member, you receive first access to all coaching programmes, workshops, intensives, and retreat opportunities before they open to the general public.",
  },
  {
    number: "05",
    title: "Transformational Reading Club",
    body: "A guided book reading and review experience that stretches your thinking, challenges your assumptions, and builds the mental and spiritual framework for the life you are walking into.",
  },
];

const forWho = [
  "You know something is unresolved inside you — and you are tired of carrying it alone.",
  "You are a high-capacity woman who leads, builds, or serves — but something feels off at the root.",
  "You suspect your family history is shaping your present in ways you cannot fully name yet.",
  "You are spiritually serious but feel like your healing and your faith have not fully met.",
  "You are ready for a community that goes deeper than encouragement and into actual transformation.",
  "You are done with surface-level spaces and want something that will cost you something — and give you something real in return.",
];

export default function InnerCirclePage() {
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
              "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(197,75,140,0.14) 0%, transparent 70%)",
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
            <SectionBreadcrumb title="Free Inner Circle Community" light />
          </div>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{ color: "var(--primary)", fontSize: "clamp(3rem, 8vw, 6rem)", animationDelay: "150ms" }}
          >
            The Healing Harbour
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <h1
            className="font-cormorant font-light leading-tight max-w-3xl animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", animationDelay: "400ms" }}
          >
            Before the programme. Before the mentorship.{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              There is the Harbour.
            </span>
          </h1>

          <div className="animate-fade-in-up" style={{ animationDelay: "550ms" }}>
            <p
              className="font-sans text-lg leading-relaxed max-w-2xl font-light"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              The Healing Harbour is not a holding room. It is not a waiting list. It is the
              beginning of the work — a free, curated inner circle where high-capacity women enter
              the pathway, find their sisterhood, and begin to heal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <LinkButton to="#join" variant="primary" size="lg" className="gap-3">
              I Am Ready to Enter
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/transformation-pathway" variant="outlineLight" size="lg">
              See the Full Pathway
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT IT IS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What It Is" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Not a community.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                A covenant space.
              </span>
            </h2>
          </div>

          <OrnamentalDivider theme="dark" />

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-base">
            <p>
              The Healing Harbour is Lady Cyd&apos;s free inner circle — a carefully tended,
              intentional community for women who are serious about healing, identity, and
              generational restoration. It is the first stage of the Transformation Pathway and
              the entry point into everything Lady Cyd offers.
            </p>
            <p>
              It is free. But it is not casual. Women who enter the Harbour are women who are
              choosing — choosing to show up, to engage, to be honest, and to do the work. The
              Harbour receives you exactly where you are, and walks with you from there.
            </p>
            <p>
              This is where the sisterhood is. This is where the teachings begin. This is where
              Lady Cyd shows up consistently — to teach, to pray, to challenge, and to hold a
              space that is unlike anything else available to women today.
            </p>
          </div>

          {/* Pullquote */}
          <div
            className="border-l-2 pl-6 py-2"
            style={{ borderColor: "var(--gold)" }}
          >
            <p
              className="font-cormorant italic text-xl sm:text-2xl leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              &ldquo;It is not a holding room. It is the beginning of the work.&rdquo;
            </p>
            <p
              className="font-cinzel text-xs tracking-widest uppercase mt-3"
              style={{ color: "var(--primary)" }}
            >
              — Lady Cyd
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT YOU RECEIVE
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 40%, rgba(197,75,140,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What You Receive" light />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              Everything you need to{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                begin the work.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.number} animation="up" delay={i * 100}>
              <div
                className="flex flex-col gap-5 p-8 transition-colors duration-300 h-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="font-cinzel text-4xl font-light leading-none"
                  style={{ color: "var(--gold)", opacity: 0.3 }}
                >
                  {b.number}
                </span>
                <div className="h-px w-8" style={{ background: "var(--primary)" }} />
                <h3
                  className="font-cormorant text-xl font-semibold"
                  style={{ color: "white" }}
                >
                  {b.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {b.body}
                </p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHO IS IT FOR
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="Who It Is For" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              You will know{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                if this is for you.
              </span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
              The Healing Harbour is not for everyone — not because of exclusivity, but because
              transformation requires readiness. This is for the woman who:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {forWho.map((item, i) => (
              <AnimateOnScroll key={i} animation="up" delay={i * 80}>
              <div
                className="flex gap-4 items-start p-6 bg-white border-l-2 h-full"
                style={{ borderColor: "var(--primary)" }}
              >
                <span
                  className="font-cinzel text-xs tracking-widest mt-0.5 shrink-0"
                  style={{ color: "var(--gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-sm leading-relaxed text-foreground/80">{item}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center">
            <p
              className="font-cormorant italic text-2xl sm:text-3xl"
              style={{ color: "var(--primary)" }}
            >
              If you read this list and felt seen — you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          JOIN — ANCHOR
      ══════════════════════════════════════════════════ */}
      <section
        id="join"
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,75,140,0.15) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--primary)" }}
          >
            The door is open.
          </p>

          <OrnamentalDivider theme="light" />

          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            Enter the Healing Harbour.{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Begin the journey.
            </span>
          </h2>

          <p
            className="font-sans text-base leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Join free. Show up honestly. Let the work begin. The Harbour receives you exactly as
            you are — and walks with you into who you were always meant to become.
          </p>

          <HarbourJoinForm />
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
