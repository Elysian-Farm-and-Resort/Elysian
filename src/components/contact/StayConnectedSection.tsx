import Image from "next/image";
import { stayConnectedContent } from "@/data/Contact.data";
// import { socialLinks, type SocialLink } from "@/data/Footer.data";
import styles from "@/styles/contact/StayConnectedSection.module.css";

// const SocialIcon = ({ size = 20 }: { size?: number }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//   >
//     <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.71 1.71" />
//     <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
//   </svg>
// );

// const iconMap: Record<SocialLink["icon"], React.ComponentType<{ size?: number }>> = {
//   instagram: SocialIcon,
//   facebook: SocialIcon,
//   tiktok: SocialIcon,
//   youtube: SocialIcon,
//   linkedin: SocialIcon,
//   whatsapp: SocialIcon,
// };

export default function StayConnectedSection() {
  return (
    <section className={styles.section}>
      <Image
        src={stayConnectedContent.imageUrl}
        alt={stayConnectedContent.imageAlt}
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>{stayConnectedContent.eyebrow}</p>
          <h2 className={styles.heading}>{stayConnectedContent.heading}</h2>
          <p className={styles.subtext}>{stayConnectedContent.subtext}</p>
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
