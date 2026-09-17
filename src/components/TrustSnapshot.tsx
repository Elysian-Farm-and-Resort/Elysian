"use client";

import { motion } from "framer-motion";
import { trustPoints } from "@/data/Home.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "./TrustSnapshot.module.css";

export default function TrustSnapshot() {
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
          Why Trust the Process
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          Built for a clear-eyed decision.
        </motion.h2>

        <div className={styles.grid}>
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className={styles.item}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.16 + index * 0.08}
            >
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{point.title}</h3>
              <p className={styles.description}>{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}