import Link from "next/link";
import { ownGalleryTeaser, ownGalleryImages } from "@/data/Own.data";
import MediaSlot from "./MediaSlot";
import styles from "@/styles/own/OwnGalleryTeaser.module.css";

export default function OwnGalleryTeaser() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{ownGalleryTeaser.eyebrow}</p>
          <h2 className={styles.heading}>{ownGalleryTeaser.heading}</h2>
          <p className={styles.body}>{ownGalleryTeaser.body}</p>
          <Link href={ownGalleryTeaser.ctaHref} className={`btn btn-secondary ${styles.cta}`}>
            {ownGalleryTeaser.ctaLabel} →
          </Link>
        </div>

        <div className={styles.thumbs}>
          {ownGalleryImages.map((image, index) => (
            <div key={image.url} className={styles.thumb}>
              <MediaSlot
                src={image.url}
                alt={image.alt}
                label={`Gallery ${index + 1}`}
                sizes="(min-width: 860px) 15vw, 30vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
