"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { conceptContent, conceptCards } from "@/data/About.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/ConceptSection.module.css";

export default function ConceptSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.p
          className={styles.eyebrow}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0}
        >
          {conceptContent.eyebrow}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          {conceptContent.heading}
        </motion.h2>
        <motion.p
          className={styles.subtext}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.14}
        >
          {conceptContent.subtext}
        </motion.p>

        <div className={styles.grid}>
          {conceptCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.2 + index * 0.1}
            >
              <Link href={card.ctaHref} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 860px) 33vw, 100vw"
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <span className={styles.link}>{card.ctaLabel} →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
