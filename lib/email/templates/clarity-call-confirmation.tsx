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

export function ClarityCallConfirmationEmail({ name }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>Your Clarity Call application has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerLabel}>GRIT &amp; GRACEFUL COACHING COMPANY</Text>
            <Heading style={h1}>Application Received.</Heading>
            <Hr style={divider} />
          </Section>

          <Section style={section}>
            <Text style={body}>Dear {firstName},</Text>
            <Text style={body}>
              Your Clarity Call application has been received. Lady Cyd reads every application
              personally and will respond within 3–5 business days.
            </Text>
            <Text style={body}>
              While you wait, we encourage you to explore WHOLE Life Design™ — the foundational
              learning ecosystem where the work begins, the community receives you, and
              transformation takes root.
            </Text>
          </Section>

          <Section style={pullquote}>
            <Text style={quoteText}>
              &ldquo;The work you are about to do is not just for you. It is for every person
              who comes after you.&rdquo;
            </Text>
            <Text style={quoteAttr}>— Lady Cyd Alex-Emenike</Text>
          </Section>

          <Hr style={divider} />

          <Section style={section}>
            <Text style={footer}>
              Questions? Reply to this email or contact us at{' '}
              <a href="mailto:Hello@ladycyd.online" style={link}>Hello@ladycyd.online</a>.
            </Text>
            <Text style={footer}>
              Lady Cyd Alex-Emenike · Grit &amp; Graceful Coaching Company · ladycyd.online
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#0d0d0d',
  fontFamily: 'Georgia, serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const header = {
  textAlign: 'center' as const,
  paddingBottom: '24px',
};

const headerLabel = {
  fontSize: '10px',
  letterSpacing: '0.3em',
  color: '#c9a84c',
  textTransform: 'uppercase' as const,
  margin: '0 0 12px',
};

const h1 = {
  fontSize: '32px',
  fontWeight: 300,
  color: '#ffffff',
  margin: '0 0 24px',
  lineHeight: 1.15,
};

const section = {
  paddingBottom: '20px',
};

const body = {
  fontSize: '16px',
  color: '#cccccc',
  lineHeight: 1.8,
  margin: '0 0 16px',
};

const pullquote = {
  borderLeft: '2px solid #c9a84c',
  paddingLeft: '20px',
  margin: '24px 0',
};

const quoteText = {
  fontSize: '18px',
  fontStyle: 'italic',
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.7,
  margin: '0 0 8px',
};

const quoteAttr = {
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: '#c54b8c',
  margin: 0,
};

const divider = {
  borderColor: 'rgba(255,255,255,0.08)',
  margin: '20px 0',
};

const footer = {
  fontSize: '12px',
  color: 'rgba(255,255,255,0.35)',
  margin: '4px 0',
};

const link = {
  color: '#c54b8c',
};
