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
import type { SoulAuditWound } from '@/lib/assessment/soul-audit-wounds';

interface Props {
  name: string;
  wounds: SoulAuditWound[];
}

const BASE_URL = 'https://www.ladycyd.online';

export function SoulAuditEmail1({ name, wounds }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>Your Soul Audit results are here, {firstName}.</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={headerSection}>
            <Text style={eyebrow}>Grit &amp; Graceful Coaching Company</Text>
            <Text style={headerTitle}>The 10 Wound Points™ · Soul Audit Results</Text>
          </Section>

          <Hr style={divider} />

          {/* Opening */}
          <Section style={section}>
            <Text style={greeting}>Dear {firstName},</Text>
            <Heading style={h1}>Your Soul Audit results are here.</Heading>
            <Text style={body}>
              You just completed something most women never do.
            </Text>
            <Text style={body}>
              Not because they do not carry wounds. But because they have never been given
              language precise enough to name them.
            </Text>
            <Text style={body}>
              You went beneath the surface. You answered the honest questions. You gave scores
              to what has been shaping you from the inside out.
            </Text>
            <Text style={body}>
              That is not simply self-awareness.
            </Text>
            <Text style={bodyEmphasis}>That is the beginning of Restoration.</Text>
            <Text style={body}>
              Below are the three Wound Points that scored highest for you — and what they mean
              for where you are right now.
            </Text>
            <Text style={bodyMuted}>
              Read each one slowly. Not as a diagnosis. As a mirror.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Wound Point Results */}
          <Section style={section}>
            <Text style={sectionLabel}>Your Wound Point Results</Text>

            {wounds.map((w) => (
              <Section key={w.id} style={woundBlock}>
                <Text style={woundNumber}>{w.number}</Text>
                <Text style={woundName}>{w.name}</Text>
                <Text style={woundTagline}>{w.tagline}</Text>
                <Hr style={woundDivider} />
                <Text style={body}>{w.email1Body}</Text>
                <Section style={scriptureBlock}>
                  <Text style={scriptureText}>&ldquo;{w.scripture}&rdquo;</Text>
                  <Text style={scriptureRef}>— {w.scriptureRef}</Text>
                </Section>
                <Text style={bodyMuted}>{w.email1Closing}</Text>
              </Section>
            ))}
          </Section>

          <Hr style={divider} />

          {/* What results mean together */}
          <Section style={section}>
            <Text style={sectionLabel}>What Your Results Mean Together</Text>
            <Text style={body}>
              Your three highest Wound Points are not random. They almost always form a pattern
              — a cluster of wounds that formed in the same environment, reinforce each other,
              and show up together in your daily life.
            </Text>
            <Text style={body}>
              They are also the exact places where restoration will produce the most significant
              and lasting change.
            </Text>
            <Text style={bodyEmphasis}>
              You cannot heal what you cannot name. You have named it. Now the real work begins.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* CTAs */}
          <Section style={ctaSection}>
            <Text style={sectionLabel}>Your Next Step</Text>

            <Section style={ctaBlock}>
              <Text style={ctaTitle}>Healing Harbour — Free Monthly Masterclass</Text>
              <Text style={ctaBody}>
                Join the free monthly community inside WHOLE Life Design™ where we go deep on one
                Wound Point at a time — with Scripture, neuroscience, and a framework for real
                restoration. This is your first step.
              </Text>
              <Button href={`${BASE_URL}/inner-circle`} style={ctaButtonPrimary}>
                Join Healing Harbour Free →
              </Button>
            </Section>

            <Section style={ctaBlock}>
              <Text style={ctaTitle}>WHOLE™ — The Full Restoration Journey</Text>
              <Text style={ctaBody}>
                The flagship transformational coaching experience built entirely around The WHOLE
                Framework™. For the woman who is done with surface-level change and ready for the
                deepest, most lasting transformation of her life.
              </Text>
              <Button href={`${BASE_URL}/whole`} style={ctaButtonSecondary}>
                Learn About WHOLE™ →
              </Button>
            </Section>

            <Section style={ctaBlock}>
              <Text style={ctaTitle}>Clarity Call — Private 1:1 with Lady Cyd</Text>
              <Text style={ctaBody}>
                A personal, private coaching conversation with Lady Cyd — designed to help you
                understand your specific wound profile, create a restoration roadmap, and
                determine your most strategic next step.
              </Text>
              <Button href={`${BASE_URL}/work-with-me`} style={ctaButtonSecondary}>
                Book a Clarity Call →
              </Button>
            </Section>
          </Section>

          {/* Signature */}
          <Hr style={divider} />
          <Section style={section}>
            <Text style={signature}>With love and complete honesty,</Text>
            <Text style={signatureName}>Lady Cyd</Text>
            <Text style={signatureRole}>
              Founder, Grit &amp; Graceful Coaching Company
            </Text>
            <Text style={signatureRole}>
              Soul Restoration Strategist · Trauma-Informed Coach · Ministry Gift
            </Text>
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
const h1 = { fontSize: '28px', fontWeight: 300, color: '#ffffff', margin: '0 0 24px', lineHeight: '1.3' };
const body = { fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', margin: '0 0 14px' };
const bodyEmphasis = { fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', margin: '0 0 14px', fontStyle: 'italic' };
const bodyMuted = { fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.7', margin: '0 0 14px', fontStyle: 'italic' };
const sectionLabel = { fontSize: '9px', letterSpacing: '0.35em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 20px' };
const woundBlock = { borderLeft: '2px solid rgba(197,75,140,0.4)', paddingLeft: '20px', marginBottom: '32px' };
const woundNumber = { fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase' as const, margin: '0 0 4px' };
const woundName = { fontSize: '18px', fontWeight: 400, color: '#ffffff', margin: '0 0 4px', letterSpacing: '0.02em' };
const woundTagline = { fontSize: '14px', color: '#c54b8c', fontStyle: 'italic', margin: '0 0 16px' };
const woundDivider = { borderColor: 'rgba(255,255,255,0.06)', margin: '0 0 16px' };
const scriptureBlock = { backgroundColor: 'rgba(201,168,76,0.05)', borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '16px', paddingTop: '12px', paddingBottom: '4px', margin: '16px 0' };
const scriptureText = { fontSize: '15px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', margin: '0 0 6px' };
const scriptureRef = { fontSize: '11px', letterSpacing: '0.1em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: 0 };
const ctaSection = { padding: '28px 0' };
const ctaBlock = { marginBottom: '28px' };
const ctaTitle = { fontSize: '15px', color: '#ffffff', fontWeight: 400, margin: '0 0 8px', letterSpacing: '0.01em' };
const ctaBody = { fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', margin: '0 0 14px' };
const ctaButtonPrimary = { backgroundColor: '#c54b8c', color: '#ffffff', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' as const, textDecoration: 'none', padding: '14px 28px', display: 'inline-block' };
const ctaButtonSecondary = { backgroundColor: 'transparent', color: '#c9a84c', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' as const, textDecoration: 'none', padding: '12px 28px', display: 'inline-block', border: '1px solid rgba(201,168,76,0.4)' };
const signature = { fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 4px', fontStyle: 'italic' };
const signatureName = { fontSize: '18px', color: '#ffffff', margin: '0 0 4px' };
const signatureRole = { fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '2px 0', lineHeight: '1.6' };
const linkStyle = { color: 'rgba(255,255,255,0.35)', textDecoration: 'none' };
const footerSection = { textAlign: 'center' as const, paddingTop: '16px' };
const footer = { fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '3px 0', lineHeight: '1.6' };
