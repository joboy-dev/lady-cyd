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

interface Props {
  name: string;
}

export function AssessmentPdfRequestEmail({ name }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>The Soul Audit PDF is on its way</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerLabel}>THE 10 WOUND POINTS™ ASSESSMENT</Text>
            <Text style={headerSub}>The Soul Audit PDF · Grit &amp; Graceful Coaching Company</Text>
            <Hr style={divider} />
          </Section>

          <Section style={section}>
            <Text style={greeting}>Dear {firstName},</Text>
            <Heading style={h1}>Your Soul Audit PDF</Heading>
            <Text style={body}>
              Thank you for choosing the Soul Audit. This is the deeper path — working through all
              ten wound points privately, at your own pace, with full scoring and reflection prompts.
            </Text>
            <Text style={body}>
              The PDF will be delivered to you shortly. When it arrives, set aside 45 to 60 minutes
              of uninterrupted, honest private work. This is not a document to skim — it is a mirror.
            </Text>
          </Section>

          <Section style={noteBox}>
            <Text style={noteLabel}>WHAT TO EXPECT</Text>
            <Text style={noteItem}>✦  All ten (10) wound points with scoring and reflection prompts</Text>
            <Text style={noteItem}>✦  Score summary with interpretation guide</Text>
            <Text style={noteItem}>✦  45 to 60 minutes of honest private work</Text>
            <Text style={noteItem}>✦  The adaptive quiz link is also included inside the PDF</Text>
          </Section>

          <Hr style={divider} />

          <Section style={section}>
            <Text style={body}>
              While you wait — explore Eden Life Design™, the foundational learning ecosystem
              where the restoration work continues after the audit.
            </Text>
            <Text style={ctaUrl}>ladycyd.online/eden-life-design</Text>
          </Section>

          <Section style={pullquote}>
            <Text style={quoteText}>
              &ldquo;What a woman heals, she no longer passes on. What she becomes, she builds.
              What she builds becomes her legacy.&rdquo;
            </Text>
            <Text style={quoteAttr}>— Lady Cyd Alex-Emenike</Text>
          </Section>

          <Hr style={divider} />
          <Section style={section}>
            <Text style={footer}>© The 10 Wound Points™ · Grit &amp; Graceful Coaching Company</Text>
            <Text style={footer}>A Lady Cyd Alex-Emenike Proprietary Framework · All Rights Reserved</Text>
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
const h1 = { fontSize: '28px', fontWeight: 300, color: '#ffffff', margin: '0 0 20px', lineHeight: 1.2 };
const body = { fontSize: '16px', color: '#cccccc', lineHeight: 1.8, margin: '0 0 16px' };
const noteBox = { backgroundColor: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', padding: '20px', marginBottom: '20px' };
const noteLabel = { fontSize: '9px', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 12px' };
const noteItem = { fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: '6px 0', lineHeight: 1.6 };
const ctaUrl = { fontSize: '13px', color: '#c54b8c', margin: '0 0 16px' };
const pullquote = { borderLeft: '2px solid #c9a84c', paddingLeft: '20px', margin: '24px 0' };
const quoteText = { fontSize: '17px', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 8px' };
const quoteAttr = { fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#c54b8c', margin: 0 };
const divider = { borderColor: 'rgba(255,255,255,0.08)', margin: '20px 0' };
const footer = { fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: '3px 0' };
