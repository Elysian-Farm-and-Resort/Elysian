import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryBrowser, { type CategoryWithCover } from "@/components/gallery/GalleryBrowser";
import GalleryFeatured from "@/components/gallery/GalleryFeatured";
import StayConnectedSection from "@/components/gallery/StayConnectedSection";
import { galleryHero, galleryStayConnected } from "@/data/GalleryPage.data";
import { getGalleryCategories } from "../../../../sanity/queries";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of the farm, resort, Aduke Cottages, and events at Elysian Farms & Resort.",
};

export default async function GalleryPage() {
  let categories: CategoryWithCover[] = [];

  try {
    const rawCategories = await getGalleryCategories();
    categories = rawCategories;
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

      <StayConnectedSection content={galleryStayConnected} />
    </>
  );
}