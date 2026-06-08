import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lady Cyd",
  description:
    "Terms and Conditions governing your use of ladycyd.online and any services or programmes offered by Grit and Graceful Coaching Company.",
};

const sections = [
  {
    number: "01",
    title: "Use of This Website",
    content:
      "You agree to use this website for lawful purposes only. You may not reproduce, distribute, or republish any content from this website without written permission.",
  },
  {
    number: "02",
    title: "Coaching Disclaimer",
    content:
      "Lady Cyd is a Certified Trauma-Informed Coach — not a licensed therapist, psychologist, or medical professional. Our services are not a substitute for clinical mental health care or medical advice. If you require clinical support, we encourage you to seek appropriate professional help.",
    highlighted: true,
  },
  {
    number: "03",
    title: "Healing Harbour Community",
    content:
      "Membership of the Healing Harbour community is free and operates under Grit and Graceful Coaching Company. Members agree to engage respectfully, maintain the confidentiality of other members' shared experiences, and refrain from spam or disruptive behaviour. Grit and Graceful reserves the right to remove any member whose conduct violates these standards.",
  },
  {
    number: "04",
    title: "Payments and Enrolment",
    content: null,
    list: [
      "Enrolment in a paid programme is confirmed upon receipt of payment.",
      "Where payment plans are agreed, all instalments must be completed within the programme duration.",
      "Accepted payment methods include bank transfer, Paystack, and Flutterwave.",
    ],
  },
  {
    number: "05",
    title: "Sessions and Rescheduling",
    content: null,
    list: [
      "Sessions are conducted via Zoom or Google Meet.",
      "Rescheduling requests must be made at least 24 hours in advance.",
      "Sessions cancelled with less than 24 hours' notice will be considered used except in documented exceptional circumstances.",
    ],
  },
  {
    number: "06",
    title: "Client Responsibility",
    content:
      "Your results from coaching depend on your own commitment and effort. Grit and Graceful Coaching Company provides structure and support but cannot guarantee specific outcomes. You take full responsibility for any decisions made during or as a result of your coaching engagement.",
  },
  {
    number: "07",
    title: "Intellectual Property",
    content:
      "All content on this website — including frameworks, programme materials, written content, and branding — is the intellectual property of Grit and Graceful Coaching Company and may not be reproduced or used without written permission.",
  },
  {
    number: "08",
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Grit and Graceful Coaching Company shall not be liable for any indirect or consequential damages arising from your use of this website or our services.",
  },
  {
    number: "09",
    title: "Changes to These Terms",
    content:
      "We may update these Terms from time to time. Changes will be posted on this page. Continued use of our website or services constitutes acceptance of the revised Terms.",
  },
  {
    number: "10",
    title: "Contact Us",
    content: null,
    contact: "Hello@ladycyd.online",
  },
];

export default function TermsPage() {
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
            Terms &amp; Conditions
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
              These Terms and Conditions govern your use of ladycyd.online and any services or
              programmes offered by Grit and Graceful Coaching Company. By using our website or
              engaging our services, you agree to these terms.
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

                {section.contact && (
                  <p
                    className="font-sans text-[17px] leading-[1.85]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    For questions about these Terms, please contact us at{" "}
                    <a
                      href={`mailto:${section.contact}`}
                      className="transition-colors duration-200"
                      style={{ color: "var(--primary)" }}
                    >
                      {section.contact}
                    </a>
                    .
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
