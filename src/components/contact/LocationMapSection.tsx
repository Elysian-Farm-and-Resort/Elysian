import { MapPin } from "lucide-react";
import type { SiteSettings } from "../../../sanity/queries";
import { locationSectionContent, mapQuery, contactFallback } from "@/data/Contact.data";
import styles from "@/styles/contact/LocationMapSection.module.css";

type LocationMapSectionProps = {
  settings: SiteSettings | null;
};

export default function LocationMapSection({ settings }: LocationMapSectionProps) {
  const address = settings?.contactAddress || contactFallback.address;
  const query = encodeURIComponent(address || mapQuery);
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{locationSectionContent.eyebrow}</p>
          <h2 className={styles.heading}>{locationSectionContent.heading}</h2>
          <p className={styles.body}>{locationSectionContent.body}</p>
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary ${styles.cta}`}
          >
            <MapPin size={16} aria-hidden="true" />
            {locationSectionContent.ctaLabel} →
          </a>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            src={mapSrc}
            title="Elysian Farms & Resort location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          />
        </div>
      </div>
    </section>
  );
}
