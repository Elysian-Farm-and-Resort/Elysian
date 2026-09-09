export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Own',
    href: '/own',
    children: [
      { label: 'Packages & Pricing', href: '/own/packages-pricing' },
      { label: 'Ownership & Trust', href: '/own/ownership-and-trust' },
      { label: 'Reserve a Tour', href: '/own/reserve' },
    ],
  },
  { 
    label: 'The Farm', 
    href: '/farm'
  },
  {
    label: 'The Resort',
    href: '/resort',
    children: [
      { label: 'Pool, Spa & Recreation', href: '/resort/pool-spa-recreation' },
      { label: 'Dining & Animals', href: '/resort/dining-and-animals' },
      { label: 'Events & Retreats', href: '/resort/events-and-retreats' },
    ],
  },
  { label: 'Our Journey', href: '/journey' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// Persistent CTA rendered separately from the main list so it can be styled
// as a button rather than a text link (see slide 13/18 in the strategy deck —
// every touchpoint should funnel toward a reservation).
export const navCta: NavItem = {
  label: 'Reserve Now',
  href: '/own/reserve',
};