import Link from "next/link";
import Image from "next/image";
import { journeyClosing } from "@/data/Journey.data";
import styles from "@/styles/journey/JourneyClosingSection.module.css";

export default function JourneyClosingSection() {
  return (
    <section className={styles.section}>
      <Image
        src={journeyClosing.imageUrl}
        alt={journeyClosing.imageAlt}
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>{journeyClosing.eyebrow}</p>
          <h2 className={styles.heading}>{journeyClosing.heading}</h2>
          <p className={styles.subtext}>{journeyClosing.subtext}</p>
        </div>
        <Link href={journeyClosing.ctaHref} className={`btn btn-secondary ${styles.cta}`}>
          {journeyClosing.ctaLabel} →
        </Link>
      </div>
    </section>
  );
}
