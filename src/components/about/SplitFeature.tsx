"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/SplitFeature.module.css";

type SplitFeatureProps = {
  eyebrow: string;
  heading: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  imagePosition?: "left" | "right";
  background?: "page" | "white";
};

export default function SplitFeature({
  eyebrow,
  heading,
  body,
  imageUrl,
  imageAlt,
  ctaLabel,
  ctaHref,
  imagePosition = "left",
  background = "page",
}: SplitFeatureProps) {
  return (
    <section
      className={`section ${background === "white" ? styles.whiteBackground : ""}`}
    >
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
          <Link href={ctaHref} className={`btn btn-primary ${styles.cta}`}>
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
