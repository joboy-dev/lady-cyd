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
import type { InvitationEmailSection } from '@/lib/data/invitation-sections';

interface Props {
  name: string;
  email: string;
  eventName: string;
  sections: InvitationEmailSection[];
}

export function InvitationNotificationEmail({ name, email, eventName, sections }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New invitation request from {name} — {eventName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerLabel}>GRIT &amp; GRACEFUL COACHING COMPANY</Text>
            <Heading style={h1}>New Invitation Request</Heading>
            <Text style={subtitle}>{eventName}</Text>
            <Hr style={divider} />
          </Section>

          {sections.map((section) => (
            <Section key={section.title} style={sectionStyle}>
              <Text style={sectionTitle}>{section.title}</Text>
              {section.rows.map((row) => (
                <div key={row.label}>
                  <Text style={label}>{row.label}</Text>
                  <Text style={answer}>{row.value}</Text>
                </div>
              ))}
              <Hr style={divider} />
            </Section>
          ))}

          <Section style={sectionStyle}>
            <Text style={footer}>
              Reply directly to this email to respond to the requester at{' '}
              <a href={`mailto:${email}`} style={link}>{email}</a>.
            </Text>
            <Text style={footer}>Sent via ladycyd.online · Grit &amp; Graceful Coaching Company</Text>
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
const h1 = { fontSize: '28px', fontWeight: 300, color: '#ffffff', margin: '0 0 8px', lineHeight: 1.2 };
const subtitle = { fontSize: '16px', color: '#c54b8c', margin: '0 0 24px', fontStyle: 'italic' };
const sectionStyle = { paddingBottom: '8px' };
const sectionTitle = { fontSize: '12px', letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 12px' };
const label = { fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' as const, margin: '0 0 2px' };
const answer = { fontSize: '15px', color: '#e0e0e0', lineHeight: 1.7, margin: '0 0 14px', whiteSpace: 'pre-wrap' as const };
const divider = { borderColor: 'rgba(255,255,255,0.08)', margin: '16px 0' };
const footer = { fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '4px 0' };
const link = { color: '#c54b8c' };
