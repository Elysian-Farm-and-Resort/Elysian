"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { farmToTable, farmToTableSteps } from "@/data/Farm.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/farm/FarmToTableSection.module.css";

export default function FarmToTableSection() {
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
          {farmToTable.eyebrow}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.08}
        >
          {farmToTable.heading}
        </motion.h2>
        <motion.p
          className={styles.body}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.14}
        >
          {farmToTable.body}
        </motion.p>

        <div className={styles.flow}>
          {farmToTableSteps.map((step, index) => (
            <div key={step.id} className={styles.stepWrap}>
              <motion.div
                className={styles.step}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={fadeUp}
                custom={0.2 + index * 0.1}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={step.imageUrl}
                    alt={step.imageAlt}
                    fill
                    sizes="120px"
                    className={styles.image}
                  />
                </div>
                <span className={styles.label}>{step.label}</span>
              </motion.div>

              {index < farmToTableSteps.length - 1 && (
                <ArrowRight className={styles.arrow} size={20} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
