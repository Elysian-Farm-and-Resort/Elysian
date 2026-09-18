"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ourStory } from "@/data/About.data";
import { fadeUp, revealViewport } from "@/lib/motion";
import styles from "@/styles/about/StorySection.module.css";

export default function StorySection() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.quoteImageWrap}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0}
        >
          <Image
            src={ourStory.quoteImageUrl}
            alt={ourStory.quoteImageAlt}
            fill
            sizes="(min-width: 860px) 50vw, 100vw"
            className={styles.quoteImage}
          />
          <div className={styles.quoteOverlay} />
          <p className={styles.quoteText}>
            {ourStory.quoteLine1}
            <br />
            {ourStory.quoteLine2}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          custom={0.15}
        >
          <p className={styles.eyebrow}>{ourStory.eyebrow}</p>
          <h2 className={styles.heading}>{ourStory.heading}</h2>
          <p className={styles.body}>{ourStory.body}</p>

          <ol className={styles.timeline}>
            {ourStory.timeline.map((step, index) => (
              <li key={step} className={styles.timelineStep}>
                <span className={styles.timelineDot} />
                <span className={styles.timelineLabel}>{step}</span>
                {index < ourStory.timeline.length - 1 && (
                  <span className={styles.timelineConnector} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
