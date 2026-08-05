import {
  Body,
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
import type { SoulAuditWound } from '@/lib/assessment/soul-audit-wounds';

interface Props {
  name: string;
  wounds: SoulAuditWound[];
}

const BASE_URL = 'https://www.ladycyd.online';

export function SoulAuditEmail2({ name, wounds }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>There is something deeper beneath what your Soul Audit revealed.</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={headerSection}>
            <Text style={eyebrow}>Grit &amp; Graceful Coaching Company</Text>
            <Text style={headerTitle}>The 10 Wound Points™ · A Deeper Look</Text>
          </Section>

          <Hr style={divider} />

          {/* Opening */}
          <Section style={section}>
            <Text style={greeting}>Dear {firstName},</Text>
            <Heading style={h1}>
              There is something deeper beneath what your audit revealed.
            </Heading>
            <Text style={body}>
              Two days ago your Soul Audit named three areas where restoration is most needed.
            </Text>
            <Text style={body}>
              Today I want to go one layer deeper.
            </Text>
            <Text style={body}>
              Because naming the wound is the beginning. But understanding the root — where it
              formed, what it learned, what it has been quietly costing you — that is where the
              real work of healing begins.
            </Text>
            <Text style={body}>
              Below is a deeper look at each of your three Wound Points.
            </Text>
            <Text style={bodyMuted}>
              Read it like a conversation, not an assignment. Take what resonates. Sit with what
              challenges you. And let the prayer at the end of each section be your honest
              response to God.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Deep wound sections */}
          <Section style={section}>
            <Text style={sectionLabel}>A Deeper Look At Your Wound Points</Text>

            {wounds.map((w) => (
              <Section key={w.id} style={woundBlock}>
                <Text style={woundNumber}>{w.number}</Text>
                <Text style={woundName}>{w.name}</Text>

                <Text style={subLabel}>What Is Actually Happening Beneath This Wound</Text>
                <Text style={body}>{w.whatIsHappening}</Text>

                <Text style={subLabel}>The Root It Comes From</Text>
                <Text style={body}>{w.theRoot}</Text>

                <Text style={subLabel}>What It Has Been Costing You</Text>
                <Text style={body}>{w.whatItCosts}</Text>

                <Section style={prayerBlock}>
                  <Text style={prayerLabel}>A Prayer For This Wound</Text>
                  <Text style={prayerText}>{w.prayer}</Text>
                </Section>
              </Section>
            ))}
          </Section>

          <Hr style={divider} />

          {/* Closing */}
          <Section style={section}>
            <Text style={bodyEmphasis}>A wound understood is a wound half healed.</Text>
            <Text style={body}>
              What you have just read is not theory. It is the architecture of what has been
              shaping your life from the inside out — named clearly, traced honestly, and brought
              before God in prayer.
            </Text>
            <Text style={body}>
              The next step is not more information. It is integration. It is structure. It is a
              community and a pathway that takes everything you have just named — and walks you
              through what it means to actually heal it.
            </Text>
            <Text style={bodyMuted}>
              That is what waits for you. Watch for my next email in three days.
            </Text>
          </Section>

          {/* Signature */}
          <Hr style={divider} />
          <Section style={section}>
            <Text style={signature}>With love and complete honesty,</Text>
            <Text style={signatureName}>Lady Cyd</Text>
            <Text style={signatureRole}>Founder, Grit &amp; Graceful Coaching Company</Text>
            <Text style={signatureRole}>Soul Restoration Strategist · Trauma-Informed Coach · Ministry Gift</Text>
            <Text style={signatureRole}>
              <Link href={BASE_URL} style={linkStyle}>www.ladycyd.online</Link>
            </Text>
          </Section>

          <Hr style={divider} />
          <Section style={footerSection}>
            <Text style={footer}>
              © Grit &amp; Graceful Coaching Company · The 10 Wound Points™ Soul Audit
            </Text>
            <Text style={footer}>
              A Lady Cyd Alex-Emenike Proprietary Framework · All Rights Reserved
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ── */
const main = { backgroundColor: '#0a0812', fontFamily: 'Georgia, "Times New Roman", serif' };
const container = { margin: '0 auto', padding: '48px 24px', maxWidth: '580px' };
const headerSection = { textAlign: 'center' as const, paddingBottom: '28px' };
const eyebrow = { fontSize: '10px', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 8px' };
const headerTitle = { fontSize: '12px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' as const, margin: 0 };
const divider = { borderColor: 'rgba(255,255,255,0.07)', margin: '0' };
const section = { padding: '28px 0' };
const greeting = { fontSize: '16px', color: 'rgba(255,255,255,0.55)', margin: '0 0 8px', fontStyle: 'italic' };
const h1 = { fontSize: '26px', fontWeight: 300, color: '#ffffff', margin: '0 0 24px', lineHeight: '1.35' };
const body = { fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', margin: '0 0 14px' };
const bodyEmphasis = { fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', margin: '0 0 14px', fontStyle: 'italic' };
const bodyMuted = { fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.7', margin: '0 0 14px', fontStyle: 'italic' };
const sectionLabel = { fontSize: '9px', letterSpacing: '0.35em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 24px' };
const woundBlock = { borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px', marginBottom: '8px' };
const woundNumber = { fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase' as const, margin: '0 0 4px' };
const woundName = { fontSize: '20px', fontWeight: 400, color: '#ffffff', margin: '0 0 20px', letterSpacing: '0.01em' };
const subLabel = { fontSize: '9px', letterSpacing: '0.28em', color: '#c54b8c', textTransform: 'uppercase' as const, margin: '20px 0 8px' };
const prayerBlock = { backgroundColor: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', padding: '20px 24px', margin: '20px 0 28px' };
const prayerLabel = { fontSize: '9px', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 12px' };
const prayerText = { fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontStyle: 'italic', margin: 0 };
const signature = { fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 4px', fontStyle: 'italic' };
const signatureName = { fontSize: '18px', color: '#ffffff', margin: '0 0 4px' };
const signatureRole = { fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '2px 0', lineHeight: '1.6' };
const linkStyle = { color: 'rgba(255,255,255,0.35)', textDecoration: 'none' };
const footerSection = { textAlign: 'center' as const, paddingTop: '16px' };
const footer = { fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '3px 0', lineHeight: '1.6' };
