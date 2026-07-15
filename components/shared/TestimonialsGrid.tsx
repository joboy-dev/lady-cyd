import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { testimonials } from "@/lib/data/testimonials";

interface TestimonialsGridProps {
  theme?: "light" | "dark";
}

export default function TestimonialsGrid({ theme = "dark" }: TestimonialsGridProps) {
  const isDark = theme === "dark";

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <AnimateOnScroll key={t.name} animation="scale" delay={i * 120}>
          <div
            className="flex flex-col gap-5 p-8 relative h-full"
            style={
              isDark
                ? {
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }
                : {
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    boxShadow: "0 2px 20px rgba(197,75,140,0.06)",
                  }
            }
          >
            <span
              className="font-cormorant text-6xl leading-none absolute top-4 left-6"
              style={{ color: "var(--primary)", opacity: isDark ? 0.2 : 0.15 }}
            >
              &ldquo;
            </span>
            <p
              className="font-cormorant italic text-xl leading-relaxed mt-6"
              style={{ color: isDark ? "rgba(255,255,255,0.8)" : "var(--foreground)" }}
            >
              {t.quote}
            </p>
            <div
              className="flex items-center gap-3 pt-4 border-t"
              style={{
                borderColor: isDark ? "rgba(255,255,255,0.07)" : "var(--border)",
              }}
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
                  style={{
                    color: isDark ? "var(--gold)" : "var(--muted-foreground)",
                    opacity: isDark ? 0.7 : 1,
                  }}
                >
                  {t.name}
                </span>
                {t.role && (
                  <span
                    className="font-sans text-xs"
                    style={{
                      color: isDark ? "rgba(255,255,255,0.35)" : "var(--muted-foreground)",
                    }}
                  >
                    {t.role}
                  </span>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
