import { client } from "./client";

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export type SocialLink = {
  platform: "instagram" | "facebook" | "tiktok" | "youtube" | "linkedin";
  url: string;
};

export type SiteSettings = {
  contactAddress?: string;
  contactPhone?: string;
  contactEmail?: string;
  whatsappNumber?: string;
  socialLinks?: SocialLink[];
  footerCtaHeadline?: string;
  footerCtaSubtext?: string;
  parentCompanyName?: string;
  parentCompanyUrl?: string;
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  // Fetched at build time by default (useCdn: true in client.ts).
  // Revalidated whenever the Sanity webhook triggers a redeploy.
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export type GalleryCategory = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverUrl?: string;
  coverAlt?: string;
  imageCount: number;
};

export type GalleryEventImage = {
  asset: { url: string };
  alt?: string;
  caption?: string;
};

export type GalleryEvent = {
  _id: string;
  title: string;
  slug: string;
  eventDate?: string;
  category: string;
  categorySlug: string;
  location?: string;
  coverImage: { asset: { url: string }; alt?: string };
  description?: string;
  story?: unknown[];
  images: GalleryEventImage[];
  highlightStats?: { label?: string; value?: string }[];
  featured: boolean;
};

const galleryCategoryTitles = [
  "Harvest Events",
  "Farmer's Market",
  "Farm Estate Tours",
  "Community Experience",
  "Produce Showcase",
  "Lifestyle & Resort",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function categoryTitleFromSlug(slug: string) {
  return galleryCategoryTitles.find((title) => slugify(title) === slug);
}

export async function getGalleryCategories(): Promise<GalleryCategory[]> {
  const events = await getGalleryImages();
  return galleryCategoryTitles
    .map((title) => {
      const categoryEvents = events.filter((event) => event.category === title);
      const firstEvent = categoryEvents[0];
      return {
        _id: `category-${slugify(title)}`,
        title,
        slug: slugify(title),
        description: firstEvent?.description,
        coverUrl: firstEvent?.coverImage.asset.url,
        coverAlt: firstEvent?.coverImage.alt,
        imageCount: categoryEvents.reduce(
          (count, event) => count + event.images.length,
          0,
        ),
      };
    })
    .filter((category) => category.imageCount > 0);
}

export async function getGalleryCategoryBySlug(
  slug: string,
): Promise<GalleryCategory | null> {
  const categories = await getGalleryCategories();
  return categories.find((category) => category.slug === slug) || null;
}

export async function getGalleryImages(
  categorySlug?: string,
): Promise<GalleryEvent[]> {
  const categoryTitle = categorySlug
    ? categoryTitleFromSlug(categorySlug)
    : undefined;
  const filter = categoryTitle ? ` && category == $categoryTitle` : "";
  return client.fetch(
    `
    *[_type == "galleryEvent"${filter}] | order(eventDate desc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      eventDate,
      category,
      location,
      coverImage { asset->{url}, alt },
      description,
      story,
      images[] { asset->{url}, alt, caption },
      highlightStats,
      featured
    }
  `,
    { categoryTitle },
  );
}

// ---------------------------------------------------------------------------
// Journal
// ---------------------------------------------------------------------------

export type JournalPostSummary = {
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  excerpt?: string;
  coverImage?: { asset: { url: string }; alt: string };
};

export type JournalPost = {
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  excerpt?: string;
  coverImage?: { asset: { url: string }; alt: string };
  body?: unknown[];
};

export async function getJournalPostBySlug(
  slug: string,
): Promise<JournalPost | null> {
  return client.fetch(
    `*[_type == "journalPost" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      coverImage { asset->{url}, alt },
      body
    }`,
    { slug },
  );
}

export async function getJournalPosts(): Promise<JournalPostSummary[]> {
  return client.fetch(`
    *[_type == "journalPost"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      coverImage { asset->{url}, alt }
    }
  `);
}
