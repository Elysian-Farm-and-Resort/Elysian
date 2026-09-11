import { client } from './client';

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export type SocialLink = {
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin';
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
};

export async function getGalleryCategories(): Promise<GalleryCategory[]> {
  return client.fetch(`
    *[_type == "galleryCategory"] | order(order asc, title asc) {
      _id,
      title,
      "slug": slug.current,
      description
    }
  `);
}

export async function getGalleryCategoryBySlug(slug: string): Promise<GalleryCategory | null> {
  return client.fetch(
    `*[_type == "galleryCategory" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description
    }`,
    { slug }
  );
}

export type GalleryImage = {
  _id: string;
  image: { asset: { url: string }; alt: string };
  caption?: string;
  categorySlug: string;
  categoryTitle: string;
  featured: boolean;
};

export async function getGalleryImages(categorySlug?: string): Promise<GalleryImage[]> {
  const filter = categorySlug ? ` && category->slug.current == $categorySlug` : '';
  return client.fetch(
    `
    *[_type == "galleryImage"${filter}] | order(order asc, _createdAt desc) {
      _id,
      image { asset->{url}, alt },
      caption,
      "categorySlug": category->slug.current,
      "categoryTitle": category->title,
      featured
    }
  `,
    { categorySlug }
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