export const contactHero = {
  eyebrow: "Get In Touch",
  headline: "Let's Talk About Elysian.",
  subtext:
    "Have a question? Interested in ownership, visiting, partnerships or the development? We'd love to hear from you.",
  imageUrl: "/about/about-hero.webp",
  imageAlt: "Sunset view over Elysian Farms & Resort",
};

// Supplementary notes shown under each contact detail — these aren't in
// siteSettings (Sanity) since they're presentational copy, not raw contact
// data, so they stay hardcoded here.
export const contactNotes = {
  phoneNote: "Mon – Fri, 9am – 5pm (WAT)",
  emailNote: "We typically reply within 1–2 business days.",
  locationNote: "(Development site)",
};

export const helpSectionContent = {
  eyebrow: "Send an Enquiry",
  heading: "We're Here to Help.",
  body: "Tell us a little about what you're interested in and our team will get back to you as soon as possible.",
  quote: "We look forward to hearing from you.",
};

export type InquiryReason = {
  value: string;
  label: string;
};

export const inquiryReasons: InquiryReason[] = [
  { value: "ownership", label: "Ownership" },
  { value: "resort", label: "Resort" },
  { value: "farm", label: "Farm" },
  { value: "investment", label: "Investment" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export const messageMaxLength = 500;

export type ExploreItem = {
  id: string;
  label: string;
  description: string;
  icon: "home" | "bed" | "leaf" | "trending-up" | "users" | "message-square";
  href: string;
};

export const exploreMoreContent = {
  eyebrow: "What Are You Interested In?",
  heading: "Explore More",
  subtext: "Discover the different ways you can be part of the Elysian experience.",
};

export const exploreItems: ExploreItem[] = [
  { id: "ownership", label: "Ownership", description: "Own a piece of Elysian.", icon: "home", href: "/own" },
  { id: "resort", label: "Resort", description: "Stay, dine and unwind.", icon: "bed", href: "/resort" },
  { id: "farm", label: "Farm", description: "Our agricultural experience.", icon: "leaf", href: "/farm" },
  { id: "investment", label: "Investment", description: "Grow with us.", icon: "trending-up", href: "/own/ownership-and-trust" },
  { id: "partnership", label: "Partnership", description: "Let's create together.", icon: "users", href: "/contact" },
  { id: "other", label: "Other", description: "Any other enquiry.", icon: "message-square", href: "/contact" },
];

export const locationSectionContent = {
  eyebrow: "Our Location",
  heading: "Rooted in Ibadan.",
  body: "Elysian Farms & Resort is being developed in Ibadan, Oyo State, Nigeria — a city known for its rich history, distinctive landscape and growing economic and cultural significance.",
  ctaLabel: "Get Directions",
};

// Used to build the Google Maps embed and directions URLs — update once the
// exact site address is confirmed.
export const mapQuery = "Ido-Eruwa Expressway, Ibadan, Oyo State, Nigeria";

// Fallback contact details shown only if siteSettings hasn't been filled
// in yet in Studio.
export const contactFallback = {
  address: "Ibadan, Oyo State, Nigeria",
  phone: "+234 000 000 0000",
  email: "hello@elysianfarmsandresort.com",
};

export const stayConnectedContent = {
  eyebrow: "Follow the Journey",
  heading: "Stay Connected",
  subtext: "Follow Elysian as the vision becomes reality.",
  imageUrl: "/images/contact/stay-connected.jpg",
  imageAlt: "Aerial view of the Elysian farmland",
};

export const contactFinalCta = {
  eyebrow: "The Journey Has Already Begun.",
  heading: "Be Part of the Elysian Story.",
  subtext: "Stay connected and be among the first to discover what's coming.",
  primaryCtaLabel: "Explore Elysian",
  primaryCtaHref: "/own",
  secondaryCtaLabel: "Our Journey",
  secondaryCtaHref: "/journey",
};