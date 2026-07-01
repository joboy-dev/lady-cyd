import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import SubscribeForm from "@/components/shared/form/appForms/SubscribeForm";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Healing Harbour Live | Free Monthly Masterclass | Lady Cyd",
  description:
    "Healing Harbour Live is the free monthly masterclass exclusively inside Eden Life Design™ — by Lady Cyd, Grit & Graceful Coaching Company. Every 4th Friday. 90 minutes. One Wound Point. One Framework. One Pathway Forward.",
  keywords: [
    "Healing Harbour Live masterclass",
    "free Christian coaching masterclass",
    "Eden Life Design Lady Cyd",
    "identity restoration masterclass",
    "Wound Point Assessment coaching",
    "Grit and Graceful Coaching Company",
  ],
};

const sessionFeatures = [
  {
    icon: <Calendar size={18} />,
    title: "Every 4th Friday",
    body: "Consistent, structured, and intentional. The same cadence every month — so you can plan around it and build real momentum.",
  },
  {
    icon: <Clock size={18} />,
    title: "90 Minutes",
    body: "Not a lecture. Not a Q&A. A structured, facilitated session designed to take you from awareness to a clear pathway forward in one sitting.",
  },
  {
    icon: <Zap size={18} />,
    title: "One Wound Point. One Framework. One Pathway Forward.",
    body: "Each session addresses one of the ten wound categories from the Wound Point Assessment — with a complete framework and a defined next step.",
  },
  {
    icon: <Users size={18} />,
    title: "Zoom + Skool Live",
    body: "Join live from wherever you are. Healing Harbour Live is hosted on Zoom and inside the Eden Life Design™ Skool community.",
  },
];

const woundPoints = [
  { number: "01", name: "Identity Wound", tagline: "The Performance Has Become The Person" },
  { number: "02", name: "Purpose Wound", tagline: "Productive. Effective. Privately Misaligned." },
  { number: "03", name: "Capacity Wound", tagline: "She Has Enough. It Is Going To The Wrong Places." },
  { number: "04", name: "Rhythm Wound", tagline: "Her Nervous System Has Forgotten What Safe Feels Like." },
  { number: "05", name: "Relational Wound", tagline: "Visible To Everyone. Witnessed By Almost No One." },
  { number: "06", name: "Voice Wound", tagline: "She Has The Word. She Is Still Negotiating Permission To Say It." },
  { number: "07", name: "Generational Wound", tagline: "What Was Passed Down Is Still Speaking." },
  { number: "08", name: "Stewardship Wound", tagline: "She Has Been Given Much. She Is Struggling To Govern It Well." },
  { number: "09", name: "Leadership Wound", tagline: "Influential Publicly. Incongruent Privately." },
  { number: "10", name: "Legacy Wound", tagline: "She Is Creating Impact. She Has Not Yet Designed Inheritance." },
];

export default function HealingHarbourLivePage() {
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
            <SectionBreadcrumb title="Free Monthly Masterclass — Exclusively Inside Eden Life Design™" light />
          </div>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{ color: "var(--primary)", fontSize: "clamp(3rem, 8vw, 6rem)", animationDelay: "150ms" }}
          >
            Healing Harbour Live
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          {/* Format pills */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            {["Every 4th Friday", "90 Minutes", "Zoom + Skool Live", "Always Free"].map((pill) => (
              <span
                key={pill}
                className="font-cinzel text-[10px] tracking-widest uppercase px-4 py-1.5"
                style={{ border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold)" }}
              >
                {pill}
              </span>
            ))}
          </div>

          <h1
            className="font-cormorant font-light leading-tight max-w-3xl animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", animationDelay: "450ms" }}
          >
            One Wound Point.{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              One Framework.{" "}
            </span>
            One Pathway Forward.
          </h1>

          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <p
              className="font-sans text-lg leading-relaxed max-w-2xl font-light"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Healing Harbour Live is not a general teaching session. It is a structured, facilitated
              masterclass inside Eden Life Design™ — where each session takes one wound point,
              unpacks its framework, and delivers a single, defined pathway forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 animate-fade-in-up" style={{ animationDelay: "750ms" }}>
            <LinkButton to="#register" variant="primary" size="lg" className="gap-3">
              Register For The Next Session
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/eden-life-design" variant="outlineLight" size="lg">
              Explore Eden Life Design™
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
              Not a webinar.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                A restoration session.
              </span>
            </h2>
          </div>

          <OrnamentalDivider />

          <div className="flex flex-col gap-6 font-sans text-muted-foreground leading-[1.9] text-[17px]">
            <p>
              Healing Harbour Live is the free monthly masterclass exclusively available inside
              Eden Life Design™ — the foundational learning ecosystem of Grit &amp; Graceful
              Coaching Company. It is the heartbeat of the ecosystem. The consistent, structured,
              monthly touchpoint that keeps women moving forward.
            </p>
            <p>
              Each session is built around one of the ten wound categories from the Wound Point
              Assessment. Lady Cyd unpacks the wound, presents the framework, and closes with a
              single, clear pathway forward — so that every woman who attends leaves with not just
              insight, but direction.
            </p>
            <p>
              It is free. It is live. And it is exclusively available inside Eden Life Design™.
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
              &ldquo;One Wound Point. One Framework. One Pathway Forward. Every time.&rdquo;
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
          SESSION FORMAT
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
            <SectionBreadcrumb title="Session Format" light />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              What you can expect{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                every session.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {sessionFeatures.map((feat, i) => (
              <AnimateOnScroll key={feat.title} animation="up" delay={i * 100}>
                <div
                  className="flex gap-4 items-start p-6 h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }}>{feat.icon}</span>
                  <div className="flex flex-col gap-2">
                    <p className="font-cinzel text-xs tracking-wider uppercase" style={{ color: "var(--gold)" }}>
                      {feat.title}
                    </p>
                    <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {feat.body}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THE 10 WOUND POINTS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="The 10 Wound Points™" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Ten wounds.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Ten frameworks.
              </span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed text-[17px]">
              Healing Harbour Live works through the ten wound categories from the Wound Point
              Assessment. Each session covers one wound in depth — with a structured framework
              and a defined pathway forward.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-4">
            {woundPoints.map((wp, i) => (
              <AnimateOnScroll key={wp.number} animation="up" delay={i * 60}>
                <div
                  className="flex gap-4 items-start p-5 border-l-2 bg-card h-full"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <span
                    className="font-cinzel text-xs tracking-widest shrink-0 mt-0.5"
                    style={{ color: "var(--gold)" }}
                  >
                    {wp.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-cinzel text-xs tracking-wider uppercase text-foreground/90">
                      {wp.name}
                    </p>
                    <p className="font-cormorant italic text-base text-muted-foreground">
                      {wp.tagline}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center">
            <p className="font-cormorant italic text-xl sm:text-2xl" style={{ color: "var(--primary)" }}>
              Begin with The Wound Point Assessment to identify which wounds apply to you.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EXCLUSIVELY INSIDE EDEN LIFE DESIGN
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        <AnimateOnScroll animation="up" className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch gap-8 sm:gap-12">
          <div className="flex flex-col gap-5 flex-1">
            <SectionBreadcrumb title="How To Access" align="left" />
            <h2
              className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Exclusively available inside{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Eden Life Design™.
              </span>
            </h2>
            <OrnamentalDivider className="justify-start" />
            <p className="font-sans text-[17px] leading-relaxed text-muted-foreground">
              Healing Harbour Live is not a standalone event. It lives exclusively inside
              Eden Life Design™ — the foundational learning ecosystem of Grit &amp; Graceful
              Coaching Company. To register for Healing Harbour Live, begin with Eden Life Design™.
            </p>
            <p className="font-sans text-[17px] leading-relaxed text-muted-foreground">
              Eden Life Design™ is free to enter. Once inside, you have access to Healing Harbour
              Live every 4th Friday — along with foundational courses, guided learning experiences,
              community conversations, growth resources, and formation tools.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
              <LinkButton to="/eden-life-design" variant="primary" size="md" className="gap-3">
                Enter Eden Life Design™
                <ArrowRight size={14} />
              </LinkButton>
              <LinkButton to="/transformation-pathway" variant="outline" size="md">
                See The WHOLE Pathway™
              </LinkButton>
            </div>
          </div>

          <div
            className="shrink-0 w-full sm:w-64 flex flex-col gap-4 p-6 sm:p-8 border-t-2 sm:border-t-0 sm:border-l-2"
            style={{ borderColor: "var(--gold)", background: "var(--secondary)" }}
          >
            <p className="font-cinzel text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              Inside Eden Life Design™
            </p>
            {[
              "Foundational Courses",
              "Guided Learning Experiences",
              "Community Conversations",
              "Growth Resources",
              "Formation Tools",
              "Healing Harbour Live ✦",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-xs shrink-0 mt-0.5" style={{ color: "var(--primary)" }}>✦</span>
                <span className="font-sans text-sm" style={{ color: "var(--muted-foreground)" }}>{item}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          REGISTER — ANCHOR
      ══════════════════════════════════════════════════ */}
      <section
        id="register"
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
            The next session is waiting.
          </p>

          <OrnamentalDivider theme="light" />

          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            Begin with{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              The Wound Point Assessment.
            </span>
          </h2>

          <p
            className="font-sans text-[17px] leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Every woman enters the ecosystem through the Wound Point Assessment. Take the assessment,
            enter Eden Life Design™, and register for Healing Harbour Live — all free.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/eden-life-design" variant="primary" size="lg" className="gap-3">
              Begin Eden Life Design™
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/transformation-pathway" variant="outlineLight" size="lg">
              See The WHOLE Pathway™
            </LinkButton>
          </div>

          <div className="w-full pt-4 border-t border-white/10">
            <p
              className="font-cinzel text-[10px] tracking-widest uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Or subscribe to The Journal — bi-weekly writings from Lady Cyd, always free
            </p>
            <SubscribeForm source="healing-harbour-live" />
          </div>

          <p
            className="font-cinzel text-[10px] tracking-widest uppercase mt-2"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Healing Harbour Live · Exclusively Inside Eden Life Design™ · A Grit &amp; Graceful Coaching Company Experience
          </p>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
