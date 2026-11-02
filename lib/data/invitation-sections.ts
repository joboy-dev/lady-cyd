import type { z } from "zod";
import type { invitationSchema } from "@/lib/validators/general";

type InvitationData = z.infer<typeof invitationSchema>;

export interface InvitationEmailSection {
  title: string;
  rows: { label: string; value: string }[];
}

/**
 * Groups the submitted invitation into labelled sections for the notification email.
 * Empty answers are left out so Lady Cyd only sees what was actually filled in.
 */
export function buildInvitationSections(d: InvitationData): InvitationEmailSection[] {
  const sections: InvitationEmailSection[] = [
    {
      title: "Your Details",
      rows: [
        { label: "Full Name", value: d.full_name },
        { label: "Organisation / Church / Institution", value: d.organisation },
        { label: "Role / Position", value: d.role ?? "" },
        { label: "Email", value: d.email },
        { label: "Phone / WhatsApp", value: d.phone },
        { label: "Country", value: d.country },
        { label: "City", value: d.city ?? "" },
        { label: "Website / Social Media", value: d.website ?? "" },
      ],
    },
    {
      title: "Your Event",
      rows: [
        { label: "Event Name", value: d.event_name },
        { label: "Event Type", value: d.event_type },
        { label: "Proposed Date", value: d.event_date },
        { label: "Proposed Time", value: d.event_time ?? "" },
        { label: "Time Zone", value: d.time_zone ?? "" },
        { label: "Location / Venue", value: d.location ?? "" },
        { label: "Format", value: d.format },
        { label: "Expected Number of Attendees", value: d.attendees ?? "" },
        { label: "Expected Age Range", value: d.age_range ?? "" },
      ],
    },
    {
      title: "Audience",
      rows: [
        { label: "Who will be attending?", value: d.audience_who ?? "" },
        { label: "Primary need, burden or challenge", value: d.audience_need ?? "" },
        { label: "What is happening in their lives right now?", value: d.audience_context ?? "" },
        { label: "What should they understand, confront or begin doing differently?", value: d.audience_outcome ?? "" },
      ],
    },
    {
      title: "About the Church / Organisation / Institution",
      rows: [{ label: "About", value: d.about_organisation ?? "" }],
    },
    {
      title: "The Invitation",
      rows: [
        { label: "What would you like Lady Cyd to do?", value: d.invitation_types.join(", ") },
        { label: "If Other, please specify", value: d.invitation_other ?? "" },
        { label: "Proposed Topic / Theme", value: d.topic ?? "" },
        { label: "Particular Scripture, message or direction", value: d.scripture_direction ?? "" },
        { label: "Requested session length", value: d.session_length ?? "" },
        { label: "Q&A, interaction or audience participation?", value: d.interaction ?? "" },
        { label: "What should participants leave with?", value: d.leave_with ?? "" },
      ],
    },
    {
      title: "Event Context",
      rows: [
        { label: "Purpose of the event and fit", value: d.event_purpose ?? "" },
        { label: "Why inviting her specifically?", value: d.why_inviting ?? "" },
        { label: "Other speakers, teachers or ministers?", value: d.other_speakers ?? "" },
        { label: "If yes, who?", value: d.other_speakers_who ?? "" },
        { label: "Tone or atmosphere", value: d.tone ?? "" },
      ],
    },
    {
      title: "Logistics",
      rows: [
        { label: "Accommodation provided if required?", value: d.accommodation ?? "" },
        { label: "Transportation / airport transfers provided?", value: d.transportation ?? "" },
        { label: "Nearest airport", value: d.nearest_airport ?? "" },
        { label: "Travel dates", value: d.travel_dates ?? "" },
        { label: "Visa or travel requirements", value: d.visa_requirements ?? "" },
        { label: "Additional logistical information", value: d.logistics_additional ?? "" },
      ],
    },
    {
      title: "Honorarium & Expenses",
      rows: [
        { label: "Arrangement available", value: d.honorarium_arrangement },
        { label: "Approved budget range", value: d.budget_range ?? "" },
        { label: "Travel, accommodation and local transport covered separately?", value: d.expenses_covered ?? "" },
      ],
    },
    {
      title: "Media, Recording & Content Use",
      rows: [
        { label: "The engagement will be", value: d.media_uses.join(", ") },
        { label: "Details", value: d.media_details ?? "" },
      ],
    },
    {
      title: "Anything Else",
      rows: [
        { label: "Anything else", value: d.anything_else ?? "" },
        { label: "How did you hear about Lady Cyd?", value: d.heard_via },
      ],
    },
  ];

  return sections
    .map((s) => ({ ...s, rows: s.rows.filter((r) => r.value.trim() !== "") }))
    .filter((s) => s.rows.length > 0);
}
