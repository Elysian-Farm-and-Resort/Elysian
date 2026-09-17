"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { showcasePanels } from "@/data/Home.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "./ShowcaseSection.module.css";

export default function ShowcaseSection() {
  return (
    <section>
      {showcasePanels.map((panel, index) => (
        <div
          key={panel.id}
          className={`${styles.panel} ${index % 2 === 1 ? styles.reversed : ""}`}
        >
          <div className={styles.imageWrap}>
            <Image
              src={panel.imageUrl}
              alt={panel.imageAlt}
              fill
              sizes="(min-width: 860px) 50vw, 100vw"
              className={styles.image}
            />
          </div>

          <motion.div
            className={styles.copy}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0}
          >
            <h2 className={styles.title}>{panel.title}</h2>
            <p className={styles.description}>{panel.description}</p>
            <Link href={panel.href} className={`btn btn-primary ${styles.cta}`}>
              {panel.ctaLabel}
            </Link>
          </motion.div>
        </div>
      ))}
    </section>
  );
}