import styles from "./JournalEmptyState.module.css";

export default function JournalEmptyState() {
  return (
    <div className={styles.card}>
      <p className={styles.eyebrow}>Coming Soon</p>
      <h3 className={styles.title}>Updates are on the way.</h3>
      <p className={styles.description}>
        We&rsquo;re documenting construction progress and farm news as it happens. Check back
        soon, or follow along on our social channels for the latest.
      </p>
    </div>
  );
}