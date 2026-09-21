// ---------------------------------------------------------------------------
// 1. Farm Hero
// ---------------------------------------------------------------------------
export const farmHero = {
  eyebrow: "The Elysian Farm",
  headline: "Grown With Purpose.",
  subtext: "A modern agricultural experience at the heart of Elysian Farms & Resort.",
  location: "Ibadan, Nigeria",
  imageUrl: "/about/about-hero.webp",
  imageAlt: "Farmland and greenhouses at golden hour",
};

// ---------------------------------------------------------------------------
// 2. The Elysian Farm
// ---------------------------------------------------------------------------
export const farmIntro = {
  eyebrow: "The Elysian Farm",
  heading: "More Than a Farm",
  body: "Agriculture is an essential part of the Elysian vision. Our farm combines modern agricultural practices with the natural environment, creating a productive landscape that supports the resort, provides fresh produce and enriches the overall guest experience.",
  imageUrl: "/images/farm/greenhouse-interior.jpg",
  imageAlt: "Rows of crops inside an Elysian greenhouse",
};

export type FarmPillar = {
  id: string;
  title: string;
  description: string;
};

export const farmPillars: FarmPillar[] = [
  { id: "agriculture", title: "Agriculture", description: "Fresh, healthy produce and sustainable farming." },
  { id: "experiences", title: "Experiences", description: "Farm tours, hands-on activities and more." },
  { id: "hospitality", title: "Hospitality", description: "Farm-to-table dining and resort amenities." },
];

// ---------------------------------------------------------------------------
// 3. What We Grow
// ---------------------------------------------------------------------------
export const whatWeGrow = {
  eyebrow: "What We Grow",
  heading: "Quality Produce. Naturally.",
  subtext: "We grow a variety of crops, using modern farming techniques to ensure freshness, quality and sustainability.",
};

export type Crop = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export const crops: Crop[] = [
  { id: "tomatoes", name: "Tomatoes", description: "Fresh, flavorful and nutrient-rich.", imageUrl: "/images/farm/crop-tomatoes.jpg", imageAlt: "Fresh tomatoes on the vine" },
  { id: "leafy-greens", name: "Leafy Greens", description: "Healthy greens for everyday meals.", imageUrl: "/images/farm/crop-leafy-greens.jpg", imageAlt: "Fresh leafy greens" },
  { id: "peppers", name: "Peppers", description: "Vibrant, fresh and full of flavor.", imageUrl: "/images/farm/crop-peppers.jpg", imageAlt: "Fresh peppers" },
  { id: "herbs", name: "Herbs", description: "Aromatic and naturally grown.", imageUrl: "/images/farm/crop-herbs.jpg", imageAlt: "Fresh herbs" },
  { id: "fruits", name: "Fruits", description: "A variety of seasonal fruits.", imageUrl: "/images/farm/crop-fruits.jpg", imageAlt: "Seasonal fruits" },
];

// ---------------------------------------------------------------------------
// 4. Modern & Sustainable Agriculture
// ---------------------------------------------------------------------------
export const modernAgriculture = {
  eyebrow: "Modern & Sustainable Agriculture",
  heading: "Rooted in Nature. Built for Tomorrow.",
  body: "We use modern farming techniques and sustainable practices to grow high-quality produce while caring for the environment and conserving resources.",
  imageUrl: "/images/farm/modern-agriculture.jpg",
  imageAlt: "Modern greenhouse cultivation technology",
  features: [
    { id: "greenhouse", title: "Greenhouse Cultivation", description: "Controlled environments for consistent, quality yields." },
    { id: "water", title: "Efficient Water Use", description: "Smart irrigation that minimizes waste." },
    { id: "soil", title: "Natural Soil Health", description: "Practices that protect and enrich the soil." },
    { id: "resources", title: "Responsible Resource Use", description: "Conserving energy and materials at every stage." },
  ],
};

// ---------------------------------------------------------------------------
// 5. Farm to Table
// ---------------------------------------------------------------------------
export const farmToTable = {
  eyebrow: "Farm to Table",
  heading: "From Our Farm to Your Table",
  body: "Freshness begins at the source. Where possible, produce from the Elysian farm will form part of the ingredients used across dining experiences, creating a closer connection between the land and the table.",
};

export type FarmToTableStep = {
  id: string;
  label: string;
  imageUrl: string;
  imageAlt: string;
};

export const farmToTableSteps: FarmToTableStep[] = [
  { id: "farm", label: "Farm", imageUrl: "/images/farm/step-farm.jpg", imageAlt: "Fresh produce from our fields" },
  { id: "harvest", label: "Harvest", imageUrl: "/images/farm/step-harvest.jpg", imageAlt: "Carefully selected at peak quality" },
  { id: "kitchen", label: "Kitchen", imageUrl: "/images/farm/step-kitchen.jpg", imageAlt: "Prepared by our culinary team" },
  { id: "table", label: "Table", imageUrl: "/images/farm/step-table.jpg", imageAlt: "A memorable dining experience" },
];

// ---------------------------------------------------------------------------
// 6. The Farm Experience
// ---------------------------------------------------------------------------
export const farmExperienceContent = {
  eyebrow: "The Farm Experience",
  heading: "Experience the Farm",
  body: "A closer look at where food comes from. Join us for meaningful, hands-on experiences that connect you to the land, the people and the process.",
  ctaLabel: "Explore Experiences",
  ctaHref: "/contact",
};

export type FarmExperienceItem = {
  id: string;
  label: string;
  imageUrl: string;
  imageAlt: string;
};

export const farmExperienceItems: FarmExperienceItem[] = [
  { id: "farm-tours", label: "Farm Tours", imageUrl: "/images/farm/experience-tours.jpg", imageAlt: "Guests on a farm tour" },
  { id: "greenhouse-tours", label: "Greenhouse Tours", imageUrl: "/images/farm/experience-greenhouse.jpg", imageAlt: "Guided greenhouse tour" },
  { id: "harvest-experience", label: "Harvest Experience", imageUrl: "/images/farm/experience-harvest.jpg", imageAlt: "Guests helping with harvest" },
  { id: "educational-programs", label: "Educational Programs", imageUrl: "/images/farm/experience-education.jpg", imageAlt: "Educational farm program for visitors" },
];

// ---------------------------------------------------------------------------
// 7. Agriculture & Community
// ---------------------------------------------------------------------------
export const communityContent = {
  eyebrow: "Agriculture & Community",
  heading: "Growing Together",
  body: "The farm creates opportunities for local employment, skill development, and partnerships that support surrounding communities and strengthen the region.",
  imageUrl: "/images/farm/community.jpg",
  imageAlt: "Farm workers at Elysian Farms & Resort",
  features: [
    { id: "employment", title: "Local Employment", description: "Creating jobs and opportunities." },
    { id: "supply", title: "Local Supply", description: "Supporting local farmers and businesses." },
    { id: "skills", title: "Skills & Knowledge", description: "Training and capacity building." },
    { id: "food-production", title: "Food Production", description: "Contributing to food security." },
  ],
};

// ---------------------------------------------------------------------------
// 8. The Future of the Farm
// ---------------------------------------------------------------------------
export const farmFutureContent = {
  eyebrow: "The Future of the Farm",
  heading: "And This Is Only the Beginning.",
  body: "As Elysian grows, so will the farm. We're expanding production, introducing new crops and creating more experiences — all in harmony with nature and the resort.",
  imageUrl: "/images/farm/future.jpg",
  imageAlt: "Sunset over the Elysian farmland",
  ctaLabel: "Follow Our Journey",
  ctaHref: "/journey",
};

// ---------------------------------------------------------------------------
// 9. Final CTA
// ---------------------------------------------------------------------------
export const farmFinalCta = {
  eyebrow: "The Elysian Experience",
  heading: "There's More to Elysian.",
  subtext: "The farm is just one part of the destination. Discover the full destination and everything we're building.",
  primaryCtaLabel: "Explore The Resort",
  primaryCtaHref: "/resort",
  secondaryCtaLabel: "Follow Our Journey",
  secondaryCtaHref: "/journey",
};
