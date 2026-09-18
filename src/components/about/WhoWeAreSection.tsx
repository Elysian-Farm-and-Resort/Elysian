"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whoWeAre, whoWeAreTiles } from "@/data/About.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/about/WhoWeAreSection.module.css";

export default function WhoWeAreSection() {
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
          <p className={styles.eyebrow}>{whoWeAre.eyebrow}</p>
          <h2 className={styles.heading}>{whoWeAre.heading}</h2>
          {whoWeAre.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className={styles.tileGrid}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.15}
        >
          {whoWeAreTiles.map((tile) => (
            <div key={tile.id} className={styles.tile}>
              <Image
                src={tile.imageUrl}
                alt={tile.imageAlt}
                fill
                sizes="(min-width: 860px) 25vw, 50vw"
                className={styles.tileImage}
              />
              <div className={styles.tileOverlay} />
              <span className={styles.tileLabel}>{tile.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
