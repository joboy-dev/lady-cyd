interface SectionHeaderProps {
  /** Small Cinzel uppercase label above the heading */
  label: string
  /** Main display heading (Cormorant Garamond) */
  heading: string
  /** Optional subheading / description below the heading */
  subtitle?: string
  /**
   * "light" — label in gold, heading in white (for dark hero backgrounds)
   * "dark"  — label in primary, heading in foreground (for light section backgrounds)
   */
  theme?: "light" | "dark"
  /** Alignment of text. Defaults to "center". */
  align?: "left" | "center"
  className?: string
}

/**
 * Reusable brand section header — label ornament + Cormorant Garamond heading + optional subtitle.
 * Use on every section that needs the Lady Cyd section intro treatment.
 */
export default function SectionHeader({
  label,
  heading,
  subtitle,
  theme = "light",
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "light"    // we're ON a dark background
  const labelColor = isDark ? "var(--gold)" : "var(--primary)"
  const headingColor = isDark ? "white" : "var(--foreground)"
  const subtitleColor = isDark ? "rgba(255,255,255,0.65)" : "var(--muted-foreground)"
  const textAlign = align === "center" ? "text-center" : "text-left"
  const itemsAlign = align === "center" ? "items-center" : "items-start"

  return (
    <div className={`flex flex-col ${itemsAlign} gap-4 ${textAlign} ${className}`}>
      {/* Label */}
      <div className="flex items-center gap-3">
        <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: labelColor }}>
          ✦
        </span>
        <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: labelColor }}>
          {label}
        </span>
        <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: labelColor }}>
          ✦
        </span>
      </div>

      {/* Heading */}
      <h2
        className="font-cormorant font-light leading-tight"
        style={{ color: headingColor, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {heading}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="max-w-xl leading-relaxed"
          style={{ color: subtitleColor, fontSize: "1rem" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
