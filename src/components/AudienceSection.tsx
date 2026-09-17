"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { audienceSegments } from "@/data/Home.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "./AudienceSection.module.css";

export default function AudienceSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.p
          className={styles.eyebrow}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0}
        >
          Who Elysian Is For
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          Different reasons. One destination.
        </motion.h2>

        <div className={styles.scrollRow}>
          {audienceSegments.map((segment, index) => (
            <motion.div
              key={segment.id}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.16 + index * 0.08}
            >
              <h3 className={styles.name}>{segment.name}</h3>
              <p className={styles.quote}>&ldquo;{segment.quote}&rdquo;</p>
              <Link href={segment.href} className={styles.link}>
                {segment.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}