// ---------------------------------------------------------------------------
// Own page content. All hardcoded (no CMS). Source of truth for pricing and
// terms is notes/own-page-investment-data.md.
//
// Display rules agreed with the client:
// - Prices and deposits are shown, but understated (small, inside cards).
// - Payment plan: only say it is available. No months, no monthly amounts.
// - No ROI or return figures anywhere.
// - Photos and floor plans are placeholders until the media team supplies them.
// ---------------------------------------------------------------------------

export const ownHero = {
  eyebrow: "Own at Elysian",
  headline: "A Place of Your Own.",
  subtext:
    "Aduke Cottages and land plots in a managed countryside resort community in Ibadan, Nigeria.",
  imageUrl: "/about/about-hero.webp",
  imageAlt: "Aduke Cottages set within the Elysian landscape",
};

export const ownJumpLinks = [
  { id: "cottages", label: "Aduke Cottages" },
  { id: "land", label: "Land & Plots" },
  { id: "payment-trust", label: "Payment & Title" },
  { id: "earn", label: "Earn" },
];

// ---------------------------------------------------------------------------
// Aduke Cottages
// ---------------------------------------------------------------------------

export const cottagesContent = {
  eyebrow: "Aduke Cottages",
  heading: "Choose Your Cottage.",
  body: "Private cottages in a growing countryside resort community: a getaway of your own, surrounded by nature, farming and curated experiences.",
  ctaLabel: "Enquire About Cottages",
  ctaHref: "/contact",
};

export type Cottage = {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  price: string;
  deposit: string;
  imageUrl: string;
  imageAlt: string;
  floorPlanUrl: string;
  floorPlanAlt: string;
};

export const cottages: Cottage[] = [
  {
    id: "1-bedroom",
    name: "1 Bedroom",
    tagline: "Low-friction entry point",
    bestFor: "Solo, couple or starter ownership.",
    price: "₦28M",
    deposit: "₦5M",
    imageUrl: "/images/own/cottage-1br.jpg",
    imageAlt: "1-bedroom Aduke Cottage",
    floorPlanUrl: "/images/own/floorplan-1br.png",
    floorPlanAlt: "Floor plan of the 1-bedroom Aduke Cottage",
  },
  {
    id: "2-bedroom",
    name: "2 Bedroom",
    tagline: "Best balance of use and lodging",
    bestFor: "Family, weekend home or small group.",
    price: "₦39M",
    deposit: "₦5M",
    imageUrl: "/images/own/cottage-2br.jpg",
    imageAlt: "2-bedroom Aduke Cottage",
    floorPlanUrl: "/images/own/floorplan-2br.png",
    floorPlanAlt: "Floor plan of the 2-bedroom Aduke Cottage",
  },
  {
    id: "3-bedroom",
    name: "3 Bedroom",
    tagline: "Highest flexibility for stays and retreats",
    bestFor: "Premium family, corporate or group use.",
    price: "₦58M",
    deposit: "₦5M",
    imageUrl: "/images/own/cottage-3br.jpg",
    imageAlt: "3-bedroom Aduke Cottage",
    floorPlanUrl: "/images/own/floorplan-3br.png",
    floorPlanAlt: "Floor plan of the 3-bedroom Aduke Cottage",
  },
];

export const cottageAddOnsHeading = "Optional add-ons";

export const cottageAddOns = [
  {
    id: "furnishing",
    title: "Furnishing Package",
    description: "For owners who want to use managed lodging.",
  },
  {
    id: "solar",
    title: "Solar Package",
    description: "Optional solar installation to reduce electricity charges.",
  },
];

// ---------------------------------------------------------------------------
// Land and plots
// ---------------------------------------------------------------------------

export const landContent = {
  eyebrow: "Land & Plots",
  heading: "Choose Your Plot.",
  body: "Land and plots of different sizes available through Elysian Farms & Resort, each with a Certificate of Occupancy.",
  ctaLabel: "Enquire About Land",
  ctaHref: "/contact",
};

export type LandPlot = {
  id: string;
  name: string;
  description: string;
  price: string;
  deposit: string;
  imageUrl: string;
  imageAlt: string;
  // Greenhouse plot only: it comes with accessories, full list still pending.
  highlight?: string;
  detailsPlaceholder?: string;
};

export const landPlots: LandPlot[] = [
  {
    id: "greenhouse",
    name: "Greenhouse Plot",
    description: "A greenhouse plot that comes with accessories.",
    price: "₦15M",
    deposit: "₦1M",
    imageUrl: "/images/own/land-greenhouse.jpg",
    imageAlt: "Greenhouse plot",
    highlight: "Includes accessories",
    detailsPlaceholder: "Full accessories list coming soon.",
  },
  {
    id: "300-sqm",
    name: "300 SQM",
    description: "A 300 square metre plot.",
    price: "₦3M",
    deposit: "₦1M",
    imageUrl: "/images/own/land-300sqm.jpg",
    imageAlt: "300 square metre plot",
  },
  {
    id: "600-sqm",
    name: "600 SQM",
    description: "A 600 square metre plot.",
    price: "₦6M",
    deposit: "₦1M",
    imageUrl: "/images/own/land-600sqm.jpg",
    imageAlt: "600 square metre plot",
  },
  {
    id: "1-acre",
    name: "1 Acre",
    description: "A full acre of land.",
    price: "₦36M",
    deposit: "₦1M",
    imageUrl: "/images/own/land-acre.jpg",
    imageAlt: "One acre of land",
  },
];

export const factLabels = {
  price: "Price",
  deposit: "Initial deposit",
};

// ---------------------------------------------------------------------------
// Payment plan and title
// ---------------------------------------------------------------------------

export const paymentTrustContent = {
  eyebrow: "Payment & Title",
  heading: "Clear terms. Clear title.",
};

export type PaymentTrustPoint = {
  id: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const paymentTrustPoints: PaymentTrustPoint[] = [
  {
    id: "payment-plan",
    title: "Payment plan available",
    description:
      "A payment plan is available on every cottage and land plot. Contact us to find out more.",
    href: "/contact",
    linkLabel: "Contact us",
  },
  {
    id: "c-of-o",
    title: "C of O on every property",
    description: "All lands and cottages come with a Certificate of Occupancy (C of O).",
  },
  {
    id: "progress",
    title: "Follow the progress",
    description: "See construction and farm updates as they happen.",
    href: "/journey",
    linkLabel: "Our Journey",
  },
];

// ---------------------------------------------------------------------------
// Earn (managed lodging). No return figures by design.
// ---------------------------------------------------------------------------

export const earnContent = {
  eyebrow: "Earn",
  heading: "A cottage that can work for you.",
  body: "Furnished cottages may be placed into resort lodging management for guest stays, with company-led marketing, concierge and lodging services. It is a potential income pathway, not a guarantee.",
  note: "Managed lodging becomes available as the resort opens.",
};

export const earnSteps = [
  {
    id: "furnish",
    title: "Furnish",
    description: "Add the furnishing package so your cottage is guest-ready.",
  },
  {
    id: "place",
    title: "Place into management",
    description: "Your furnished cottage may be placed into the resort's lodging management.",
  },
  {
    id: "host",
    title: "Guests stay",
    description: "The team handles marketing, concierge and lodging services for guest stays.",
  },
];

// ---------------------------------------------------------------------------
// Gallery teaser and closing CTA
// ---------------------------------------------------------------------------

export const ownGalleryTeaser = {
  eyebrow: "Gallery",
  heading: "See the estate.",
  body: "Browse photos from the farm, the resort and life at Elysian.",
  ctaLabel: "View Gallery",
  ctaHref: "/gallery",
};

export const ownGalleryImages = [
  { url: "/images/own/gallery-1.jpg", alt: "Elysian estate view" },
  { url: "/images/own/gallery-2.jpg", alt: "Aduke Cottage exterior" },
  { url: "/images/own/gallery-3.jpg", alt: "Elysian farmland" },
];

export const ownClosingCta = {
  eyebrow: "Own at Elysian",
  heading: "Let's talk about your place at Elysian.",
  subtext: "Tell us what you're interested in and our team will get back to you.",
  primaryCtaLabel: "Enquire About Ownership",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "Explore the Resort",
  secondaryCtaHref: "/resort",
};