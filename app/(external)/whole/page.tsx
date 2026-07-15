import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WHOLE™ | Flagship Coaching Programme | Lady Cyd",
  description:
    "WHOLE™ is the flagship transformational coaching programme of Grit & Graceful Coaching Company — founded by Lady Cyd Alex-Emenike. Coming soon.",
};

const pillars = [
  { number: "01", name: "Identity Restoration", body: "Rebuilding selfhood at the root — beneath the roles, the titles, and what she produces." },
  { number: "02", name: "Emotional Formation", body: "Structured healing of the emotional architecture that governs her responses, relationships, and self-perception." },
  { number: "03", name: "Spiritual Alignment", body: "Reconnecting with God's original design — what she was created for, how she was built to function." },
  { number: "04", name: "Relational Health", body: "Healing the relational patterns inherited and developed — how she loves, leads, sets limits, and receives." },
  { number: "05", name: "Purpose Clarity", body: "Defining assignment, understanding calling, and building from a place of alignment rather than ambition." },
  { number: "06", name: "Sustainable Rhythms", body: "Designing a life architecture that can hold what she is building — internal rhythms of rest, output, and renewal." },
  { number: "07", name: "Legacy Building", body: "Intentionally constructing what remains — what she passes on, what she builds, what outlasts her." },
];

export default function WHOLEPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO — COMING SOON
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(197,75,140,0.12) 0%, transparent 70%)",
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
          <span
            className="font-cinzel text-xs tracking-[0.3em] uppercase animate-fade-in-up"
            style={{ color: "var(--gold)", opacity: 0.65 }}
          >
            Flagship Coaching Programme · Grit &amp; Graceful Coaching Company
          </span>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{ color: "var(--primary)", fontSize: "clamp(4rem, 10vw, 8rem)", animationDelay: "150ms" }}
          >
            WHOLE™
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <div
            className="inline-block font-cinzel text-xs tracking-[0.3em] uppercase px-6 py-2 border animate-fade-in-up"
            style={{ borderColor: "rgba(201,168,76,0.4)", color: "var(--gold)", animationDelay: "400ms" }}
          >
            Coming Soon
          </div>

          <h1
            className="font-cormorant font-light leading-tight max-w-3xl animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3.25rem)", animationDelay: "500ms" }}
          >
            The primary transformational coaching experience within{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              Grit &amp; Graceful.
            </span>
          </h1>

          <p
            className="font-sans text-lg leading-relaxed max-w-2xl font-light animate-fade-in-up"
            style={{ color: "rgba(255,255,255,0.65)", animationDelay: "650ms" }}
          >
            Designed for high-capacity women who have moved through the foundational stages of
            The WHOLE™ Pathway™ and are ready for the most intimate, rigorous, and structured
            level of personal transformation available within the Grit &amp; Graceful ecosystem.
            WHOLE™ is not open yet — but it is coming.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THE 7 PILLARS
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 40%, rgba(197,75,140,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="flex flex-col gap-4 text-center">
            <span
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", opacity: 0.65 }}
            >
              What WHOLE™ Covers
            </span>
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "white" }}
            >
              Seven dimensions.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                One integrated transformation.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                className="flex gap-6 sm:gap-10 items-start py-8 border-b last:border-b-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span
                  className="font-cinzel text-3xl font-light shrink-0"
                  style={{ color: "var(--gold)", opacity: 0.25 }}
                >
                  {p.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-cinzel text-sm tracking-widest uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="font-sans text-[17px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHILE YOU WAIT
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(197,75,140,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--primary)" }}
          >
            While you wait for WHOLE™
          </p>
          <OrnamentalDivider theme="light" />
          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            Begin in{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              WHOLE Life Design™.
            </span>
          </h2>
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            The foundational formation environment where women enter the ecosystem, do the
            structural work, and build the internal readiness for WHOLE™. WHOLE Life Design™ is
            free to enter and available now.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/whole-life-design"
              className="inline-flex items-center gap-3 font-cinzel text-sm tracking-widest uppercase px-8 py-3 transition-all duration-200"
              style={{ background: "var(--primary)", color: "white" }}
            >
              Enter WHOLE Life Design™
            </a>
            <a
              href="/transformation-pathway"
              className="inline-flex items-center gap-3 font-cinzel text-sm tracking-widest uppercase px-8 py-3 border border-white/30 text-white/70 hover:border-white/60 hover:text-white transition-all duration-200"
            >
              See The WHOLE™ Pathway™
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
