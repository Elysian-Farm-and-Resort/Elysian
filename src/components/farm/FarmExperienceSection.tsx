"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { farmExperienceContent, farmExperienceItems } from "@/data/Farm.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/farm/FarmExperienceSection.module.css";

export default function FarmExperienceSection() {
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
          {farmExperienceContent.eyebrow}
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          {farmExperienceContent.heading}
        </motion.h2>
        <motion.p
          className={styles.body}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.14}
        >
          {farmExperienceContent.body}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.2}
        >
          <Link href={farmExperienceContent.ctaHref} className={`btn btn-primary ${styles.cta}`}>
            {farmExperienceContent.ctaLabel}
          </Link>
        </motion.div>

        <div className={styles.grid}>
          {farmExperienceItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.28 + index * 0.08}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 860px) 25vw, 50vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <span className={styles.label}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
