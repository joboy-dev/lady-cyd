# Site Update Plan V2: Lady Cyd's Corrections

This is a review document and no code has been changed yet. Each item covers what changes, where it changes, and what we still need from Lady Cyd. All open questions are collected at the bottom.

**Implementation status:** items 1, 2, 3, 5, 6 and 8 are built and the production build passes. Item 4 is waiting on Lady Cyd's walk-through and item 7 on her LinkedIn URL. Still open: tier prices (the Investment line stays hidden until `investment` is filled in `lib/data/coaching-tiers.ts`), the session counts, and the assessment-notification choice (`NOTIFY_ON_ASSESSMENT=true` turns it on). Kit needs a "Gathering Waitlist" tag, whose ID goes in `CONVERTKIT_TAG_GATHERING_WAITLIST`.

**Revision 2:** this version includes Lady Cyd's first round of answers. Items marked **✅ Settled** need nothing more from her. The open questions at the bottom are reworded in plain language so they can be forwarded as-is.

---

## Proposed Site Structure (affects items 1, 2, 3)

There are three new or reworked pages. This is how they would fit together:

| Page | Route | Purpose |
|---|---|---|
| One-on-One Coaching | `/coaching` **(new)** | The coaching tiers page from item 3 |
| Clarity Call | `/work-with-me` (existing) | The free 30-minute booking page from item 1 |
| Invite Lady Cyd | `/invite` **(new)** | The speaking and ministry content from item 2 |
| Invitation Form | `/invite/request` **(new)** | The long invitation form and its "Request Received" screen |

**Navigation:** "Work With Me" in the navbar becomes a dropdown with three entries: One-on-One Coaching, Clarity Call and Invite Lady Cyd. The footer "Work With Me" column gets the same three links. The sitemap gets the three new routes.

**Why the Clarity Call keeps `/work-with-me`:** the existing emails (the Soul Audit emails and the clarity-call emails) already link there, so keeping the route means none of those links break.

**Why the invitation form gets its own page:** the form has around 60 fields across 10 sections. Putting it under the long speaking content would make that page very hard to read. Both "Invite Lady Cyd" buttons on `/invite` would link to `/invite/request`.

---

## 1. Clarity Call Booking Page

**File:** `app/(external)/work-with-me/page.tsx`

**Add** a clear details block near the top of the page and again right above the application form:

> **30-Minute Clarity Call**
> Investment: Free
> Format: Virtual
>
> *Please note: The Clarity Call is not a coaching session. It is an introductory conversation and fit assessment. If we determine that coaching is appropriate, you will be guided toward the most suitable coaching pathway.*

**Conflicts this creates, which need fixing in the same change:**

- **The investment line from the last round contradicts "Investment: Free."** Earlier we added *"This is a premium, application-only engagement for women ready to invest at a private-coaching level"* above the Clarity Call form. Since the call is now free, that line moves to the new Coaching page (item 3), where it actually applies.
- **The hero copy says the call is "the most intimate and rigorous level of transformation work available. This is not open to everyone."** That contradicts "not a coaching session." I'll rewrite it to frame the call as a free introductory fit conversation.
- **Two emails describe the Clarity Call as coaching:**
  - `lib/email/templates/soul-audit-email-1.tsx` says "A personal, private coaching conversation with Lady Cyd"
  - `lib/email/templates/soul-audit-email-3.tsx` says "A Clarity Call is a private 30-minute coaching conversation"

  Both get reworded to "introductory conversation and fit assessment."
- **Page metadata** currently says "Apply for private 1:1 trauma-informed coaching." It gets updated to describe the free Clarity Call.

**New field (depends on open question 3):** the Clarity Call application form gets a new field, "Which experience are you interested in?", with the four coaching tiers from item 3 plus "Not sure yet." When someone clicks a tier button on `/coaching`, the form opens with that tier already selected, so Lady Cyd knows which tier each applicant is interested in.

---

## 2. Invite Lady Cyd (New Pages)

### 2a. Content page: `app/(external)/invite/page.tsx`

All of Lady Cyd's copy goes in verbatim, using the site's existing visual style:

1. **Hero:** "Invite Lady Cyd" / "Speaking. Teaching. Ministry. Formation." / the intro paragraphs / the three closing lines ("Truth should produce movement…") / an **[Invite Lady Cyd]** button
2. **What I Speak On:** the central conviction line, then the five numbered topics (01 to 05), each with its keyword line, description and closing lines
3. **How I Can Serve Your Audience:** six engagement-type cards (Keynote, Biblical Teaching, Ministry & Prayer, Workshops & Masterclasses, Panels & Conversations, Youth & Children Formation)
4. **My Approach:** the five lenses (Scripture, Trauma-Informed Understanding, Family Systems, Personal Governance, Practical Execution) and the closing lines
5. **What You Can Expect:** the expectation list and the preparation note
6. **For Churches, Conferences & Organisations:** the list of 13 "I am available for" items and the in-person, virtual or hybrid note
7. **Let's Have the Right Conversation:** the closing manifesto and a second **[Invite Lady Cyd]** button

### 2b. Form page: `app/(external)/invite/request/page.tsx`

- The form intro copy and the disclaimer ("Submission does not constitute confirmation…")
- 10 form sections, matching her document exactly: Your Details, Your Event, Tell Me About Your Audience, About Your Organisation, The Invitation, Event Context, Logistics, Honorarium & Expenses, Media/Recording & Content Use (with her permission notice), and Anything Else
- **[Submit Invitation Request]** button
- **On success,** the form is replaced by the "Request Received" panel with her exact copy and a **[Return to Website]** button that goes to the homepage

### 2c. Building the form

| File | What it is |
|---|---|
| `lib/validators/general.ts` | New `invitationSchema` (zod) |
| `components/shared/form/FormCheckboxGroup.tsx` | **New** multi-select checkbox group. The existing `FormCheckbox` only handles a single yes/no box, but this form needs "Select all that apply" for the invitation types and the media questions. |
| `components/shared/form/FormRadioGroup.tsx` | **New** single-choice group for the Format, Honorarium arrangement and Yes/No questions |
| `components/shared/form/appForms/InvitationForm.tsx` | The form itself, built from the existing `FormSection`, `FormInput`, `TextAreaInput`, `SelectField` and `PhoneInput` plus the two new groups above |
| `app/actions/invitation.ts` | New server action that follows the existing `clarity-call.ts` pattern. It sends a full notification email to Lady Cyd at Hello@ladycyd.online (with reply-to set to the requester) and a confirmation email to the requester. |
| `lib/email/templates/invitation-notification.tsx` | New email to Lady Cyd listing every answer, grouped by section |
| `lib/email/templates/invitation-confirmation.tsx` | New email to the requester that restates the "Request Received" copy |

**How I'd handle the fields her document leaves open** (open question 5):

- **Required fields:** Full name, Organisation, Email, Phone/WhatsApp, Country, Event name, Event type, Proposed date, Format, at least one invitation type, Honorarium arrangement, and How did you hear. Everything else is optional, so the form doesn't put people off.
- **"Event Type":** a dropdown built from her own list (Conference, Women's gathering, Church service, Leadership event, Retreat, Prayer gathering, Discipleship programme, Youth event, School programme, Workshop, Panel, Podcast/Interview, Other).
- **Yes/No questions** (accommodation, transport, Q&A, other speakers): each has the choices Yes, No and Not sure yet.
- **"Tell me about you and your church/organisation/institution":** her document has a heading here but no question underneath it, so it becomes one open text box.

---

## 3. One-on-One Coaching (New Page)

**File:** `app/(external)/coaching/page.tsx`

All copy goes in verbatim, in this order:

1. **Hero:** "One-on-One Coaching with Lady Cyd" / "Break the Pattern. Build the System."
2. **Opening letter:** "My Grits & Graceful Greatness, …" through to "…without abandoning yourself or your faith and values."
3. **This Coaching Is For You If…:** the seven numbered statements
4. **Why My Coaching Is the Main Deal:** five cards (Clarity, Governance, Regulation, Reconstruction, Execution)
5. **Coaching Tiers:** four tier cards, each showing the name, duration, who it's for, the includes list, "Best for" and a CTA button:
   - The Governance Journey (12-Week) with **Investment** and **[Apply for 12-Week Coaching]**
   - The Reconstruction Journey (6-Week) with **Investment** and **[Apply for 6-Week Coaching]**
   - The Governance Intensive with **Investment** and **[Book a Governance Intensive]**
   - The Grit & Graceful Gathering (Group) with **no price** and **[Join the Waitlist]**
6. **The premium investment line**, moved here from the Clarity Call page (see item 1)
7. **Which Experience Is Right for You?:** four "Lady Cyd, I need…" rows, each linking to its tier card further up the page
8. **A Note Before You Apply:** her full note
9. **No Refund Policy:** her exact wording, shown as a clearly separated notice block
10. **More Success Stories That Inspire Us:** all 8 testimonials, using the existing `TestimonialsShowcase` component
11. **Not Ready for One-on-One Coaching Yet?** with a link to the Wound Point Assessment (`/whole/assessment`). **✅ Settled.**
12. **Support line:** "Need support? Please write to Hello@ladycyd.online". **✅ Settled:** the site keeps Hello@ladycyd.online everywhere, so the Gmail address in her document is not used.
13. **Closing:** "Break the Pattern. Build the System." and **[Apply to Work With Lady Cyd]**

**Prices:** Lady Cyd will send these later. Per her answer, only the one-on-one tiers carry a price: the 12-Week Journey, the 6-Week Journey and the Governance Intensive (which is also a private session). The Gathering is a group programme, so its card shows no price. Until the prices arrive, the Investment line on those three cards is hidden rather than shown blank, so the page can go live without them.

**Session counts (open question 1):** these come from **her "Corrections for Joseph" document**, not from the current website. The page doesn't exist on the site yet. These are the exact lines from her document:

> **The Governance Journey (12-Week Private Coaching)** … Includes: "3 private 75-minute coaching sessions"
>
> **The Reconstruction Journey (6-Week Private Coaching)** … Includes: "1 private 75-minute coaching sessions"

**Where the buttons go (open questions 3 and 4):**

- **The three "Apply"/"Book" buttons** go to the Clarity Call form (`/work-with-me#application`), with the tier preselected (see item 1).
- **"Join the Waitlist"** opens a small name-and-email form. Each sign-up is added to her ConvertKit (Kit) account with a `gathering-waitlist` tag, and she also gets a short notification email at Hello@ladycyd.online.

**Data file:** the tier content goes into `lib/data/coaching-tiers.ts`, the same pattern as `courses.ts`, so prices and inclusions can be edited in one place.

---

## 4. "I can't find some of the testimonials"

**Pending her check.** Joseph has looked at the live site and the testimonials are there. Lady Cyd will go through the website to confirm.

For reference, this is where each one appears today:

| Testimonial | Where it appears |
|---|---|
| Nicola, Ruth, Awele (frameworks), Ijeoma, Lilian | Homepage, in the "What changes when the work becomes structured?" section |
| Awele ("God bless you, ma…") | About page, right after The Methodology |
| Maria | WHOLE Life Design page, after "What It Is" |
| Lena | WHOLE Life Design page, after "What Is Inside" |

The new **"More Success Stories That Inspire Us"** section on the Coaching page (item 3) will show all 8 in one place.

---

## 5. Spotify & Apple Podcasts ✅ Settled

**File:** `app/(external)/podcast/page.tsx`

- **Spotify:** uncomment the entry, set it to `https://open.spotify.com/show/3Th9FJdiNmCvDZGY50igI9` and mark it available. This also adds a Spotify button to the hero.
- **Apple Podcasts:** not applicable. The entry stays commented out so it can be switched back on later if she ever lists the show there.

---

## 6. YouTube Link Lands on a Playlist ✅ Settled

There is no podcast playlist, so the podcast page and the footer both keep linking to her channel. To stop visitors landing on a playlist, both links change from `https://www.youtube.com/@LADYCYD` to `https://www.youtube.com/@LADYCYD/videos`. That address always opens her full list of videos, whatever her channel's Home tab shows.

**Files:** `components/shared/Footer.tsx` and `app/(external)/podcast/page.tsx` (two places).

**Why it happened (for Lady Cyd):** the website was already linking to her channel, not a playlist. Her channel's **Home tab** shows a featured playlist at the top, so that's what visitors saw first. She can change that in YouTube Studio under **Customisation → Layout** if she wants, but the website fix above doesn't depend on it.

---

## 7. LinkedIn Link Goes to Her Old Page

**Follow-up needed.** The URL she sent, `www.linkedin.com/in/ladycyd`, is **the same link the website already uses**. So the website is pointing where she asked, but that address opens her old profile.

This usually means she has two LinkedIn accounts, and the custom `ladycyd` address belongs to the old one. Two ways to fix it:

- **Option A (quickest):** she logs into her **current** profile, clicks **Edit public profile & URL** on the right, and copies the address shown under "Edit your custom URL". It will look like `linkedin.com/in/something-12345`. She sends us that and we update the footer.
- **Option B (cleaner, takes longer):** she removes the `ladycyd` custom address from the old account (or closes it), then claims `ladycyd` on the current account. The website link then works without any change from us. LinkedIn can take a few days to free up a released custom address.

**File:** `components/shared/Footer.tsx` (one-line change, only needed with Option A).

---

## 8. Wound Point Assessment: Email Capture (new, from her audit-link answer)

Lady Cyd described the flow she expects: *a visitor fills out the audit (the Wound Point Assessment) and submits it, the visitor gets an email with the PDF, and Lady Cyd gets the visitor's email address.*

I checked the assessment page (`/whole/assessment`). It has two routes, and **neither fully does this today:**

| Route on the page | What happens now | Gap |
|---|---|---|
| **Take the online quiz** | The visitor gets a results email. | Their email address isn't saved anywhere, so Lady Cyd never receives it. **No PDF is sent.** |
| **Soul Audit (enter name and email, pick 3 wound points)** | The address is added to her ConvertKit (Kit) account with a `soul-audit` tag, and the visitor gets the 3-email Soul Audit sequence. | The PDF is never actually sent. The emails don't include the PDF link, even though the PDF file is set up. |

**Fix:**

- **Quiz route:** `app/actions/assessment.ts` (`sendAssessmentResults`) adds the visitor to Kit with a `wound-point-assessment` tag plus a tag for their main wound, and the results email gets a **Download Your Soul Audit PDF** button.
- **Soul Audit route:** `lib/email/templates/soul-audit-email-1.tsx` (the first email, sent immediately) gets the same PDF download button.
- **Optional (open question 2):** each submission also sends Lady Cyd a short notification at Hello@ladycyd.online with the visitor's name, email and results.
- **Clean-up:** `requestSoulAuditPDF` in `app/actions/assessment.ts` is no longer used by any page and gets removed.

---

## Build Order

1. **Item 1:** Clarity Call details, the copy conflicts and the email wording. This is small and has no dependencies.
2. **Items 5, 6:** Spotify and YouTube link changes. Ready now.
3. **Item 8:** assessment email capture and the PDF link. Ready now, apart from the optional notification.
4. **Item 3:** Coaching page. It can be built now with prices hidden. The prices and corrected session counts go in when they arrive.
5. **Item 2:** Invite Lady Cyd. This is the largest piece because of the form, the two new form components, the server action and two emails.
6. **Navigation, footer and sitemap updates**, done last once all the new routes exist.
7. **Item 7:** LinkedIn, once she sends her current profile URL (or does Option B, which needs no code change).

---

## Open Questions for Lady Cyd

**Still needed from her:**

1. **Session counts.** These are from her own "Corrections for Joseph" document (the Coaching Tiers section), not the website. It says:
   - 12-Week Governance Journey: "3 private 75-minute coaching sessions"
   - 6-Week Reconstruction Journey: "1 private 75-minute coaching sessions"

   Three sessions over 12 weeks, or one over 6 weeks, looks low next to the rest of each package. Are those numbers right? If not, what should they be (for example, weekly or every two weeks)?
2. **Assessment notifications.** Every assessment sign-up will be saved in Kit, where she can see the full list at any time. Does she also want an email in her inbox for each new submission? That's handy at first, but it can get busy if many people take the assessment.
3. **Tier buttons.** On the Coaching page, each tier has a button: "Apply for 12-Week Coaching", "Apply for 6-Week Coaching" and "Book a Governance Intensive". Where should a visitor go after clicking?
   - **Option A (current plan):** every button opens the free Clarity Call application, with that tier already filled in. She has the 30-minute conversation first, then sends payment details herself if they're a fit. This matches her note that the Clarity Call is the fit assessment.
   - **Option B:** some tiers skip the Clarity Call and go straight to payment or a booking calendar. The Governance Intensive is the most likely one, since it's a single 90-minute session. For this, we'd need the payment or booking link (for example, a Selar product page or a Calendly link).

   Which does she prefer, and for which tiers?
4. **Gathering waitlist.** The Gathering card has a "Join the Waitlist" button. Visitors type their name and email, and those details are saved as a contact in her Kit account with a "Gathering Waitlist" tag. When the group opens, she can email everyone on the waitlist at once from Kit. She also gets a short email each time someone joins. Is that OK, or would she prefer something else (for example, only an email to her inbox)?
5. **Invitation form choices.** This is section 2c of this document, "Building the form", under item 2. Her document lists the form's questions but doesn't say which ones people must answer, so I'd do the following:
   - **Must be filled in:** full name, organisation, email, phone/WhatsApp, country, event name, event type, proposed date, format, at least one invitation type, honorarium arrangement, and how they heard about her. Everything else is optional, so the form doesn't put people off.
   - **Event Type** is a dropdown of her own list (Conference, Women's gathering, Church service, and so on).
   - **Yes/No questions** (accommodation, transport, Q&A, other speakers) get a third choice, "Not sure yet", because organisers often don't know yet when they first enquire.
   - **"Tell me about you and your church/organisation/institution"** has a heading but no question underneath in her document. It becomes one open text box.

   Is that OK, or should anything change?
6. **Prices:** confirm that the Governance Intensive counts as one-on-one, so it gets a price like the two Journeys, and that only the Gathering has no price. She's sending the amounts later.
7. **Name spelling:** the document has both "The Grit & Graceful Gathering" and "The Grit Graceful Gathering." The plan uses **The Grit & Graceful Gathering** unless she says otherwise.
8. **LinkedIn:** see item 7. Either send the URL of her current profile, or move the `ladycyd` address over to it.
9. **Testimonials:** confirm after her walk-through of the site that nothing is missing.

**Settled:** support email (Hello@ladycyd.online), the audit link (`/whole/assessment`), Spotify (link received), Apple Podcasts (not applicable) and the YouTube playlist (not applicable, so the links go to the channel's videos list).
