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
}

const BASE_URL = 'https://ladycyd.online';

export function SoulAuditEmail3({ name }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head />
      <Preview>You named it. Now let us work on it together.</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={headerSection}>
            <Text style={eyebrow}>Grit &amp; Graceful Coaching Company</Text>
            <Text style={headerTitle}>The 10 Wound Points™ · Your Next Step</Text>
          </Section>

          <Hr style={divider} />

          {/* Opening */}
          <Section style={section}>
            <Text style={greeting}>Dear {firstName},</Text>
            <Heading style={h1}>You named it. Now let us work on it together.</Heading>
            <Text style={body}>
              Five days ago you completed the 10 Wound Points™ Soul Audit.
            </Text>
            <Text style={body}>
              You named what has been shaping you. You sat with the root. You prayed over what
              the audit uncovered.
            </Text>
            <Text style={body}>
              And now comes the part that most women stop at.
            </Text>
            <Text style={body}>
              They name the wound. They never enter the pathway through it.
            </Text>
            <Text style={body}>
              Not because they do not want to heal. But because nobody gave them a clear,
              structured, safe, and Spirit-led pathway forward.
            </Text>
            <Text style={bodyEmphasis}>
              That is what I built Grit &amp; Graceful Coaching Company to provide.
            </Text>
            <Text style={body}>
              And today I want to tell you clearly — where that pathway begins for you.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* 3 Pathways */}
          <Section style={section}>
            <Text style={sectionLabel}>Three Pathways Forward</Text>
            <Text style={bodyMuted}>
              Depending on where you are right now — financially, emotionally, in terms of
              readiness — one of these three pathways is the right next step for you. Read all
              three. Choose honestly.
            </Text>

            {/* Pathway 1 */}
            <Section style={pathwayBlock}>
              <Text style={pathwayNumber}>Pathway 1</Text>
              <Text style={pathwayTitle}>Healing Harbour</Text>
              <Text style={pathwaySubtitle}>
                For the woman who is ready to begin — and needs a free, safe, consistent first step.
              </Text>
              <Hr style={pathwayDivider} />
              <Text style={body}>
                Healing Harbour is the free monthly masterclass inside WHOLE Life Design™. Every
                month we go deep on one Wound Point at a time — with practical teaching, guided
                reflection, and a framework for real, lasting restoration.
              </Text>
              <Text style={body}>
                It is free. It is the room where the healing conversation begins — with a community
                of women doing the same honest internal work you started in the audit.
              </Text>
              <Text style={bodyMuted}>
                If you are not yet sure about WHOLE™ — start here. Come to the next Healing Harbour
                session and let the work speak for itself.
              </Text>
              <Button href={`${BASE_URL}/inner-circle`} style={ctaButtonPrimary}>
                Join WHOLE Life Design™ — Healing Harbour Is Free Inside →
              </Button>
            </Section>

            {/* Pathway 2 */}
            <Section style={pathwayBlock}>
              <Text style={pathwayNumber}>Pathway 2</Text>
              <Text style={pathwayTitle}>WHOLE™</Text>
              <Text style={pathwaySubtitle}>
                For the woman who is ready for the full journey — from wound awareness to sustainable personal wholeness.
              </Text>
              <Hr style={pathwayDivider} />
              <Text style={body}>
                WHOLE™ is the flagship transformational coaching experience built entirely around
                The WHOLE Framework™. It takes everything your Soul Audit revealed — and walks you
                through the full, structured pathway of naming, healing, rebuilding, restoring,
                and returning.
              </Text>
              <Text style={body}>
                This is not another information programme. It is a transformation experience. With
                private and group coaching sessions, a comprehensive workbook, community support,
                and Lady Cyd walking every step of the process with you.
              </Text>
              <Text style={bodyMuted}>
                If your Soul Audit scored 7 or above on any of your top three Wound Points —
                WHOLE™ is where you need to be.
              </Text>
              <Button href={`${BASE_URL}/whole`} style={ctaButtonSecondary}>
                Learn More About WHOLE™ →
              </Button>
            </Section>

            {/* Pathway 3 */}
            <Section style={pathwayBlock}>
              <Text style={pathwayNumber}>Pathway 3</Text>
              <Text style={pathwayTitle}>Clarity Call with Lady Cyd</Text>
              <Text style={pathwaySubtitle}>
                For the high-capacity woman who needs a personalised, strategic, private conversation before she takes her next step.
              </Text>
              <Hr style={pathwayDivider} />
              <Text style={body}>
                A Clarity Call is a private 30-minute coaching conversation with Lady Cyd —
                designed specifically for women who have completed the Soul Audit and want to
                understand their specific wound profile more deeply, map a personalised restoration
                roadmap, and determine the most strategic next step for their specific season.
              </Text>
              <Text style={bodyMuted}>
                Spaces are limited. Lady Cyd takes a small number of Clarity Calls each month.
              </Text>
              <Button href={`${BASE_URL}/work-with-me`} style={ctaButtonSecondary}>
                Book Your Clarity Call →
              </Button>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Personal word */}
          <Section style={personalWordBlock}>
            <Text style={sectionLabel}>A Personal Word From Lady Cyd</Text>
            <Text style={body}>
              Beloved, I want to say something to you directly before you close this email.
            </Text>
            <Text style={body}>
              I did not build Grit &amp; Graceful Coaching Company for the woman who has it
              together. I built it for the woman who has been carrying it together — alone,
              impressively, exhaustingly — while something deep inside her quietly knew that there
              had to be a better way to live, to lead, and to build.
            </Text>
            <Text style={body}>
              The Soul Audit you completed was not a verdict. It was an invitation.
            </Text>
            <Text style={bodyMuted}>An invitation to stop pretending the wounds are not there.</Text>
            <Text style={bodyMuted}>An invitation to stop leading from what survival built.</Text>
            <Text style={bodyMuted}>An invitation to return — to God&apos;s original design for your life.</Text>
            <Section style={pullquote}>
              <Text style={quoteText}>
                &ldquo;What a woman heals — she no longer passes on. What she becomes, she builds.
                What she builds becomes her legacy.&rdquo;
              </Text>
            </Section>
            <Text style={body}>
              You have already taken the first step.
            </Text>
            <Text style={bodyEmphasis}>The next one is waiting for you.</Text>
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
const bodyMuted = { fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.7', margin: '0 0 10px', fontStyle: 'italic' };
const sectionLabel = { fontSize: '9px', letterSpacing: '0.35em', color: '#c9a84c', textTransform: 'uppercase' as const, margin: '0 0 20px' };
const pathwayBlock = { borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', marginBottom: '8px' };
const pathwayNumber = { fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase' as const, margin: '0 0 4px' };
const pathwayTitle = { fontSize: '20px', fontWeight: 400, color: '#ffffff', margin: '0 0 4px' };
const pathwaySubtitle = { fontSize: '13px', color: '#c54b8c', fontStyle: 'italic', margin: '0 0 14px' };
const pathwayDivider = { borderColor: 'rgba(255,255,255,0.06)', margin: '0 0 16px' };
const ctaButtonPrimary = { backgroundColor: '#c54b8c', color: '#ffffff', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none', padding: '14px 24px', display: 'inline-block' };
const ctaButtonSecondary = { backgroundColor: 'transparent', color: '#c9a84c', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none', padding: '12px 24px', display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)' };
const personalWordBlock = { padding: '28px 0' };
const pullquote = { borderLeft: '2px solid rgba(201,168,76,0.5)', paddingLeft: '20px', margin: '20px 0' };
const quoteText = { fontSize: '17px', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: '1.75', margin: 0 };
const signature = { fontSize: '15px', color: 'rgba(255,255,255,0.55)', margin: '0 0 4px', fontStyle: 'italic' };
const signatureName = { fontSize: '18px', color: '#ffffff', margin: '0 0 4px' };
const signatureRole = { fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '2px 0', lineHeight: '1.6' };
const linkStyle = { color: 'rgba(255,255,255,0.35)', textDecoration: 'none' };
const footerSection = { textAlign: 'center' as const, paddingTop: '16px' };
const footer = { fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '3px 0', lineHeight: '1.6' };
