import Image from "next/image";
import { MapPin } from "lucide-react";
import styles from "@/styles/PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  subtext: string;
  location?: string;
  imageUrl: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  headline,
  subtext,
  location,
  imageUrl,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Image src={imageUrl} alt={imageAlt} fill priority sizes="100vw" className={styles.image} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtext}>{subtext}</p>
        {location && (
          <p className={styles.location}>
            <MapPin size={16} aria-hidden="true" />
            {location}
          </p>
        )}
      </div>
    </section>
  );
}