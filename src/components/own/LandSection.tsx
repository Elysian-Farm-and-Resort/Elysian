import Link from "next/link";
import { landContent, landPlots, factLabels } from "@/data/Own.data";
import MediaSlot from "./MediaSlot";
import styles from "@/styles/own/LandSection.module.css";

export default function LandSection() {
  return (
    <section id="land" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>{landContent.eyebrow}</p>
          <h2 className={styles.heading}>{landContent.heading}</h2>
          <p className={styles.body}>{landContent.body}</p>
        </div>

        <div className={styles.grid}>
          {landPlots.map((plot) => (
            <article key={plot.id} className={styles.card}>
              <div className={styles.photo}>
                <MediaSlot
                  src={plot.imageUrl}
                  alt={plot.imageAlt}
                  label={`${plot.name} photo`}
                  sizes="(min-width: 960px) 25vw, (min-width: 560px) 50vw, 100vw"
                />
              </div>

              <div className={styles.cardBody}>
                {plot.highlight && <span className={styles.highlight}>{plot.highlight}</span>}
                <h3 className={styles.name}>{plot.name}</h3>
                <p className={styles.description}>{plot.description}</p>

                {plot.detailsPlaceholder && (
                  <p className={styles.detailsPlaceholder}>{plot.detailsPlaceholder}</p>
                )}

                <dl className={styles.facts}>
                  <div className={styles.fact}>
                    <dt>{factLabels.price}</dt>
                    <dd>{plot.price}</dd>
                  </div>
                  <div className={styles.fact}>
                    <dt>{factLabels.deposit}</dt>
                    <dd>{plot.deposit}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <Link href={landContent.ctaHref} className={`btn btn-primary ${styles.cta}`}>
          {landContent.ctaLabel} →
        </Link>
      </div>
    </section>
  );
}
