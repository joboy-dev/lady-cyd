import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property | Lady Cyd",
  description:
    "Intellectual property policy for all content, frameworks, and materials belonging to Grit and Graceful Coaching Company.",
};

const EMAIL = "Hello@ladycyd.online";

const sections = [
  {
    number: "01",
    title: "What Is Protected",
    content: null,
    list: [
      "The Grit and Graceful Coaching Company name and brand identity",
      "The Healing Harbour community name and associated branding",
      "All written content and blog posts",
      "All coaching frameworks and methodologies",
      "Programme materials and workbooks",
      "All visual and graphic content",
    ],
  },
  {
    number: "02",
    title: "What You May Do",
    content: null,
    list: [
      "Share links to our website freely",
      "Quote brief excerpts from our blog (up to two sentences), provided you clearly credit Grit and Graceful Coaching Company and link to the original source",
    ],
  },
  {
    number: "03",
    title: "What Requires Permission",
    content: null,
    list: [
      "Reproducing, distributing, or commercially using any content from this website",
      "Teaching or presenting any of our frameworks",
      "Using the Grit and Graceful or Healing Harbour name, image, or brand for any commercial purpose",
    ],
    contact: EMAIL,
    contactNote: "To request permission, contact us at",
  },
  {
    number: "04",
    title: "Programme Materials",
    content:
      "Materials delivered within Grit and Graceful's programmes are for your personal development use only. They may not be shared, reproduced, or used as the basis for your own coaching or teaching without written consent.",
    highlighted: true,
  },
  {
    number: "05",
    title: "Reporting Infringement",
    content: null,
    contact: EMAIL,
    contactPrefix:
      "If you become aware of unauthorised use of Grit and Graceful Coaching Company's intellectual property, please notify us at",
    contactSuffix: ". We will investigate all reports promptly.",
  },
  {
    number: "06",
    title: "Contact Us",
    content: null,
    contact: EMAIL,
    contactPrefix:
      "For permissions or intellectual property enquiries, please contact us at",
    contactSuffix: ".",
  },
];

export default function IntellectualPropertyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col justify-center overflow-hidden pt-40 pb-16"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(197,75,140,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-5">
          <p
            className="font-cinzel text-xs tracking-[0.3em] uppercase animate-fade-in-up"
            style={{ color: "var(--gold)", opacity: 0.7 }}
          >
            Legal
          </p>
          <h1
            className="font-cormorant font-light leading-tight animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", animationDelay: "150ms" }}
          >
            Intellectual Property
          </h1>
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          </div>
          <p
            className="font-sans text-[15px] animate-fade-in-up"
            style={{ color: "rgba(255,255,255,0.5)", animationDelay: "400ms" }}
          >
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <div
            className="border-l-2 pl-6 py-1"
            style={{ borderColor: "var(--primary)" }}
          >
            <p className="font-cormorant italic text-xl leading-relaxed" style={{ color: "var(--foreground)" }}>
              All content on this website and within Grit and Graceful Coaching Company&apos;s
              programmes is the intellectual property of Grit and Graceful Coaching Company and
              is protected by applicable copyright law.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTIONS
      ══════════════════════════════════════════════════ */}
      <section className="pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col gap-0">
          {sections.map((section) => (
            <div
              key={section.number}
              className="flex gap-6 sm:gap-10 py-10 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Number */}
              <div className="shrink-0 pt-1">
                <span
                  className="font-cinzel text-xs tracking-widest"
                  style={{ color: "var(--gold)", opacity: 0.5 }}
                >
                  {section.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <h2
                  className="font-cinzel text-sm tracking-widest uppercase"
                  style={{ color: "var(--foreground)" }}
                >
                  {section.title}
                </h2>

                {section.highlighted && section.content && (
                  <div
                    className="border-l-2 pl-4 py-1"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <p
                      className="font-sans text-[17px] leading-[1.85]"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {section.content}
                    </p>
                  </div>
                )}

                {!section.highlighted && section.content && (
                  <p
                    className="font-sans text-[17px] leading-[1.85]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="flex flex-col gap-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span
                          className="mt-[6px] shrink-0 text-[10px]"
                          style={{ color: "var(--primary)" }}
                        >
                          ✦
                        </span>
                        <span
                          className="font-sans text-[17px] leading-[1.85]"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {"contactNote" in section && section.contactNote && section.contact && (
                  <p
                    className="font-sans text-[15px]"
                    style={{ color: "var(--muted-foreground)", opacity: 0.75 }}
                  >
                    {section.contactNote}{" "}
                    <a
                      href={`mailto:${section.contact}`}
                      className="transition-colors duration-200"
                      style={{ color: "var(--primary)" }}
                    >
                      {section.contact}
                    </a>
                  </p>
                )}

                {"contactPrefix" in section && section.contactPrefix && section.contact && (
                  <p
                    className="font-sans text-[17px] leading-[1.85]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {section.contactPrefix}{" "}
                    <a
                      href={`mailto:${section.contact}`}
                      className="transition-colors duration-200"
                      style={{ color: "var(--primary)" }}
                    >
                      {section.contact}
                    </a>
                    {"contactSuffix" in section ? section.contactSuffix : ""}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
