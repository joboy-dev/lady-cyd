export interface InvitationOption {
  value: string;
  label: string;
}

const opts = (labels: string[]): InvitationOption[] =>
  labels.map((label) => ({ label, value: label }));

export const eventTypeOptions = opts([
  "Conference",
  "Women's gathering",
  "Church service",
  "Leadership event",
  "Retreat",
  "Prayer gathering",
  "Discipleship programme",
  "Youth and young people's event",
  "School or educational programme",
  "Workshop or masterclass",
  "Panel or fireside conversation",
  "Podcast or interview",
  "Special ministry gathering",
  "Other",
]);

export const formatOptions = opts(["In-person", "Virtual", "Hybrid"]);

export const invitationTypeOptions = opts([
  "Keynote",
  "Biblical Teaching",
  "Preaching / Exhortation",
  "Prayer / Ministry",
  "Women's Ministry",
  "Leadership Teaching",
  "Workshop / Masterclass",
  "Panel / Conversation",
  "Youth Session",
  "Girls' Formation Session",
  "Marriage / Family Session",
  "Discipleship Session",
  "Podcast / Interview",
  "Fireside Conversation",
  "Other",
]);

export const yesNoOptions = opts(["Yes", "No", "Not sure yet"]);

export const honorariumOptions = opts([
  "Honorarium available",
  "Budget range available",
  "Open to discussion",
  "Ministry / volunteer invitation",
  "Other",
]);

export const mediaOptions = opts([
  "Photographed",
  "Recorded",
  "Livestreamed",
  "Published on social media",
  "Published on YouTube or another platform",
  "Repurposed into short-form content",
  "Used as podcast content",
  "Distributed internally",
  "Used for paid/commercial content",
  "Sold or included within a paid programme/course",
]);

export const heardViaOptions = opts([
  "Instagram",
  "LinkedIn",
  "YouTube",
  "Website",
  "Podcast",
  "Referral",
  "Church / Ministry",
  "Event",
  "Other",
  "Facebook",
  "Substack",
  "Email",
]);
