import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import ListEmpty from "@/components/shared/ListEmpty";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import Card from "@/components/shared/card/Card";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import Badge from "@/components/shared/Badge";

export const metadata: Metadata = {
  title: "The Journal | Trauma Healing & Generational Patterns | Lady Cyd",
  description:
    "Learn how to heal from family trauma, break generational cycles, and restore your identity. Trauma-informed teachings on identity crisis, healing childhood trauma, and Christian coaching for women by Lady Cyd.",
  keywords: [
    "how to break generational cycles",
    "healing from family trauma",
    "identity crisis coach",
    "trauma healing for high-achieving women",
    "how to heal from childhood family trauma as an adult",
    "why do I keep repeating the same patterns in relationships",
  ],
};

/* ─── Types ─────────────────────────────────────────────────────── */

type Category = "Identity" | "Healing" | "Generational Work" | "Faith" | "Coaching";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
};

const categories: Category[] = [
  "Identity",
  "Healing",
  "Generational Work",
  "Faith",
  "Coaching",
];

/* ─── Sample posts — replace with CMS / API data when ready ─────── */
const posts: Post[] = [];

/* ─── Category pill colour map ──────────────────────────────────── */
const categoryColour: Record<Category, string> = {
  Identity: "var(--primary)",
  Healing: "var(--gold)",
  "Generational Work": "#9b59b6",
  Faith: "#4a9e8a",
  Coaching: "#c0392b",
};

/* ─── Page ───────────────────────────────────────────────────────── */

export default function BlogPage() {
  const hasPosts = posts.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(197,75,140,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Texture lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.4) 80px, rgba(201,168,76,0.4) 81px)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-6 mt-32 sm:mt-44 pb-16">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="Words & Wisdom" light />
          </div>

          <p
            className="font-great-vibes leading-none animate-fade-in-up"
            style={{
              color: "var(--primary)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              animationDelay: "150ms",
            }}
          >
            The Journal
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            <p
              className="font-sans text-lg leading-relaxed max-w-2xl font-light"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Teachings, reflections, and honest writing on identity, healing,
              generational restoration, and what it means to lead your life from
              a place of wholeness — not wounds.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CATEGORY FILTERS
      ══════════════════════════════════════════════════ */}
      <section className="section-padding pb-0 bg-background">
        <AnimateOnScroll animation="up" className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <SectionBreadcrumb title="Browse by Topic" align="left" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="primary"
              className="cursor-pointer"
            >
              All
            </Badge>
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center px-3 py-1 font-cinzel text-xs tracking-wider uppercase border transition-colors duration-200"
                style={{
                  borderColor: categoryColour[cat],
                  color: categoryColour[cat],
                  background: "transparent",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="h-px w-full" style={{ background: "var(--border)" }} />
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          POST GRID / EMPTY STATE
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {hasPosts ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, i) => (
                  <AnimateOnScroll key={post.slug} animation="up" delay={i * 80}>
                    <Card linkTo={`/blog/${post.slug}`} className="flex flex-col gap-0 p-0 overflow-hidden group">
                      {/* Category bar */}
                      <div
                        className="h-1 w-full"
                        style={{ background: categoryColour[post.category] }}
                      />
                      <div className="p-6 flex flex-col gap-4">
                        {/* Meta */}
                        <div className="flex items-center justify-between">
                          <span
                            className="font-cinzel text-[10px] tracking-widest uppercase"
                            style={{ color: categoryColour[post.category] }}
                          >
                            {post.category}
                          </span>
                          <span
                            className="font-sans text-xs"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="font-cormorant font-semibold text-xl leading-snug group-hover:text-primary transition-colors duration-200"
                          style={{ color: "var(--foreground)" }}
                        >
                          {post.title}
                        </h3>

                        {/* Divider */}
                        <div className="h-px w-8" style={{ background: "var(--primary)" }} />

                        {/* Excerpt */}
                        <p className="font-sans text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read link */}
                        <div className="flex items-center gap-2 mt-auto pt-2">
                          <span
                            className="font-cinzel text-[10px] tracking-widest uppercase"
                            style={{ color: "var(--primary)" }}
                          >
                            Read more
                          </span>
                          <ArrowRight size={12} style={{ color: "var(--primary)" }} />
                        </div>
                      </div>
                    </Card>
                  </AnimateOnScroll>
                ))}
              </div>
            </>
          ) : (
            <AnimateOnScroll animation="scale">
              <ListEmpty
                title="posts"
                subtitle="Lady Cyd's writing is coming soon. Subscribe to the Healing Harbour to be notified when new pieces are published."
              />
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT THE JOURNAL
      ══════════════════════════════════════════════════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--dark-section)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(197,75,140,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left */}
          <AnimateOnScroll animation="left" className="flex flex-col gap-6">
            <SectionBreadcrumb title="Why She Writes" light align="left" />
            <h2
              className="font-cormorant font-light leading-tight"
              style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              This is not content.{" "}
              <span className="italic" style={{ color: "var(--primary)" }}>
                It is transmission.
              </span>
            </h2>
            <OrnamentalDivider theme="light" className="justify-start" />
            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Lady Cyd writes from the inside of the work — not as an observer, but as someone
              who has lived the questions she explores. Every piece in The Journal is an
              extension of her coaching: honest, structured, and designed to produce something
              real in the women who read it.
            </p>
            <p
              className="font-cormorant italic text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              &ldquo;If it does not challenge how you see yourself, it has not done its work.&rdquo;
            </p>
            <p
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", opacity: 0.7 }}
            >
              — Lady Cyd
            </p>
          </AnimateOnScroll>

          {/* Right — Topics */}
          <AnimateOnScroll animation="right" delay={150} className="flex flex-col gap-6">
            <p
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", opacity: 0.75 }}
            >
              Topics you will find here
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <BookOpen size={16} />,
                  label: "Identity Restoration",
                  desc: "Who you are beneath the roles, the titles, and the performance.",
                },
                {
                  icon: <BookOpen size={16} />,
                  label: "Trauma & Healing",
                  desc: "What it actually means to heal — not manage — at the root.",
                },
                {
                  icon: <BookOpen size={16} />,
                  label: "Generational Patterns",
                  desc: "The invisible architecture of family systems and how to break free.",
                },
                {
                  icon: <BookOpen size={16} />,
                  label: "Faith & Wholeness",
                  desc: "The integration of Kingdom truth and deep psychological transformation.",
                },
                {
                  icon: <BookOpen size={16} />,
                  label: "Leading & Building",
                  desc: "How healed women lead differently — in life, family, and vocation.",
                },
              ].map((topic, i) => (
                <div
                  key={topic.label}
                  className="flex gap-4 items-start py-4 border-b last:border-b-0"
                  style={{ borderColor: "rgba(255,255,255,0.06)", animationDelay: `${i * 80}ms` }}
                >
                  <span style={{ color: "var(--gold)", opacity: 0.5, marginTop: 2 }}>
                    {topic.icon}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p
                      className="font-cinzel text-xs tracking-wider uppercase"
                      style={{ color: "var(--gold)" }}
                    >
                      {topic.label}
                    </p>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {topic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — JOIN THE HARBOUR TO GET NOTIFIED
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
            Never miss a piece.
          </p>
          <OrnamentalDivider theme="light" />
          <h2
            className="font-cormorant font-light text-3xl sm:text-4xl leading-tight"
            style={{ color: "white" }}
          >
            Join the Healing Harbour{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              to receive every new journal entry.
            </span>
          </h2>
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Members of the Healing Harbour are the first to receive new writings, teachings,
            and reflections from Lady Cyd — alongside the full community experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LinkButton to="/inner-circle" variant="primary" size="lg" className="gap-3">
              Enter the Healing Harbour
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/about" variant="outlineLight" size="lg">
              Learn About Lady Cyd
            </LinkButton>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
