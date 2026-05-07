import React, { type ReactNode } from "react";
import Link from "next/link";

type CardProps = {
  icon?: React.ReactNode;
  title?: string;
  backgroundColor?: string;
  description?: string;
  className?: string;
  linkTo?: string;
  children?: ReactNode
};

function Card({
  icon,
  title,
  description,
  backgroundColor = "bg-secondary/30",
  className = "",
  linkTo,
  children
}: CardProps) {
  const inner = (
    <>
      <div className="flex items-start gap-3 mb-3">
        {icon && (
          <div className="text-primary text-2xl flex-shrink-0 mt-0.5">{icon}</div>
        )}
        {title && (
          <h3 className="font-cinzel text-base font-semibold uppercase tracking-wide text-foreground">
            {title}
          </h3>
        )}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </>
  )

  return (
    <div
      className={`${backgroundColor} border border-primary/15 p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-300 ${className}`}
    >
      {linkTo ? <Link href={linkTo}>{inner}</Link> : inner}
    </div>
  )
}

export default Card;
