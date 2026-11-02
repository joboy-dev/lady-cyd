interface ClarityCallDetailsProps {
  theme?: "light" | "dark";
}

export default function ClarityCallDetails({ theme = "light" }: ClarityCallDetailsProps) {
  const dark = theme === "dark";

  return (
    <div
      className="w-full max-w-xl flex flex-col gap-5 p-6 sm:p-8 text-center border"
      style={{
        borderColor: dark ? "rgba(201,168,76,0.35)" : "rgba(197,75,140,0.2)",
        background: dark ? "rgba(255,255,255,0.03)" : "var(--card)",
      }}
    >
      <h3
        className="font-cormorant font-light leading-tight"
        style={{
          color: dark ? "white" : "var(--foreground)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
        }}
      >
        30-Minute{" "}
        <span className="italic" style={{ color: dark ? "var(--gold)" : "var(--primary)" }}>
          Clarity Call
        </span>
      </h3>

      <dl className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10">
        {[
          { term: "Investment", detail: "Free" },
          { term: "Format", detail: "Virtual" },
        ].map((item) => (
          <div key={item.term} className="flex items-baseline gap-2">
            <dt
              className="font-cinzel text-[11px] tracking-widest uppercase"
              style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)" }}
            >
              {item.term}:
            </dt>
            <dd
              className="font-cinzel text-sm font-bold tracking-wider uppercase"
              style={{ color: dark ? "var(--gold)" : "var(--primary)" }}
            >
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>

      <p
        className="font-sans text-[15px] leading-relaxed italic"
        style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--muted-foreground)" }}
      >
        Please note: The Clarity Call is not a coaching session. It is an introductory
        conversation and fit assessment. If we determine that coaching is appropriate, you will
        be guided toward the most suitable coaching pathway.
      </p>
    </div>
  );
}
