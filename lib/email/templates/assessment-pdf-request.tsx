import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  name: string;
  pdfUrl: string;
}

export function AssessmentPdfRequestEmail({ name, pdfUrl }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>Your Soul Audit PDF is here — download it now</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* ── Header ── */}
          <Section style={headerSection}>
            <Text style={eyebrow}>Grit &amp; Graceful Coaching Company</Text>
            <Text style={headerTitle}>The 10 Wound Points™ Assessment</Text>
          </Section>

          <Hr style={divider} />

          {/* ── Greeting ── */}
          <Section style={section}>
            <Text style={greeting}>Dear {firstName},</Text>
            <Heading style={h1}>
              Your Soul Audit PDF is ready.
            </Heading>
            <Text style={body}>
              Thank you for choosing the deeper path. The Soul Audit is designed for the woman
              who wants to go beneath the surface — working through all ten wound points privately,
              at her own pace, with full scoring and honest reflection prompts.
            </Text>
            <Text style={body}>
              Your PDF is attached below. Set aside <strong style={{ color: '#ffffff' }}>45 to 60 minutes</strong> of
              uninterrupted, honest private work before you begin. This is not a document to skim —
              it is a mirror.
            </Text>
          </Section>

          {/* ── Download CTA ── */}
          <Section style={ctaSection}>
            <Button href={pdfUrl} style={ctaButton}>
              Download The Soul Audit PDF →
            </Button>
            <Text style={ctaNote}>
              Link not working?{' '}
              <Link href={pdfUrl} style={ctaLink}>
                Copy and paste this URL into your browser
              </Link>
            </Text>
          </Section>

          <Hr style={divider} />

          {/* ── What to expect ── */}
          <Section style={noteBox}>
            <Text style={noteLabel}>What Is Inside</Text>
            {[
              'All 10 wound points with scoring criteria and reflection prompts',
              'Score summary sheet with interpretation guide',
              'Designed for 45 to 60 minutes of private, focused work',
              'The adaptive quiz link is also included inside the PDF',
            ].map((item) => (
              <Text key={item} style={noteItem}>
                <span style={{ color: '#c9a84c' }}>✦</span>{'  '}{item}
              </Text>
            ))}
          </Section>

          <Hr style={divider} />

          {/* ── Pullquote ── */}
          <Section style={pullquote}>
            <Text style={quoteText}>
              &ldquo;What a woman heals, she no longer passes on.
              What she becomes, she builds. What she builds becomes her legacy.&rdquo;
            </Text>
            <Text style={quoteAttr}>— Lady Cyd Alex-Emenike</Text>
          </Section>

          <Hr style={divider} />

          {/* ── Footer ── */}
          <Section style={footerSection}>
            <Text style={footer}>
              © The 10 Wound Points™ · Grit &amp; Graceful Coaching Company
            </Text>
            <Text style={footer}>
              A Lady Cyd Alex-Emenike Proprietary Framework · All Rights Reserved
            </Text>
            <Text style={{ ...footer, marginTop: '8px' }}>
              <Link href="https://ladycyd.online" style={footerLink}>ladycyd.online</Link>
              {'  ·  '}
              <Link href="https://ladycyd.online/whole-life-design" style={footerLink}>
                WHOLE Life Design™
              </Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ── */
const main = {
  backgroundColor: '#0a0812',
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const container = {
  margin: '0 auto',
  padding: '48px 24px',
  maxWidth: '560px',
};

const headerSection = {
  textAlign: 'center' as const,
  paddingBottom: '28px',
};

const eyebrow = {
  fontSize: '10px',
  letterSpacing: '0.3em',
  color: '#c9a84c',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px',
};

const headerTitle = {
  fontSize: '13px',
  letterSpacing: '0.15em',
  color: 'rgba(255,255,255,0.4)',
  textTransform: 'uppercase' as const,
  margin: 0,
};

const divider = {
  borderColor: 'rgba(255,255,255,0.08)',
  margin: '0',
};

const section = {
  padding: '32px 0 24px',
};

const greeting = {
  fontSize: '16px',
  color: 'rgba(255,255,255,0.6)',
  margin: '0 0 8px',
  fontStyle: 'italic',
};

const h1 = {
  fontSize: '30px',
  fontWeight: 300,
  color: '#ffffff',
  margin: '0 0 24px',
  lineHeight: '1.25',
  letterSpacing: '-0.01em',
};

const body = {
  fontSize: '16px',
  color: 'rgba(255,255,255,0.65)',
  lineHeight: '1.85',
  margin: '0 0 16px',
};

const ctaSection = {
  textAlign: 'center' as const,
  padding: '32px 0',
};

const ctaButton = {
  backgroundColor: '#c54b8c',
  color: '#ffffff',
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  textDecoration: 'none',
  padding: '16px 36px',
  display: 'inline-block',
  fontFamily: 'Georgia, serif',
};

const ctaNote = {
  fontSize: '12px',
  color: 'rgba(255,255,255,0.3)',
  margin: '16px 0 0',
};

const ctaLink = {
  color: '#c9a84c',
  textDecoration: 'underline',
};

const noteBox = {
  backgroundColor: 'rgba(201,168,76,0.05)',
  border: '1px solid rgba(201,168,76,0.18)',
  padding: '24px 28px',
  margin: '32px 0',
};

const noteLabel = {
  fontSize: '9px',
  letterSpacing: '0.3em',
  color: '#c9a84c',
  textTransform: 'uppercase' as const,
  margin: '0 0 16px',
};

const noteItem = {
  fontSize: '14px',
  color: 'rgba(255,255,255,0.6)',
  margin: '8px 0',
  lineHeight: '1.65',
};

const pullquote = {
  borderLeft: '2px solid rgba(201,168,76,0.5)',
  paddingLeft: '24px',
  margin: '32px 0',
};

const quoteText = {
  fontSize: '17px',
  fontStyle: 'italic',
  color: 'rgba(255,255,255,0.7)',
  lineHeight: '1.75',
  margin: '0 0 10px',
};

const quoteAttr = {
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: '#c54b8c',
  margin: 0,
};

const footerSection = {
  paddingTop: '24px',
  textAlign: 'center' as const,
};

const footer = {
  fontSize: '11px',
  color: 'rgba(255,255,255,0.25)',
  margin: '3px 0',
  lineHeight: '1.6',
};

const footerLink = {
  color: 'rgba(255,255,255,0.35)',
  textDecoration: 'none',
};
