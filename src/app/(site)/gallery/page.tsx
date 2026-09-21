import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryBrowser, { type CategoryWithCover } from "@/components/gallery/GalleryBrowser";
import GalleryFeatured from "@/components/gallery/GalleryFeatured";
import StayConnectedSection from "@/components/gallery/StayConnectedSection";
import { galleryHero, galleryStayConnected } from "@/data/GalleryPage.data";
import { getGalleryCategories, getGalleryImages } from "../../../../sanity/queries";
import { getSiteSettings } from "../../../../sanity/queries";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of the farm, resort, Aduke Cottages, and events at Elysian Farms & Resort.",
};

export default async function GalleryPage() {
  let categories: CategoryWithCover[] = [];
  let settings = null;

  try {
    const [rawCategories, allImages, siteSettings] = await Promise.all([
      getGalleryCategories(),
      getGalleryImages(),
      getSiteSettings(),
    ]);
    settings = siteSettings;

    categories = rawCategories.map((category) => {
      const imagesInCategory = allImages.filter((img) => img.categorySlug === category.slug);
      const cover = imagesInCategory.find((img) => img.featured) || imagesInCategory[0];
      return {
        ...category,
        coverUrl: cover?.image.asset.url,
        coverAlt: cover?.image.alt,
        imageCount: imagesInCategory.length,
      };
    });
  } catch (error) {
    console.error("Failed to fetch gallery data:", error);
  }

  return (
    <>
      <PageHero
        eyebrow={galleryHero.eyebrow}
        headline={galleryHero.headline}
        subtext={galleryHero.subtext}
        imageUrl={galleryHero.imageUrl}
        imageAlt={galleryHero.imageAlt}
      />

      <GalleryBrowser categories={categories} />

      <GalleryFeatured categories={categories} />

      <StayConnectedSection settings={settings} content={galleryStayConnected} />
    </>
  );
}