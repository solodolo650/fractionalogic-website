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

/* Strategic Partners is a draft until approval (page kept in src/app/(frontend)/_drafts). */
export const partners: NavLink[] = [
  {
    label: 'Twin Partner Network',
    href: routes.twinPartnerNetwork,
    description: 'The vetted roster of senior fractional leaders across regions.',
  },
];

export const primaryNav: NavItem[] = [
  { label: 'About', href: routes.about },
  { label: 'Services', children: services },
  { label: 'Partners', href: routes.twinPartnerNetwork },
  { label: 'Resources', href: routes.resources },
];

export const contact = {
  email: 'murali.e@fractionalogic.com',
  location: 'Chennai, India',
  linkedin: 'https://www.linkedin.com/in/muralidharan-e-9296743',
};

