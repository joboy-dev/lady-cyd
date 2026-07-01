'use client';

import { useState } from 'react';
import { questions, type WoundType } from '@/lib/assessment/questions';
import { computeResult } from '@/lib/assessment/scoring';
import { sendAssessmentResults } from '@/app/actions/assessment';
import QuizQuestion from './QuizQuestion';
import WoundPointResult from './WoundPointResult';
import OrnamentalDivider from '@/components/shared/OrnamentalDivider';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

type Stage = 'email_capture' | 'quiz' | 'scoring' | 'results';

export default function WoundPointQuiz() {
  const [stage, setStage] = useState<Stage>('email_capture');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<WoundType[]>(new Array(questions.length).fill(null));
  const [result, setResult] = useState<ReturnType<typeof computeResult> | null>(null);
  const [submitting, setSubmitting] = useState(false);

  /* ── Email capture ── */
  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStage('quiz');
  }

  /* ── Quiz navigation ── */
  function handleSelect(wound: WoundType) {
    const next = [...answers];
    next[currentQ] = wound;
    setAnswers(next);
  }

  function handlePrev() {
    setCurrentQ((prev) => Math.max(0, prev - 1));
  }

  async function handleNext() {
    if (!answers[currentQ]) {
      toast.error('Please select an answer before continuing.');
      return;
    }

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      return;
    }

    // Last question — score and send email
    setSubmitting(true);
    setStage('scoring');

    const scored = computeResult(answers);
    setResult(scored);

    const emailResult = await sendAssessmentResults({
      name,
      email,
      primary: scored.primary,
      scores: scored.scores,
      multipleActive: scored.multipleActive,
    });

    setSubmitting(false);

    if (!emailResult.success) {
      toast.error('Your results are shown below but we could not send the email. Please note your wound point.');
    }

    setStage('results');
  }

  /* ── Renders ── */

  if (stage === 'email_capture') {
    return (
      <div className="flex flex-col gap-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-3 text-center">
          <span
            className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
            style={{ color: 'var(--gold)', opacity: 0.65 }}
          >
            Option 01 · The Adaptive Quiz
          </span>
          <h2
            className="font-cormorant font-light leading-snug"
            style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Enter your details to begin.
          </h2>
          <p
            className="font-sans text-[15px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Your personalised results will be emailed to you as soon as you complete the assessment.
          </p>
        </div>

        <OrnamentalDivider theme="light" />

        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              className="font-cinzel text-[10px] tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Adaeze Okafor"
              required
              autoComplete="name"
              className="w-full font-sans text-sm px-4 py-3 bg-transparent border text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="font-cinzel text-[10px] tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="w-full font-sans text-sm px-4 py-3 bg-transparent border text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3.5 mt-2 transition-all duration-200"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            Find My Wound Point
            <ArrowRight size={13} />
          </button>

          <p
            className="font-sans text-xs text-center"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            ≈ 12 minutes · Results emailed to your inbox · Always confidential
          </p>
        </form>
      </div>
    );
  }

  if (stage === 'scoring') {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <Loader2 size={32} className="animate-spin" style={{ color: 'var(--primary)' }} />
        <p
          className="font-cormorant italic text-xl"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          Identifying your wound point…
        </p>
      </div>
    );
  }

  if (stage === 'results' && result) {
    return <WoundPointResult result={result} name={name} />;
  }

  // stage === 'quiz'
  const question = questions[currentQ];
  const answered = answers[currentQ];
  const isFirst = currentQ === 0;
  const isLast = currentQ === questions.length - 1;

  return (
    <div className="flex flex-col gap-10">
      <QuizQuestion
        question={question}
        selectedWound={answered ?? null}
        onSelect={handleSelect}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          disabled={isFirst}
          className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-4 py-2.5 border transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
        >
          <ArrowLeft size={13} />
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!answered || submitting}
          className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: answered ? 'var(--primary)' : 'rgba(197,75,140,0.3)', color: 'white' }}
        >
          {submitting ? (
            <><Loader2 size={13} className="animate-spin" /> Scoring…</>
          ) : isLast ? (
            <>See My Results <ArrowRight size={13} /></>
          ) : (
            <>Next <ArrowRight size={13} /></>
          )}
        </button>
      </div>
    </div>
  );
}
