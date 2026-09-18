import type { Metadata } from 'next';
import GalleryCard from "@/components/home/GalleryCard";
import { getGalleryCategories, getGalleryImages } from "../../../../sanity/queries";
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos of the farm, resort, Aduke Cottages, and events at Elysian Farms & Resort.',
};

export default async function GalleryPage() {
  const [categories, allImages] = await Promise.all([
    getGalleryCategories(),
    getGalleryImages(),
  ]);

  return (
    <div className="section">
      <div className="container">
        <h1>Gallery</h1>
        <p className="text-lead">
          A look at the farm, the resort, the cottages, and the moments in between.
        </p>

        <div className={styles.cardGrid}>
          {categories.map((category) => {
            const imagesInCategory = allImages.filter(
              (img) => img.categorySlug === category.slug
            );
            const cover = imagesInCategory.find((img) => img.featured) || imagesInCategory[0];

            return (
              <GalleryCard
                key={category._id}
                category={category}
                coverImageUrl={cover?.image.asset.url}
                coverImageAlt={cover?.image.alt}
                imageCount={imagesInCategory.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}