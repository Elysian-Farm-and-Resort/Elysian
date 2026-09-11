import Image from 'next/image';
import type { GalleryImage } from '../sanity/queries';
import styles from './GalleryGrid.module.css';

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  if (images.length === 0) {
    return <p className={styles.empty}>No photos here yet — check back soon.</p>;
  }

  return (
    <div className={styles.grid}>
      {images.map((item) => (
        <figure key={item._id} className={styles.item}>
          <Image
            src={item.image.asset.url}
            alt={item.image.alt}
            fill
            sizes="(min-width: 960px) 33vw, 50vw"
            className={styles.image}
          />
          {item.caption && <figcaption className={styles.caption}>{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}