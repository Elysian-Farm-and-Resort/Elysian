import Image from "next/image";
import { MapPin } from "lucide-react";
import { aboutHero } from "@/data/About.data";
import styles from "@/styles/AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Image
        src={aboutHero.imageUrl}
        alt={aboutHero.imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{aboutHero.eyebrow}</p>
        <h1 className={styles.headline}>{aboutHero.headline}</h1>
        <p className={styles.subtext}>{aboutHero.subtext}</p>
        <p className={styles.location}>
          <MapPin size={16} aria-hidden="true" />
          {aboutHero.location}
        </p>
      </div>
    </section>
  );
}