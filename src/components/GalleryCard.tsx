import Link from 'next/link';
import Image from 'next/image';
import type { GalleryCategory } from '../sanity/queries';
import styles from './GalleryCard.module.css';

type GalleryCardProps = {
  category: GalleryCategory;
  coverImageUrl?: string;
  coverImageAlt?: string;
  imageCount: number;
};

export default function GalleryCard({
  category,
  coverImageUrl,
  coverImageAlt,
  imageCount,
}: GalleryCardProps) {
  return (
    <Link href={`/gallery/${category.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={coverImageAlt || category.title}
            fill
            sizes="(min-width: 960px) 25vw, 50vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.label}>{category.title}</h3>
        {category.description && <p className={styles.description}>{category.description}</p>}
        <span className={styles.count}>
          {imageCount} {imageCount === 1 ? 'photo' : 'photos'}
        </span>
      </div>
    </Link>
  );
}