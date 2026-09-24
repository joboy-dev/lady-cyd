import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import { courses } from "@/lib/data/courses";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses & Programmes | Lady Cyd",
  description:
    "Stand-alone courses, frameworks, and resources by Lady Cyd — Grit & Graceful Coaching Company. Structured tools for identity restoration, emotional formation, and generational rebuilding.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <img
          src="/images/lady-cyd/image-6.jpg"
          alt="Lady Cyd teaching"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,3,8,0.8) 0%, rgba(13,3,8,0.25) 25%, rgba(13,3,8,0.55) 60%, rgba(13,3,8,0.95) 100%)",
          }}
        />

        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-5 mt-32 pb-16">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="Courses & Programmes" light />
          </div>
          <h1
            className="font-cormorant font-light leading-[1.05] animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(3rem, 8vw, 6rem)", animationDelay: "150ms" }}
          >
            Courses
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <h2
            className="font-cormorant font-light text-4xl sm:text-5xl leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Stand-alone tools.{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              Structured formation.
            </span>
          </h2>
          <OrnamentalDivider />
          <p className="font-sans text-muted-foreground leading-relaxed text-[17px]">
            Short frameworks, guided resources, and downloadable tools by Lady Cyd — each one built
            to produce real, structured change in a focused area of your life. Free to start, or go
            deeper with a paid framework.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════════════════════════════
          COURSE GRID
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <AnimateOnScroll key={course.id} animation="up" delay={i * 100}>
              <div
                className="flex flex-col h-full overflow-hidden"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-3 right-3 font-cinzel text-xs font-bold tracking-widest uppercase px-3 py-1.5 shadow-md"
                    style={{
                      background: course.free ? "var(--gold)" : "var(--primary)",
                      color: "white",
                    }}
                  >
                    {course.price}
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3
                    className="font-cormorant font-semibold text-xl leading-snug"
                    style={{ color: "var(--foreground)" }}
                  >
                    {course.title}
                  </h3>
                  <span
                    className="font-cinzel text-sm font-bold tracking-wide"
                    style={{ color: course.free ? "var(--gold)" : "var(--primary)" }}
                  >
                    {course.price}
                  </span>
                  <p className="font-sans text-[14px] leading-relaxed text-muted-foreground line-clamp-4 flex-1">
                    {course.description}
                  </p>
                  <a
                    href={course.selarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-cinzel text-[11px] font-bold tracking-widest uppercase mt-2 px-4 py-2.5 transition-all duration-200 hover:opacity-90"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    View On Selar
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
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
        <AnimateOnScroll animation="up" className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center relative z-10">
          <p className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "var(--primary)" }}>
            Not sure where to start?
          </p>
          <OrnamentalDivider theme="light" />
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            The Wound Point Assessment is the diagnostic gateway into the ecosystem — it will show
            you exactly where to begin.
          </p>
          <LinkButton to="/whole/assessment" variant="primary" size="lg" className="gap-3">
            Take The Wound Point Assessment
            <ArrowRight size={16} />
          </LinkButton>
        </AnimateOnScroll>
      </section>

      <Footer />
    </div>
  );
}
