import Link from "next/link";
import Image from "next/image";
import { BedDouble, UtensilsCrossed, Sparkles, TreePine } from "lucide-react";
import { sanctuaryContent, sanctuaryFeatures, type SideFeature } from "@/data/Resort.data";
import styles from "@/styles/resort/SanctuarySection.module.css";

const iconMap: Record<SideFeature["icon"], React.ComponentType<{ size?: number }>> = {
  bed: BedDouble,
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  trees: TreePine,
};

export default function SanctuarySection() {
  return (
    <section id="experience" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{sanctuaryContent.eyebrow}</p>
          <h2 className={styles.heading}>{sanctuaryContent.heading}</h2>
          <p className={styles.body}>{sanctuaryContent.body}</p>
          <Link href={sanctuaryContent.ctaHref} className={`btn btn-primary ${styles.cta}`}>
            {sanctuaryContent.ctaLabel} →
          </Link>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src={sanctuaryContent.imageUrl}
            alt={sanctuaryContent.imageAlt}
            fill
            sizes="(min-width: 860px) 40vw, 100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.featureList}>
          {sanctuaryFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.id} className={styles.feature}>
                <span className={styles.iconWrap}>
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
