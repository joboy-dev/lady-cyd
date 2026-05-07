import Logo from "./Logo";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const footerNav = [
  {
    heading: "Explore",
    links: [
      { name: "About Lady Cyd", href: "/about" },
      { name: "Transformation Pathway", href: "/transformation-pathway" },
      { name: "Blog & Teachings", href: "/blog" },
    ],
  },
  {
    heading: "Work With Me",
    links: [
      { name: "Healing Harbour Inner Circle", href: "/inner-circle" },
      { name: "Coaching Programmes", href: "/inner-circle#programmes" },
      { name: "Clarity Call", href: "/work-with-me" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Intellectual Property", href: "/intellectual-property" },
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

      <div className="section-padding flex flex-col gap-16">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Brand column */}
          <div className="flex flex-col gap-6 max-w-xs">
            <Logo />
            <p className="text-dark-section-foreground/70 text-sm leading-relaxed font-sans">
              Trauma-Informed Coach · Family Systems Strategist · Generational Restoration Guide.
            </p>
            <p className="text-gold/80 text-xs font-cinzel tracking-widest uppercase">
              Hello@ladycyd.online
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/cydalexemenike"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-dark-section-foreground/50 hover:text-gold transition-colors duration-200"
              >
                <Instagram size={18} />
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
                href="#"
                aria-label="YouTube (coming soon)"
                className="text-dark-section-foreground/30 cursor-default"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            {footerNav.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4 min-w-[140px]">
                <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold">
                  {section.heading}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-section-foreground/60 text-sm hover:text-gold transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
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
