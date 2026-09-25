import { Phone, Mail, MapPin } from "lucide-react";
import { helpSectionContent, contactNotes } from "@/data/Contact.data";
import { contactInfo } from "@/data/Footer.data";
import ContactForm from "./ContactForm";
import styles from "@/styles/contact/ContactHelpSection.module.css";

export default function ContactHelpSection() {
  const { phone, email, devAddress } = contactInfo;

  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{helpSectionContent.eyebrow}</p>
          <h2 className={styles.heading}>{helpSectionContent.heading}</h2>
          <p className={styles.body}>{helpSectionContent.body}</p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.iconWrap}>
                <Phone size={18} aria-hidden="true" />
              </span>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <a href={`tel:${phone}`} className={styles.infoValue}>
                  {phone}
                </a>
                <p className={styles.infoNote}>{contactNotes.phoneNote}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.iconWrap}>
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <a href={`mailto:${email}`} className={styles.infoValue}>
                  {email}
                </a>
                <p className={styles.infoNote}>{contactNotes.emailNote}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.iconWrap}>
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <p className={styles.infoValue}>{devAddress}</p>
                <p className={styles.infoNote}>{contactNotes.locationNote}</p>
              </div>
            </div>
          </div>

          <div className={styles.decorative}>
            <FernIllustration />
            <p className={styles.quote}>{helpSectionContent.quote}</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

// Small decorative fern silhouette — purely visual, aria-hidden.
function FernIllustration() {
  return (
    <svg
      viewBox="0 0 200 100"
      className={styles.fernSvg}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M10 90 C 40 70, 60 50, 90 20" />
      {[20, 35, 50, 65, 80].map((x, i) => (
        <line
          key={x}
          x1={x}
          y1={90 - i * 14}
          x2={x - 14}
          y2={80 - i * 14}
        />
      ))}
      {[20, 35, 50, 65, 80].map((x, i) => (
        <line
          key={`${x}-r`}
          x1={x}
          y1={90 - i * 14}
          x2={x + 10}
          y2={82 - i * 14}
        />
      ))}
    </svg>
  );
}
