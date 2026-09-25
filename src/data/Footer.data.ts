export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  heading: string;
  links: FooterLink[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'The Farm', href: '/farm' },
      { label: 'The Resort', href: '/resort' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    heading: 'Own a Cottage',
    links: [
      { label: 'Packages & Pricing', href: '/own/packages-pricing' },
      { label: 'Ownership & Trust', href: '/own/ownership-and-trust' },
      { label: 'Reserve a Tour', href: '/own/reserve' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Journey', href: '/journey' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Terms of Service', href: '/legal/terms-of-service' },
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'whatsapp';
};

// TODO: swap placeholder hrefs for real handles before launch
export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/elysianfarmsandresort', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com/elysianfarmsandresort', icon: 'facebook' },
  { label: 'TikTok', href: 'https://tiktok.com/@elysianfarmsandresort', icon: 'tiktok' },
  { label: 'YouTube', href: 'https://youtube.com/@elysianfarmsandresort', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/elysianfarmsandresort', icon: 'linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/2340000000000', icon: 'whatsapp' },
];

export const contactInfo = {
  address: 'Ayobola Daodu, Lekki Scheme II, Ajah, Lagos State, Nigeria',
  devAddress: "Ido-Eruwa Expressway, Ibadan, Oyo State, Nigeria",
  phone: '+234 000 000 0000',
  phoneHref: 'tel:+2340000000000',
  email: 'elysian.enquiry@agrolocale.com',
  emailHref: 'mailto:elysian.enquiry@agrolocale.com',
};

// Recreates the closing-slide statement from the brand deck ("Own the Escape.")
// as a permanent fixture above the footer links, with a waitlist capture —
// this is the site's most-repeated CTA, so the copy lives centrally here.
export const footerCta = {
  eyebrow: 'ELYSIAN FARMS & RESORT',
  headline: 'Own the Escape.',
  subtext: 'Aduke Cottages · Farm · Resort · Hospitality · Experiences',
  ctaLabel: 'Reserve a Tour',
  ctaHref: '/own/reserve',
  waitlistLabel: 'Or join the waitlist for updates',
  waitlistPlaceholder: 'you@email.com',
  waitlistButtonLabel: 'Notify Me',
  newsletterLabel: 'Subscribe to our newsletter',
  newsletterPlaceholder: 'you@email.com',
  newsletterButtonLabel: 'Subscribe',
};

export const parentCompany = {
  name: 'Agrolocale',
  href: 'https://agrolocale.com',
  description: 'Elysian Farms & Resort is a project of Agrolocale.',
};