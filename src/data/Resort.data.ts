export const resortHero = {
  eyebrow: "The Resort",
  headline: "Relax. Reconnect. Experience Elysian.",
  subtext:
    "A world-class resort designed for comfort, wellness and unforgettable moments — set within the natural beauty of Ibadan.",
  imageUrl: "/images/resort/hero.jpg",
  imageAlt: "Elysian Resort pool at dusk with palm trees",
};

export type SideFeature = {
  id: string;
  title: string;
  description: string;
  icon: "bed" | "utensils" | "sparkles" | "trees";
};

export const sanctuaryContent = {
  eyebrow: "The Resort Experience",
  heading: "A Sanctuary in Nature",
  body: "The Elysian Resort blends modern luxury with the tranquility of the countryside. Whether you're here for a weekend getaway, a family retreat, or a special occasion, every detail is designed to help you relax, recharge and feel at home.",
  ctaLabel: "Explore Our Rooms",
  ctaHref: "#rooms",
  imageUrl: "/images/resort/sanctuary.jpg",
  imageAlt: "Resort interior lounge area",
};

export const sanctuaryFeatures: SideFeature[] = [
  { id: "accommodation", title: "Luxury Accommodation", description: "Comfortable, modern and nature-inspired stays.", icon: "bed" },
  { id: "dining", title: "Fine Dining", description: "Fresh, locally sourced cuisine with a global touch.", icon: "utensils" },
  { id: "wellness", title: "Wellness & Recreation", description: "Relax, refresh and enjoy a range of activities.", icon: "sparkles" },
  { id: "nature", title: "Nature & Adventure", description: "Explore the outdoors, from trails to water activities.", icon: "trees" },
];

export type AmenityItem = {
  id: string;
  label: string;
  icon: "bed" | "utensils" | "flower" | "waves" | "dumbbell" | "trees" | "plane" | "baby" | "train";
};

export const amenitiesContent = {
  eyebrow: "Resort Amenities",
  heading: "Everything You Need for a Perfect Stay",
};

// Includes the additions beyond the original brochure: Helipad, Mini
// Playground, and Train Station Pickup.
export const amenityItems: AmenityItem[] = [
  { id: "rooms-suites", label: "Rooms & Suites", icon: "bed" },
  { id: "restaurant-bar", label: "Restaurant & Bar", icon: "utensils" },
  { id: "wellness-spa", label: "Wellness Spa", icon: "flower" },
  { id: "swimming-pool", label: "Swimming Pool", icon: "waves" },
  { id: "fitness-center", label: "Fitness Center", icon: "dumbbell" },
  { id: "landscaped-gardens", label: "Landscaped Gardens", icon: "trees" },
  { id: "helipad", label: "Helipad", icon: "plane" },
  { id: "mini-playground", label: "Mini Playground", icon: "baby" },
  { id: "train-pickup", label: "Train Station Pickup", icon: "train" },
];

export const roomsContent = {
  eyebrow: "Our Rooms",
  heading: "Designed for Comfort and Style",
  body: "Choose from a range of beautifully appointed rooms and suites, each offering modern amenities, scenic views and a peaceful atmosphere.",
  ctaLabel: "Enquire About Rooms",
  ctaHref: "/contact",
};

export type RoomType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export const roomTypes: RoomType[] = [
  { id: "standard", title: "Standard Room", description: "Comfort and style for a restful stay.", imageUrl: "/images/resort/room-standard.jpg", imageAlt: "Standard Room interior" },
  { id: "deluxe", title: "Deluxe Room", description: "More space, more comfort.", imageUrl: "/images/resort/room-deluxe.jpg", imageAlt: "Deluxe Room interior" },
  { id: "executive", title: "Executive Suite", description: "Premium living, elevated experience.", imageUrl: "/images/resort/room-executive.jpg", imageAlt: "Executive Suite interior" },
];

export const experiencesMoreContent = {
  eyebrow: "Resort Experiences",
  heading: "More Than a Stay",
  body: "Enjoy a curated selection of experiences, from fine dining and wellness to outdoor adventures and cultural events.",
  ctaLabel: "Discover Our Experiences",
  ctaHref: "/contact",
  imageUrl: "/images/resort/experiences.jpg",
  imageAlt: "Resort grounds with gazebo and pool at dusk",
};

export type ExperienceListItem = {
  id: string;
  label: string;
  icon: "utensils" | "sparkles" | "compass" | "party";
};

export const experienceListItems: ExperienceListItem[] = [
  { id: "dining", label: "Dining Experiences", icon: "utensils" },
  { id: "wellness", label: "Wellness & Spa", icon: "sparkles" },
  { id: "outdoor", label: "Outdoor Activities", icon: "compass" },
  { id: "events", label: "Events & Celebrations — including nature-themed weddings", icon: "party" },
];

export const waitlistSectionContent = {
  eyebrow: "Be the First to Know",
  heading: "Join the Resort Waitlist",
  body: "The Resort is still under development. Join the waitlist to be notified as rooms, experiences and reservations become available.",
};

export const galleryTeaserContent = {
  eyebrow: "Gallery",
  heading: "A Glimpse of the Resort",
  body: "See what makes Elysian a destination like no other.",
  ctaLabel: "View Gallery",
  ctaHref: "/gallery/resort",
};

export const galleryPreviewImages = [
  { url: "/images/resort/preview-1.jpg", alt: "Resort pool at dusk" },
  { url: "/images/resort/preview-2.jpg", alt: "Resort suite interior" },
  { url: "/images/resort/preview-3.jpg", alt: "Resort landscape view" },
  { url: "/images/resort/preview-4.jpg", alt: "Resort dining area" },
];

export const resortClosingCta = {
  eyebrow: "Plan Your Visit",
  heading: "Be Part of the Elysian Experience",
  subtext: "Stay connected for updates, special offers and the latest resort news.",
  ctaLabel: "Contact Us",
  ctaHref: "/contact",
};