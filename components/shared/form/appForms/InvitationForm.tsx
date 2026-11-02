'use client';

import type { ReactNode } from "react";
import { z } from "zod";
import toast from "react-hot-toast";
import { useZodForm } from "@/lib/hooks/useZodForm";
import { invitationSchema } from "@/lib/validators/general";
import type { Option } from "@/lib/interfaces/general";
import FormWrapper from "@/components/shared/form/Form";
import FormInput from "@/components/shared/form/FormInput";
import TextAreaInput from "@/components/shared/form/TextAreaInput";
import SelectField from "@/components/shared/form/SelectField";
import FormCheckboxGroup from "@/components/shared/form/FormCheckboxGroup";
import FormRadioGroup from "@/components/shared/form/FormRadioGroup";
import { submitInvitation } from "@/app/actions/invitation";
import {
  eventTypeOptions,
  formatOptions,
  heardViaOptions,
  honorariumOptions,
  invitationTypeOptions,
  mediaOptions,
  yesNoOptions,
  type InvitationOption,
} from "@/lib/data/invitation-options";

type InvitationData = z.infer<typeof invitationSchema>;

const toSelectOptions = (options: InvitationOption[]): Option[] =>
  options.map((o, i) => ({ key: i + 1, label: o.label, value: o.value }));

function FormGroup({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 pt-8 first:pt-0 border-t first:border-t-0 border-border">
      <h3
        className="font-cinzel text-sm tracking-[0.25em] uppercase mb-1"
        style={{ color: "var(--primary)" }}
      >
        {title}
      </h3>
      {description && (
        <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: "var(--muted-foreground)" }}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

const defaults: InvitationData = {
  full_name: "", organisation: "", role: "", email: "", phone: "", country: "", city: "", website: "",
  event_name: "", event_type: "", event_date: "", event_time: "", time_zone: "", location: "",
  format: "", attendees: "", age_range: "",
  audience_who: "", audience_need: "", audience_context: "", audience_outcome: "",
  about_organisation: "",
  invitation_types: [], invitation_other: "", topic: "", scripture_direction: "", session_length: "",
  interaction: "", leave_with: "",
  event_purpose: "", why_inviting: "", other_speakers: "", other_speakers_who: "", tone: "",
  accommodation: "", transportation: "", nearest_airport: "", travel_dates: "", visa_requirements: "",
  logistics_additional: "",
  honorarium_arrangement: "", budget_range: "", expenses_covered: "",
  media_uses: [], media_details: "",
  anything_else: "", heard_via: "",
};

export default function InvitationForm({ onSuccess }: { onSuccess: () => void }) {
  const methods = useZodForm<InvitationData>(invitationSchema, defaults);

  const invitationTypes = methods.watch("invitation_types") ?? [];
  const otherSpeakers = methods.watch("other_speakers");

  const onSubmit = methods.handleSubmit(async (data: InvitationData) => {
    const result = await submitInvitation(data);
    if (result.success) {
      methods.reset();
      onSuccess();
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
    }
  });

  return (
    <FormWrapper
      methods={methods}
      onSubmit={onSubmit}
      submitLabel="Submit Invitation Request"
      submittingLabel="Sending…"
      isSubmitting={methods.formState.isSubmitting}
      className="shadow-none! rounded-none! bg-transparent!"
    >
      <div className="flex flex-col gap-8">
        {/* ── YOUR DETAILS ─────────────────────────────── */}
        <FormGroup title="Your Details">
          <div className="grid sm:grid-cols-2 gap-0 sm:gap-4">
            <FormInput name="full_name" label="Full Name" required />
            <FormInput name="organisation" label="Organisation / Church / Institution" required />
            <FormInput name="role" label="Your Role / Position" />
            <FormInput name="email" label="Email Address" type="email" required />
            <FormInput name="phone" label="Phone / WhatsApp" type="tel" required />
            <FormInput name="country" label="Country" required />
            <FormInput name="city" label="City" />
            <FormInput name="website" label="Website / Social Media" />
          </div>
        </FormGroup>

        {/* ── YOUR EVENT ───────────────────────────────── */}
        <FormGroup title="Your Event">
          <div className="grid sm:grid-cols-2 gap-0 sm:gap-4">
            <FormInput name="event_name" label="Event Name" required />
            <SelectField
              label="Event Type *"
              register={methods.register("event_type")}
              error={methods.formState.errors.event_type}
              options={toSelectOptions(eventTypeOptions)}
            />
            <FormInput name="event_date" label="Proposed Date" type="date" required />
            <FormInput name="event_time" label="Proposed Time" type="time" />
            <FormInput name="time_zone" label="Time Zone" placeholder="e.g. WAT (UTC+1)" />
            <FormInput name="location" label="Location / Venue" />
            <FormInput name="attendees" label="Expected Number of Attendees" />
            <FormInput name="age_range" label="Expected Age Range" />
          </div>
          <FormRadioGroup name="format" label="Format" options={formatOptions} required />
        </FormGroup>

        {/* ── AUDIENCE ─────────────────────────────────── */}
        <FormGroup title="Tell Me About Your Audience">
          <TextAreaInput name="audience_who" label="Who will be attending this gathering?" />
          <TextAreaInput
            name="audience_need"
            label="What is the primary need, burden or challenge you want this gathering to address?"
          />
          <TextAreaInput
            name="audience_context"
            label="What is happening in the lives of the people you are bringing together right now?"
          />
          <TextAreaInput
            name="audience_outcome"
            label="What would you most want them to understand, confront or begin doing differently after this engagement?"
          />
        </FormGroup>

        {/* ── ABOUT YOU / ORGANISATION ─────────────────── */}
        <FormGroup title="Tell Me About You and Your Church / Organisation / Institution">
          <TextAreaInput name="about_organisation" label="Tell me about you and your church / organisation / institution" />
        </FormGroup>

        {/* ── THE INVITATION ───────────────────────────── */}
        <FormGroup title="The Invitation">
          <FormCheckboxGroup
            name="invitation_types"
            label="What would you like Lady Cyd to do?"
            description="Select all that apply:"
            options={invitationTypeOptions}
            required
          />
          {invitationTypes.includes("Other") && (
            <FormInput name="invitation_other" label="Other — please specify" />
          )}
          <FormInput name="topic" label="Proposed Topic / Theme" />
          <TextAreaInput
            name="scripture_direction"
            label="Is there a particular Scripture, message or direction you would like addressed?"
          />
          <FormInput name="session_length" label="How long is the requested session?" />
          <FormRadioGroup
            name="interaction"
            label="Will there be Q&A, interaction or audience participation?"
            options={yesNoOptions}
          />
          <TextAreaInput name="leave_with" label="What would you like participants to leave with?" />
        </FormGroup>

        {/* ── EVENT CONTEXT ────────────────────────────── */}
        <FormGroup title="Event Context">
          <TextAreaInput
            name="event_purpose"
            label="Tell us briefly about the purpose of this event and why you believe Lady Cyd would be a good fit."
          />
          <TextAreaInput name="why_inviting" label="Why are you inviting her specifically?" />
          <FormRadioGroup
            name="other_speakers"
            label="Are there other speakers, teachers or ministers participating?"
            options={yesNoOptions}
          />
          {otherSpeakers === "Yes" && <FormInput name="other_speakers_who" label="If yes, who?" />}
          <TextAreaInput
            name="tone"
            label="Is there a particular tone or atmosphere you are intentionally creating for the gathering?"
          />
        </FormGroup>

        {/* ── LOGISTICS ────────────────────────────────── */}
        <FormGroup title="Logistics">
          <FormRadioGroup
            name="accommodation"
            label="Will accommodation be provided if required?"
            options={yesNoOptions}
          />
          <FormRadioGroup
            name="transportation"
            label="Will transportation / airport transfers be provided?"
            options={yesNoOptions}
          />
          <div className="grid sm:grid-cols-2 gap-0 sm:gap-4">
            <FormInput name="nearest_airport" label="Nearest airport" />
            <FormInput name="travel_dates" label="Travel dates, if already determined" />
          </div>
          <TextAreaInput
            name="visa_requirements"
            label="Any visa or travel requirements we should know about?"
          />
          <TextAreaInput name="logistics_additional" label="Additional logistical information" />
        </FormGroup>

        {/* ── HONORARIUM & EXPENSES ────────────────────── */}
        <FormGroup title="Honorarium & Expenses">
          <FormRadioGroup
            name="honorarium_arrangement"
            label="Please indicate the arrangement available for this invitation:"
            options={honorariumOptions}
            required
          />
          <FormInput
            name="budget_range"
            label="If a budget has already been approved, please indicate the range."
          />
          <FormRadioGroup
            name="expenses_covered"
            label="Will travel, accommodation and local transportation be covered separately from the honorarium?"
            options={yesNoOptions}
          />
        </FormGroup>

        {/* ── MEDIA, RECORDING & CONTENT USE ───────────── */}
        <FormGroup title="Media, Recording & Content Use">
          <FormCheckboxGroup
            name="media_uses"
            label="Will the engagement be:"
            description="Select all that apply:"
            options={mediaOptions}
          />
          <TextAreaInput name="media_details" label="Please provide any relevant details." />
          <p
            className="font-sans text-sm leading-relaxed italic"
            style={{ color: "var(--muted-foreground)" }}
          >
            Recording, reproduction, editing, redistribution, publication, licensing or commercial
            use of teaching and ministry content may require separate written permission and agreed
            terms by us.
          </p>
        </FormGroup>

        {/* ── ANYTHING ELSE ────────────────────────────── */}
        <FormGroup title="Anything Else?">
          <TextAreaInput
            name="anything_else"
            label="Please share anything else you believe would help us understand your invitation, your audience or the opportunity to serve."
          />
          <SelectField
            label="How did you hear about Lady Cyd? *"
            register={methods.register("heard_via")}
            error={methods.formState.errors.heard_via}
            options={toSelectOptions(heardViaOptions)}
          />
        </FormGroup>
      </div>
    </FormWrapper>
  );
}
