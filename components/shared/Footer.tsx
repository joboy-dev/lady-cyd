import Logo from "./Logo";
import Link from "next/link";
import { LucideInstagram, LucideYoutube, LucideLinkedin } from "lucide-react";
import { SELAR_URL } from "@/lib/constants/site";

const footerNav = [
  {
    heading: "Explore",
    links: [
      { name: "About Lady Cyd", href: "/about", external: false },
      { name: "Transformation Pathway", href: "/transformation-pathway", external: false },
      { name: "Blog & Teachings", href: "/blog", external: false },
    ],
  },
  {
    heading: "Work With Me",
    links: [
      { name: "Healing Harbour Inner Circle", href: "/inner-circle", external: false },
      { name: "Courses & Programmes", href: SELAR_URL, external: true },
      { name: "Clarity Call", href: "/work-with-me", external: false },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy-policy", external: false },
      { name: "Terms & Conditions", href: "/legal/terms", external: false },
      { name: "Refund Policy", href: "/legal/refund-policy", external: false },
      { name: "Intellectual Property", href: "/legal/intellectual-property", external: false },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-dark-section text-dark-section-foreground">
      {/* Top ornamental divider */}
      <div className="flex items-center gap-4 px-6 sm:px-12 lg:px-24 xl:px-32 pt-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <span className="text-gold text-lg">✦</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </div>

      <div className="section-padding flex flex-col gap-10 lg:gap-16">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Brand column */}
          <div className="flex flex-col gap-6 max-w-xs">
            <Logo />
            <p className="text-dark-section-foreground/70 text-sm leading-relaxed font-sans">
              Trauma-Informed Coach · Family Systems Strategist · Generational Restoration Guide.
            </p>
            <a
              href="mailto:Hello@ladycyd.online"
              className="text-gold/80 text-xs font-cinzel tracking-widest uppercase hover:text-gold transition-colors duration-200"
            >
              Hello@ladycyd.online
            </a>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/cydalexemenike"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-dark-section-foreground/50 hover:text-gold transition-colors duration-200"
              >
                <LucideInstagram size={18} />
              </a>
              <a
                href="https://www.threads.net/@cydalexemenike"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="text-dark-section-foreground/50 hover:text-gold transition-colors duration-200 font-bold text-sm"
              >
                @
              </a>
              <a
                href="https://www.youtube.com/@LADYCYD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-dark-section-foreground/50 hover:text-gold transition-colors duration-200"
              >
                <LucideYoutube size={18} />
              </a>
              <a
                href="https://substack.com/@ladycyd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
                className="text-dark-section-foreground/50 hover:text-gold transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.539 8.242H1.46V5.406h21.08zM1.46 10.812V24L12 18.11 22.54 24V10.812zM22.54 0H1.46v2.836h21.08z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ladycyd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-dark-section-foreground/50 hover:text-gold transition-colors duration-200"
              >
                <LucideLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
            {footerNav.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4 min-w-[140px]">
                <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold">
                  {section.heading}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-section-foreground/60 text-sm hover:text-gold transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-dark-section-foreground/60 text-sm hover:text-gold transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-section-foreground/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Cyd Alex-Emenike · Lady Cyd. All rights reserved.
          </p>
          <p className="font-great-vibes text-primary text-lg">
            She who is restored becomes unstoppable.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
