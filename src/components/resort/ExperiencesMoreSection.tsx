import Link from "next/link";
import Image from "next/image";
import { UtensilsCrossed, Sparkles, Compass, PartyPopper } from "lucide-react";
import {
  experiencesMoreContent,
  experienceListItems,
  type ExperienceListItem,
} from "@/data/Resort.data";
import styles from "@/styles/resort/ExperiencesMoreSection.module.css";

const iconMap: Record<ExperienceListItem["icon"], React.ComponentType<{ size?: number }>> = {
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  compass: Compass,
  party: PartyPopper,
};

export default function ExperiencesMoreSection() {
  return (
    <section id="experiences" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageWrap}>
          <Image
            src={experiencesMoreContent.imageUrl}
            alt={experiencesMoreContent.imageAlt}
            fill
            sizes="(min-width: 860px) 45vw, 100vw"
            className={styles.image}
          />
        </div>

        <div>
          <p className={styles.eyebrow}>{experiencesMoreContent.eyebrow}</p>
          <h2 className={styles.heading}>{experiencesMoreContent.heading}</h2>
          <p className={styles.body}>{experiencesMoreContent.body}</p>
          <Link href={experiencesMoreContent.ctaHref} className={`btn btn-primary ${styles.cta}`}>
            {experiencesMoreContent.ctaLabel} →
          </Link>
        </div>

        <ul className={styles.list}>
          {experienceListItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.id} className={styles.listItem}>
                <Icon size={16} />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
