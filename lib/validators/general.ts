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
