import { earnContent, earnSteps } from "@/data/Own.data";
import styles from "@/styles/own//EarnSection.module.css";

export default function EarnSection() {
  return (
    <section id="earn" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{earnContent.eyebrow}</p>
          <h2 className={styles.heading}>{earnContent.heading}</h2>
          <p className={styles.body}>{earnContent.body}</p>
          <p className={styles.note}>{earnContent.note}</p>
        </div>

        <ol className={styles.steps}>
          {earnSteps.map((step, index) => (
            <li key={step.id} className={styles.step}>
              <span className={styles.number}>{index + 1}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
