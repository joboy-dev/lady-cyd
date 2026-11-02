import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Invite Lady Cyd | Speaking, Teaching, Ministry & Formation",
  description:
    "Invite Lady Cyd to speak, teach or minister at your church, conference or organisation. Scripture, trauma-informed understanding, family systems, personal governance and practical execution.",
  keywords: [
    "invite Lady Cyd",
    "Christian women conference speaker",
    "Christian speaker Nigeria",
    "trauma-informed speaker",
    "women's ministry speaker",
    "generational restoration speaker",
  ],
};

/* ─── Data ───────────────────────────────────────────────────────── */

const heroIntro = [
  "Lady Cyd Chioma Alex-Emenike is a Christian teacher, speaker, trauma-informed Soul restoration coach, transformational coach and generational restoration strategist.",
  "She speaks to the work beneath the visible problem, identity, formation, family patterns, emotional maturity, leadership, spiritual growth and the systems shaping how people live.",
  "Her work sits at the intersection of Scripture, trauma-informed understanding, family systems, personal governance and practical execution.",
  "She teaches to confront what needs to be confronted, illuminate what needs to be understood, and equip people to respond differently.",
];

const heroLines = [
  "Truth should produce movement.",
  "Teaching should produce formation.",
  "Formation should produce responsibility.",
];

type Block = { text: string; style?: "emph" | "quote" };

const topics: { number: string; title: string; keywords: string; blocks: Block[] }[] = [
  {
    number: "01",
    title: "Women, Identity & Formation",
    keywords: "Identity. Emotional maturity. Healing. Purpose. Boundaries. Self-leadership. Becoming.",
    blocks: [
      {
        text: "Helping women understand what has shaped them, take responsibility for their inner world, and become intentional about the woman they are building.",
      },
    ],
  },
  {
    number: "02",
    title: "Family & Generational Restoration",
    keywords: "Generational patterns. Family systems. Parenting. Relationships. Covenant. Legacy.",
    blocks: [
      {
        text: "Helping people recognize what has been inherited, interrupt what must end, and intentionally build healthier patterns for the generations after them.",
      },
      { text: "Because breaking a cycle is only half the work.", style: "emph" },
      { text: "You must also build what replaces it.", style: "emph" },
    ],
  },
  {
    number: "03",
    title: "Leadership & Personal Governance",
    keywords: "Self-leadership. Emotional regulation. Character. Responsibility. Capacity. Execution.",
    blocks: [
      { text: "Because public leadership cannot sustainably exceed private governance.", style: "emph" },
      {
        text: "I help leaders examine the internal structures beneath their external influence and understand how their emotional, relational and personal patterns affect the way they lead.",
      },
    ],
  },
  {
    number: "04",
    title: "Young People & Girls",
    keywords:
      "Identity. Belonging. Friendship. Leadership. African culture. Boundaries. Purpose. Character. Faith.",
    blocks: [
      {
        text: "Creating honest, Scripture-centred conversations that help young people develop the internal foundation required to navigate the world they are growing up in.",
      },
      { text: "Not just:" },
      { text: "“Don't do this.”", style: "quote" },
      { text: "But:" },
      {
        text: "“Let's understand why you are vulnerable to it, who you are becoming, what you believe, and how you can make wiser decisions.”",
        style: "quote",
      },
    ],
  },
  {
    number: "05",
    title: "Christian Formation",
    keywords: "Biblical identity. Spiritual maturity. Discipleship. Covenant alignment. Obedience. Formation.",
    blocks: [
      {
        text: "Moving people beyond simply knowing Scripture to allowing Scripture to shape how they think, live, lead, relate and respond.",
      },
      { text: "Because:" },
      { text: "Information tells you what God said.", style: "emph" },
      { text: "Formation teaches you how to live like you believe Him.", style: "emph" },
    ],
  },
];

const engagements: { title: string; lines: string[] }[] = [
  {
    title: "Keynote Speaking",
    lines: [
      "For conferences, summits, women's gatherings, leadership events and major programmes.",
      "A keynote can be shaped around your event theme while remaining anchored in the deeper question your audience needs to confront.",
    ],
  },
  {
    title: "Biblical Teaching",
    lines: [
      "For Churches, Bible studies, discipleship programmes, Christian organisations and formation spaces.",
      "Scripture-led teaching designed to move people from Biblical knowledge to embodied practice.",
    ],
  },
  {
    title: "Ministry & Prayer",
    lines: [
      "For prayer gatherings, retreats, women's meetings, consecration gatherings and Spirit-led ministry environments.",
      "Where appropriate, this may include prayer, exhortation, prophetic encouragement and ministry to the specific needs of the room.",
    ],
  },
  {
    title: "Workshops & Masterclasses",
    lines: [
      "Interactive sessions designed to move people beyond listening into reflection, application and action.",
    ],
  },
  {
    title: "Panels & Conversations",
    lines: [
      "Thoughtful, honest conversations around faith, women, family, leadership, trauma-informed formation and generational restoration.",
    ],
  },
  {
    title: "Youth & Children Formation",
    lines: [
      "For schools, churches, youth communities and organisations serving children, teenagers and young women.",
      "Sessions can be adapted for age, developmental stage and the specific realities facing your young people.",
    ],
  },
];

const lenses = [
  { title: "Scripture", desc: "Biblical truth, identity, wisdom, covenant and spiritual formation." },
  {
    title: "Trauma-Informed Understanding",
    desc: "An awareness of how wounds, nervous-system responses, relationships, conditioning and lived experiences can shape behaviour, capacity and relational patterns.",
  },
  {
    title: "Family Systems",
    desc: "Looking beyond the individual to understand the family, relationships and environments in which patterns are formed and maintained.",
  },
  {
    title: "Personal Governance",
    desc: "Helping people develop the internal capacity to regulate themselves, take responsibility, make wise decisions and lead themselves before attempting to lead others.",
  },
  {
    title: "Practical Execution",
    desc: "Translating revelation and insight into decisions, boundaries, structures, habits and action.",
  },
];

const expectations: { title: string; note?: string }[] = [
  { title: "Biblical depth." },
  { title: "Practical clarity." },
  { title: "Honest conversation." },
  { title: "Audience awareness.", note: "The message should meet people where they actually are." },
  {
    title: "A formation mindset.",
    note: "The goal is not merely for people to feel something in the room. The goal is for something to become different after they leave it.",
  },
];

const availableFor = [
  "Conferences",
  "Women's gatherings",
  "Church services",
  "Leadership events",
  "Retreats",
  "Prayer gatherings",
  "Discipleship programmes",
  "Youth and young people's events",
  "Schools and educational programmes",
  "Workshops and masterclasses",
  "Panels and fireside conversations",
  "Podcasts and interviews",
  "Special ministry gatherings",
];

const conversationLines = [
  "A pattern that needs to be confronted.",
  "A foundation that needs to be restored.",
  "A belief that needs to be challenged.",
  "A woman who needs to understand who she truly is.",
  "A leader who needs to govern herself before leading others.",
  "A family that needs to stop reproducing what wounded it.",
  "A generation that needs to be formed differently.",
];

const INVITE_HREF = "/invite/request";

/* ─── Page ───────────────────────────────────────────────────────── */

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col justify-center overflow-hidden"
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

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-6 mt-32 sm:mt-44 pb-20 max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="Speaking & Ministry" light />
          </div>

          <h1
            className="font-cormorant font-light leading-[1.05] animate-fade-in-up"
            style={{
              color: "white",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              animationDelay: "150ms",
            }}
          >
            Invite{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Lady Cyd
            </span>
          </h1>

          <p
            className="font-cinzel tracking-[0.2em] uppercase animate-fade-in-up"
            style={{
              color: "var(--primary)",
              fontSize: "clamp(0.7rem, 1.6vw, 0.95rem)",
              animationDelay: "300ms",
            }}
          >
            Speaking. Teaching. Ministry. Formation.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <div
            className="animate-fade-in-up flex flex-col gap-4"
            style={{ animationDelay: "500ms" }}
          >
            {heroIntro.map((line) => (
              <p
                key={line}
                className="font-sans text-lg leading-relaxed font-light"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className="animate-fade-in-up flex flex-col gap-1"
            style={{ animationDelay: "600ms" }}
          >
            {heroLines.map((line) => (
              <p
                key={line}
                className="font-cormorant italic text-2xl sm:text-3xl"
                style={{ color: "var(--gold)" }}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <LinkButton to={INVITE_HREF} variant="primary" size="lg" className="gap-3">
              Invite Lady Cyd
              <ArrowRight size={16} />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT I SPEAK ON
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto flex flex-col gap-14">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
            <SectionBreadcrumb title="What I Speak On" />
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              My messages are built around one central conviction:
            </p>
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              People cannot sustainably build differently until they understand what has been{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                shaping them.
              </span>
            </h2>
            <OrnamentalDivider />
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              My speaking and teaching can be tailored to your audience, season and assignment.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-6">
            {topics.map((topic) => (
              <AnimateOnScroll key={topic.number} animation="up">
                <div
                  className="grid md:grid-cols-[7rem_1fr] gap-4 md:gap-8 p-8 border"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  <span
                    className="font-cormorant font-light leading-none"
                    style={{ color: "var(--primary)", opacity: 0.4, fontSize: "4rem" }}
                  >
                    {topic.number}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3
                      className="font-cinzel text-sm tracking-[0.2em] uppercase"
                      style={{ color: "var(--primary)" }}
                    >
                      {topic.title}
                    </h3>
                    <p
                      className="font-cormorant italic text-xl leading-snug"
                      style={{ color: "var(--foreground)" }}
                    >
                      {topic.keywords}
                    </p>
                    {topic.blocks.map((b) => (
                      <p
                        key={b.text}
                        className={
                          b.style === "emph"
                            ? "font-cormorant text-xl leading-snug"
                            : b.style === "quote"
                              ? "font-cormorant italic text-xl leading-snug pl-4 border-l-2"
                              : "font-sans text-[16px] leading-relaxed"
                        }
                        style={{
                          color: b.style === "emph" ? "var(--foreground)" : "var(--muted-foreground)",
                          borderColor: "var(--primary)",
                        }}
                      >
                        {b.text}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW I CAN SERVE YOUR AUDIENCE
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
            <SectionBreadcrumb title="Engagements" light />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              How I can serve{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                your audience.
              </span>
            </h2>
            <OrnamentalDivider theme="light" />
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              I am available for a range of speaking, teaching and ministry engagements.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagements.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="up" delay={(i % 3) * 100}>
                <div
                  className="flex flex-col gap-4 p-8 h-full border"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="h-px w-8" style={{ background: "var(--gold)", opacity: 0.5 }} />
                  <h3
                    className="font-cinzel text-sm tracking-wider uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="font-sans text-[15px] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MY APPROACH
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="My Approach" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              I don&apos;t separate spiritual formation{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                from real life.
              </span>
            </h2>
            <OrnamentalDivider />
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              My work brings together five lenses:
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {lenses.map((lens, i) => (
              <AnimateOnScroll key={lens.title} animation="up" delay={i * 60}>
                <div
                  className="grid md:grid-cols-[16rem_1fr] gap-2 md:gap-8 p-6 border"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}
                >
                  <h3
                    className="font-cinzel text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    {lens.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {lens.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-3">
            <p className="font-sans text-[17px]" style={{ color: "var(--muted-foreground)" }}>
              Because:
            </p>
            <p className="font-cormorant text-2xl" style={{ color: "var(--foreground)" }}>
              Information alone does not produce transformation.
            </p>
            <p className="font-cormorant italic text-3xl" style={{ color: "var(--primary)" }}>
              Formation does.
            </p>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              And formation must eventually become visible in how we live.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT YOU CAN EXPECT
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="What You Can Expect" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What you can expect{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                from Lady Cyd.
              </span>
            </h2>
            <OrnamentalDivider />
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              If I accept an invitation to serve your audience, I come prepared to understand the
              room, the people and the reason for the gathering.
            </p>
            <p className="font-sans text-[17px]" style={{ color: "var(--muted-foreground)" }}>
              You can expect:
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {expectations.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="up" delay={i * 60}>
                <div
                  className="flex gap-4 items-start p-6 border"
                  style={{ borderColor: "var(--border)", background: "var(--secondary)" }}
                >
                  <Check size={18} className="shrink-0 mt-1" style={{ color: "var(--primary)" }} />
                  <div className="flex flex-col gap-1">
                    <p className="font-cormorant font-semibold text-xl" style={{ color: "var(--foreground)" }}>
                      {item.title}
                    </p>
                    {item.note && (
                      <p className="font-sans text-[16px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="up">
            <p
              className="font-sans text-[17px] leading-relaxed text-center"
              style={{ color: "var(--muted-foreground)" }}
            >
              Where the engagement requires preparation, I will work with the host or organising
              team to understand the audience, objective, theme and desired outcome.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOR CHURCHES, CONFERENCES & ORGANISATIONS
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-10">
          <AnimateOnScroll animation="up" className="flex flex-col items-center text-center gap-4">
            <SectionBreadcrumb title="Churches, Conferences & Organisations" light />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              For churches, conferences{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                &amp; organisations.
              </span>
            </h2>
            <OrnamentalDivider theme="light" />
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              If you are planning a gathering and need someone who can bring Biblical depth,
              practical clarity and meaningful conversation to your audience, I would be honoured to
              explore the possibility of serving your community.
            </p>
            <p className="font-cinzel text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              I am available for:
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="up">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {availableFor.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span style={{ color: "var(--gold)" }}>✦</span>
                  <span className="font-sans text-[16px]" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="up">
            <p
              className="font-sans text-[17px] leading-relaxed text-center"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Engagements may be in-person, virtual or hybrid, depending on the nature of the
              invitation and availability.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LET'S HAVE THE RIGHT CONVERSATION
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
        <AnimateOnScroll
          animation="up"
          className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center relative z-10"
        >
          <SectionBreadcrumb title="Let's Have the Right Conversation" light />
          <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Don&apos;t invite me simply because you need another speaker on the programme.
          </p>
          <p className="font-cormorant text-3xl leading-snug" style={{ color: "white" }}>
            Invite me because there is a conversation{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              your people need to have.
            </span>
          </p>
          <OrnamentalDivider theme="light" />
          <div className="flex flex-col gap-3">
            {conversationLines.map((line) => (
              <p
                key={line}
                className="font-cormorant italic text-xl sm:text-2xl"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {line}
              </p>
            ))}
          </div>
          <p className="font-cinzel text-sm tracking-[0.25em] uppercase" style={{ color: "var(--primary)" }}>
            That is the work.
          </p>
          <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            And if that is the conversation you are creating, let&apos;s talk.
          </p>
          <LinkButton to={INVITE_HREF} variant="primary" size="lg" className="gap-3">
            Invite Lady Cyd
            <ArrowRight size={16} />
          </LinkButton>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
