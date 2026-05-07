interface OrnamentalDividerProps {
  /** "light" uses gold on dark backgrounds; "dark" uses primary on light backgrounds */
  theme?: "light" | "dark"
  className?: string
}

/**
 * Brand divider — a centred gold/primary ✦ ornament with flanking lines.
 * Used between sections and as a visual accent throughout the site.
 */
export default function OrnamentalDivider({ theme = "light", className = "" }: OrnamentalDividerProps) {
  const color = theme === "light" ? "var(--gold)" : "var(--primary)"

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 opacity-40" style={{ background: color }} />
      <span className="text-sm" style={{ color }}>✦</span>
      <div className="h-px w-16 opacity-40" style={{ background: color }} />
    </div>
  )
}
