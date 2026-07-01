import type { WoundType } from './questions';

// ── Constants ─────────────────────────────────────────────────────────────────

export const POINTS_PER_ANSWER = 2; // change here only

// If 2nd highest wound score >= this threshold, the person has multiple active wounds
const SECONDARY_WOUND_THRESHOLD = 8; // 4 answers × 2 pts

// ── Types ─────────────────────────────────────────────────────────────────────

export interface Scores {
  identity: number;
  relational: number;
  purpose: number;
  legacy: number;
  rhythm: number;
  voice: number;
}

export interface AssessmentResult {
  primary: WoundType;
  scores: Scores;
  multipleActive: boolean;
  rankedWounds: { wound: WoundType; score: number }[];
}

// ── Scoring ───────────────────────────────────────────────────────────────────

export function scoreAnswers(answers: WoundType[]): Scores {
  const scores: Scores = {
    identity: 0,
    relational: 0,
    purpose: 0,
    legacy: 0,
    rhythm: 0,
    voice: 0,
  };

  for (const wound of answers) {
    scores[wound] += POINTS_PER_ANSWER;
  }

  return scores;
}

export function rankWounds(scores: Scores): { wound: WoundType; score: number }[] {
  return (Object.entries(scores) as [WoundType, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([wound, score]) => ({ wound, score }));
}

export function getPrimaryWound(scores: Scores): WoundType {
  return rankWounds(scores)[0].wound;
}

export function hasMultipleActiveWounds(scores: Scores, primary: WoundType): boolean {
  const ranked = rankWounds(scores);
  const second = ranked.find((r) => r.wound !== primary);
  return second ? second.score >= SECONDARY_WOUND_THRESHOLD : false;
}

export function computeResult(answers: WoundType[]): AssessmentResult {
  const scores = scoreAnswers(answers);
  const rankedWounds = rankWounds(scores);
  const primary = rankedWounds[0].wound;
  const multipleActive = hasMultipleActiveWounds(scores, primary);

  return { primary, scores, multipleActive, rankedWounds };
}
