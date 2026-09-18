import Link from "next/link";
import styles from "@/styles/FinalCtaSection.module.css";

type CtaButton = {
  label: string;
  href: string;
};

type FinalCtaSectionProps = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
};

export default function FinalCtaSection({
  eyebrow,
  heading,
  subtext,
  primaryCta,
  secondaryCta,
}: FinalCtaSectionProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.heading}>{heading}</h2>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
        <div className={styles.actions}>
          <Link href={primaryCta.href} className="btn btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}