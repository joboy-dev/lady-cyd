'use client';

import type { AssessmentResult } from '@/lib/assessment/scoring';
import { woundResults, woundLabels } from '@/lib/assessment/results';
import OrnamentalDivider from '@/components/shared/OrnamentalDivider';
import LinkButton from '@/components/shared/button/LinkButton';
import { ArrowRight } from 'lucide-react';

interface Props {
  result: AssessmentResult;
  name: string;
}

export default function WoundPointResult({ result, name }: Props) {
  const { primary, scores, multipleActive, rankedWounds } = result;
  const content = woundResults[primary];
  const firstName = name.split(' ')[0];

  const activeWounds = rankedWounds.filter((r) => r.score > 0);

  return (
    <div className="flex flex-col gap-12">
      {/* Wound reveal */}
      <div className="flex flex-col items-center text-center gap-6">
        <span
          className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
          style={{ color: 'var(--gold)', opacity: 0.7 }}
        >
          {firstName}, your primary wound point is
        </span>

        <p
          className="font-great-vibes leading-none"
          style={{ color: 'var(--primary)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          {content.name}
        </p>

        <OrnamentalDivider theme="light" className="w-full max-w-xs" />

        <p
          className="font-cormorant italic"
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          {content.tagline}
        </p>
      </div>

      {/* Description */}
      <div
        className="border-l-2 pl-6 py-2"
        style={{ borderColor: 'var(--primary)' }}
      >
        <p
          className="font-sans leading-[1.9]"
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px' }}
        >
          {content.description}
        </p>
      </div>

      {/* Score breakdown */}
      {activeWounds.length > 1 && (
        <div className="flex flex-col gap-4">
          <p
            className="font-cinzel text-[10px] tracking-widest uppercase"
            style={{ color: 'var(--gold)', opacity: 0.6 }}
          >
            Your wound point scores
          </p>
          <div className="flex flex-col gap-2">
            {activeWounds.map(({ wound, score }, i) => {
              const maxScore = 14 * 2;
              const pct = (score / maxScore) * 100;
              return (
                <div key={wound} className="flex items-center gap-4">
                  <span
                    className="font-cinzel text-[10px] tracking-wider uppercase w-32 shrink-0"
                    style={{ color: wound === primary ? 'var(--primary)' : 'rgba(255,255,255,0.4)' }}
                  >
                    {woundLabels[wound]}
                  </span>
                  <div
                    className="flex-1 h-1 relative"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="absolute inset-y-0 left-0 transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        background: wound === primary ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                        transitionDelay: `${i * 80}ms`,
                      }}
                    />
                  </div>
                  <span
                    className="font-cinzel text-[10px] w-8 text-right shrink-0"
                    style={{ color: wound === primary ? 'var(--gold)' : 'rgba(255,255,255,0.3)' }}
                  >
                    {score}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recommended next step */}
      <div className="flex flex-col gap-5">
        <p
          className="font-cinzel text-[10px] tracking-widest uppercase"
          style={{ color: 'var(--gold)', opacity: 0.7 }}
        >
          Your recommended next step
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <LinkButton to={content.primaryCta.href} variant="primary" size="lg" className="gap-3">
            {content.primaryCta.label}
            <ArrowRight size={15} />
          </LinkButton>
          <LinkButton to={content.secondaryCta.href} variant="outlineLight" size="lg">
            {content.secondaryCta.label}
          </LinkButton>
        </div>

        {multipleActive && (
          <div
            className="border-l-2 pl-5 py-1"
            style={{ borderColor: 'var(--gold)' }}
          >
            <p
              className="font-sans text-[15px] leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Your results show significant activity across multiple wound points. The most
              direct path to comprehensive restoration is a private Clarity Call with Lady Cyd.
            </p>
            <LinkButton to="/work-with-me" variant="outlineGold" size="sm" className="gap-2 mt-3">
              Apply For a Clarity Call
              <ArrowRight size={13} />
            </LinkButton>
          </div>
        )}
      </div>

      {/* Closing */}
      <div
        className="text-center flex flex-col gap-4 pt-6 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <p
          className="font-cormorant italic text-xl sm:text-2xl"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          You have named the wound. Now the work of restoration begins.
        </p>
        <p
          className="font-cinzel text-xs tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          © The 10 Wound Points™ · Grit &amp; Graceful Coaching Company · A Lady Cyd Alex-Emenike Proprietary Framework
        </p>
      </div>
    </div>
  );
}
