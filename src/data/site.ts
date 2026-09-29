export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

export const routes = {
  home: '/',
  about: '/about',
  footprint: '/about#footprint',
  fcmo: '/services/fcmo',
  twinning: '/services/fractional-twinning',
  strategicPartners: '/partners/strategic-partners',
  twinPartnerNetwork: '/partners/twin-partner-network',
  joinRoster: '/partners/twin-partner-network#apply',
  resources: '/resources',
  talkToUs: '/talk-to-us',
  bookConversation: '/talk-to-us#start',
  disclaimer: '/disclaimer',
  terms: '/terms-of-use',
  privacy: '/privacy-policy',
} as const;

export const services: NavLink[] = [
  {
    label: 'Fractional CMO',
    href: routes.fcmo,
    description: 'Revenue-accountable marketing leadership, embedded in your team.',
  },
  {
    label: 'Fractional Twinning',
    href: routes.twinning,
    description: 'A complementary fractional executive, paired around one shared outcome.',
  },
];

export const partners: NavLink[] = [
  {
    label: 'Strategic Partners',
    href: routes.strategicPartners,
    description: 'Readiness, collective-intelligence, and capability instruments.',
  },
  {
    label: 'Twin Partner Network',
    href: routes.twinPartnerNetwork,
    description: 'The vetted roster of senior fractional leaders across regions.',
  },
];

export const primaryNav: NavItem[] = [
  { label: 'About', href: routes.about },
  { label: 'Services', children: services },
  { label: 'Partners', children: partners },
  { label: 'Resources', href: routes.resources },
];

export const contact = {
  email: 'muralid1960@gmail.com',
  phone: '+91 98405 42240',
  location: 'Chennai, India',
  linkedin: 'https://www.linkedin.com/in/muralidharan-e-9296743',
};

export const footerAbout =
  'Fractionalogic gives growth-stage B2B SaaS founders embedded, revenue-accountable marketing leadership — and a path to a broader fractional leadership system through Fractional Twinning. Based in India, serving growth-focused businesses across APAC, the Middle East, the UK, and the US.';
