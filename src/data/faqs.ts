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
    question: 'What does a Fractional CMO lead?',
    answer:
      'Your Fractional CMO joins the leadership team and leads customer targeting, positioning, go-to-market strategy, demand generation, sales alignment, marketing technology, and team development.',
  },
  {
    question: 'What is Fractional Twinning, and how is it different from a single FCMO engagement?',
    answer:
      'Fractional Twinning pairs your Fractional CMO with complementary senior leadership in finance, technology, or operations — without hiring full-time executives. It extends the same fractional principles across functions rather than replacing the FCMO model.',
  },
  {
    question: 'Is Twinning only for marketing and sales?',
    answer:
      'No. Twinning applies across finance, technology, operations, and HR, and spans industries including SaaS, healthcare, manufacturing, professional services, and retail.',
  },
  {
    question: 'When should a business consider Fractional Twinning instead of a single FCMO?',
    answer:
      'When commercial complexity spans both upstream strategy and downstream execution — positioning and conversion, for example — or when two functions need joint accountability. Typically, at Series B or equivalent scale.',
  },
  {
    question: 'What is Fractionalogic?',
    answer:
      'Fractionalogic provides embedded fractional C-suite marketing leadership for growth-stage B2B tech businesses, helping them achieve cohesive growth without relying on the founder. Our Fractional CMO model delivers clarity, accountability, and a repeatable approach to commercial growth without the cost and disruption of a full-time hire.',
  },
  {
    question: 'What does Fractionalogic do and how does it help growth-stage B2B technology businesses?',
    answer:
      'We provide embedded Fractional CMO leadership for growth-stage B2B SaaS, AI, enterprise technology, and tech-enabled businesses. Our Fractional Twinning model connects marketing leadership with senior leaders in finance, technology, or operations, providing a pathway to broader fractional leadership. We support growth-focused businesses across India, APAC, the Middle East, the UK, and the US.',
  },
  {
    question: 'What is Magic Pencils?',
    answer:
      'Magic Pencils makes organizational readiness, alignment, and capability visible. Magic Pencils is a measurement-first transformation practice. Its instruments show where the organization stands, surface the commitments people will own, and test whether the required capability exists. The client keeps the software, data, baseline, and the ability to re-run the reading.',
  },
  {
    question: 'What is Momentum Zone?',
    answer:
      'A structured, multi-respondent readiness assessment that shows where the organization actually stands and where Sales, Product, Marketing, Delivery, and leadership disagree. It creates a baseline before a campaign, reorganization, or transformation program begins.',
  },
  {
    question: 'What is Huddle?',
    answer:
      "A facilitated process that gives participants an equal voice, distills collective intelligence, and converts the room’s evidence into a decision with named owners. It is designed to produce commitment during the session — not a list of actions that loses force afterward.",
  },
  {
    question: 'What is Skill Forge?',
    answer:
      'A capability platform that evaluates real work against the competencies the plan requires. It keeps business performance and team capability visible as separate measures, so leadership can see when results and readiness diverge.',
  },
  {
    question: 'Which regions do you serve?',
    answer:
      'India is our primary base. We serve APAC, the Middle East, the United Kingdom, and the United States through our Twin Partner Network.',
    link: { label: 'Full regional detail on About', href: routes.footprint },
  },
  {
    question: 'How do I start?',
    answer:
      'Every engagement starts with a diagnostic FCMO conversation on your current marketing leadership gap, growth stage, and go-to-market priorities.',
    link: { label: 'Book it on Talk to Us', href: routes.bookConversation },
  },
];
