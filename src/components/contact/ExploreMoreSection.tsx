import Link from "next/link";
import { Home, BedDouble, Leaf, TrendingUp, Users, MessageSquare } from "lucide-react";
import { exploreMoreContent, exploreItems, type ExploreItem } from "@/data/Contact.data";
import styles from "@/styles/contact/ExploreMoreSection.module.css";

const iconMap: Record<ExploreItem["icon"], React.ComponentType<{ size?: number }>> = {
  home: Home,
  bed: BedDouble,
  leaf: Leaf,
  "trending-up": TrendingUp,
  users: Users,
  "message-square": MessageSquare,
};

export default function ExploreMoreSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{exploreMoreContent.eyebrow}</p>
          <h2 className={styles.heading}>{exploreMoreContent.heading}</h2>
          <p className={styles.subtext}>{exploreMoreContent.subtext}</p>
        </div>

        <div className={styles.itemsRow}>
          {exploreItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Link key={item.id} href={item.href} className={styles.item}>
                <span className={styles.iconWrap}>
                  <Icon size={22} />
                </span>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.description}>{item.description}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
