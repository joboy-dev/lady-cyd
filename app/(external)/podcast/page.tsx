import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "META-FORMATION HQ with Lady Cyd | Podcast | Grit & Graceful",
  description:
    "META-FORMATION HQ with Lady Cyd — a podcast exploring Identity, Emotional Wellness, Leadership, Purpose, Faith, Family Systems, Restoration, and Legacy. Returning leaders to God's original design.",
  keywords: [
    "Lady Cyd podcast",
    "META-FORMATION HQ",
    "Christian coaching podcast for women",
    "identity restoration podcast",
    "Grit and Graceful Coaching Company podcast",
    "soul restoration podcast Africa",
  ],
};

const topics = [
  { label: "Identity", desc: "Who you are beneath every role, responsibility, and expectation." },
  { label: "Emotional Wellness", desc: "What it truly means to heal — at the root, not the surface." },
  { label: "Leadership", desc: "How healed women lead differently — in life, family, and vocation." },
  { label: "Purpose", desc: "Building what you were actually created to build." },
  { label: "Faith", desc: "The integration of Kingdom truth and deep psychological transformation." },
  { label: "Family Systems", desc: "The invisible architecture of generational patterns and how to interrupt it." },
  { label: "Restoration", desc: "The structured, courageous work of returning to God's original design." },
  { label: "Legacy", desc: "Designing what remains — what you pass on, what you build, what outlasts you." },
];

const platforms = [
  {
    name: "YouTube",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: "https://www.youtube.com/@LADYCYD",
    label: "Watch on YouTube",
    available: true,
  },
  {
    name: "Spotify",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    href: "#",
    label: "Listen on Spotify",
    available: false,
  },
  {
    name: "Apple Podcasts",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 3.6a6 6 0 0 0-6 6c0 2.32 1.32 4.335 3.266 5.326-.05-.347-.066-.704-.044-1.065.06-1.016.57-1.905 1.344-2.494A3.6 3.6 0 0 1 12 8.4a3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-1.566 2.967c.773.589 1.284 1.478 1.344 2.494.022.361.006.718-.044 1.065A5.993 5.993 0 0 0 18 12a6 6 0 0 0-6-6zm0 2.4a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8A1.8 1.8 0 0 1 10.2 10.2 1.8 1.8 0 0 1 12 8.4z" />
      </svg>
    ),
    href: "#",
    label: "Listen on Apple Podcasts",
    available: false,
  },
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(197,75,140,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-8 mt-32 sm:mt-40 pb-20">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="Podcast · Grit & Graceful Coaching Company" light />
          </div>

          <h1
            className="font-cinzel font-light tracking-[0.12em] uppercase animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(1.4rem, 4vw, 3rem)", animationDelay: "150ms" }}
          >
            META-FORMATION HQ
            <span className="block font-great-vibes font-normal tracking-normal normal-case mt-2" style={{ color: "var(--primary)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              with Lady Cyd
            </span>
          </h1>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <p
            className="font-cormorant italic text-xl sm:text-2xl animate-fade-in-up"
            style={{ color: "var(--gold)", opacity: 0.85, animationDelay: "400ms" }}
          >
            Returning Leaders To God&apos;s Original Design.
          </p>

          <div className="animate-fade-in-up max-w-2xl" style={{ animationDelay: "550ms" }}>
            <p
              className="font-sans text-lg leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              A podcast exploring Identity, Emotional Wellness, Leadership, Purpose, Faith,
              Family Systems, Restoration, and Legacy — through honest conversations,
              neuroscience-informed insight, and transformational teaching.
            </p>
          </div>

          {/* Platform links */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            {platforms.map((p) =>
              p.available ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-cinzel text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.25)", color: "white" }}
                >
                  <span style={{ color: "var(--primary)" }}>{p.icon}</span>
                  {p.label}
                </a>
              ) : (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-3 font-cinzel text-xs tracking-widest uppercase px-5 py-2.5 border cursor-not-allowed"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}
                >
                  <span>{p.icon}</span>
                  {p.label}
                  <span className="text-[9px] tracking-widest" style={{ color: "var(--gold)", opacity: 0.6 }}>
                    SOON
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT THE PODCAST COVERS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col gap-4 text-center">
            <SectionBreadcrumb title="What We Explore" />
            <h2
              className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Honest conversations.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                Transformational teaching.
              </span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed text-[17px]">
              META-FORMATION HQ with Lady Cyd is not a motivational show. It is a formation
              podcast — where each episode is designed to produce something real in the listener.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((t, i) => (
              <AnimateOnScroll key={t.label} animation="up" delay={i * 60}>
                <div
                  className="flex flex-col gap-3 p-6 border-l-2 bg-secondary h-full"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <p className="font-cinzel text-xs tracking-wider uppercase" style={{ color: "var(--primary)" }}>
                    {t.label}
                  </p>
                  <p className="font-sans text-[15px] leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT THE HOST
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(197,75,140,0.08) 0%, transparent 60%)",
          }}
        />
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto flex flex-col gap-8 relative z-10">
          <div className="flex flex-col gap-3 text-center">
            <SectionBreadcrumb title="Your Host" light />
            <h2
              className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
              style={{ color: "white" }}
            >
              Lady Cyd Alex-Emenike
            </h2>
            <p
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", opacity: 0.75 }}
            >
              Soul Restoration Coach · Founder, Grit &amp; Graceful Coaching Company
            </p>
          </div>

          <OrnamentalDivider theme="light" />

          <p
            className="font-sans text-[17px] leading-relaxed text-center"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Cyd Alex-Emenike (fondly called Lady Cyd) is a Soul Restoration Coach, author, and
            speaker. She is the Founder of Grit &amp; Graceful Coaching Company and the architect
            of The WHOLE Pathway™ — a structured, transformational pathway for high-capacity women
            returning to God&apos;s original design. META-FORMATION HQ is an extension of her
            coaching work into the public space — formation content, accessible to every woman
            who encounters it.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — LISTEN + ENTER ECOSYSTEM
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,75,140,0.13) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll
          animation="up"
          className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center relative z-10"
        >
          <p
            className="font-great-vibes text-4xl sm:text-5xl"
            style={{ color: "var(--primary)" }}
          >
            Ready to go deeper?
          </p>
          <OrnamentalDivider theme="light" />
          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            The podcast is where it begins.{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              WHOLE Life Design™ is where it deepens.
            </span>
          </h2>
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            META-FORMATION HQ is the RECOGNIZE stage — where women first encounter the work.
            When you are ready to go from recognition to formation, the next step is
            The Wound Point Assessment and WHOLE Life Design™.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/whole-life-design" variant="primary" size="lg" className="gap-3">
              Enter WHOLE Life Design™
              <ArrowRight size={16} />
            </LinkButton>
            <a
              href="https://www.youtube.com/@LADYCYD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 border border-white/30 text-white/70 hover:border-white/60 hover:text-white transition-all duration-200"
            >
              Watch on YouTube
            </a>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
