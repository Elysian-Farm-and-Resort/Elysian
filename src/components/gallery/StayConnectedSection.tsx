import Image from "next/image";
import { Link2 } from "lucide-react";
import type { SiteSettings, SocialLink } from "../../../sanity/queries";
import { stayConnectedContent as contactStayConnectedContent } from "@/data/Contact.data";
import styles from "@/styles/gallery/StayConnectedSection.module.css";

type StayConnectedSectionProps = {
  settings: SiteSettings | null;
  // Optional overrides — when content/imageUrl are omitted, falls back to
  // Contact's copy and renders a solid-background variant (no photo),
  // used on the Gallery page instead of a full-bleed image.
  content?: {
    eyebrow: string;
    heading: string;
    subtext: string;
  };
  imageUrl?: string;
  imageAlt?: string;
};

const iconMap: Partial<Record<SocialLink["platform"], React.ComponentType<{ size?: number }>>> = {
  instagram: Link2,
  facebook: Link2,
  youtube: Link2,
  linkedin: Link2,
};

export default function StayConnectedSection({
  settings,
  content = contactStayConnectedContent,
  imageUrl,
  imageAlt,
}: StayConnectedSectionProps) {
  const socialLinks = settings?.socialLinks || [];

  return (
    <section className={`${styles.section} ${!imageUrl ? styles.solidBackground : ""}`}>
      {imageUrl && (
        <>
          <Image src={imageUrl} alt={imageAlt || ""} fill sizes="100vw" className={styles.image} />
          <div className={styles.overlay} />
        </>
      )}

      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.subtext}>{content.subtext}</p>
        </div>

        {socialLinks.length > 0 && (
          <div className={styles.socialRow}>
            {socialLinks.map((social) => {
              const Icon = iconMap[social.platform];
              if (!Icon) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                >
                  <span className={styles.socialIcon}>
                    <Icon size={20} />
                  </span>
                  <span className={styles.socialLabel}>
                    {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
