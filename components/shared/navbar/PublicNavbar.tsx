'use client'

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SELAR_URL } from '@/lib/constants/site';
import ThemeToggle from '../ThemeToggle';

type NavItem =
  | { label: string; to: string; children?: never }
  | { label: string; to?: never; children: { label: string; to: string; desc?: string }[] };

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Explore',
    children: [
      { label: 'The WHOLE Pathway™', to: '/transformation-pathway', desc: 'Five stages from recognition to WHOLE' },
      { label: 'WHOLE Life Design™', to: '/whole-life-design', desc: 'The foundational learning ecosystem' },
      { label: 'Healing Harbour Live', to: '/inner-circle', desc: 'Free monthly masterclass · Every 4th Friday' },
    ],
  },
  { label: 'Work With Me', to: '/work-with-me' },
  {
    label: 'Content',
    children: [
      { label: 'The Journal', to: '/blog', desc: 'Writings on identity, healing & faith' },
      { label: 'Podcast', to: '/podcast', desc: 'META-FORMATION HQ with Lady Cyd' },
    ],
  },
];

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActiveGroup = (children: { to: string }[]) =>
    children.some((c) => location === c.to);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-hero-bg/95 backdrop-blur-md shadow-lg shadow-primary/5 border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="nav-padding flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) =>
            item.children ? (
              /* ── Dropdown ── */
              <div key={item.label} className="relative group">
                <button
                  className={clsx(
                    'flex items-center gap-1 font-cinzel text-[11px] xl:text-xs tracking-[0.15em] xl:tracking-widest uppercase transition-colors duration-200 cursor-default select-none',
                    isActiveGroup(item.children) ? 'text-gold' : 'text-white/80 group-hover:text-gold'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={11}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/*
                  Outer wrapper — positioned from top-full with no gap (pt-3 gives visual
                  spacing while keeping the hover area continuous with the trigger button).
                  This prevents the dropdown from closing mid-travel.
                */}
                <div
                  className={clsx(
                    'absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[220px]',
                    'opacity-0 invisible translate-y-1',
                    'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0',
                    'transition-all duration-200 ease-out',
                    'pointer-events-none group-hover:pointer-events-auto',
                  )}
                >
                  {/* Visual panel */}
                  <div className="py-2 bg-hero-bg/98 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 relative">
                    {/* Arrow notch */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-hero-bg/98 border-l border-t border-white/10" />

                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        href={child.to}
                        className={clsx(
                          'flex flex-col gap-0.5 px-5 py-3 transition-colors duration-150 border-l-2',
                          location === child.to
                            ? 'bg-white/5 border-primary'
                            : 'border-transparent hover:bg-white/5 hover:border-primary/50'
                        )}
                      >
                        <span
                          className={clsx(
                            'font-cinzel text-[10px] tracking-widest uppercase',
                            location === child.to ? 'text-gold' : 'text-white/80'
                          )}
                        >
                          {child.label}
                        </span>
                        {child.desc && (
                          <span className="font-sans text-[11px] text-white/40 leading-snug">
                            {child.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── Direct link ── */
              <Link
                key={item.to}
                href={item.to!}
                className={clsx(
                  'font-cinzel text-[11px] xl:text-xs tracking-[0.15em] xl:tracking-widest uppercase transition-colors duration-200',
                  location === item.to ? 'text-gold' : 'text-white/80 hover:text-gold'
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={SELAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel text-[11px] xl:text-xs tracking-[0.15em] xl:tracking-widest uppercase transition-colors duration-200 text-white/80 hover:text-gold"
          >
            Courses ↗
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/inner-circle"
            className="font-cinzel text-[11px] xl:text-xs tracking-[0.15em] xl:tracking-widest uppercase px-4 xl:px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-foreground transition-all duration-200"
          >
            Take The Assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-hero-bg/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="flex flex-col">
                <button
                  onClick={() =>
                    setMobileExpanded((prev) => (prev === item.label ? null : item.label))
                  }
                  className={clsx(
                    'flex items-center justify-between py-3 font-cinzel text-sm tracking-widest uppercase transition-colors duration-200',
                    isActiveGroup(item.children) ? 'text-gold' : 'text-white/80'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={clsx(
                      'transition-transform duration-200',
                      mobileExpanded === item.label ? 'rotate-180' : ''
                    )}
                  />
                </button>

                {mobileExpanded === item.label && (
                  <div className="flex flex-col gap-0 pl-4 border-l border-white/10 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        href={child.to}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExpanded(null);
                        }}
                        className={clsx(
                          'py-2.5 font-cinzel text-xs tracking-widest uppercase transition-colors duration-200',
                          location === child.to ? 'text-gold' : 'text-white/60 hover:text-gold'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                href={item.to!}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'py-3 font-cinzel text-sm tracking-widest uppercase transition-colors duration-200',
                  location === item.to ? 'text-gold' : 'text-white/80 hover:text-gold'
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={SELAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="py-3 font-cinzel text-sm tracking-widest uppercase transition-colors duration-200 text-white/80 hover:text-gold"
          >
            Courses ↗
          </a>
          <div className="mt-3 pt-4 border-t border-white/10">
            <Link
              href="/inner-circle"
              onClick={() => setMobileOpen(false)}
              className="block font-cinzel text-sm tracking-widest uppercase px-6 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-foreground transition-all duration-200"
            >
              Take The Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
