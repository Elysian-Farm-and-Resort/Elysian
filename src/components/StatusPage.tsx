import type { ReactNode } from "react";
import styles from "./StatusPage.module.css";

type StatusPageProps = {
  // Large decorative code behind the text, e.g. "404". Optional.
  code?: string;
  eyebrow: string;
  heading: string;
  body: string;
  // Buttons/links. Passed in so this stays usable from both server pages
  // (not-found) and client pages (error), which need an onClick button.
  children: ReactNode;
};

export default function StatusPage({ code, eyebrow, heading, body, children }: StatusPageProps) {
  return (
    <section className={styles.section}>
      {code && (
        <span className={styles.code} aria-hidden="true">
          {code}
        </span>
      )}

      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.body}>{body}</p>
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  );
}