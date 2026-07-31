export type SoulAuditWoundId =
  | 'identity'
  | 'worth'
  | 'voice'
  | 'trust'
  | 'purpose'
  | 'rhythm'
  | 'control'
  | 'grief'
  | 'relational'
  | 'legacy';

export interface SoulAuditWound {
  id: SoulAuditWoundId;
  number: string;
  name: string;
  tagline: string;
  // Email 1
  email1Body: string;
  scripture: string;
  scriptureRef: string;
  email1Closing: string;
  // Email 2
  whatIsHappening: string;
  theRoot: string;
  whatItCosts: string;
  prayer: string;
}

export const soulAuditWounds: SoulAuditWound[] = [
  {
    id: 'identity',
    number: '01',
    name: 'The Identity Wound',
    tagline: 'The woman has become the role.',
    email1Body:
      'Your score tells me that somewhere along the way — through the roles you carry, the responsibilities you hold, and the expectations others have placed on you — the woman beneath all of it has become harder to find. You have become so good at being everything to everyone that you have quietly lost contact with who you are when you are simply yourself. This is not a character flaw. It is the natural result of a life that rewarded performance and rarely made space for your personhood. The Identity Wound does not mean you have no identity. It means your identity has been buried beneath adaptation.',
    scripture: 'For You formed my inward parts; You covered me in my mother\'s womb. I will praise You, for I am fearfully and wonderfully made.',
    scriptureRef: 'Psalm 139:13–14 NKJV',
    email1Closing:
      'The next step is naming her — the woman beneath the roles. That is exactly what we begin inside WHOLE Life Design™.',
    whatIsHappening:
      'The Identity Wound runs deeper than not knowing yourself. It is a systematic disconnection — built over years — from the woman God designed before survival, responsibility, and approval shaped a different version of her. She did not disappear. She was buried. And what replaced her was a highly functional, deeply tired version built for other people\'s needs.',
    theRoot:
      'It almost always traces back to an environment where being was not enough — where love, acceptance, or belonging arrived most reliably in response to doing. The nervous system drew its conclusion early: produce, perform, prove. And decades later, that conclusion still runs the architecture of your daily life.',
    whatItCosts:
      'You make decisions from expectation rather than conviction. You give from performance rather than overflow. You lead from a constructed self rather than a true one — and the gap between the two exhausts you in ways you cannot always name.',
    prayer:
      'God, I release every version of me that was built for survival. Show me the woman You designed before the roles arrived. I am returning to her — with Your divine help and in Your time.',
  },
  {
    id: 'worth',
    number: '02',
    name: 'The Worth Wound',
    tagline: 'She has spent years trying to earn what was always hers.',
    email1Body:
      'Your score reveals that your sense of value has become entangled with your output. When you achieve — you feel worthy. When you fall short, rest, or simply exist without producing — something inside you quietly questions whether you are still enough. You have been working for what God already gave you before you ever did a single thing. The Worth Wound is not vanity. It is not weakness. It is the inevitable result of an environment that gave approval conditionally — where love arrived most warmly in the wake of performance. Your nervous system learned the equation early, and it has been running ever since.',
    scripture: 'Since you were precious in My sight, You have been honored, And I have loved you.',
    scriptureRef: 'Isaiah 43:4 NKJV',
    email1Closing:
      'What you need is not to achieve more. What you need is to receive what has always been yours. We begin that work inside WHOLE Life Design™.',
    whatIsHappening:
      'The Worth Wound is perhaps the most common wound among high-capacity women — and the most invisible — because it hides inside excellence. From the outside, she looks like a woman of strong self-worth. She produces, she leads, she delivers. But internally, her sense of value is a moving target, always just ahead of wherever she currently stands.',
    theRoot:
      'It forms in environments where conditional positive regard replaced unconditional love. Where approval arrived in response to achievement — and cooled in the absence of it. The nervous system built the equation: production equals safety, performance equals belonging. That equation does not disappear when she becomes an adult. It simply relocates into her work, her ministry, and her marriage.',
    whatItCosts:
      'You cannot fully rest without guilt — because rest feels like losing ground. You cannot celebrate without immediately moving the goalpost. You cannot receive love easily — because receiving, without earning, feels unfamiliar and somehow unsafe.',
    prayer:
      'Father, I confess I have been trying to earn what You freely gave me. I release the agreement that my worth is something I must construct. I receive — simply, fully — the value You declared over me before I was born.',
  },
  {
    id: 'voice',
    number: '03',
    name: 'The Voice Wound',
    tagline: 'She has the truth. She is still negotiating permission to speak it.',
    email1Body:
      'Your score tells me that you carry more than you say. There are truths you have been holding back — in your relationships, your leadership, your ministry, your marriage, your own interior life — because somewhere you learned that speaking honestly came with a cost. And so you edit yourself. You soften your convictions. You say what is safe rather than what is true. The Voice Wound is not the absence of a voice. It is the disconnection from your permission to use it fully. And the silence has been costing you — in unexpressed wisdom, unenforced limits, and relationships built around an edited version of who you actually are.',
    scripture: 'Behold, I have put My words in your mouth.',
    scriptureRef: 'Jeremiah 1:9 NKJV',
    email1Closing:
      'Your voice was placed in you by God — not by the people who made it feel unsafe. We help you reclaim it inside WHOLE Life Design™.',
    whatIsHappening:
      'The Voice Wound is not primarily about public speaking. It is about the internal permission to be honest — with others, and more importantly, with yourself. A woman with the Voice Wound may be articulate in public, influential on a platform, even celebrated for her communication. And yet privately, there is a consistent gap between what she knows and what she allows herself to fully say.',
    theRoot:
      'The wound forms when speaking honestly produces consequences — rejection, criticism, punishment, abandonment, or simply being ignored. The nervous system learns the fastest route to safety: edit yourself before you express yourself. And that editing becomes habitual. Automatic. Invisible even to herself.',
    whatItCosts:
      'You carry unexpressed wisdom. Unenforced boundaries. Relationships built around the version of you that is safe to present. And beneath it all, a quiet resentment at the perpetual effort of monitoring yourself in every room you enter.',
    prayer:
      'God, You put Your words in my mouth. I release every agreement I made that my voice was too much, not enough, or dangerous to use. Teach me to speak from the authority You gave me — not from the fear that took it.',
  },
  {
    id: 'trust',
    number: '04',
    name: 'The Trust Wound',
    tagline: 'She longs for connection. She does not feel safe enough to fully enter it.',
    email1Body:
      'Your score tells me that trust has become something you extend cautiously — and guard carefully. You have been disappointed. Perhaps betrayed. Perhaps let down so many times that your heart made a quiet, sensible decision: I will carry this myself. And so beneath the independence is a longing for connection that never quite feels safe enough to enter fully. The Trust Wound does not only affect your relationships with people. It shapes your leadership, your partnerships, your community — and quietly, over time, it shapes how safe you feel with God Himself. Every wound eventually shapes expectations. And expectations influence trust.',
    scripture: 'Trust in the Lord with all your heart, And lean not on your own understanding.',
    scriptureRef: 'Proverbs 3:5 NKJV',
    email1Closing:
      'Trust can be rebuilt. Not naively — but wisely, safely, with the right framework. That is what WHOLE Life Design™ is built to provide.',
    whatIsHappening:
      'The Trust Wound is one of the most layered wounds a woman can carry — because it does not only affect her relationships. It shapes her theology. A woman who has been significantly disappointed by people will often — unconsciously — transfer that disappointment into her relationship with God. She may know theologically that God is trustworthy. But her nervous system runs a different calculation: everything that was promised eventually disappoints.',
    theRoot:
      'It forms through accumulated relational injury — broken promises, violated confidence, abandonment, rejection, betrayal, or simply the repeated experience of vulnerability not being met with safety. The heart adapts. Not by becoming harder — but by becoming more managed. She learns to depend only on herself.',
    whatItCosts:
      'You carry everything alone. You cannot fully collaborate or partner. You cannot receive care without suspicion. And in your closest relationships — including your marriage — there is always a wall you have not let anyone fully past. Not because you do not want connection. But because connection no longer feels entirely safe for you.',
    prayer:
      'Lord, I bring You the wounds that taught me I could not fully trust. I release the people who broke what they promised. And I ask You to rebuild in me the capacity to trust wisely — beginning with You, and extending outward from there.',
  },
  {
    id: 'purpose',
    number: '05',
    name: 'The Purpose Wound',
    tagline: 'She is achieving. She is not yet aligned.',
    email1Body:
      'Your score tells me that you are productive — perhaps impressively so. But beneath the output is a quiet, persistent question that your achievements have never been quite able to silence: Is this what I was actually made for? You have been building. But something inside you knows that what you are building does not yet fully match what God placed inside you before you were formed. The Purpose Wound is not the absence of calling. It is the presence of a life built in the wrong direction — or toward the wrong audience — for the right woman. It forms when approval, comparison, or survival redirects a woman away from her specific God-given assignment and toward something that is good, but not hers.',
    scripture: 'For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them.',
    scriptureRef: 'Ephesians 2:10 NKJV',
    email1Closing:
      'Alignment is not found by doing more. It is found by getting still enough to hear what you were actually sent to build. We create that stillness inside WHOLE Life Design™.',
    whatIsHappening:
      'The Purpose Wound is uniquely painful because it sits alongside genuine achievement. The woman carrying it has often built real things — platforms, ministries, businesses, careers, families. But the question that visits her in the stillness — is this what I was actually sent to do — has never been fully answered. She is productive. She is not yet fully aligned.',
    theRoot:
      'It forms most commonly through three pathways: comparison, where a woman builds toward someone else\'s calling instead of her own; approval, where she does what is celebrated rather than what is assigned; and survival, where she chose stability over assignment because the assignment felt too costly or too uncertain.',
    whatItCosts:
      'You experience productivity without peace. Achievement without fulfilment. You can list what you have built but cannot fully articulate why you built it. And beneath the accomplishment is a persistent, unresolved incompleteness — the sense that the most important work has not yet begun.',
    prayer:
      'My Father, I confess I have been building for the audience in front of me rather than for the One who sent me. Realign my life to Your original design. Show me what You prepared for me before the world told me what to become.',
  },
  {
    id: 'rhythm',
    number: '06',
    name: 'The Rhythm Wound',
    tagline: 'She lives faster than her soul was designed to move.',
    email1Body:
      'Your score tells me that you have been moving at a pace your soul was never designed to sustain. You wake up tired. You go to bed behind. You cannot remember the last time you genuinely rested — not recovered from exhaustion, but truly rested from a place of peace and alignment. The urgency has become your default. And it is not God\'s urgency. It is survival\'s urgency. The Rhythm Wound does not only affect your productivity. It affects your spiritual sensitivity, your emotional availability, your physical health, your creativity, and your capacity to hear the Holy Spirit clearly in the noise. A woman moving faster than her soul was designed to move will eventually find that her achievements outpace her wholeness.',
    scripture: 'He makes me lie down in green pastures; He leads me beside the still waters. He restores my soul.',
    scriptureRef: 'Psalm 23:2–3 NKJV',
    email1Closing:
      'Sustainable impact requires sustainable rhythm. Learning to move at God\'s pace — not the world\'s demand — is foundational work. It begins inside WHOLE Life Design™.',
    whatIsHappening:
      'The Rhythm Wound is uniquely difficult to address because the pace that is wounding the woman is also the pace that is producing her results. She is afraid to slow down — because she has evidence that speed works. What she has not yet seen is the compound cost of that speed on her soul, her relationships, her spiritual sensitivity, and the longevity of everything she is building.',
    theRoot:
      'It forms in environments governed by urgency — where rest was seen as laziness, stillness as spiritual negligence, and the measure of faithfulness was how much you produced. It is reinforced by culture, ministry contexts, and the high-capacity woman\'s own internal standard of excellence, which rarely leaves room for the slower, quieter work of formation.',
    whatItCosts:
      'Your decisions are increasingly driven by urgency rather than discernment. Your creative capacity diminishes. Your spiritual ear becomes harder to tune. The people closest to you receive what remains after the calendar has taken its share — which is rarely your best, and rarely enough.',
    prayer:
      'Almighty Living God, I confess I have confused busyness with faithfulness. I release the urgency that is not from You today. Teach me how to move at the speed of discernment — and to trust that what is built at Your pace will outlast everything built at mine.',
  },
  {
    id: 'control',
    number: '07',
    name: 'The Control Wound',
    tagline: 'She carries responsibility well. She struggles to release what was never hers.',
    email1Body:
      'Your score tells me that you have become the person everything depends on — and somewhere that felt necessary, even righteous. But beneath the capability is a nervous system that learned it could not fully relax without consequences. So you monitor. You manage. You pre-empt. You hold things together not only because you are capable — but because releasing them feels genuinely dangerous. The Control Wound is not about personality. It is about safety. It is what happens when a woman\'s nervous system decides that her peace depends on her ability to manage outcomes. And control — while it can look like excellence — eventually produces tension, fatigue, isolation, and a life that feels entirely dependent on your unceasing intervention.',
    scripture: 'Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths.',
    scriptureRef: 'Proverbs 3:5–6 NKJV',
    email1Closing:
      'There is a difference between stewardship and strain. Between responsibility and overreach. Learning that distinction — and living from it — begins inside WHOLE Life Design™.',
    whatIsHappening:
      'The Control Wound is perhaps the most socially acceptable wound in high-capacity women\'s circles — because it produces results. An over-controlling woman is often called reliable, thorough, excellent, or indispensable. The cost of her wound is rarely visible to the people who benefit from it. It is only visible to her alone — in the tension she carries, the rest she cannot access, and the relationships she inadvertently damages by managing rather than trusting.',
    theRoot:
      'It forms in environments where stability was unpredictable — where outcomes genuinely did depend on one person\'s vigilance. The child who learned that things fell apart when no one was watching becomes the woman who cannot stop watching. Not because she is a control type. But because her nervous system learned early that vigilance was the price of safety.',
    whatItCosts:
      'You carry the weight you were never assigned. You exhaust relationships with over-management. You cannot delegate without anxiety. You cannot rest without a checklist. And beneath all of it is the unspoken belief you have never fully examined: if I am not actively holding this together, it will fall apart.',
    prayer:
      'Father, I release the illusion that I am the one holding this together. You are the One holding everything together. Lord, teach me the difference between the stewardship You assigned me and the control I took for myself. I choose trust over tension — starting today.',
  },
  {
    id: 'grief',
    number: '08',
    name: 'The Grief Wound',
    tagline: 'She has continued moving. Something in her has not yet been fully processed.',
    email1Body:
      'Your score tells me that you have kept going — faithfully, impressively, without stopping. But something inside you has not kept pace with your forward movement. There is loss that was never fully acknowledged. Disappointment that was never fully processed. A version of life you quietly mourned and then moved on from — without anyone ever making space for the grief. Grief does not only form from what is taken. It forms from what was never allowed to be fully felt. And when it is not integrated — it stays stored in the body, in memory, in subtle emotional reactions you cannot always explain. You may not have called it grief. You may have called it fatigue. Numbness. Being fine. But it is grief. And it is asking for space.',
    scripture: 'The Lord is near to those who have a broken heart, And saves such as have a contrite spirit.',
    scriptureRef: 'Psalm 34:18 NKJV',
    email1Closing:
      'You do not have to outrun what you have lost any longer. There is a space for the grief — and for what comes after it. That space exists inside WHOLE Life Design™.',
    whatIsHappening:
      'Grief researchers describe ambiguous loss as the kind of grief that has no clear marker — no funeral, no social permission, no designated mourning period. It is the grief of losing something that is still physically present but no longer emotionally available. It is the grief of a dream and the vision that quietly died while everyone around you was still functioning. It is the grief of a version of life you quietly let go of — without anyone noticing.',
    theRoot:
      'The Grief Wound forms not only from what is taken — but from what was never allowed to be fully felt. High-capacity women are particularly prone to unprocessed grief because they are trained by temperament, culture, ministry, and expectation to keep moving. Stopping to grieve feels indulgent, weak, or spiritually insufficient. So the loss is stored rather than integrated.',
    whatItCosts:
      'The stored grief surfaces in unexpected ways — in emotional reactions that seem disproportionate to present circumstances, in a persistent low-grade heaviness, in difficulty being fully present, in the inability to trust new seasons fully. The body carries what the mind was never given permission to process.',
    prayer:
      'Lord Jesus, I give myself permission — finally — to grieve what I have lost. Not to dwell there, but to acknowledge it fully so I can leave it fully. I bring You every unfinished loss. Every unacknowledged ending. Every grief that had no space. Meet me here, my Lord.',
  },
  {
    id: 'relational',
    number: '09',
    name: 'The Relational Wound',
    tagline: 'She is surrounded by people. She is still carrying life alone.',
    email1Body:
      'Your score tells me that very few people truly know what you carry. You are connected — perhaps widely so. But the connection has rarely reached the interior of your life. The fear of what happens when you are fully seen — the risk of vulnerability, the memory of what it cost last time — has kept you behind a version of yourself that is capable and available but not fully known. The Relational Wound is not the absence of people. It is the absence of genuine communion. And carrying life alone — beneath a surface of connection — produces an exhaustion that no amount of social engagement can repair, because the exhaustion is not from too many people. It is from carrying, alone, what was designed to be shared.',
    scripture: 'Two are better than one, Because they have a good reward for their labor. For if they fall, one will lift up his companion.',
    scriptureRef: 'Ecclesiastes 4:9–10 NKJV',
    email1Closing:
      'You were not built to carry life alone. Safe, honest, God-anchored community is part of your healing — and part of your design. We build it together inside WHOLE Life Design™.',
    whatIsHappening:
      'The Relational Wound is the loneliness of being surrounded by people who need you, admire you, and depend on you — while the interior of your life remains largely unwitnessed. It is a loneliness that is invisible from the outside, which makes it harder to name and harder to address.',
    theRoot:
      'The Relational Wound forms when vulnerability has repeatedly been met with outcomes that confirmed the risk was not worth it — rejection, judgment, withdrawal, gossip, or simply being handled rather than held. The heart makes the only rational decision available to it: I will connect without revealing. I will be present without being fully seen.',
    whatItCosts:
      'The cost is carried in the body as a particular kind of fatigue — the exhaustion of being strong in every room, even in marriage, for every person, without anyone ever being strong for you. And in the quiet, a persistent question you rarely voice: does anyone actually know, see or care about me?',
    prayer:
      'God, I am tired of carrying this alone. I release the fear of being fully known. You see everything I have kept hidden — and You have never withdrawn. Teach me to let safe people past the wall. Give me the courage to be known.',
  },
  {
    id: 'legacy',
    number: '10',
    name: 'The Legacy Wound',
    tagline: 'She is creating impact. She has not yet built inheritance.',
    email1Body:
      'Your score tells me that you are building something significant — and that much of it still depends on your direct presence for it to continue. You have mastered impact. You are still developing inheritance. The Legacy Wound is not about a lack of success. It is about the gap between what you are producing in your lifetime and what will continue producing after it. Legacy is not what you leave behind accidentally. It is what you build deliberately. The woman carrying the Legacy Wound is often so absorbed in producing that she has not yet built the systems, transferred the wisdom, or developed the people who could carry her assignment further than she can reach alone.',
    scripture: 'We will not hide them from their children, Telling to the generation to come the praises of the Lord.',
    scriptureRef: 'Psalm 78:4 NKJV',
    email1Closing:
      'What God placed in you is not limited to your lifetime. Beginning to build for succession — strategically, deliberately — is work we begin together inside WHOLE Life Design™.',
    whatIsHappening:
      'The Legacy Wound becomes visible most clearly in this moment: when a high-capacity woman asks herself honestly — if I were gone tomorrow, what would continue? Not her relationships. Not her memory. Her work. Her systems. Her wisdom. Her frameworks. Most women, on honest reflection, discover that the answer is: very little. Not because they have not built — but because they have built in ways that kept them central rather than building in ways that made them transferable.',
    theRoot:
      'It forms through busyness — too absorbed in producing to pause and design for succession. Through the unconscious satisfaction of being needed — which makes transfer feel threatening. And through a culture of ministry and leadership that celebrates impact but rarely teaches inheritance.',
    whatItCosts:
      'You are building impressively — but not generationally. Your knowledge is not documented. Your frameworks are not transferable. Your successors are not developed. And everything you have built will likely diminish at the pace you exit — not because it was not valuable, but because it was never designed to outlive you.',
    prayer:
      'Father, forgive me for building in ways that kept me central. Teach me to build with succession in mind. Show me what must be transferred, who must be developed, and what systems must be established for what You gave me to continue beyond my lifetime.',
  },
];

export const soulAuditWoundMap: Record<SoulAuditWoundId, SoulAuditWound> =
  Object.fromEntries(soulAuditWounds.map((w) => [w.id, w])) as Record<
    SoulAuditWoundId,
    SoulAuditWound
  >;
