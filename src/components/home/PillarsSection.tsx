"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { pillars } from "@/data/Home.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/home/PillarsSection.module.css";

export default function PillarsSection() {
  const [own, ...rest] = pillars;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.p
          className={styles.sectionEyebrow}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0}
        >
          The Elysian Thesis
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.1}
        >
          Own · Escape · Experience · Earn
        </motion.h2>

        <div className={styles.bentoGrid}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0.15}
            className={styles.featured}
          >
            <PillarCard pillar={own} featured />
          </motion.div>

          <div className={styles.supportingGrid}>
            {rest.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={fadeUp}
                custom={0.25 + index * 0.1}
              >
                <PillarCard pillar={pillar} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  featured = false,
}: {
  pillar: (typeof pillars)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={pillar.href}
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={pillar.imageUrl}
          alt={pillar.imageAlt}
          fill
          sizes={featured ? "(min-width: 960px) 50vw, 100vw" : "(min-width: 960px) 25vw, 50vw"}
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>{pillar.label}</span>
        <h3 className={styles.title}>{pillar.title}</h3>
        {featured && <p className={styles.description}>{pillar.description}</p>}
      </div>
    </Link>
  );
}