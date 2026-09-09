import type { MetadataRoute } from 'next';

// TODO: once Sanity is wired up, replace this with an env var pointing
// at the live domain (e.g. https://elysianfarmsandresort.com)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.elysianfarmsandresort.com';

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

// Static, hand-authored routes.
// priority is relative (0.0–1.0) and signals importance to crawlers —
// it does not guarantee ranking, but it's a useful hint.
const staticRoutes: StaticRoute[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 }, // Home
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },

  // Own / Aduke Cottages — the commercial core of the site
  { path: '/own', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/own/packages-pricing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/own/ownership-and-trust', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/own/reserve', changeFrequency: 'monthly', priority: 0.8 },

  // The Farm
  { path: '/farm', changeFrequency: 'monthly', priority: 0.6 },

  // The Resort Experience
  { path: '/resort', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/resort/pool-spa-recreation', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/resort/dining-and-animals', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/resort/events-and-retreats', changeFrequency: 'monthly', priority: 0.7 },

  // Journey / Journal index (individual posts are added dynamically below)
  { path: '/journey', changeFrequency: 'weekly', priority: 0.7 },

  { path: '/gallery', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
];

// Placeholder for CMS-driven routes (e.g. individual Journal/progress posts).
// Once Sanity is connected, replace this with a real fetch:
//
//   const posts = await sanityClient.fetch(`*[_type == "journalPost"]{ slug, _updatedAt }`);
//   return posts.map((post) => ({
//     url: `${BASE_URL}/journey/${post.slug.current}`,
//     lastModified: new Date(post._updatedAt),
//     changeFrequency: 'monthly',
//     priority: 0.5,
//   }));
async function getJournalRoutes(): Promise<MetadataRoute.Sitemap> {
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const journalEntries = await getJournalRoutes();

  return [...staticEntries, ...journalEntries];
}