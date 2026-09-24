# Site Update Plan — Lady Cyd's Walkthrough Feedback

**Status: implemented.** All 6 fixes below are built. Category label on testimonial cards defaulted to "Client Story" (generic, same on every card) since no answer was given — easy to change per-card later if wanted.

---

## Fix 1 — Hero CTA Hierarchy

**Problem:** Two CTAs sit side-by-side in the homepage hero with equal visual footprint — "Take The Wound Point Assessment" and "Register For Healing Harbour Live" — no signal for which to click first.

**Change:**
- Homepage hero (`app/page.tsx`, hero CTA row) → **remove** "Register For Healing Harbour Live" from the hero entirely.
- "Take The Wound Point Assessment" becomes the single button in the hero, full primary weight.
- Per Lady Cyd's copy in Fix 4, update the button label to: **"Start Here — Take The Wound Point Assessment"**.
- "Register For Healing Harbour Live" stays reachable via: (a) main nav, (b) the WHOLE Life Design™ section further down the homepage, (c) its own existing CTA block at the bottom of the homepage — all already exist, so nothing is lost, just decluttered from the hero.

**Files touched:**
- `app/page.tsx` — hero CTA block (~line 142-150)
- `components/shared/navbar/PublicNavbar.tsx` — verify "Healing Harbour" / Inner Circle already has a nav entry (will add one if missing)

---

## Fix 2 — WHOLE™ Naming Collision

**Problem:** "WHOLE™" is currently used for two different things — the overall 5-stage methodology (**The WHOLE™ Pathway™**) and the flagship paid coaching programme (Stage 5, also called "WHOLE™"). Confusing for first-time visitors.

**Change — rename the flagship programme only:**
- Keep: **The WHOLE™ Pathway™** (the 5-stage methodology name — unchanged)
- Keep: **WHOLE Life Design™** (Stage 03, free ecosystem — unchanged)
- Rename: **WHOLE™** (Stage 05, flagship paid coaching) → **WHOLE Restoration™**

New architecture:
```
The WHOLE™ Pathway™
→ RECOGNIZE → REVEAL → REBUILD → RESTORE → WHOLE Restoration™
```

**This requires careful, instance-by-instance editing** — the string "WHOLE™" appears in both contexts throughout the codebase, so this is not a find-and-replace. Every occurrence needs to be read in context and only the flagship-programme references renamed.

**Files touched (flagship references only):**
| File | What changes |
|---|---|
| `app/page.tsx` | Stage 05 entry in `stages` array: name + heading "Five stages. One destination: WHOLE™." → "…WHOLE Restoration™." |
| `app/(external)/transformation-pathway/page.tsx` | Stage 05 entry, "WHOLE™ — Coming Soon" badge |
| `app/(external)/whole-life-design/page.tsx` | `pathwayStages` Stage 05 entry (pathway strip) |
| `app/(external)/whole/page.tsx` | Entire page — eyebrow, giant heading, metadata title/description, all body copy. **Recommend also renaming the route** from `/whole` → `/whole-restoration` since the page is still "Coming Soon" and not live yet — this is the cleanest time to fix the URL before it's shared anywhere. |
| `lib/email/templates/soul-audit-email-1.tsx` | "WHOLE™ — The Full Restoration Journey" CTA block, link href |
| `lib/email/templates/soul-audit-email-3.tsx` | "Pathway 2 — WHOLE™" block, all body copy, link href |
| `components/shared/navbar/PublicNavbar.tsx` | Nav dropdown description "...to WHOLE™" trailing phrase |

**Not touched** (these refer to the pathway, not the flagship — stay as "WHOLE™"):
`components/shared/Footer.tsx`, `app/(external)/podcast/page.tsx`, `app/(external)/about/page.tsx` (CTA link), `app/(external)/inner-circle/page.tsx` (×2)

**Open question:** OK to change the live route `/whole` → `/whole-restoration`? If anything (ads, socials, email signature) already links to `/whole`, I'll add a redirect so old links don't break either way.

---

## Fix 3 — Testimonial Duplication Cleanup

**Problem confirmed:** All 8 testimonials render on **every** page that uses `TestimonialsGrid` (homepage, About, WHOLE Life Design) — same content, same order, everywhere. On top of that, the component internally duplicates the array a second time (`[...testimonials, ...testimonials]`) to loop its auto-scroll marquee, which is where the "same testimonial twice" visual bug comes from.

**Renames (apply everywhere a name appears — quote text unchanged):**
- Eunice → **Awele** (both her quotes: "The frameworks Lady Cyd teaches…" and "God bless you ma…")
- Nicole → **Lilian**

**Structural change:** Retire the auto-scroll marquee everywhere. Replace with two new purpose-built pieces:
1. **`TestimonialsShowcase`** — static, clean editorial grid. Takes an explicit ordered list of testimonial IDs, no duplication, no auto-scroll. Card hierarchy top→bottom: small uppercase category label → large quote → name → muted designation (designation line only renders when the testimonial has one — most don't).
2. **`TestimonialSpotlight`** — single-quote pull-block for the one-off placements on About and WHOLE Life Design.

`lib/data/testimonials.ts` gets an `id` field added to each entry so pages can reference specific testimonials by ID instead of always getting all 8.

**Placement — Homepage (5 testimonials, in this exact order):**
1. Nicola — *"Lady Cyd has a gift for helping you see…"*
2. Ruth — *"Working with Lady Cyd helped me deal with imposter syndrome…"*
3. Awele — *"The frameworks Lady Cyd teaches are not motivational…"*
4. Ijeoma — *"Lady Cyd showed me how to up level my mind…"*
5. Lilian — *"This course has been everything God has been showing me…"*

New section heading: **"What Changes When The Work Becomes Structured?"**
Section stays in its current slot (after the About/Pathway section, before the WHOLE Life Design closing CTA) — this already matches her requested placement, so no reordering needed, just a content swap.
Immediately after: new line **"Your restoration has a pathway."** → button **"Start With The Wound Point Assessment →"**

**Placement — About page (1 testimonial):**
- Awele — *"God bless you, ma…"* — placed right after "The Methodology" section (Integral Restoration™ Framework), before "Beyond The Platform."
- Existing `TestimonialsGrid` block near the bottom of the page is removed.

**Placement — WHOLE Life Design page (2 testimonials):**
- Maria — *"Thank you, Lady Cyd. This extremely resonates…"* — placed near "What It Is" (the section introducing the experience / why it exists).
- Lena — *"This is such an intentional way…"* — placed after "What Is Inside" (the section explaining the community/formation environment).
- Existing `TestimonialsGrid` block is removed.

**Files touched:**
| File | Change |
|---|---|
| `lib/data/testimonials.ts` | Add `id` field to each entry; rename Eunice→Awele, Nicole→Lilian |
| `components/shared/TestimonialsShowcase.tsx` | New component (static editorial grid) |
| `components/shared/TestimonialSpotlight.tsx` | New component (single pull-quote) |
| `components/shared/TestimonialsGrid.tsx` | Removed from all pages; delete file once unused |
| `app/page.tsx` | Swap testimonial section content + heading, add pathway CTA line |
| `app/(external)/about/page.tsx` | Move testimonial to new spot, swap to spotlight component |
| `app/(external)/whole-life-design/page.tsx` | Remove grid, add 2 spotlight placements |

**Designations — resolved.** Only Nicola (*"Interior Decorator & Life Coach"*) and Awele's "frameworks" quote (*"Entrepreneur"*) have a designation. Ruth, Ijeoma, Lilian, Lena, Maria, and Awele's "God bless you" quote carry **no designation** — card renders name only, no muted line beneath it, for those.

**Open question remaining:**
1. **Category label** — the card spec calls for "a small uppercase label" above each quote (e.g. "CLIENT STORY"). Should this be the same label on every card, or a specific tag per testimonial (e.g. "Young Emerging Leader," "Coaching Client")?

---

## Fix 4 — Credibility Signals

**4a. Homepage hero credibility line**
Add directly beneath the hero subtext, above the (now single) primary CTA:
> Trauma-Informed Coaching Certified | Founder, Grit & Graceful Coaching Company

Small, secondary weight — doesn't compete with the headline.

**4b. About page — new "Professional Formation & Recognition" section**
New section inserted near the top of the About page, **before** "Her Story" (the personal narrative). Content:

- **Heading:** Professional Formation & Recognition
- **Intro:** "Lady Cyd Alex-Emenike is a Trauma-Informed Coach, Soul Restoration Coach, Family Restoration Strategist and Visionary Leadership Mentor whose work integrates trauma-informed practice, identity formation, family systems thinking and faith-aligned transformation."
- **Stats:** 5 years in practice · 1,700+ women coached and transformed · 3,900+ young emerging leaders coached and mentored

**Resolved:** the existing "Credentials & Titles" section further down the page (Roles & Titles + Formal Certifications & Training) stays exactly as-is — nothing removed, nothing replaced. **Add one line to it:** Advanced Formation & Leadership Studies — **Immerse Coaching Company**, alongside the existing Mathetheuo Institute line (both stay, as two separate credential lines). The new top-of-page section above does not repeat certification names — it's the intro + stats only, so there's no duplication between the two sections.

**Files touched:**
- `app/page.tsx` — hero credibility line
- `app/(external)/about/page.tsx` — new intro/stats section near top; add Immerse Coaching Company line to existing Credentials & Titles section

---

## Fix 5 — Clarity Call Confirmation Email

**Status: already built, no action needed.** Confirmed in the code:
- `app/actions/clarity-call.ts` already sends an applicant-facing confirmation email on every submission (`lib/email/templates/clarity-call-confirmation.tsx`), separate from the internal notification to Lady Cyd.
- That email already: restates the 3–5 business day window, tells them Lady Cyd reads every application personally, and points them to WHOLE Life Design™ while they wait.

**Optional micro-enhancement** (not required, flagging since your note mentioned it as an option): the email currently points generically to WHOLE Life Design™. I could make that more specific — e.g. a direct invite to the *next* Healing Harbour Live date, or a link to a Journal post — if you want the "stay warm" touch to feel more concrete. Let me know if you want this or if the current version already covers it.

---

## Fix 6 — Investment Signal on Work With Me Page

**Status: not yet done — confirmed nothing on the page currently signals investment tier.** The page has exclusivity language ("not open to everyone," reviewed personally) but no calibrating line about financial commitment.

**Change:** Add one line near the application form, in the "Application Form" section intro (right before the form, alongside the existing "Be honest. Be specific." copy):

> This is a premium, application-only engagement for women ready to invest at a private-coaching level.

**Files touched:**
- `app/(external)/work-with-me/page.tsx` — Application Form section intro

---

## Summary — Build Order

1. Fix 6 (investment line) — trivial, one line, no dependencies
2. Fix 1 + Fix 4a (hero CTA cleanup + credibility line) — same section of `app/page.tsx`, do together
3. Fix 5 — nothing to build, just confirm with you it's sufficient
4. Fix 2 (WHOLE™ → WHOLE Restoration™ rename) — needs your answer on route rename first
5. Fix 4b (About formation section) — needs your answer on the credentials conflict first
6. Fix 3 (testimonials rework) — biggest piece, needs your answers on designations/category label/subheading first — will build the two new components and data restructuring once content questions are resolved

## Open Questions — Status

1. ~~Rename `/whole` route?~~ **Resolved: keep route as `/whole`**, only visible copy changes to WHOLE Restoration™.
2. ~~Missing designations for Ruth, Awele, Ijeoma, Lilian?~~ **Resolved: none of them have one.** Only Nicola and Awele's "frameworks" quote keep their existing designations; every other card is name-only.
3. **Still open:** Category label on testimonial cards — one generic label for all, or a specific tag per person?
4. ~~Homepage subheading?~~ **Resolved: no subheading for now** — heading only. Will send copy later if wanted.
5. ~~Immerse Coaching Company vs. Mathetheuo Institute?~~ **Resolved: not a replacement — add Immerse Coaching Company as an additional line in the existing "Credentials & Titles" section, keep Mathetheuo Institute as-is.** (Note: this also means the new "Professional Formation & Recognition" section on About should list only what's newly added here, without duplicating/conflicting with the existing block — see updated Fix 4b below.)
6. ~~Fix 5 email — enhance?~~ **Resolved: leave as-is.**
