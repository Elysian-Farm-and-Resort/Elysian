'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { GalleryEvent } from "../../../sanity/queries";
import styles from '@/styles/gallery/GalleryGrid.module.css';

type GalleryGridProps = {
  images: GalleryEvent[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
    caption?: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  if (images.length === 0) {
    return <p className={styles.empty}>No photos here yet — check back soon.</p>;
  }

  return (
    <div className={styles.grid}>
      {images.flatMap((event) =>
        event.images.map((image, index) => (
          <figure key={`${event._id}-${index}`} className={styles.item}>
            <button
              type="button"
              className={styles.imageButton}
              onClick={() =>
                setSelectedImage({
                  url: image.asset.url,
                  alt: image.alt || event.title,
                  caption: image.caption,
                })
              }
              aria-label={`View ${image.alt || event.title} larger`}
            >
              <Image
                src={image.asset.url}
                alt={image.alt || event.title}
                fill
                sizes="(min-width: 960px) 25vw, 50vw"
                className={styles.image}
              />
            </button>
            {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
          </figure>
        ))
      )}

      {selectedImage && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Close enlarged image"
            >
              ×
            </button>
            <div className={styles.lightboxImageWrap}>
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
              />
            </div>
            {selectedImage.caption && (
              <p className={styles.lightboxCaption}>{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
