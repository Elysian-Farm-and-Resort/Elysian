import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import styles from "@/styles/own/MediaSlot.module.css";

type MediaSlotProps = {
  // Path under /public, e.g. "/images/own/cottage-1br.jpg"
  src: string;
  alt: string;
  // Short name shown on the placeholder so the media team knows what goes here
  label: string;
  sizes: string;
  fit?: "cover" | "contain";
};

// Server-only check. The page is prerendered at build time, so the moment the
// media team drops the real file into /public and the site is rebuilt, the
// placeholder is replaced by the photo with no code change.
function mediaExists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export default function MediaSlot({ src, alt, label, sizes, fit = "cover" }: MediaSlotProps) {
  if (mediaExists(src)) {
    return (
      <div className={styles.slot}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={fit === "contain" ? styles.contain : styles.cover}
        />
      </div>
    );
  }

  return (
    <div className={styles.slot}>
      <div className={styles.placeholder} role="img" aria-label={`${alt} (image coming soon)`}>
        <span className={styles.label}>{label}</span>
        <span className={styles.path}>{src}</span>
      </div>
    </div>
  );
}