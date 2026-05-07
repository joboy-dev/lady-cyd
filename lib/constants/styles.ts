export const variantStyles = {
  // ── Brand CTAs (Cinzel, sharp, uppercase) ────────────────────────
  primary:         "bg-primary text-white hover:bg-primary/85 cursor-pointer font-cinzel tracking-widest uppercase",
  outline:         "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white focus:ring-0 cursor-pointer font-cinzel tracking-widest uppercase",
  outlineGold:     "bg-transparent text-gold border border-gold hover:bg-gold hover:text-foreground focus:ring-0 cursor-pointer font-cinzel tracking-widest uppercase",
  outlineLight:    "bg-transparent text-white border border-white/60 hover:bg-white/10 focus:ring-0 cursor-pointer font-cinzel tracking-widest uppercase",
  accent:          "bg-gold text-foreground hover:bg-gold/85 cursor-pointer font-cinzel tracking-widest uppercase",

  // ── Functional / UI buttons (DM Sans, normal case) ───────────────
  secondary:       "bg-secondary text-foreground hover:bg-secondary/70 cursor-pointer",
  ghost:           "bg-transparent text-foreground border border-transparent focus:ring-0 cursor-pointer hover:bg-secondary/60",
  outlineSecondary:"bg-transparent text-foreground border border-border hover:bg-secondary hover:text-foreground focus:ring-0 cursor-pointer",
  outlineAccent:   "bg-transparent text-foreground border border-gold/60 hover:bg-gold hover:text-foreground focus:ring-0 cursor-pointer",

  // ── Destructive ───────────────────────────────────────────────────
  danger:          "bg-destructive text-white hover:bg-destructive/80 cursor-pointer font-cinzel tracking-widest uppercase",
  dangerOutline:   "bg-transparent text-destructive border border-destructive hover:bg-destructive hover:text-white focus:ring-0 cursor-pointer",
}