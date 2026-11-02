import type { LegalDoc } from "@/data/Legal.data";
import styles from "../LegalDocument.module.css";

type LegalDocumentProps = {
  doc: LegalDoc;
  lastUpdated: string;
};

export default function LegalDocument({ doc, lastUpdated }: LegalDocumentProps) {
  return (
    <article className="section">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{doc.eyebrow}</p>
          <h1 className={styles.title}>{doc.title}</h1>
          <p className={styles.updated}>Last updated: {lastUpdated}</p>
          <p className={styles.intro}>{doc.intro}</p>
        </header>

        <nav className={styles.toc} aria-label="On this page">
          <p className={styles.tocHeading}>On this page</p>
          <ol className={styles.tocList}>
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        {doc.sections.map((section, index) => (
          <section key={section.id} id={section.id} className={styles.block}>
            <h2 className={styles.heading}>
              <span className={styles.number}>{index + 1}.</span> {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className={styles.list}>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}