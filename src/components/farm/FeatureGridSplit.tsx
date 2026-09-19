"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/farm/FeatureGridSplit.module.css";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
};

type FeatureGridSplitProps = {
  eyebrow: string;
  heading: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  features: FeatureItem[];
  imagePosition?: "left" | "right";
  background?: "page" | "white";
};

export default function FeatureGridSplit({
  eyebrow,
  heading,
  body,
  imageUrl,
  imageAlt,
  features,
  imagePosition = "left",
  background = "page",
}: FeatureGridSplitProps) {
  return (
    <section className={`section ${background === "white" ? styles.whiteBackground : ""}`}>
      <div
        className={`container ${styles.grid} ${
          imagePosition === "right" ? styles.imageRight : ""
        }`}
      >
        <motion.div
          className={styles.imageWrap}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 860px) 50vw, 100vw"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.12}
        >
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.body}>{body}</p>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
