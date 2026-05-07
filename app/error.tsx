'use client'

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Radial glow — slightly red-shifted for error */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(197,75,140,0.10) 0%, rgba(120,20,40,0.06) 60%, transparent 80%)",
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
          Something went wrong
        </p>

        {/* Decorative icon number */}
        <h1
          className="font-cormorant font-light select-none"
          style={{
            fontSize: "clamp(5rem, 18vw, 12rem)",
            lineHeight: 1,
            color: "var(--primary)",
            opacity: 0.12,
          }}
        >
          ✦
        </h1>

        {/* Gold divider */}
        <div className="flex items-center gap-4 w-full max-w-xs -mt-4">
          <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.3 }} />
          <span style={{ color: "var(--gold)" }} className="text-sm">✦</span>
          <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.3 }} />
        </div>

        {/* Headline */}
        <h2
          className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
          style={{ color: "var(--hero-foreground)" }}
        >
          An unexpected interruption{" "}
          <span className="italic" style={{ color: "var(--primary)" }}>
            occurred.
          </span>
        </h2>

        <p
          className="font-sans text-base leading-relaxed"
          style={{ color: "var(--hero-foreground)", opacity: 0.55 }}
        >
          Something didn't go as expected on our end. You can try again, or return home while we resolve this.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-3 px-8 py-3.5 font-cinzel text-sm tracking-widest uppercase text-white transition-all duration-300"
            style={{ background: "var(--primary)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#a0366e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--primary)")}
          >
            <RefreshCw size={14} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 font-cinzel text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              color: "var(--gold)",
              border: "1px solid var(--gold)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            <ArrowLeft size={14} />
            Return Home
          </Link>
        </div>

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
