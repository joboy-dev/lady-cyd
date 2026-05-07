'use client'

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Transformation', to: '/transformation-pathway' },
  { label: 'Blog', to: '/blog' },
];

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={clsx(
                'font-cinzel text-sm tracking-widest uppercase transition-colors duration-200',
                location === item.to
                  ? 'text-gold'
                  : 'text-white/80 hover:text-gold'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/inner-circle"
            className="font-cinzel text-sm tracking-widest uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-foreground transition-all duration-200 rounded-none"
          >
            Join Inner Circle
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-hero-bg/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              onClick={() => setMobileOpen(false)}
              className={clsx(
                'font-cinzel text-sm tracking-widest uppercase transition-colors duration-200',
                location === item.to ? 'text-gold' : 'text-white/80 hover:text-gold'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/inner-circle"
            onClick={() => setMobileOpen(false)}
            className="font-cinzel text-sm tracking-widest uppercase px-6 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-foreground transition-all duration-200"
          >
            Join Inner Circle
          </Link>
        </div>
      )}
    </header>
  );
}
