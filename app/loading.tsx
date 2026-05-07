export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(197,75,140,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Pulsing ornament */}
        <div className="relative flex items-center justify-center">
          {/* Outer ring */}
          <span
            className="absolute block rounded-full animate-ping"
            style={{
              width: "64px",
              height: "64px",
              background: "rgba(197,75,140,0.15)",
              animationDuration: "1.8s",
            }}
          />
          {/* Inner ring */}
          <span
            className="absolute block rounded-full animate-ping"
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(201,168,76,0.12)",
              animationDuration: "1.4s",
              animationDelay: "0.3s",
            }}
          />
          {/* Centre ornament */}
          <span
            className="relative font-great-vibes text-3xl"
            style={{ color: "var(--primary)" }}
          >
            ✦
          </span>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-3 w-40">
          <div
            className="flex-1 h-px"
            style={{ background: "var(--gold)", opacity: 0.3 }}
          />
          <span style={{ color: "var(--gold)", opacity: 0.5 }} className="text-xs">
            ✦
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--gold)", opacity: 0.3 }}
          />
        </div>

        {/* Brand name */}
        <p
          className="font-great-vibes text-3xl"
          style={{ color: "var(--primary)" }}
        >
          Lady Cyd
        </p>

        {/* Loading label */}
        <p
          className="font-cinzel text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--gold)", opacity: 0.55 }}
        >
          Preparing your journey…
        </p>
      </div>
    </div>
  );
}
