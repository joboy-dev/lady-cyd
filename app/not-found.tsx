import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(197,75,140,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Subtle horizontal lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
        {/* Section label */}
        <p
          className="font-cinzel text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          Error · 404
        </p>

        {/* Big decorative number */}
        <h1
          className="font-cormorant font-light select-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 14rem)",
            lineHeight: 1,
            color: "var(--primary)",
            opacity: 0.15,
          }}
        >
          404
        </h1>

        {/* Gold divider */}
        <div className="flex items-center gap-4 w-full max-w-xs -mt-8">
          <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.3 }} />
          <span style={{ color: "var(--gold)" }} className="text-sm">✦</span>
          <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.3 }} />
        </div>

        {/* Headline */}
        <h2
          className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
          style={{ color: "var(--hero-foreground)" }}
        >
          This page has not yet{" "}
          <span className="italic" style={{ color: "var(--primary)" }}>
            been restored.
          </span>
        </h2>

        <p
          className="font-sans text-base leading-relaxed"
          style={{ color: "var(--hero-foreground)", opacity: 0.55 }}
        >
          The page you are looking for doesn't exist or may have been moved.
          Let's guide you back to where the work begins.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-3.5 font-cinzel text-sm tracking-widest uppercase text-white transition-all duration-300 mt-2"
          style={{ background: "var(--primary)" }}
        >
          <ArrowLeft size={15} />
          Return Home
        </Link>

        {/* Brand accent */}
        <p
          className="font-great-vibes text-2xl mt-4"
          style={{ color: "var(--gold)", opacity: 0.5 }}
        >
          Lady Cyd
        </p>
      </div>
    </div>
  );
}
