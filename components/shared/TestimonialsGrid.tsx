"use client";

import { testimonials } from "@/lib/data/testimonials";

interface TestimonialsGridProps {
  theme?: "light" | "dark";
}

export default function TestimonialsGrid({ theme = "dark" }: TestimonialsGridProps) {
  const isDark = theme === "dark";

  const cardBg = isDark
    ? "rgba(255,255,255,0.03)"
    : "var(--card)";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.07)"
    : "1px solid var(--border)";
  const quoteColor = isDark ? "rgba(255,255,255,0.8)" : "var(--foreground)";
  const dividerColor = isDark ? "rgba(255,255,255,0.07)" : "var(--border)";
  const nameColor = isDark ? "var(--gold)" : "var(--muted-foreground)";
  const roleColor = isDark ? "rgba(255,255,255,0.35)" : "var(--muted-foreground)";
  const bigQuoteOpacity = isDark ? 0.18 : 0.12;

  return (
    <>
      <style>{`
        @keyframes testimonials-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: testimonials-scroll 55s linear infinite;
          will-change: transform;
        }
        .testimonials-wrapper:hover .testimonials-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fade edges */}
      <div
        className="testimonials-wrapper relative overflow-hidden select-none"
        style={{
          maskImage: isDark
            ? "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
            : "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="testimonials-track flex gap-5" style={{ width: "max-content" }}>
          {/* Two identical sets for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex flex-col gap-5 p-7 relative shrink-0"
              style={{
                width: "340px",
                background: cardBg,
                border: cardBorder,
                boxShadow: isDark ? "none" : "0 2px 20px rgba(197,75,140,0.05)",
              }}
            >
              {/* Decorative quote mark */}
              <span
                className="font-cormorant text-6xl leading-none absolute top-3 left-5 pointer-events-none"
                style={{ color: "var(--primary)", opacity: bigQuoteOpacity }}
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p
                className="font-cormorant italic text-[18px] leading-relaxed mt-5"
                style={{ color: quoteColor, minHeight: "80px" }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div
                className="flex items-center gap-3 pt-4 border-t mt-auto"
                style={{ borderColor: dividerColor }}
              >
                <div
                  className="w-8 h-8 shrink-0 flex items-center justify-center font-cinzel text-xs text-white"
                  style={{ background: "var(--primary)" }}
                >
                  {t.name[0]}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-cinzel text-[10px] tracking-widest uppercase"
                    style={{ color: nameColor }}
                  >
                    {t.name}
                  </span>
                  {t.role && (
                    <span className="font-sans text-[11px]" style={{ color: roleColor }}>
                      {t.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
