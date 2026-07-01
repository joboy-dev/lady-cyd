'use client';

import type { QuizQuestion, WoundType } from '@/lib/assessment/questions';
import { questions } from '@/lib/assessment/questions';
import clsx from 'clsx';

interface Props {
  question: QuizQuestion;
  selectedWound: WoundType | null;
  onSelect: (wound: WoundType) => void;
}

export default function QuizQuestion({ question, selectedWound, onSelect }: Props) {
  const progress = ((question.number - 1) / questions.length) * 100;

  return (
    <div className="flex flex-col gap-8">
      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span
            className="font-cinzel text-[10px] tracking-widest uppercase"
            style={{ color: 'var(--gold)', opacity: 0.6 }}
          >
            Question {question.number} of {questions.length}
          </span>
          <span
            className="font-cinzel text-[10px] tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {Math.round((question.number / questions.length) * 100)}% complete
          </span>
        </div>
        <div
          className="h-px w-full"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="h-px transition-all duration-500"
            style={{ width: `${progress}%`, background: 'var(--primary)' }}
          />
        </div>
      </div>

      {/* Question stem */}
      <h2
        className="font-cormorant font-light leading-snug"
        style={{ color: 'white', fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)' }}
      >
        {question.stem}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = selectedWound === option.wound;
          return (
            <button
              key={option.letter}
              onClick={() => onSelect(option.wound)}
              className={clsx(
                'flex gap-4 items-start text-left p-5 border-l-2 transition-all duration-200 w-full',
                isSelected
                  ? 'border-primary bg-primary/10'
                  : 'border-transparent hover:border-primary/40 hover:bg-white/5'
              )}
              style={{
                background: isSelected ? 'rgba(197,75,140,0.1)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isSelected ? 'rgba(197,75,140,0.3)' : 'rgba(255,255,255,0.06)'}`,
                borderLeft: `2px solid ${isSelected ? 'var(--primary)' : 'transparent'}`,
              }}
            >
              {/* Letter badge */}
              <span
                className="font-cinzel text-xs tracking-widest shrink-0 mt-0.5 w-5 text-center"
                style={{ color: isSelected ? 'var(--primary)' : 'var(--gold)', opacity: isSelected ? 1 : 0.5 }}
              >
                {option.letter}
              </span>
              {/* Text */}
              <span
                className="font-sans text-[15px] leading-relaxed"
                style={{ color: isSelected ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)' }}
              >
                {option.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
