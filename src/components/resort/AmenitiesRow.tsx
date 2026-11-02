import {
  BedDouble,
  UtensilsCrossed,
  Flower2,
  Waves,
  Dumbbell,
  TreePine,
  Plane,
  Baby,
  TrainFront,
} from "lucide-react";
import { amenitiesContent, amenityItems, type AmenityItem } from "@/data/Resort.data";
import styles from "@/styles/resort/AmenitiesRow.module.css";

const iconMap: Record<AmenityItem["icon"], React.ComponentType<{ size?: number }>> = {
  bed: BedDouble,
  utensils: UtensilsCrossed,
  flower: Flower2,
  waves: Waves,
  dumbbell: Dumbbell,
  trees: TreePine,
  plane: Plane,
  baby: Baby,
  train: TrainFront,
};

export default function AmenitiesRow() {
  return (
    <section id="amenities" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{amenitiesContent.eyebrow}</p>
          <h2>{amenitiesContent.heading}</h2>
        </div>

        <div className={styles.items}>
          {amenityItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className={styles.item}>
                <Icon size={22} />
                <span className={styles.label}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
