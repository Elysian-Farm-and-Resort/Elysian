import Image from "next/image";
// import { Link2 } from "lucide-react";
import { stayConnectedContent as content } from "@/data/Contact.data";
// import { socialLinks, type SocialLink } from "@/data/Footer.data";
import styles from "@/styles/gallery/StayConnectedSection.module.css";



// const iconMap: Record<SocialLink["icon"], React.ComponentType<{ size?: number }>> = {
//   instagram: Link2,
//   facebook: Link2,
//   tiktok: Link2,
//   youtube: Link2,
//   linkedin: Link2,
//   whatsapp: Link2,
// };

export default function StayConnectedSection() {
  return (
    <section className={styles.section}>
      <Image
        src={content.imageUrl}
        alt={content.imageAlt}
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.subtext}>{content.subtext}</p>
        </div>

        {/* {socialLinks.length > 0 && (
          <div className={styles.socialRow}>
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                >
                  <span className={styles.socialIcon}>
                    <Icon size={20} />
                  </span>
                  <span className={styles.socialLabel}>
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        )} */}
      </div>
    </section>
  );
}
