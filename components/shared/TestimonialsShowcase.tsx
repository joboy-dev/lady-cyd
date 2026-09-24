import { testimonials } from "@/lib/data/testimonials";

interface TestimonialsShowcaseProps {
  ids: string[];
  theme?: "light" | "dark";
}

export default function TestimonialsShowcase({ ids, theme = "dark" }: TestimonialsShowcaseProps) {
  const isDark = theme === "dark";

  const items = ids
    .map((id) => testimonials.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "var(--card)";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid var(--border)";
  const quoteColor = isDark ? "rgba(255,255,255,0.85)" : "var(--foreground)";
  const dividerColor = isDark ? "rgba(255,255,255,0.07)" : "var(--border)";
  const nameColor = isDark ? "white" : "var(--foreground)";
  const roleColor = isDark ? "rgba(255,255,255,0.4)" : "var(--muted-foreground)";
  const labelColor = isDark ? "var(--gold)" : "var(--primary)";

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((t) => (
        <div
          key={t.id}
          className="flex flex-col gap-4 p-7"
          style={{ background: cardBg, border: cardBorder }}
        >
          <span
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase"
            style={{ color: labelColor, opacity: 0.8 }}
          >
            Client Story
          </span>
          <p
            className="font-cormorant italic text-xl leading-relaxed flex-1"
            style={{ color: quoteColor }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <div
            className="flex flex-col gap-0.5 pt-4 border-t"
            style={{ borderColor: dividerColor }}
          >
            <span
              className="font-cinzel text-[11px] tracking-widest uppercase"
              style={{ color: nameColor }}
            >
              {t.name}
            </span>
            {t.role && (
              <span className="font-sans text-[12px]" style={{ color: roleColor }}>
                {t.role}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
