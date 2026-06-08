import Footer from "@/components/shared/Footer";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lady Cyd",
  description:
    "How Lady Cyd collects, uses, and protects your personal information when you use our website and services.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you join the Healing Harbour community, apply for a Clarity Call, make a purchase, or contact us. This may include your name, email address, and payment information.",
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content: null,
    list: [
      "Deliver the services and programmes you have enrolled in",
      "Send you community updates, teachings, and resources you have opted into",
      "Respond to your enquiries and applications",
      "Improve our website and services",
      "Send you marketing communications (with your consent)",
    ],
  },
  {
    number: "03",
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who help us operate our website and deliver our services — such as our email platform (Kit), payment processors (Paystack, Flutterwave), and video call tools (Zoom, Google Meet) — as long as those parties agree to keep your information confidential.",
  },
  {
    number: "04",
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
  },
  {
    number: "05",
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing communications from us by clicking the unsubscribe link in any email or contacting us directly.",
  },
  {
    number: "06",
    title: "Cookies",
    content:
      "We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect the functionality of the site.",
  },
  {
    number: "07",
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.",
  },
  {
    number: "08",
    title: "Contact Us",
    content: null,
    contact: "Hello@ladycyd.online",
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              This privacy policy describes how we collect, use, and protect your personal
              information when you use our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTIONS
      ══════════════════════════════════════════════════ */}
      <section className="pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col gap-0">
          {sections.map((section, i) => (
            <div
              key={section.number}
              className="group flex gap-6 sm:gap-10 py-10 border-b"
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

                {section.content && (
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
                    If you have any questions about this Privacy Policy, please contact us at{" "}
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
