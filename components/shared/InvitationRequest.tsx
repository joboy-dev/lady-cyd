'use client';

import { useState } from "react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import OrnamentalDivider from "@/components/shared/OrnamentalDivider";
import SectionBreadcrumb from "@/components/shared/breadcrumb/SectionBreadcrumb";
import LinkButton from "@/components/shared/button/LinkButton";
import InvitationForm from "@/components/shared/form/appForms/InvitationForm";

export default function InvitationRequest() {
  const [received, setReceived] = useState(false);

  if (received) {
    return (
      <section
        className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--hero-bg)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(197,75,140,0.14) 0%, transparent 70%)",
          }}
        />
        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-6 mt-32 pb-16 max-w-2xl mx-auto">
          <SectionBreadcrumb title="Request Received" light />
          <h1
            className="font-cormorant font-light leading-tight"
            style={{ color: "white", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Thank You for{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Inviting Lady Cyd.
            </span>
          </h1>
          <OrnamentalDivider theme="light" className="w-full max-w-xs" />
          <p className="font-sans text-lg font-light" style={{ color: "rgba(255,255,255,0.85)" }}>
            Your invitation has been received.
          </p>
          <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Every engagement is reviewed carefully based on alignment, audience, assignment,
            availability, logistics and the nature of the invitation.
          </p>
          <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            If the engagement is a suitable fit, you will be contacted with the next steps.
          </p>
          <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            In the meantime, you are welcome to explore Lady Cyd&apos;s work across the website.
          </p>
          <LinkButton to="/" variant="primary" size="lg">
            Return to Website
          </LinkButton>
        </div>
      </section>
    );
  }

  return (
    <>
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
        <div className="section-padding relative z-10 flex flex-col items-center text-center gap-5 mt-32 sm:mt-40 pb-16 max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <SectionBreadcrumb title="Invitation Form" light />
          </div>
          <h1
            className="font-cormorant font-light leading-[1.05] animate-fade-in-up"
            style={{ color: "white", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", animationDelay: "150ms" }}
          >
            Invite{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              Lady Cyd
            </span>
          </h1>
          <p
            className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase animate-fade-in-up"
            style={{ color: "rgba(255,255,255,0.6)", animationDelay: "250ms" }}
          >
            Speaking, Teaching &amp; Ministry Engagement Request
          </p>
          <div className="animate-fade-in-up flex flex-col gap-4" style={{ animationDelay: "350ms" }}>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Thank you for considering Lady Cyd for your gathering.
            </p>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Please complete the form below with as much detail as possible.
            </p>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              This form begins the conversation. Submission does not constitute confirmation of the
              engagement.
            </p>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Each invitation is reviewed based on alignment, audience, assignment, availability,
              logistics and the nature of the engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--secondary)" }}>
        <AnimateOnScroll animation="scale" className="max-w-3xl mx-auto">
          <div
            className="border p-6 sm:p-10"
            style={{ borderColor: "rgba(197,75,140,0.15)", background: "var(--card)" }}
          >
            <InvitationForm
              onSuccess={() => {
                setReceived(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
