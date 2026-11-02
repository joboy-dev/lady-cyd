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

export function InvitationConfirmationEmail({ name }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>Thank you for inviting Lady Cyd — your invitation has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerLabel}>GRIT &amp; GRACEFUL COACHING COMPANY</Text>
            <Heading style={h1}>Request Received.</Heading>
            <Hr style={divider} />
          </Section>

          <Section style={section}>
            <Text style={body}>Dear {firstName},</Text>
            <Text style={body}>Thank you for inviting Lady Cyd.</Text>
            <Text style={body}>Your invitation has been received.</Text>
            <Text style={body}>
              Every engagement is reviewed carefully based on alignment, audience, assignment,
              availability, logistics and the nature of the invitation.
            </Text>
            <Text style={body}>
              If the engagement is a suitable fit, you will be contacted with the next steps.
            </Text>
            <Text style={body}>
              In the meantime, you are welcome to explore Lady Cyd&apos;s work across the website at{' '}
              <a href="https://www.ladycyd.online" style={link}>ladycyd.online</a>.
            </Text>
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

const main = { backgroundColor: '#0d0d0d', fontFamily: 'Georgia, serif' };
const container = { margin: '0 auto', padding: '40px 20px', maxWidth: '600px' };
const header = { textAlign: 'center' as const, paddingBottom: '24px' };
const headerLabel = { fontSize: '10px', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 12px' };
const h1 = { fontSize: '28px', fontWeight: 300, color: '#ffffff', margin: '0 0 24px', lineHeight: 1.2 };
const section = { paddingBottom: '20px' };
const body = { fontSize: '16px', color: '#cccccc', lineHeight: 1.8, margin: '0 0 16px' };
const divider = { borderColor: 'rgba(255,255,255,0.08)', margin: '20px 0' };
const footer = { fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '4px 0' };
const link = { color: '#c54b8c' };
