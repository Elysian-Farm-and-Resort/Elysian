"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cottagePackages } from "@/data/Home.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "./CottagesTeaser.module.css";

export default function CottagesTeaser() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <motion.p
              className={styles.eyebrow}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0}
            >
              Aduke Cottages
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.08}
            >
              A cottage for every kind of ownership.
            </motion.h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0.16}
          >
            <Link href="/own/packages-pricing" className={`btn btn-secondary ${styles.headerCta}`}>
              View Packages & Pricing
            </Link>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {cottagePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={fadeUp}
              custom={0.2 + index * 0.1}
            >
              <Link href="/own/packages-pricing" className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={pkg.imageUrl}
                    alt={pkg.imageAlt}
                    fill
                    sizes="(min-width: 860px) 33vw, 100vw"
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.content}>
                  <span className={styles.bedrooms}>{pkg.bedrooms}</span>
                  <p className={styles.tagline}>{pkg.tagline}</p>
                  <p className={styles.description}>{pkg.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}