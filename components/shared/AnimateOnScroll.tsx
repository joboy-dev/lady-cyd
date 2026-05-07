'use client'

import clsx from 'clsx';
import { useEffect, useRef, type ReactNode } from 'react';

type AnimationType = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Extra classes forwarded to the wrapper div (layout, spacing, etc.) */
  className?: string;
  /** Which reveal direction to use. Defaults to "up". */
  animation?: AnimationType;
  /** Transition delay in milliseconds — use for staggered siblings. */
  delay?: number;
  /** IntersectionObserver threshold (0–1). Defaults to 0.12. */
  threshold?: number;
}

/**
 * Wraps children in a div that starts hidden and transitions into view
 * (fade + optional transform) once it enters the viewport.
 *
 * Uses the `.reveal` + `.reveal-{animation}` + `.in-view` CSS system
 * defined in globals.css, driven by IntersectionObserver.
 */
export default function AnimateOnScroll({
  children,
  className,
  animation = 'up',
  delay = 0,
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={clsx('reveal', `reveal-${animation}`, className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
