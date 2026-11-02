import WaitlistForm from "@/components/WaitlistForm";
import { waitlistSectionContent } from "@/data/Resort.data";
import styles from "@/styles/resort/ResortWaitlist.module.css";

export default function ResortWaitlistSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{waitlistSectionContent.eyebrow}</p>
        <h2 className={styles.heading}>{waitlistSectionContent.heading}</h2>
        <p className={styles.body}>{waitlistSectionContent.body}</p>
        <div className={styles.formWrap}>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}