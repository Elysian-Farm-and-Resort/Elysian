"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatWeGrow, crops } from "@/data/Farm.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/farm/CropsSection.module.css";

export default function CropsSection() {
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
          {whatWeGrow.eyebrow}
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          {whatWeGrow.heading}
        </motion.h2>
        <motion.p
          className={styles.subtext}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.14}
        >
          {whatWeGrow.subtext}
        </motion.p>

        <div className={styles.grid}>
          {crops.map((crop, index) => (
            <motion.div
              key={crop.id}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.2 + index * 0.06}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={crop.imageUrl}
                  alt={crop.imageAlt}
                  fill
                  sizes="(min-width: 860px) 20vw, 50vw"
                  className={styles.image}
                />
              </div>
              <h3 className={styles.name}>{crop.name}</h3>
              <p className={styles.description}>{crop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
