import Link from "next/link";
import {
  cottagesContent,
  cottages,
  cottageAddOnsHeading,
  cottageAddOns,
  factLabels,
} from "@/data/Own.data";
import MediaSlot from "./MediaSlot";
import styles from "@/styles/own/CottagesSection.module.css";

export default function CottagesSection() {
  return (
    <section id="cottages" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>{cottagesContent.eyebrow}</p>
          <h2 className={styles.heading}>{cottagesContent.heading}</h2>
          <p className={styles.body}>{cottagesContent.body}</p>
        </div>

        <div className={styles.grid}>
          {cottages.map((cottage) => (
            <article key={cottage.id} className={styles.card}>
              <div className={styles.photo}>
                <MediaSlot
                  src={cottage.imageUrl}
                  alt={cottage.imageAlt}
                  label={`${cottage.name} photo`}
                  sizes="(min-width: 860px) 33vw, 100vw"
                />
              </div>

              <div className={styles.cardBody}>
                <p className={styles.tagline}>{cottage.tagline}</p>
                <h3 className={styles.name}>{cottage.name}</h3>
                <p className={styles.bestFor}>{cottage.bestFor}</p>

                <dl className={styles.facts}>
                  <div className={styles.fact}>
                    <dt>{factLabels.price}</dt>
                    <dd>{cottage.price}</dd>
                  </div>
                  <div className={styles.fact}>
                    <dt>{factLabels.deposit}</dt>
                    <dd>{cottage.deposit}</dd>
                  </div>
                </dl>

                <div className={styles.floorPlan}>
                  <p className={styles.floorPlanLabel}>Floor plan</p>
                  <div className={styles.floorPlanFrame}>
                    <MediaSlot
                      src={cottage.floorPlanUrl}
                      alt={cottage.floorPlanAlt}
                      label={`${cottage.name} floor plan`}
                      sizes="(min-width: 860px) 30vw, 90vw"
                      fit="contain"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.addOns}>
          <p className={styles.addOnsHeading}>{cottageAddOnsHeading}</p>
          <ul className={styles.addOnList}>
            {cottageAddOns.map((addOn) => (
              <li key={addOn.id} className={styles.addOn}>
                <h3 className={styles.addOnTitle}>{addOn.title}</h3>
                <p className={styles.addOnDescription}>{addOn.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <Link href={cottagesContent.ctaHref} className={`btn btn-primary ${styles.cta}`}>
          {cottagesContent.ctaLabel} →
        </Link>
      </div>
    </section>
  );
}
