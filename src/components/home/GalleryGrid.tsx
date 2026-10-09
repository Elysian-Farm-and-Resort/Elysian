import Image from "next/image";
import type { GalleryEvent, GalleryEventImage } from "../../../sanity/queries";
import styles from "./GalleryGrid.module.css";

type GalleryGridProps = {
  // Accepts either the events returned by getGalleryImages() or an already
  // flat list of event images — events are flattened into their photos.
  images: ReadonlyArray<GalleryEvent | GalleryEventImage>;
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const photos: GalleryEventImage[] = images
    .flatMap((item) => ("images" in item ? item.images || [] : [item]))
    .filter((photo) => Boolean(photo?.asset?.url));

  if (photos.length === 0) {
    return <p className={styles.empty}>No photos here yet — check back soon.</p>;
  }

  return (
    <div className={styles.grid}>
      {photos.map((photo, index) => (
        <figure key={`${photo.asset.url}-${index}`} className={styles.item}>
          <Image
            src={photo.asset.url}
            alt={photo.alt || photo.caption || "Elysian gallery photo"}
            fill
            sizes="(min-width: 960px) 25vw, (min-width: 640px) 33vw, 50vw"
            className={styles.image}
          />
          {photo.caption && <figcaption className={styles.caption}>{photo.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}