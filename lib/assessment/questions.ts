export type WoundType =
  | 'identity'
  | 'relational'
  | 'purpose'
  | 'legacy'
  | 'rhythm'
  | 'voice';

export interface QuizOption {
  letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  wound: WoundType;
  text: string;
}

export interface QuizQuestion {
  number: number;
  stem: string;
  options: QuizOption[];
}

// A→identity · B→relational · C→purpose · D→legacy · E→rhythm · F→voice
// Mapping is identical across all 14 questions.

export const questions: QuizQuestion[] = [
  {
    number: 1,
    stem: "You have just come through a full, productive week. Everything got done. Everyone was served. But sitting quietly on Sunday evening — something still feels off. What is it?",
    options: [
      { letter: 'A', wound: 'identity',   text: "I was present in every room and fully myself in none of them. I performed all week and I am not sure the real me showed up once." },
      { letter: 'B', wound: 'relational', text: "I was surrounded by people all week and carried everything completely alone. Nobody knows what this week actually cost me." },
      { letter: 'C', wound: 'purpose',    text: "I delivered everything that was asked of me and I keep quietly wondering whether any of it was actually what I was made to be doing." },
      { letter: 'D', wound: 'legacy',     text: "I produced and led and showed up — and none of what I built this week is connected to anything that will still matter in twenty years." },
      { letter: 'E', wound: 'rhythm',     text: "I kept going all week even though my body and my soul were telling me to stop. I do not know how to slow down without feeling like I am failing." },
      { letter: 'F', wound: 'voice',      text: "I said yes to everything again. I knew some of those yeses should have been no. I still could not say it." },
    ],
  },
  {
    number: 2,
    stem: "You are in a room — an event, a meeting, a gathering. People are responding well to you. Conversations are flowing. What is actually happening underneath the surface?",
    options: [
      { letter: 'A', wound: 'identity',   text: "I am performing. I have been doing this version of myself for so long I am genuinely not sure who else is in here." },
      { letter: 'B', wound: 'relational', text: "I am giving this room everything I have and thinking about how not one person in it actually knows what I am carrying right now." },
      { letter: 'C', wound: 'purpose',    text: "I am doing this well. And I have a quiet voice asking whether this is even the right room for me to be excellent in." },
      { letter: 'D', wound: 'legacy',     text: "I am good at this. I am also aware that nothing happening tonight is building anything that will outlast my direct presence." },
      { letter: 'E', wound: 'rhythm',     text: "I am functioning — but the effort it takes to keep this pace is something nobody around me can see or would believe if I told them." },
      { letter: 'F', wound: 'voice',      text: "I am agreeable and warm and accommodating. The honest version of what I think and feel is being held somewhere behind my smile." },
    ],
  },
  {
    number: 3,
    stem: "If you could address one thing in your life right now — not your schedule, not your income, the actual thing beneath all of it — what would it be?",
    options: [
      { letter: 'A', wound: 'identity',   text: "I want to feel like myself again. Not the version I have learned to perform. The actual woman beneath all of it." },
      { letter: 'B', wound: 'relational', text: "I want at least one relationship where I do not have to edit what I say or manage how much I reveal. Where someone genuinely knows what I am carrying." },
      { letter: 'C', wound: 'purpose',    text: "I want to know that I am spending my energy on the right thing. Not just a good thing. The specific thing I was actually made for." },
      { letter: 'D', wound: 'legacy',     text: "I want what I am building to outlast me. Not just impact for this season — something structurally designed to continue when I step back." },
      { letter: 'E', wound: 'rhythm',     text: "I want to stop living at a pace that is slowly depleting me. I want to feel like my life has sustainable rhythms rather than constant recovery." },
      { letter: 'F', wound: 'voice',      text: "I want to stop shrinking before I speak. I want to say what I actually know without the internal negotiation that happens every time." },
    ],
  },
  {
    number: 4,
    stem: "The person closest to you asks honestly — what is the thing you never say out loud? What surfaces first?",
    options: [
      { letter: 'A', wound: 'identity',   text: "That I do not always recognise myself. The gap between who I perform and who I actually am is wider than anyone around me would guess." },
      { letter: 'B', wound: 'relational', text: "That I am lonelier than it looks. I am known for what I do. I am rarely known for what it costs me." },
      { letter: 'C', wound: 'purpose',    text: "That I am not certain this is my actual lane. I am excellent at what I do. I am not always sure it is what I was specifically made to do." },
      { letter: 'D', wound: 'legacy',     text: "That I do not know what happens to everything I am building if I am no longer in the room. It is held together by my presence and that concerns me deeply." },
      { letter: 'E', wound: 'rhythm',     text: "That I am running on a nervous system that has not felt safe in a long time. I function beautifully. Internally I am exhausted in ways rest does not fix." },
      { letter: 'F', wound: 'voice',      text: "That I hold back far more than people realise. What I say is true. It is rarely the complete truth. Something always gets edited before it reaches the room." },
    ],
  },
  {
    number: 5,
    stem: "You have looked for support before. What kind of help have you tried that never quite reached the real thing?",
    options: [
      { letter: 'A', wound: 'identity',   text: "Coaches and therapists who helped me perform better. What I actually needed was someone to help me find out who I am beneath the performance." },
      { letter: 'B', wound: 'relational', text: "Community groups, gatherings, networks. Lots of connection. None of it went deep enough to hold what I am actually carrying." },
      { letter: 'C', wound: 'purpose',    text: "Business mentors, strategy programmes, goal-setting frameworks. All of it made me more effective at building in a slightly wrong direction." },
      { letter: 'D', wound: 'legacy',     text: "Leadership development, vision work, branding. All of it sharpened this season. None of it helped me build with the next generation in mind." },
      { letter: 'E', wound: 'rhythm',     text: "Rest, retreats, holidays. The relief was temporary. Within days the exhaustion returned and I realised it was not tiredness I was dealing with." },
      { letter: 'F', wound: 'voice',      text: "Confidence coaching, public speaking training, self-expression work. None of it addressed what was conditioning me to hold myself back in the first place." },
    ],
  },
  {
    number: 6,
    stem: "Be honest — not the answer you give when people ask, but the real one. How are you actually doing right now?",
    options: [
      { letter: 'A', wound: 'identity',   text: "I am exhausted in a way I cannot fully explain. It is not the workload. It is the cost of showing up as someone other than who I actually am, day after day." },
      { letter: 'B', wound: 'relational', text: "I am carrying a significant amount and carrying most of it alone. The people around me know I am busy. Very few know what it feels like on the inside." },
      { letter: 'C', wound: 'purpose',    text: "I am functioning well externally. Internally there is a persistent restlessness telling me I am close to the right thing but not quite on it yet." },
      { letter: 'D', wound: 'legacy',     text: "I am building and leading and producing. And I carry a quiet awareness that the scale of what I was meant to build is larger than what I have structured so far." },
      { letter: 'E', wound: 'rhythm',     text: "I am keeping everything moving. But my body and soul are both telling me the pace is not sustainable — and I do not know how to change it without everything stopping." },
      { letter: 'F', wound: 'voice',      text: "I am saying what is expected. What I actually know, think, and believe — the full version — rarely leaves my mouth. Something internal still edits it before it arrives." },
    ],
  },
  {
    number: 7,
    stem: "Think about the last time someone praised your work or celebrated what you have built. How did it honestly feel?",
    options: [
      { letter: 'A', wound: 'identity',   text: "Good for a moment. Then hollow. Because they were responding to the version of me I perform — not who I actually am." },
      { letter: 'B', wound: 'relational', text: "Appreciated externally and alone internally. Nobody celebrates what it cost you. They celebrate the result." },
      { letter: 'C', wound: 'purpose',    text: "It felt good. Followed immediately by a quiet question — is this even the work I was supposed to be excellent at?" },
      { letter: 'D', wound: 'legacy',     text: "Fine. But recognition for present impact is not the same as building something with a generational return. I want both." },
      { letter: 'E', wound: 'rhythm',     text: "Grateful — and then exhausted. Because I know what it took to get there and the pace required to sustain it is not one I can keep indefinitely." },
      { letter: 'F', wound: 'voice',      text: "Relieved. And aware that what they were praising was the edited, appropriate version of me — not the full truth of what I carry and know." },
    ],
  },
  {
    number: 8,
    stem: "When you sit down to do your most important work — what do you have to push down before you can begin?",
    options: [
      { letter: 'A', wound: 'identity',   text: "The question of who is actually doing this work. Me — or the version of me I have spent years learning to perform." },
      { letter: 'B', wound: 'relational', text: "The weight of how alone I am in it. If I let myself feel it fully, I would not be able to start." },
      { letter: 'C', wound: 'purpose',    text: "The nagging uncertainty about whether this is the right work. Not whether I am capable — whether this is the specific assignment I was made for." },
      { letter: 'D', wound: 'legacy',     text: "The awareness that I am building for now when I should also be building for what comes after me. The generational dimension keeps surfacing." },
      { letter: 'E', wound: 'rhythm',     text: "The tension in my body that never fully releases. The sense that my nervous system is still braced for something even when nothing is wrong." },
      { letter: 'F', wound: 'voice',      text: "The internal editor that appears before I write, speak, or create anything. The voice that monitors how much of myself I am allowed to release." },
    ],
  },
  {
    number: 9,
    stem: "What has this pattern cost you in the last year that you have not told anyone?",
    options: [
      { letter: 'A', wound: 'identity',   text: "My presence in my own life. I have been in every room and not fully there in any of them." },
      { letter: 'B', wound: 'relational', text: "The depth of my closest relationships. They have stayed at the surface because I stopped bringing my actual self into them." },
      { letter: 'C', wound: 'purpose',    text: "A year of full effort in a slightly misaligned direction. I am not behind — I am just not as far along as I would be if I had found the exact right assignment sooner." },
      { letter: 'D', wound: 'legacy',     text: "The compounding that happens when you build with generational intention from the beginning. What I am building does not yet have the architecture to outlast me." },
      { letter: 'E', wound: 'rhythm',     text: "My body. My rest. My internal rhythm. I have been overriding the signals for so long I am not sure I know how to stop and still feel like I am enough." },
      { letter: 'F', wound: 'voice',      text: "My voice. The things I knew that went unsaid. The truth I held back to keep things comfortable — for others and for myself." },
    ],
  },
  {
    number: 10,
    stem: "Imagine the version of you who has done the real work and is now fully operating from the other side of it. What is the most obvious difference between her and you today?",
    options: [
      { letter: 'A', wound: 'identity',   text: "She is not performing. She walks into any room as herself and it does not cost her energy because there is nothing to maintain." },
      { letter: 'B', wound: 'relational', text: "She is not alone in it. She has people who actually know what she is carrying — and she does not edit herself for any of them." },
      { letter: 'C', wound: 'purpose',    text: "She is on the exact right assignment. Same capacity, same drive — but everything she does is compounding because it is aligned with what she was specifically made for." },
      { letter: 'D', wound: 'legacy',     text: "She is building for inheritance not just impact. Every decision has a generational dimension. She thinks fifty years ahead as a reflex — not an effort." },
      { letter: 'E', wound: 'rhythm',     text: "She has learned what safe feels like. Her body is not braced. Her rest is genuine. Her pace is sustainable and she does not feel guilty for it." },
      { letter: 'F', wound: 'voice',      text: "She says what she knows. The complete version. Without editing, without managing other people's responses, without the internal negotiation that used to happen before every honest word." },
    ],
  },
  {
    number: 11,
    stem: "What question follows you around that you will not sit with for too long?",
    options: [
      { letter: 'A', wound: 'identity',   text: "Who am I when no one needs anything from me?" },
      { letter: 'B', wound: 'relational', text: "Is there even one person in my life who truly knows what this costs me?" },
      { letter: 'C', wound: 'purpose',    text: "Is this actually what I was made to do — or just the most available version of something close to it?" },
      { letter: 'D', wound: 'legacy',     text: "What is still standing from what I am building in thirty years?" },
      { letter: 'E', wound: 'rhythm',     text: "What happens to my body and soul if I do not change this pace?" },
      { letter: 'F', wound: 'voice',      text: "What would I say if I stopped editing myself before I spoke?" },
    ],
  },
  {
    number: 12,
    stem: "You finally have a free day with no obligations and no one needing anything from you. What surfaces that you normally keep pushed down?",
    options: [
      { letter: 'A', wound: 'identity',   text: "A grief I cannot fully name. Like I have been somewhere other than myself for a long time and I am not sure how to come back." },
      { letter: 'B', wound: 'relational', text: "How little I actually share with the people closest to me. I have been protecting them from the weight of it — and protecting myself from the vulnerability of being truly known." },
      { letter: 'C', wound: 'purpose',    text: "A restlessness that is not about doing more. It is about doing the right thing. The question of whether everything I am working toward is actually my specific assignment." },
      { letter: 'D', wound: 'legacy',     text: "The gap between the vision I carry for what I was meant to build and the actual structure I have in place to make it generationally significant." },
      { letter: 'E', wound: 'rhythm',     text: "How exhausted I actually am. Not tired. Depleted — in my body, my soul, my nervous system. In a way that a free day alone does not fully fix." },
      { letter: 'F', wound: 'voice',      text: "How much I have been holding back. How many things I know, believe, and carry that have never been fully said — to anyone." },
    ],
  },
  {
    number: 13,
    stem: "You have tried to address this before. What did not work and why?",
    options: [
      { letter: 'A', wound: 'identity',   text: "Mindset work, self-improvement, performance coaching. It made me better at showing up. It never touched who is actually underneath what I show up as." },
      { letter: 'B', wound: 'relational', text: "Groups, communities, accountability structures. Helpful at the surface level. None of it built the kind of relationship that could hold the actual weight of what I carry." },
      { letter: 'C', wound: 'purpose',    text: "Mentors, business strategy, goal-setting frameworks. All of it made me more effective — in a direction that may not have been fully mine to begin with." },
      { letter: 'D', wound: 'legacy',     text: "Leadership development, brand work, legacy conversations. All of it sharpened the present season. None of it helped me build with fifty years in mind." },
      { letter: 'E', wound: 'rhythm',     text: "Rest, self-care routines, wellness practices. Temporarily helpful. The depletion returned because the source of it was never actually addressed." },
      { letter: 'F', wound: 'voice',      text: "Confidence work, public speaking, visibility coaching. All of it addressed the external expression. None of it got to what was conditioning me to hold myself back internally." },
    ],
  },
  {
    number: 14,
    stem: "You are sitting across from a younger version of yourself — just starting to build. You have one sentence. What do you say?",
    options: [
      { letter: 'A', wound: 'identity',   text: "Find out who you actually are first. Build from her — not from who they need you to be." },
      { letter: 'B', wound: 'relational', text: "Do not do this alone. Find the people who can see the full weight of what you carry before you start carrying it." },
      { letter: 'C', wound: 'purpose',    text: "Do not build on the first good idea. Wait for the right one — the exact one — then go all in without apology." },
      { letter: 'D', wound: 'legacy',     text: "Every decision you make right now is a generational decision whether you treat it that way or not. Build like someone worthy is going to receive what you leave." },
      { letter: 'E', wound: 'rhythm',     text: "Learn what safe feels like before the pace of life teaches your body that safety is not available to you. Your nervous system is not your enemy." },
      { letter: 'F', wound: 'voice',      text: "Say what you know. Now. Without editing it first. The world does not need the managed version of you. It needs the true one." },
    ],
  },
];
