import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import WoundPointLanding from "@/components/assessment/WoundPointLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wound Point Assessment™ | Find Your Primary Wound Point | Lady Cyd",
  description:
    "What is your primary wound point? Take the 14-question Wound Point Self-Audit by Lady Cyd Alex-Emenike — Grit & Graceful Coaching Company. Identify where alignment has been compromised and where your restoration work begins.",
  keywords: [
    "Wound Point Assessment Lady Cyd",
    "identity wound quiz",
    "soul restoration assessment",
    "Grit and Graceful Coaching Company",
    "Christian coaching assessment for women",
    "find my wound point",
  ],
};

const woundPoints = [
  "Identity Wound",
  "Purpose Wound",
  "Capacity Wound",
  "Rhythm Wound",
  "Relational Wound",
  "Voice Wound",
  "Generational Wound",
  "Stewardship Wound",
  "Leadership Wound",
  "Legacy Wound",
];

export default function WoundPointAssessmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
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
          <div className="flex items-center gap-3 animate-fade-in-up">
            <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.4 }} />
            <p
              className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "var(--gold)", opacity: 0.65 }}
            >
              Grit &amp; Graceful Coaching Company · Lady Cyd Alex-Emenike
            </p>
            <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.4 }} />
          </div>

          <h1
            className="font-cinzel font-light tracking-[0.15em] uppercase animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)", animationDelay: "150ms" }}
          >
            The 10 Wound Points™ Assessment
          </h1>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{ color: "var(--primary)", fontSize: "clamp(2.5rem, 6vw, 4rem)", animationDelay: "400ms" }}
          >
            What Is Your Primary Wound Point?
          </p>

          <div className="animate-fade-in-up max-w-2xl flex flex-col gap-4" style={{ animationDelay: "550ms" }}>
            <p
              className="font-sans text-lg leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Every high-capacity woman is carrying at least one. Almost none have named it precisely.
            </p>
            <p
              className="font-sans text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              The Wound Point Self-Audit gives you the language, the framework, and the honest space
              to name what has been quietly costing you — with precision, without judgment.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THE WOUND — DEFINITION
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-center">
          <div className="flex flex-col gap-2">
            <span
              className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "var(--gold)", opacity: 0.65 }}
            >
              The Wound
            </span>
            <h2
              className="font-cormorant font-light italic text-3xl sm:text-4xl"
              style={{ color: "var(--foreground)" }}
            >
              The gap between who you were designed to be and who survival taught you to become.
            </h2>
          </div>

          <OrnamentalDivider theme="dark" />

          <div className="flex flex-col gap-5 text-left">
            <p className="font-sans text-[17px] leading-[1.9] text-muted-foreground">
              She delivers. She leads. She shows up for everyone around her. And privately she
              carries a question she has never said out loud: <em>Why does doing everything right
              still feel like something is missing?</em>
            </p>
            <p className="font-sans text-[17px] leading-[1.9] text-muted-foreground">
              In Hebrew the word is <em>shavar</em> — to break under weight. Not moral failure.
              Not weakness. The wound that happens beneath the surface while a woman keeps
              functioning above it.
            </p>
            <p
              className="font-cormorant italic text-xl sm:text-2xl text-center"
              style={{ color: "var(--primary)" }}
            >
              The wound is not her ending. Naming it is her beginning.
            </p>
          </div>

          {/* 10 wound points ticker */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {woundPoints.map((wp) => (
              <span
                key={wp}
                className="font-cinzel text-[9px] tracking-widest uppercase px-3 py-1"
                style={{ border: "1px solid rgba(197,75,140,0.2)", color: "rgba(255,255,255,0.4)" }}
              >
                {wp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ASSESSMENT — CHOOSE PATH / QUIZ / RESULTS
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 60% 40%, rgba(197,75,140,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <WoundPointLanding />
        </div>
      </section>

      <Footer />
    </div>
  );
}
