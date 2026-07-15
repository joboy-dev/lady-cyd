export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Lady Cyd helped me to deal with imposter syndrome and let me to actually start creating. I went from zero discipline to being able to build my own company as a young emerging leader.",
    name: "Ruth",
  },
  {
    quote:
      "I met Lady Cyd at a retreat she was invited to speak at. I am glad I went. Not only did she show me how to up level my mind but she helped me detox lies I built around my life. I recommend that every woman, girl, lady, listens to Lady Cyd.",
    name: "I.J.",
  },
  {
    quote:
      "Lady Cyd has a gift for helping you see what you couldn't see on your own. The clarity I gained was unlike anything I'd experienced in any other coaching space.",
    name: "Nicola",
    role: "Interior Decorator & Life Coach",
  },
  {
    quote:
      "The frameworks Lady Cyd teaches are not motivational — they are structural. I left understanding why I was doing what I was doing, and with a real path forward.",
    name: "Eunice",
    role: "Entrepreneur",
  },
];
