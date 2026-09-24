import { testimonials } from "@/lib/data/testimonials";

interface TestimonialSpotlightProps {
  id: string;
  theme?: "light" | "dark";
}

export default function TestimonialSpotlight({ id, theme = "dark" }: TestimonialSpotlightProps) {
  const t = testimonials.find((item) => item.id === id);
  if (!t) return null;

  const isDark = theme === "dark";
  const quoteColor = isDark ? "white" : "var(--foreground)";
  const accentColor = isDark ? "var(--gold)" : "var(--primary)";
  const roleColor = isDark ? "rgba(255,255,255,0.45)" : "var(--muted-foreground)";

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center gap-5 text-center">
      <span
        className="font-cinzel text-xs tracking-widest uppercase"
        style={{ color: accentColor, opacity: 0.75 }}
      >
        Client Story
      </span>
      <p
        className="font-cormorant italic leading-relaxed"
        style={{ color: quoteColor, fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex flex-col gap-1">
        <span
          className="font-cinzel text-xs tracking-widest uppercase"
          style={{ color: accentColor }}
        >
          {t.name}
        </span>
        {t.role && (
          <span className="font-sans text-xs" style={{ color: roleColor }}>
            {t.role}
          </span>
        )}
      </div>
    </div>
  );
}
