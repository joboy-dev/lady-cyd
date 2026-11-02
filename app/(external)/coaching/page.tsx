import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import GatheringWaitlist from "@/components/shared/GatheringWaitlist";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import TestimonialsShowcase from "@/components/shared/TestimonialsShowcase";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import { coachingTiers } from "@/lib/data/coaching-tiers";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "One-on-One Coaching with Lady Cyd | Break the Pattern. Build the System.",
  description:
    "Private and group coaching with Lady Cyd for high-capacity, faith-driven women — at the intersection of Scripture, trauma-informed transformation, family systems and practical coaching.",
  keywords: [
    "one-on-one coaching Lady Cyd",
    "trauma-informed coach Nigeria",
    "Christian life coach for women",
    "personal governance coaching",
    "family systems coach Africa",
  ],
};

/* ─── Data ───────────────────────────────────────────────────────── */

const letter = [
  "There comes a point where more information is not what you need.",
  "You need someone who can sit with you in the deeper places, help you identify the patterns beneath your patterns, confront what has been governing you, strengthen your internal world and build practical structures for the woman you are becoming.",
  "This is the work I do.",
  "I work with high-capacity, faith-driven women who are ready to move beyond merely functioning and begin living from greater identity, emotional stability, personal governance and intentionality.",
  "Together, we work at the intersection of Scripture, trauma-informed transformation, family systems and practical coaching.",
  "Because I believe your healing should not end with you feeling better.",
  "It should change how you live, lead, love, build and reproduce.",
  "My goal is not to make you dependent on coaching, but to help you become increasingly capable of governing yourself, building healthy systems and making aligned decisions without abandoning yourself or your faith and values.",
];

const forYouIf = [
  {
    title: "You are highly capable but internally exhausted.",
    desc: "You carry responsibility well, but you know there are parts of your internal world that need attention.",
  },
  {
    title: "You keep encountering patterns you thought you had broken.",
    desc: "You understand what happened to you, but you want to understand why certain patterns continue to show up in your relationships, decisions or leadership.",
  },
  {
    title: "You are determined not to reproduce what wounded you.",
    desc: "You want your children, marriage, relationships and future generations to inherit something healthier than what you received.",
  },
  {
    title: "You want to understand yourself deeply.",
    desc: "You are ready to examine your identity, emotional patterns, triggers, beliefs, boundaries and relational systems with honesty.",
  },
  {
    title: "You are entering a new season.",
    desc: "Leadership, marriage, motherhood, career, ministry, market place, business or personal transition is requiring a stronger version of you.",
  },
  {
    title: "You want your faith to become embodied.",
    desc: "You don't want Scripture to remain something you know. You want it to govern how you think, respond, relate, decide and build.",
  },
  {
    title: "You are ready to do the work.",
    desc: "This requires honesty, reflection, responsibility, practice and implementation.",
  },
];

const mainDeal = [
  {
    label: "Clarity",
    desc: "We uncover what is actually happening beneath the presenting problem so you can stop treating symptoms and begin addressing root patterns.",
  },
  {
    label: "Governance",
    desc: "You learn to lead yourself before attempting to lead everything around you, your emotions, decisions, habits, boundaries and responses.",
  },
  {
    label: "Regulation",
    desc: "We develop greater awareness of your internal responses so you can move from automatic reactions toward intentional responses.",
  },
  {
    label: "Reconstruction",
    desc: "We don't stop at identifying dysfunctional patterns. We begin building healthier ways of relating, communicating, parenting, leading and living.",
  },
  {
    label: "Execution",
    desc: "Insight must eventually become action. We translate what you discover into decisions, practices, boundaries and systems that can actually hold your transformation.",
  },
];

const noteBeforeApply = [
  "Private coaching is a collaborative process.",
  "I do not promise to fix you, rescue you or make decisions for you.",
  "I will help you see more clearly, ask better questions, confront patterns honestly, develop practical strategies and take responsibility for the life you are building.",
  "You bring the willingness.",
  "I bring the framework, questions, perspective, tools and accountability.",
  "Together, we do the work.",
];

const storyIds = [
  "nicola",
  "ruth",
  "awele-frameworks",
  "ijeoma",
  "lilian",
  "awele-godbless",
  "lena",
  "maria",
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(197,75,140,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-6 mt-32 sm:mt-44 pb-16">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="One-on-One Coaching" light />
          </div>

          <h1
            className="font-cormorant font-light leading-[1.05] animate-fade-in-up"
            style={{
              color: "white",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              animationDelay: "150ms",
            }}
          >
            One-on-One Coaching{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              with Lady Cyd
            </span>
          </h1>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <p
            className="font-great-vibes leading-tight animate-fade-in-up"
            style={{
              color: "var(--primary)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              animationDelay: "450ms",
            }}
          >
            Break the Pattern. Build the System.
          </p>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#tiers"
              className="inline-flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase px-8 py-3 transition-all duration-200"
              style={{ background: "var(--primary)", color: "white", border: "1px solid var(--primary)" }}
            >
              View Coaching Tiers <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          OPENING LETTER
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col gap-6">
          <p className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "var(--primary)" }}>
            My Grits &amp; Graceful Greatness,
          </p>
          {letter.map((line) => (
            <p
              key={line}
              className="font-sans text-[17px] leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {line}
            </p>
          ))}
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          THIS COACHING IS FOR YOU IF...
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="Is This For You?" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              This coaching is for you{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                if...
              </span>
            </h2>
            <OrnamentalDivider />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {forYouIf.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="up" delay={(i % 2) * 100}>
                <div
                  className="flex gap-5 p-7 h-full border"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  <span
                    className="font-cormorant font-light leading-none shrink-0"
                    style={{ color: "var(--primary)", opacity: 0.45, fontSize: "2.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <p
                      className="font-cormorant font-semibold text-xl leading-snug"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-sans text-[15px] leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY MY COACHING IS THE MAIN DEAL
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="The Difference" light />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Why my coaching is{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                the main deal.
              </span>
            </h2>
            <OrnamentalDivider theme="light" />
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainDeal.map((item, i) => (
              <AnimateOnScroll key={item.label} animation="up" delay={i * 80}>
                <div
                  className="flex flex-col gap-4 p-8 h-full border"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.5 }} />
                  <p
                    className="font-cinzel text-sm tracking-wider uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-sans text-[16px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COACHING TIERS
      ══════════════════════════════════════════════════ */}
      <section id="tiers" className="section-padding bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="Coaching Tiers" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              One-on-One{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                + Group Coaching Tiers
              </span>
            </h2>
            <OrnamentalDivider />
            <p
              className="font-cinzel text-[11px] tracking-widest uppercase max-w-xl"
              style={{ color: "var(--gold)" }}
            >
              This is a premium, application-only engagement for women ready to invest at a
              private-coaching level.
            </p>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-6">
            {coachingTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.id} animation="up" delay={(i % 2) * 100}>
                <article
                  id={tier.id}
                  className="flex flex-col gap-5 p-8 h-full border scroll-mt-24"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  <header className="flex flex-col gap-2">
                    <p
                      className="font-cinzel text-[11px] tracking-[0.25em] uppercase"
                      style={{ color: "var(--primary)" }}
                    >
                      {tier.subtitle}
                    </p>
                    <h3
                      className="font-cormorant font-light leading-tight"
                      style={{ color: "var(--foreground)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
                    >
                      {tier.name}
                    </h3>
                  </header>

                  <div className="flex flex-col gap-3">
                    {tier.intro.map((line) => (
                      <p
                        key={line}
                        className="font-sans text-[15px] leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {line}
                      </p>
                    ))}
                    {tier.themes && (
                      <div className="flex flex-col gap-1">
                        <p
                          className="font-sans text-[15px] leading-relaxed"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {tier.themes.lead}
                        </p>
                        <p
                          className="font-cormorant italic text-lg"
                          style={{ color: "var(--foreground)" }}
                        >
                          {tier.themes.items}
                        </p>
                      </div>
                    )}
                  </div>

                  {tier.investment && (
                    <p className="flex items-baseline gap-2">
                      <span
                        className="font-cinzel text-[11px] tracking-widest uppercase"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Investment:
                      </span>
                      <span
                        className="font-cinzel text-base font-bold tracking-wide"
                        style={{ color: "var(--primary)" }}
                      >
                        {tier.investment}
                      </span>
                    </p>
                  )}

                  <div className="flex flex-col gap-3">
                    <p
                      className="font-cinzel text-xs tracking-widest uppercase"
                      style={{ color: "var(--foreground)" }}
                    >
                      Includes:
                    </p>
                    <ul className="flex flex-col gap-2">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <Check
                            size={15}
                            className="shrink-0 mt-1"
                            style={{ color: "var(--primary)" }}
                          />
                          <span
                            className="font-sans text-[15px] leading-relaxed"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.bestFor && (
                    <p
                      className="font-sans text-[15px] leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <strong style={{ color: "var(--foreground)" }}>Best for:</strong>{" "}
                      {tier.bestFor}
                    </p>
                  )}
                  {tier.groupNote && (
                    <p
                      className="font-sans text-[15px] leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {tier.groupNote}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    {tier.ctaType === "waitlist" ? (
                      <GatheringWaitlist label={tier.cta} />
                    ) : (
                      <LinkButton
                        to={`/work-with-me?tier=${tier.id}#application`}
                        variant="primary"
                        size="md"
                        className="w-full text-xs gap-2"
                      >
                        {tier.cta}
                        <ArrowRight size={14} />
                      </LinkButton>
                    )}
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHICH EXPERIENCE IS RIGHT FOR YOU?
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="Find Your Fit" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Which experience is{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                right for you?
              </span>
            </h2>
            <OrnamentalDivider />
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {coachingTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.id} animation="up" delay={i * 80}>
                <a
                  href={`#${tier.id}`}
                  className="group flex flex-col gap-2 p-6 border transition-colors duration-200 hover:border-(--primary)"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  <p
                    className="font-cormorant italic text-xl leading-snug"
                    style={{ color: "var(--foreground)" }}
                  >
                    {tier.match.need}
                  </p>
                  <p
                    className="flex items-center gap-2 font-cinzel text-xs tracking-widest uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {tier.match.label}
                  </p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          A NOTE BEFORE YOU APPLY
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(197,75,140,0.10) 0%, transparent 70%)",
          }}
        />
        <AnimateOnScroll
          animation="up"
          className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center relative z-10"
        >
          <SectionBreadcrumb title="A Note Before You Apply" light />
          <OrnamentalDivider theme="light" />
          {noteBeforeApply.map((line) => (
            <p
              key={line}
              className="font-sans text-[17px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {line}
            </p>
          ))}
          <p
            className="font-cormorant italic text-2xl leading-snug"
            style={{ color: "var(--gold)" }}
          >
            You are not merely becoming.
          </p>
          <p
            className="font-cormorant italic text-2xl leading-snug"
            style={{ color: "white" }}
          >
            You are becoming well-governed enough to build.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          NO REFUND POLICY
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-3xl mx-auto">
          <div
            className="flex flex-col gap-3 p-8 border-l-4 border"
            style={{
              borderColor: "var(--border)",
              borderLeftColor: "var(--primary)",
              background: "var(--secondary)",
            }}
          >
            <p
              className="font-cinzel text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--primary)" }}
            >
              No Refund Policy
            </p>
            <p
              className="font-sans text-[16px] leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              We have a no-refund policy with our coaching programs. Please be sure that you are
              ready for the rigour, diligence and time commitment that this will require from you.
              Once you make payment commitments, we will not make part or full refunds in the event
              of your unwillingness to continue with the Coaching Engagement. Thank you for honoring
              our policy.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          MORE SUCCESS STORIES
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="Client Stories" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              More success stories{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                that inspire us.
              </span>
            </h2>
            <OrnamentalDivider />
          </AnimateOnScroll>
          <TestimonialsShowcase ids={storyIds} theme="light" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          NOT READY YET? + SUPPORT + CLOSING
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,75,140,0.14) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-14 text-center relative z-10">
          <AnimateOnScroll animation="up" className="flex flex-col items-center gap-6">
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "white", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Not Ready for One on One{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                Coaching Yet?
              </span>
            </h2>
            <LinkButton to="/whole/assessment" variant="outlineLight" size="md" className="gap-3 text-xs">
              Take The Wound Point Assessment
              <ArrowRight size={14} />
            </LinkButton>
            <p className="font-sans text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Need support? Please write to{" "}
              <a
                href="mailto:Hello@ladycyd.online"
                className="underline underline-offset-4"
                style={{ color: "var(--gold)" }}
              >
                Hello@ladycyd.online
              </a>
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="up" className="flex flex-col items-center gap-6">
            <OrnamentalDivider theme="light" />
            <p
              className="font-cinzel text-sm sm:text-base tracking-[0.25em] uppercase"
              style={{ color: "white" }}
            >
              Break the Pattern. Build the System.
            </p>
            <LinkButton to="/work-with-me#application" variant="primary" size="lg" className="gap-3">
              Apply to Work with Lady Cyd
              <ArrowRight size={16} />
            </LinkButton>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
