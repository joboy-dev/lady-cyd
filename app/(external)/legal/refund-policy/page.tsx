import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Lady Cyd",
  description:
    "Refund policy for programmes and products offered by Grit and Graceful Coaching Company.",
};

const sections = [
  {
    number: "01",
    title: "Digital Products",
    content:
      "All digital products are non-refundable once delivered or accessed. Because digital content is delivered instantly and cannot be returned, all sales are final. If you have questions about a product before purchasing, please contact us at Hello@ladycyd.online.",
  },
  {
    number: "02",
    title: "Group Coaching Programmes",
    content:
      "If you request a cancellation in writing before a group programme begins, a refund may be considered at Grit and Graceful's discretion, less any processing fees. Once a programme has commenced, no refunds will be issued.",
  },
  {
    number: "03",
    title: "The Clarity & Restoration 1:1 Mentorship",
    content:
      "Due to the personalised nature of 1:1 mentorship, refunds are not offered once the engagement has commenced. The Clarity Call process exists to ensure both parties are fully aligned before any financial commitment is made. If you have concerns, please raise them during that conversation.",
    highlighted: true,
  },
  {
    number: "04",
    title: "Exceptional Circumstances",
    content: null,
    contact: "Hello@ladycyd.online",
    contactPrefix:
      "If you are unable to continue due to a documented medical emergency or extraordinary circumstance, please contact us at",
    contactSuffix:
      ". We will review such situations with care and on a case-by-case basis.",
  },
  {
    number: "05",
    title: "Payment Plans",
    content:
      "Missed or incomplete payments do not entitle you to a refund of amounts already paid. Access to sessions or materials may be paused until outstanding payments are settled.",
  },
  {
    number: "06",
    title: "Cancellations by Grit and Graceful",
    content:
      "In the rare event that Grit and Graceful Coaching Company must cancel a programme it is unable to deliver, affected clients will receive a full refund of amounts paid for the undelivered service, or the option to transfer to a future equivalent programme.",
  },
  {
    number: "07",
    title: "How to Request a Refund",
    content: null,
    contact: "Hello@ladycyd.online",
    contactPrefix:
      "All refund requests must be submitted in writing to",
    contactSuffix:
      ". Please include your name, the programme or product purchased, the date of purchase, and your reason for requesting a refund. We aim to respond within 5 business days.",
  },
];

export default function RefundPolicyPage() {
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
            Refund Policy
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
              Please read this policy carefully before purchasing any programme or product from
              Grit and Graceful Coaching Company.
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

                {section.contactPrefix && section.contact && (
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
                    {section.contactSuffix}
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
