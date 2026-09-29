export type PartnerFunction = 'Marketing' | 'Technology & AI' | 'Transformation' | 'Personal branding';

export type Partner = {
  name: string;
  role: string;
  practice: string;
  functions: PartnerFunction[];
};

export const partnerFunctions: PartnerFunction[] = [
  'Marketing',
  'Technology & AI',
  'Transformation',
  'Personal branding',
];

export const roster: Partner[] = [
  {
    name: 'Jayant Mishra',
    role: 'Fractional CMO',
    practice: 'Helps B2B SaaS, PropTech and D2C brands find product-market narrative, build demand engines and scale revenue.',
    functions: ['Marketing'],
  },
  {
    name: 'Jennie Wright',
    role: 'Fractional CMO and Marketing Strategist',
    practice: '400+ virtual and in-person events, 2M+ leads generated. Podcast host and co-founder, It All Works.',
    functions: ['Marketing'],
  },
  {
    name: 'Sakshi Sharma',
    role: 'LinkedIn Personal Branding Strategist for AI and B2B founders',
    practice: 'Ghostwriting and content strategy.',
    functions: ['Personal branding'],
  },
  {
    name: 'Andrew Malinow, PhD',
    role: 'AI Executive and Fractional CTO',
    practice: 'Head of AI; LLMs and agentic AI across healthcare, hospitality, and EdTech — Columbia University PhD; founder, Hey Junior.',
    functions: ['Technology & AI'],
  },
  {
    name: 'Venkat Manthripragada',
    role: 'Global ERP and Digital Transformation Leader',
    practice: 'SAP S/4HANA, ServiceNow, Oracle, PeopleSoft; change management, PMO governance and GRC.',
    functions: ['Transformation', 'Technology & AI'],
  },
  {
    name: 'Prakash Gandhi',
    role: 'Fractional CTO',
    practice: 'Former Head of Post-Sales, IDAL.',
    functions: ['Technology & AI'],
  },
];

export const initials = (name: string) =>
  name
    .replace(/,.*$/, '')
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
