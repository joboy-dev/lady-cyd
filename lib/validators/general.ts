import DOMPurify from 'dompurify';
import { z } from 'zod';

export const richTextSchema = z.string()
  .trim() // Remove leading/trailing whitespace
  .transform(html => {
    // Sanitize the HTML before passing it through
    return DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true } // Or customize allowed tags/attributes
    });
  })
  .refine(sanitizedHtml => {
    // Optional: further check if the sanitized HTML is still effectively empty
    // after removing tags (e.g., if it was just "<p><br></p>")
    const strippedText = sanitizedHtml.replace(/<[^>]*>/g, '').trim();
    return strippedText.length > 0;
});

export const additionalInfoSchema = z.array(z.object({
  key: z.string(),
  value: z.string(),
}))

export const harbourJoinSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
});

export const clarityCallSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  heard_via: z.string().min(1, "Please let us know how you found Lady Cyd"),
  tier: z.string().optional(),
  current_place: z
    .string()
    .min(30, "Please share at least a few sentences (30 characters minimum)"),
  desired_outcome: z
    .string()
    .min(30, "Please share at least a few sentences (30 characters minimum)"),
  readiness: z
    .string()
    .min(20, "Please share at least a sentence (20 characters minimum)"),
});


const optionalText = z.string().optional();

export const invitationSchema = z.object({
  // Your details
  full_name: z.string().min(1, "Your name is required"),
  organisation: z.string().min(1, "Please tell us your organisation, church or institution"),
  role: optionalText,
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a phone or WhatsApp number"),
  country: z.string().min(1, "Country is required"),
  city: optionalText,
  website: optionalText,

  // Your event
  event_name: z.string().min(1, "Event name is required"),
  event_type: z.string().min(1, "Please select an event type"),
  event_date: z.string().min(1, "Proposed date is required"),
  event_time: optionalText,
  time_zone: optionalText,
  location: optionalText,
  format: z.string().min(1, "Please select a format"),
  attendees: optionalText,
  age_range: optionalText,

  // Audience
  audience_who: optionalText,
  audience_need: optionalText,
  audience_context: optionalText,
  audience_outcome: optionalText,

  // About the organisation
  about_organisation: optionalText,

  // The invitation
  invitation_types: z.array(z.string()).min(1, "Please select at least one option"),
  invitation_other: optionalText,
  topic: optionalText,
  scripture_direction: optionalText,
  session_length: optionalText,
  interaction: optionalText,
  leave_with: optionalText,

  // Event context
  event_purpose: optionalText,
  why_inviting: optionalText,
  other_speakers: optionalText,
  other_speakers_who: optionalText,
  tone: optionalText,

  // Logistics
  accommodation: optionalText,
  transportation: optionalText,
  nearest_airport: optionalText,
  travel_dates: optionalText,
  visa_requirements: optionalText,
  logistics_additional: optionalText,

  // Honorarium & expenses
  honorarium_arrangement: z.string().min(1, "Please indicate the arrangement available"),
  budget_range: optionalText,
  expenses_covered: optionalText,

  // Media, recording & content use
  media_uses: z.array(z.string()),
  media_details: optionalText,

  // Anything else
  anything_else: optionalText,
  heard_via: z.string().min(1, "Please let us know how you heard about Lady Cyd"),
});
