import type { ImageMetadata } from 'astro';
import venkatPhoto from '../assets/images/partner-venkat-manthripragada.jpg';
import raviPhoto from '../assets/images/partner-ravi-pratap-singh.jpg';

export type PartnerFunction = 'Marketing' | 'Technology & AI' | 'Transformation' | 'Leadership' | 'Personal branding';

export type Partner = {
  name: string;
  role: string;
  practice: string;
  functions: PartnerFunction[];
  /** Portrait for the card's image block; cards without one show initials. */
  photo?: ImageMetadata;
};

// One format for every card: a short role title, then two sentences — experience and scope,
// then standout credentials.
export const roster: Partner[] = [
  {
    name: 'Senthil Kumar Bellukutty',
    role: 'Transformation Consultant and Leadership Coach',
    practice:
      '25+ years across technology, business consulting, and organizational transformation. Founder of Magic Pencils Consulting and creator of Huddle, Momentum Zone, and Skill Forge.',
    functions: ['Transformation'],
  },
  {
    name: 'Ravi Pratap Singh',
    role: 'Entrepreneur, Author, and Leadership Mentor',
    practice:
      '30+ years building and scaling businesses across 50+ countries. Co-founder of Learnnovators, founder of Iceberg Leadership, and author of The Inner Game of Leadership.',
    functions: ['Leadership'],
    photo: raviPhoto,
  },
  {
    name: 'Venkat Manthripragada',
    role: 'Business and Technology Leader and Independent Advisor',
    practice:
      '25+ years across enterprise technology, ERP, consulting, and business transformation. CMA and MSc Psychology, focused on AI adoption and the human side of organizational change.',
    functions: ['Transformation', 'Technology & AI'],
    photo: venkatPhoto,
  },
];

const functionOrder: PartnerFunction[] = ['Marketing', 'Technology & AI', 'Transformation', 'Leadership', 'Personal branding'];

/** Filter chips: only functions someone on the roster covers, so no filter returns an empty list. */
export const partnerFunctions: PartnerFunction[] = functionOrder.filter((f) => roster.some((p) => p.functions.includes(f)));

/** First and last name initials (Senthil Kumar Bellukutty → SB), ignoring suffixes after a comma. */
export const initials = (name: string) => {
  const words = name.replace(/,.*$/, '').trim().split(/\s+/);
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
};
