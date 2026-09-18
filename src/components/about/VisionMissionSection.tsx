"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ourVision, visionPoints, ourMission } from "@/data/About.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/VisionMissionSection.module.css";

export default function VisionMissionSection() {
  return (
    <>
      <section className={`section ${styles.visionSection}`}>
        <div className="container">
          <motion.p
            className={styles.eyebrow}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0}
          >
            {ourVision.eyebrow}
          </motion.p>
          <motion.h2
            className={styles.visionHeading}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0.08}
          >
            {ourVision.heading}
          </motion.h2>
          <motion.p
            className={styles.visionBody}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0.14}
          >
            {ourVision.body}
          </motion.p>

          <div className={styles.pointsGrid}>
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className={styles.point}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={fadeUp}
                custom={0.2 + index * 0.08}
              >
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointDescription}>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.missionGrid}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0}
          >
            <p className={styles.eyebrow}>{ourMission.eyebrow}</p>
            <h2 className={styles.missionHeading}>{ourMission.heading}</h2>
            <p className={styles.missionBody}>{ourMission.body}</p>
          </motion.div>

          <motion.div
            className={styles.missionImageWrap}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            custom={0.12}
          >
            <Image
              src={ourMission.imageUrl}
              alt={ourMission.imageAlt}
              fill
              sizes="(min-width: 860px) 50vw, 100vw"
              className={styles.missionImage}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
