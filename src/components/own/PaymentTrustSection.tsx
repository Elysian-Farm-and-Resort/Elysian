import Link from "next/link";
import { paymentTrustContent, paymentTrustPoints } from "@/data/Own.data";
import styles from "@/styles/own/PaymentTrustSection.module.css";

export default function PaymentTrustSection() {
  return (
    <section id="payment-trust" className={`section ${styles.section}`}>
      <div className="container">
        <p className={styles.eyebrow}>{paymentTrustContent.eyebrow}</p>
        <h2 className={styles.heading}>{paymentTrustContent.heading}</h2>

        <div className={styles.grid}>
          {paymentTrustPoints.map((point) => (
            <div key={point.id} className={styles.point}>
              <h3 className={styles.title}>{point.title}</h3>
              <p className={styles.description}>{point.description}</p>
              {point.href && point.linkLabel && (
                <Link href={point.href} className={styles.link}>
                  {point.linkLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
