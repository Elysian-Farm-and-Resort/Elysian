"use client";

import { motion } from "framer-motion";
import { standForContent, valuePoints } from "@/data/About.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/about/StandForSection.module.css";

export default function StandForSection() {
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
          {standForContent.eyebrow}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          {standForContent.heading}
        </motion.h2>
        <motion.p
          className={styles.subtext}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.14}
        >
          {standForContent.subtext}
        </motion.p>

        <div className={styles.row}>
          {valuePoints.map((value, index) => (
            <motion.div
              key={value.id}
              className={styles.item}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.2 + index * 0.06}
            >
              <span className={styles.marker} aria-hidden="true" />
              <span className={styles.title}>{value.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
