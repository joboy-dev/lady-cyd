import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  name: string;
  email: string;
  heard_via: string;
  current_place: string;
  desired_outcome: string;
  readiness: string;
}

export function ClarityCallNotificationEmail({
  name,
  email,
  heard_via,
  current_place,
  desired_outcome,
  readiness,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Clarity Call application from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerLabel}>GRIT &amp; GRACEFUL COACHING COMPANY</Text>
            <Heading style={h1}>New Clarity Call Application</Heading>
            <Hr style={divider} />
          </Section>

          {/* Applicant summary */}
          <Section style={section}>
            <Row>
              <Column>
                <Text style={label}>NAME</Text>
                <Text style={value}>{name}</Text>
              </Column>
              <Column>
                <Text style={label}>EMAIL</Text>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={label}>HOW THEY FOUND YOU</Text>
                <Text style={value}>{heard_via}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Application answers */}
          <Section style={section}>
            <Text style={label}>WHERE SHE IS ON HER JOURNEY</Text>
            <Text style={answer}>{current_place}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>WHAT SHE MOST WANTS TO FOCUS ON OR SHIFT</Text>
            <Text style={answer}>{desired_outcome}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>WHY SHE FEELS READY NOW</Text>
            <Text style={answer}>{readiness}</Text>
          </Section>

          <Hr style={divider} />

          <Section style={section}>
            <Text style={footer}>
              Reply directly to this email to respond to the applicant at{' '}
              <a href={`mailto:${email}`} style={link}>{email}</a>.
            </Text>
            <Text style={footer}>Sent via ladycyd.online · Grit &amp; Graceful Coaching Company</Text>
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
  fontSize: '28px',
  fontWeight: 300,
  color: '#ffffff',
  margin: '0 0 24px',
  lineHeight: 1.2,
};

const section = {
  paddingBottom: '20px',
};

const label = {
  fontSize: '9px',
  letterSpacing: '0.25em',
  color: '#c9a84c',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
};

const value = {
  fontSize: '15px',
  color: '#e0e0e0',
  margin: '0 0 16px',
};

const answer = {
  fontSize: '15px',
  color: '#cccccc',
  lineHeight: 1.75,
  margin: '0 0 8px',
  whiteSpace: 'pre-wrap' as const,
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
