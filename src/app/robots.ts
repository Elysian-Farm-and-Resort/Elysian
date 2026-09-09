import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elysianfarmsandresort.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep internal/non-content routes out of the crawl budget.
        // Adjust once the Sanity Studio route and any API routes exist.
        disallow: [
            "/api/", 
            "/studio/",
            "/admin/",
            "/login/",
            "/register/",
            "/dashboard/",
            "/settings/",
            "/account/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}