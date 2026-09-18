// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------
export const aboutHero = {
  eyebrow: "About Elysian",
  headline: "A Vision Taking Shape",
  subtext:
    "This is a destination where nature, agriculture, hospitality and leisure come together to create a distinctive countryside experience.",
  location: "Ibadan, Nigeria",
  imageUrl: "/about/about-hero.webp",
  imageAlt: "Aerial view of the Elysian Farms & Resort site",
};

// ---------------------------------------------------------------------------
// 2. Who We Are
// ---------------------------------------------------------------------------
export const whoWeAre = {
  eyebrow: "Who We Are",
  heading: "More Than a Resort",
  paragraphs: [
    "Elysian Farms & Resort is an evolving countryside destination designed around a simple idea: create a place where people can step away from the ordinary and reconnect with nature, food, meaningful experiences and each other.",
    "Our development brings together a resort, agricultural activities, recreation, dining and spaces for events and retreats — creating an environment designed for both escape and connection.",
    "Elysian is still taking shape, and every stage of its development is part of the story.",
  ],
};

export type FeatureTile = {
  id: string;
  label: string;
  imageUrl: string;
  imageAlt: string;
};

export const whoWeAreTiles: FeatureTile[] = [
  {
    id: "resort",
    label: "Resort",
    imageUrl: "/images/about/tile-resort.jpg",
    imageAlt: "Resort pool and lounge area",
  },
  {
    id: "farm",
    label: "Farm",
    imageUrl: "/images/about/tile-farm.jpg",
    imageAlt: "Greenhouse rows at the Elysian farm",
  },
  {
    id: "experience",
    label: "Experience",
    imageUrl: "/images/about/tile-experience.jpg",
    imageAlt: "Guests enjoying a curated Elysian experience",
  },
  {
    id: "nature",
    label: "Nature",
    imageUrl: "/images/about/tile-nature.jpg",
    imageAlt: "Natural landscape surrounding Elysian Farms & Resort",
  },
];

// ---------------------------------------------------------------------------
// 3. Our Story
// ---------------------------------------------------------------------------
export const ourStory = {
  quoteImageUrl: "/images/about/story-quote.jpg",
  quoteImageAlt: "Sunrise over the Elysian countryside",
  quoteLine1: "A simple idea.",
  quoteLine2: "A bigger purpose.",
  eyebrow: "Our Story",
  heading: "Where It All Began",
  body: "Elysian started with a vision to create a destination that blends hospitality, agriculture and nature. What began as an idea has grown into a purposeful project — one that is now taking shape in Ibadan.",
  timeline: ["The Idea", "The Vision", "Planning", "Development", "Elysian"],
};

// ---------------------------------------------------------------------------
// 4. Our Vision & Mission
// ---------------------------------------------------------------------------
export const ourVision = {
  eyebrow: "Our Vision",
  heading: "A Place to Escape, Experience, Connect and Grow.",
  body: "To create a distinctive countryside destination where hospitality, agriculture, nature and recreation exist together — offering people a place to escape, experience and connect.",
};

export type VisionPoint = {
  id: string;
  title: string;
  description: string;
};

export const visionPoints: VisionPoint[] = [
  {
    id: "escape",
    title: "Escape",
    description: "Slow down and step away from everyday life.",
  },
  {
    id: "experience",
    title: "Experience",
    description: "Memorable moments and new perspectives.",
  },
  {
    id: "connect",
    title: "Connect",
    description: "Bringing people together through shared experiences.",
  },
  {
    id: "grow",
    title: "Grow",
    description: "Creating lasting value for our community and the environment.",
  },
];

export const ourMission = {
  eyebrow: "Our Mission",
  heading: "Our Mission",
  body: "To develop and operate a destination that combines thoughtful hospitality, responsible agriculture and meaningful experiences — while creating lasting value for our guests, partners and community.",
  imageUrl: "/images/about/mission.jpg",
  imageAlt: "Hands holding a young plant sprout",
};

// ---------------------------------------------------------------------------
// 5. What We Stand For
// ---------------------------------------------------------------------------
export const standForContent = {
  eyebrow: "What We Stand For",
  heading: "Our Values",
  subtext: "These principles guide every decision we make and shape the Elysian experience.",
};

export type ValuePoint = {
  id: string;
  title: string;
};

export const valuePoints: ValuePoint[] = [
  { id: "hospitality", title: "Hospitality" },
  { id: "nature", title: "Nature" },
  { id: "sustainability", title: "Sustainability" },
  { id: "community", title: "Community" },
  { id: "excellence", title: "Excellence" },
];

// ---------------------------------------------------------------------------
// 6. The Elysian Concept
// ---------------------------------------------------------------------------
export const conceptContent = {
  eyebrow: "The Elysian Concept",
  heading: "One Destination. Many Experiences.",
  subtext: "The farm, the resort and ownership — all part of a greater vision.",
};

export type ConceptCard = {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export const conceptCards: ConceptCard[] = [
  {
    id: "farm",
    title: "The Farm",
    imageUrl: "/images/about/concept-farm.jpg",
    imageAlt: "Elysian farm greenhouses",
    ctaLabel: "Explore the Farm",
    ctaHref: "/farm",
  },
  {
    id: "resort",
    title: "The Resort",
    imageUrl: "/images/about/concept-resort.jpg",
    imageAlt: "Elysian resort pool area",
    ctaLabel: "Explore the Resort",
    ctaHref: "/resort",
  },
  {
    id: "ownership",
    title: "Ownership",
    imageUrl: "/images/about/concept-ownership.jpg",
    imageAlt: "Aduke Cottage exterior",
    ctaLabel: "Explore Ownership",
    ctaHref: "/own",
  },
];

// ---------------------------------------------------------------------------
// 7. Our Location
// ---------------------------------------------------------------------------
export const locationContent = {
  eyebrow: "Our Location",
  heading: "Rooted in Ibadan",
  body: "Elysian Farms & Resort is being developed in Ibadan, Oyo State, Nigeria — a city known for its rich history, distinctive landscape and growing commercial and cultural significance.",
  imageUrl: "/images/about/location-map.jpg",
  imageAlt: "Map or landscape view of Ibadan, Oyo State",
  ctaLabel: "Explore Our Location",
  ctaHref: "/contact",
};

// ---------------------------------------------------------------------------
// 8. Building the Future (Development)
// ---------------------------------------------------------------------------
export const developmentContent = {
  eyebrow: "Our Development",
  heading: "A Destination in the Making",
  body: "Elysian is currently in development. From the first plans to the milestones taking shape today, we are documenting the journey as the vision becomes reality.",
  imageUrl: "/images/about/development.jpg",
  imageAlt: "Construction progress at the Elysian Farms & Resort site",
  ctaLabel: "Follow Our Journey",
  ctaHref: "/journey",
};

// ---------------------------------------------------------------------------
// 9. Final CTA
// ---------------------------------------------------------------------------
export const aboutFinalCta = {
  eyebrow: "Be Part of the Journey",
  heading: "Elysian is Taking Shape.",
  subtext: "Discover the vision, follow the development and explore what lies ahead.",
  primaryCtaLabel: "Explore Elysian",
  primaryCtaHref: "/own",
  secondaryCtaLabel: "Contact Us",
  secondaryCtaHref: "/contact",
};