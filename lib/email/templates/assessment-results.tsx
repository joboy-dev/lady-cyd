import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { WoundType } from '@/lib/assessment/questions';
import { woundResults, woundLabels } from '@/lib/assessment/results';
import type { Scores } from '@/lib/assessment/scoring';

interface Props {
  name: string;
  primary: WoundType;
  scores: Scores;
  multipleActive: boolean;
}

export function AssessmentResultsEmail({ name, primary, scores, multipleActive }: Props) {
  const firstName = name.split(' ')[0];
  const result = woundResults[primary];

  const rankedScores = (Object.entries(scores) as [WoundType, number][])
    .sort((a, b) => b[1] - a[1])
    .filter(([, score]) => score > 0);

  return (
    <Html>
      <Head />
      <Preview>Your Wound Point Assessment result — {result.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerLabel}>THE 10 WOUND POINTS™ ASSESSMENT</Text>
            <Text style={headerSub}>Grit &amp; Graceful Coaching Company · Lady Cyd Alex-Emenike</Text>
            <Hr style={divider} />
          </Section>

          <Section style={section}>
            <Text style={greeting}>Dear {firstName},</Text>
            <Text style={body}>
              You have named the wound. The clarity you have now is not the end —
              it is the beginning of the real work of restoration.
            </Text>
          </Section>

          <Section style={resultBox}>
            <Text style={resultLabel}>YOUR PRIMARY WOUND POINT</Text>
            <Heading style={woundName}>{result.name}</Heading>
            <Text style={tagline}>{result.tagline}</Text>
            <Hr style={divider} />
            <Text style={description}>{result.description}</Text>
          </Section>

          {rankedScores.length > 1 && (
            <Section style={section}>
              <Text style={scoresLabel}>YOUR WOUND POINT SCORES</Text>
              {rankedScores.map(([wound, score]) => (
                <Text key={wound} style={scoreRow}>
                  {woundLabels[wound]}: {score} pts{wound === primary ? ' ← Primary' : ''}
                </Text>
              ))}
            </Section>
          )}

          <Hr style={divider} />

          <Section style={section}>
            <Text style={nextStepLabel}>YOUR RECOMMENDED NEXT STEP</Text>
            <Text style={body}>{result.primaryCta.label}</Text>
            <Text style={ctaUrl}>ladycyd.online{result.primaryCta.href}</Text>

            {multipleActive && (
              <>
                <Text style={multipleNote}>
                  Your results show significant activity across multiple wound points.
                  The most direct path to comprehensive restoration is a private Clarity Call with Lady Cyd.
                </Text>
                <Text style={body}>Apply For a Clarity Call</Text>
                <Text style={ctaUrl}>ladycyd.online/work-with-me</Text>
              </>
            )}
          </Section>

          <Section style={pullquote}>
            <Text style={quoteText}>
              &ldquo;You are not broken. You are not behind. You are at a threshold.&rdquo;
            </Text>
            <Text style={quoteAttr}>— Lady Cyd Alex-Emenike</Text>
          </Section>

          <Hr style={divider} />

          <Section style={section}>
            <Text style={footer}>
              © The 10 Wound Points™ · Grit &amp; Graceful Coaching Company
            </Text>
            <Text style={footer}>
              A Lady Cyd Alex-Emenike Proprietary Framework · All Rights Reserved
            </Text>
            <Text style={footer}>ladycyd.online · @cydalexemenike</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#0d0d0d', fontFamily: 'Georgia, serif' };
const container = { margin: '0 auto', padding: '40px 20px', maxWidth: '600px' };
const header = { textAlign: 'center' as const, paddingBottom: '24px' };
const headerLabel = { fontSize: '10px', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 6px' };
const headerSub = { fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 20px' };
const section = { paddingBottom: '20px' };
const greeting = { fontSize: '17px', color: '#e0e0e0', margin: '0 0 12px' };
const body = { fontSize: '16px', color: '#cccccc', lineHeight: 1.8, margin: '0 0 16px' };
const resultBox = { backgroundColor: 'rgba(197,75,140,0.08)', border: '1px solid rgba(197,75,140,0.2)', padding: '24px', marginBottom: '24px' };
const resultLabel = { fontSize: '9px', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 8px' };
const woundName = { fontSize: '26px', fontWeight: 300, color: '#ffffff', margin: '0 0 8px', lineHeight: 1.2 };
const tagline = { fontSize: '15px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '0 0 16px' };
const description = { fontSize: '15px', color: '#cccccc', lineHeight: 1.8, margin: 0 };
const scoresLabel = { fontSize: '9px', letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 8px' };
const scoreRow = { fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: '2px 0', fontFamily: 'monospace' };
const nextStepLabel = { fontSize: '9px', letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 8px' };
const ctaUrl = { fontSize: '13px', color: '#c54b8c', margin: '0 0 16px' };
const multipleNote = { fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '12px 0 8px', fontStyle: 'italic' };
const pullquote = { borderLeft: '2px solid #c9a84c', paddingLeft: '20px', margin: '24px 0' };
const quoteText = { fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 8px' };
const quoteAttr = { fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#c54b8c', margin: 0 };
const divider = { borderColor: 'rgba(255,255,255,0.08)', margin: '20px 0' };
const footer = { fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: '3px 0' };
