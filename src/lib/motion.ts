import type { Variants } from "framer-motion";

// Shared scroll-reveal used across Home's sections (Pillars, Trust Snapshot,
// and beyond) so every section animates in consistently rather than each
// component defining its own slightly-different version.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

// Standard viewport settings for whileInView triggers — replays when entering
// from either scroll direction, slightly before the element is fully in view.
export const revealViewport = { once: false, margin: "-80px" };