import Link from "next/link";
import Image from "next/image";
import { galleryTeaserContent, galleryPreviewImages } from "@/data/Resort.data";
import styles from "@/styles/resort/GalleryTeaserSplit.module.css";

export default function GalleryTeaserSplit() {
  return (
    <section id="gallery" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{galleryTeaserContent.eyebrow}</p>
          <h2 className={styles.heading}>{galleryTeaserContent.heading}</h2>
          <p className={styles.body}>{galleryTeaserContent.body}</p>
          <Link href={galleryTeaserContent.ctaHref} className={`btn btn-secondary ${styles.cta}`}>
            {galleryTeaserContent.ctaLabel} →
          </Link>
        </div>

        <div className={styles.thumbGrid}>
          {galleryPreviewImages.map((image, index) => (
            <Link
              key={index}
              href={galleryTeaserContent.ctaHref}
              className={styles.thumbWrap}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(min-width: 860px) 12vw, 25vw"
                className={styles.thumbImage}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}