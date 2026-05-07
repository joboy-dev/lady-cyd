import React from 'react'

export default function SectionBreadcrumb({
    title,
    light = false,
    align = "center",
    className = "",
} : {
  title: string
  light?: boolean
  align?: "left" | "center"
  className?: string
}) {
  const color = light ? "var(--gold)" : "var(--primary)"
  const centered = align === "center"

  return (
    <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""} ${className}`}>
      <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color }}>✦</span>
      <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color }}>{title}</span>
      {centered && (
        <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color }}>✦</span>
      )}
    </div>
  )
}
