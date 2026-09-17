export const heroContent = {
  eyebrow: "Elysian Farms & Resort",
  headline: "Own the Escape.",
  subtext:
    "A managed countryside resort community — own a cottage, farm the land, escape the city.",
  ctaLabel: "Reserve a Tour",
  ctaHref: "/own/reserve",
  // Leave empty until a real video is ready — Hero falls back to a static
  // poster image automatically when this is blank.
  // youtubeId: "XRTeuAO_ZQQ",
  youtubeId: "",
  posterImageUrl: "/logo2.png",
  posterImageAlt: "Elysian Farms & Resort at golden hour",
};

export type TrustPoint = {
  id: string;
  title: string;
  description: string;
};
 
// Reframed from the deck's "Trust Is the Conversion Engine" pillars —
// written for a marketing site reassuring pre-launch buyers, not as a
// literal slide reproduction.
export const trustPoints: TrustPoint[] = [
  {
    id: "legal",
    title: "Clear Documentation",
    description:
      "Title, survey, allocation, and sale agreement are available for your own due diligence.",
  },
  {
    id: "delivery",
    title: "Visible Progress",
    description:
      "Construction updates and site progress are shared regularly — see our Journey below.",
  },
  {
    id: "management",
    title: "Transparent Management",
    description:
      "A clear breakdown of how lodging management works if you choose the Earn pathway.",
  },
  {
    id: "financial",
    title: "Grounded Numbers",
    description: "Realistic, transparent assumptions — no inflated returns.",
  },
];
 
export type Pillar = {
  id: string;
  label: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
};
 
// Content from the brand deck's "OWN · ESCAPE · EXPERIENCE · EARN" thesis.
// OWN is treated as the featured pillar in the layout since it's the
// commercial core (Aduke Cottages) — the other three support it.
export const pillars: Pillar[] = [
  {
    id: "own",
    label: "Own",
    title: "A cottage that's yours.",
    description: "A 1, 2 or 3-bedroom cottage in a growing resort community.",
    imageUrl: "/images/pillars/own.jpg",
    imageAlt: "Aduke Cottage exterior at Elysian Farms & Resort",
    href: "/own",
  },
  {
    id: "escape",
    label: "Escape",
    title: "A getaway surrounded by nature.",
    description: "Farming, open air, and curated experiences away from the city.",
    imageUrl: "/images/pillars/escape.jpg",
    imageAlt: "Countryside view at Elysian Farms & Resort",
    href: "/resort",
  },
  {
    id: "experience",
    label: "Experience",
    title: "Pool, dining, and farm life.",
    description: "Games, spa, animals, dining, and curated farm-and-resort experiences.",
    imageUrl: "/images/pillars/experience.jpg",
    imageAlt: "Resort pool and dining area",
    href: "/resort/pool-spa-recreation",
  },
  {
    id: "earn",
    label: "Earn",
    title: "A potential income pathway.",
    description: "Furnished units may be placed into resort lodging management for guest stays.",
    imageUrl: "/images/pillars/earn.jpg",
    imageAlt: "Furnished cottage interior",
    href: "/own/ownership-and-trust",
  },
];

export type CottagePackage = {
  id: string;
  bedrooms: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};
 
// From the deck's "Offer Architecture" slide — kept descriptive rather than
// inventing prices we don't actually have yet.
export const cottagePackages: CottagePackage[] = [
  {
    id: "1-bedroom",
    bedrooms: "1 Bedroom",
    tagline: "Low-friction entry point",
    description: "Solo, couple, or starter ownership.",
    imageUrl: "/images/cottages/1-bedroom.jpg",
    imageAlt: "1-bedroom Aduke Cottage",
  },
  {
    id: "2-bedroom",
    bedrooms: "2 Bedroom",
    tagline: "Best balance of use + lodging",
    description: "Family, weekend home, or small group.",
    imageUrl: "/images/cottages/2-bedroom.jpg",
    imageAlt: "2-bedroom Aduke Cottage",
  },
  {
    id: "3-bedroom",
    bedrooms: "3 Bedroom",
    tagline: "Highest flexibility for stays & retreats",
    description: "Premium family, corporate, or group use.",
    imageUrl: "/images/cottages/3-bedroom.jpg",
    imageAlt: "3-bedroom Aduke Cottage",
  },
];
 
export type ShowcasePanel = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
};
 
export const showcasePanels: ShowcasePanel[] = [
  {
    id: "farm",
    title: "A working farm, today.",
    description:
      "Greenhouses, fresh produce, and farm tours — the part of Elysian that's already alive.",
    imageUrl: "/images/showcase/farm.jpg",
    imageAlt: "Greenhouse and farmland at Elysian Farms & Resort",
    href: "/farm",
    ctaLabel: "Explore the Farm",
  },
  {
    id: "resort",
    title: "A resort taking shape.",
    description: "Pool, dining, spa, and curated experiences — see how it's coming together.",
    imageUrl: "/images/showcase/resort.jpg",
    imageAlt: "Resort construction and design renderings",
    href: "/resort",
    ctaLabel: "See the Resort",
  },
];

export type AudienceSegment = {
  id: string;
  name: string;
  quote: string;
  href: string;
  ctaLabel: string;
};
 
// From the deck's "Target Audience" and "Audience Personas" slides —
// quotes kept close to the original voice since they capture real intent.

export const audienceSegments: AudienceSegment[] = [
  {
    id: "diaspora",
    name: "Diaspora Owners",
    quote: "I want something tangible back home, managed by someone I trust.",
    href: "/own/ownership-and-trust",
    ctaLabel: "See how ownership works",
  },
  {
    id: "lagos-professionals",
    name: "Lagos Professionals",
    quote: "I want a beautiful place to breathe, without losing the weekend to traffic.",
    href: "/resort",
    ctaLabel: "Explore the Resort",
  },
  {
    id: "lifestyle-investors",
    name: "Lifestyle Investors",
    quote: "If I buy, what makes this asset commercially useful?",
    href: "/own/ownership-and-trust",
    ctaLabel: "View the Earn pathway",
  },
  {
    id: "corporates",
    name: "Corporates",
    quote: "Can this reduce retreat logistics and create a recurring destination?",
    href: "/resort/events-and-retreats",
    ctaLabel: "See Events & Retreats",
  },
  {
    id: "experience-seekers",
    name: "Experience Seekers",
    quote: "I just want a great stay, good food, and something to remember.",
    href: "/resort/pool-spa-recreation",
    ctaLabel: "See the Experience",
  },
];