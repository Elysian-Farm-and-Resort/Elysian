import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import "./globals.css";

// ---------------------------------------------------------------------------
// Fonts — loaded via next/font so they're self-hosted, preloaded, and never
// block render (swaps out the CDN @import that was in the earlier globals.css
// draft). Exposed as CSS variables so globals.css can keep referencing
// var(--font-display) / var(--font-body) without change.
// ---------------------------------------------------------------------------
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// ---------------------------------------------------------------------------
// Site-wide metadata
// ---------------------------------------------------------------------------
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elysianfarmsandresort.com";
const SITE_NAME = "Elysian Farms & Resort";
const SITE_DESCRIPTION =
  "A managed countryside resort community in Nigeria where you can own a private Aduke cottage, enjoy curated farm-and-resort experiences, and tap into a potential lodging-income pathway.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // %s is replaced by each page's own title — e.g. "Own a Cottage | Elysian Farms & Resort"
  title: {
    default: `${SITE_NAME} — Own the Escape`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Elysian Farms and Resort",
    "Aduke Cottages",
    "own a cottage in Nigeria",
    "farm resort Nigeria",
    "diaspora real estate Nigeria",
    "corporate retreat venue Lagos",
    "managed lodging investment Nigeria",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Own the Escape`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og/default.jpg", // 1200x630, replace once real photography is in
        width: 1200,
        height: 630,
        alt: "Elysian Farms & Resort — Aduke Cottages nestled in the countryside",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Own the Escape`,
    description: SITE_DESCRIPTION,
    images: ["/og/default.jpg"], // replace with real photography once available
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1e14", // evergreen — matches the browser chrome to the brand
};

// ---------------------------------------------------------------------------
// Organization structured data (schema.org) — helps Google understand the
// brand as a single entity across all pages, and can surface logo/socials
// in search results. Lives once in the root layout rather than per page.
// ---------------------------------------------------------------------------
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: [
    // TODO: fill in with real social profiles once live
    // "https://www.instagram.com/elysianfarmsandresort",
    // "https://www.facebook.com/elysianfarmsandresort",
    // "https://www.tiktok.com/@elysianfarmsandresort",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={`${fraunces.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}