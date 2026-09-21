import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import {
  getGalleryCategories,
  getGalleryCategoryBySlug,
  getGalleryImages,
} from "../../../../../sanity/queries";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  const categories = await getGalleryCategories();
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = await getGalleryCategoryBySlug(category);
  if (!meta) return {};

  return {
    title: `${meta.title} Gallery`,
    description: meta.description,
  };
}

export default async function GalleryCategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = await getGalleryCategoryBySlug(category);

  if (!meta) notFound();

  const images = await getGalleryImages(category);

  return (
    <div className="section">
      <div className="container">
        <h1>{meta.title}</h1>
        {meta.description && <p className="text-lead">{meta.description}</p>}
        <div className={styles.gridWrap}>
          <GalleryGrid images={images} />
        </div>
      </div>
    </div>
  );
}