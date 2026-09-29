import { routes } from './site';

export type Faq = { question: string; answer: string; link?: { label: string; href: string } };

export const faqs: Faq[] = [
  {
    question: 'What is a Fractional CMO?',
    answer:
      'A Fractional CMO (FCMO) is a marketing executive who leads and provides strategic direction to a company without holding a full-time internal position. Engagements are project-based or part-time.',
  },
  {
    question: 'Why employ a Fractional CMO?',
    answer:
      'FCMOs deliver cost savings, flexibility, objectivity, specialized expertise, immediate impact, and access to resources — particularly valuable for companies with limited budgets or specific marketing needs.',
  },
  {
    question: 'What is Fractional Twinning, and how is it different from a single FCMO engagement?',
    answer:
      'Twinning pairs two fractional executives — for example, a CMO and a CRO — to jointly own a broader leadership scope with shared KPIs. It extends the same fractional principles across functions rather than replacing the FCMO model.',
  },
  {
    question: 'Is Twinning only for marketing and sales?',
    answer:
      'No. Twinning applies across finance, technology, operations and HR, and spans industries including SaaS, healthcare, manufacturing, professional services and retail.',
  },
  {
    question: 'When should a business consider Fractional Twinning instead of a single FCMO?',
    answer:
      'When commercial complexity spans both upstream strategy and downstream execution, or when two functions need joint accountability — typically at Series B or equivalent scale.',
  },
  {
    question: "What is Magic Pencils' Huddle, and how does it complement an FCMO engagement?",
    answer:
      'Huddle is a collective-intelligence platform from our partner Magic Pencils Consulting that helps organizations turn employee input into clear, actionable decisions. It complements FCMO-led marketing and brand transformation by surfacing frontline insights and converting shared thinking into committed action. Magic Pencils also offers Momentum Zone (organizational-readiness assessment) and Skill Forge (capability indexing).',
  },
  {
    question: 'Which regions do you serve?',
    answer:
      'India is our primary base. We serve APAC, the Middle East, the United Kingdom, and the United States through our twin partner network.',
    link: { label: 'Full regional detail on About', href: routes.footprint },
  },
  {
    question: 'How do I start?',
    answer:
      'Every engagement starts with a diagnostic FCMO conversation on your current marketing leadership gap, growth stage, and go-to-market priorities.',
    link: { label: 'Book it on Talk to Us', href: routes.bookConversation },
  },
];
