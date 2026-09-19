"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { farmIntro, farmPillars } from "@/data/Farm.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/farm/FarmIntroSection.module.css";

export default function FarmIntroSection() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0}
        >
          <p className={styles.eyebrow}>{farmIntro.eyebrow}</p>
          <h2 className={styles.heading}>{farmIntro.heading}</h2>
          <p className={styles.body}>{farmIntro.body}</p>

          <div className={styles.pillarRow}>
            {farmPillars.map((pillar) => (
              <div key={pillar.id} className={styles.pillar}>
                <span className={styles.pillarTitle}>{pillar.title}</span>
                <p className={styles.pillarDescription}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.12}
        >
          <Image
            src={farmIntro.imageUrl}
            alt={farmIntro.imageAlt}
            fill
            sizes="(min-width: 860px) 50vw, 100vw"
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}
