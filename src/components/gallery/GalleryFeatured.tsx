"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryFeaturedContent } from "@/data/GalleryPage.data";
import type { CategoryWithCover } from "./GalleryBrowser";
import styles from "@/styles/gallery/GalleryFeatured.module.css";

type GalleryFeaturedProps = {
  categories: CategoryWithCover[];
};

export default function GalleryFeatured({ categories }: GalleryFeaturedProps) {
  const [index, setIndex] = useState(0);

  if (categories.length === 0) return null;

  const current = categories[index % categories.length];

  const goPrev = () => setIndex((i) => (i - 1 + categories.length) % categories.length);
  const goNext = () => setIndex((i) => (i + 1) % categories.length);

  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{galleryFeaturedContent.eyebrow}</p>
          <h2 className={styles.heading}>{galleryFeaturedContent.heading}</h2>
          <p className={styles.body}>{galleryFeaturedContent.body}</p>
          <Link href={galleryFeaturedContent.ctaHref} className={`btn btn-secondary ${styles.cta}`}>
            {galleryFeaturedContent.ctaLabel} →
          </Link>
          <FernIllustration />
        </div>

        <div className={styles.carousel}>
          <div className={styles.imageWrap}>
            {current.coverUrl ? (
              <Image
                src={current.coverUrl}
                alt={current.coverAlt || current.title}
                fill
                sizes="(min-width: 860px) 50vw, 100vw"
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder} aria-hidden="true" />
            )}
            <div className={styles.overlay} />
            <span className={styles.badgeCategory}>{current.title}</span>
            <span className={styles.badgeCount}>
              <Camera size={12} aria-hidden="true" />
              {current.imageCount} Photos
            </span>

            {categories.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.arrowLeft}`}
                  onClick={goPrev}
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.arrowRight}`}
                  onClick={goNext}
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FernIllustration() {
  return (
    <svg
      viewBox="0 0 200 100"
      className={styles.fernSvg}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M10 90 C 40 70, 60 50, 90 20" />
      {[20, 35, 50, 65, 80].map((x, i) => (
        <line key={x} x1={x} y1={90 - i * 14} x2={x - 14} y2={80 - i * 14} />
      ))}
      {[20, 35, 50, 65, 80].map((x, i) => (
        <line key={`${x}-r`} x1={x} y1={90 - i * 14} x2={x + 10} y2={82 - i * 14} />
      ))}
    </svg>
  );
}