'use client';

import { useState } from 'react';
import { requestSoulAuditPDF } from '@/app/actions/assessment';
import WoundPointQuiz from './WoundPointQuiz';
import OrnamentalDivider from '@/components/shared/OrnamentalDivider';
import { ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

type View = 'choose' | 'quiz' | 'pdf_capture' | 'pdf_done';

export default function WoundPointLanding() {
  const [view, setView] = useState<View>('choose');
  const [pdfName, setPdfName] = useState('');
  const [pdfEmail, setPdfEmail] = useState('');
  const [pdfLoading, setPdfLoading] = useState(false);

  async function handlePdfSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pdfName.trim() || !pdfEmail.trim()) return;
    setPdfLoading(true);
    const result = await requestSoulAuditPDF({ name: pdfName, email: pdfEmail });
    setPdfLoading(false);
    if (result.success) {
      setView('pdf_done');
    } else {
      toast.error(result.error ?? 'Something went wrong. Please try again.');
    }
  }

  if (view === 'quiz') {
    return (
      <div className="max-w-3xl mx-auto">
        <WoundPointQuiz />
      </div>
    );
  }

  if (view === 'pdf_done') {
    return (
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 py-12 text-center">
        <span className="font-cinzel text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          ✦ On Its Way
        </span>
        <p className="font-cormorant italic text-2xl sm:text-3xl" style={{ color: 'white' }}>
          The Soul Audit PDF is in your inbox.
        </p>
        <p className="font-sans text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Set aside 45 to 60 minutes of uninterrupted, honest private work.
          The interactive quiz link is also included inside the PDF.
        </p>
        <button
          onClick={() => setView('quiz')}
          className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-5 py-2.5 border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
        >
          Take the quiz instead
          <ArrowRight size={13} />
        </button>
      </div>
    );
  }

  if (view === 'pdf_capture') {
    return (
      <div className="max-w-lg mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center">
          <span
            className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
            style={{ color: 'var(--gold)', opacity: 0.65 }}
          >
            Option 02 · The Soul Audit PDF
          </span>
          <h2
            className="font-cormorant font-light leading-snug"
            style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Enter your details to receive the PDF.
          </h2>
          <p className="font-sans text-[15px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            The Soul Audit PDF will be delivered to your inbox immediately.
          </p>
        </div>

        <OrnamentalDivider theme="light" />

        <form onSubmit={handlePdfSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-cinzel text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Full Name
            </label>
            <input
              type="text"
              value={pdfName}
              onChange={(e) => setPdfName(e.target.value)}
              placeholder="e.g. Adaeze Okafor"
              required
              className="w-full font-sans text-sm px-4 py-3 bg-transparent border text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cinzel text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Email Address
            </label>
            <input
              type="email"
              value={pdfEmail}
              onChange={(e) => setPdfEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full font-sans text-sm px-4 py-3 bg-transparent border text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            />
          </div>
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => setView('choose')}
              className="font-cinzel text-xs tracking-widest uppercase px-4 py-3 border text-white/40 hover:text-white/70 transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={pdfLoading}
              className="flex-1 inline-flex items-center justify-center gap-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200 disabled:opacity-50"
              style={{ background: 'var(--primary)', color: 'white' }}
            >
              {pdfLoading ? <><Loader2 size={13} className="animate-spin" /> Sending…</> : <>Send Me The PDF <ArrowRight size={13} /></>}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // view === 'choose'
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto">
      <div className="text-center flex flex-col gap-3">
        <span
          className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
          style={{ color: 'var(--gold)', opacity: 0.65 }}
        >
          Choose your path
        </span>
        <p
          className="font-cormorant font-light italic"
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}
        >
          Two ways to find your wound point. Both lead to the same clarity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Option 01 — Quiz */}
        <div
          className="flex flex-col gap-6 p-8"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col gap-2">
            <span className="font-cinzel text-[10px] tracking-widest uppercase" style={{ color: 'var(--gold)', opacity: 0.6 }}>
              Option 01
            </span>
            <h3 className="font-cormorant text-2xl font-light" style={{ color: 'white' }}>
              The Adaptive Quiz
            </h3>
            <p className="font-sans text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              For the woman who wants instant personalised results.
            </p>
          </div>
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <ul className="flex flex-col gap-2.5">
            {[
              'Adaptive — 14 diagnostic questions',
              'Identifies your primary wound point',
              'Instant personalised on-page results',
              '≈ 12 minutes',
              'Results also delivered to your inbox',
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span style={{ color: 'var(--gold)', fontSize: '10px', marginTop: 4 }}>✦</span>
                <span className="font-sans text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setView('quiz')}
            className="mt-auto inline-flex items-center justify-center gap-2 font-cinzel text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            Take The Quiz
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Option 02 — PDF */}
        <div
          className="flex flex-col gap-6 p-8"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.15)' }}
        >
          <div className="flex flex-col gap-2">
            <span className="font-cinzel text-[10px] tracking-widest uppercase" style={{ color: 'var(--gold)', opacity: 0.6 }}>
              Option 02
            </span>
            <h3 className="font-cormorant text-2xl font-light" style={{ color: 'white' }}>
              The Soul Audit PDF
            </h3>
            <p className="font-sans text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              For the woman who wants to go deep at her own pace.
            </p>
          </div>
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <ul className="flex flex-col gap-2.5">
            {[
              'All ten wound points with scoring',
              'Reflection prompts for private work',
              'Score summary with interpretation guide',
              '45–60 minutes of honest private work',
              'Interactive quiz link also included',
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span style={{ color: 'var(--gold)', fontSize: '10px', marginTop: 4 }}>✦</span>
                <span className="font-sans text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setView('pdf_capture')}
            className="mt-auto inline-flex items-center justify-center gap-2 font-cinzel text-xs tracking-widest uppercase px-5 py-3 border transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold)' }}
          >
            Receive The PDF
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
