import Link from "next/link";
import VideoBackground from "./VideoBackground";
import { heroContent } from "../data/Home.data";
import styles from "./Hero.module.css";

export default function Hero() {
  const {
    eyebrow,
    headline,
    subtext,
    ctaLabel,
    ctaHref,
    youtubeId,
    posterImageUrl,
    posterImageAlt,
  } = heroContent;

  // No video set yet — render the poster-only version rather than passing
  // an empty string into the YouTube embed.
  if (!youtubeId) {
    return (
      <section
        className={styles.staticHero}
        style={{ backgroundImage: `url(${posterImageUrl})` }}
        role="img"
        aria-label={posterImageAlt}
      >
        <div className={styles.overlay} />
        <HeroCopy
          eyebrow={eyebrow}
          headline={headline}
          subtext={subtext}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
        />
      </section>
    );
  }

  return (
    <VideoBackground
      youtubeId={youtubeId}
      posterImageUrl={posterImageUrl}
      posterImageAlt={posterImageAlt}
    >
      <HeroCopy
        eyebrow={eyebrow}
        headline={headline}
        subtext={subtext}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />
    </VideoBackground>
  );
}

function HeroCopy({
  eyebrow,
  headline,
  subtext,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className={styles.copy}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.headline}>{headline}</h1>
      <p className={styles.subtext}>{subtext}</p>
      <Link href={ctaHref} className={`btn btn-primary ${styles.cta}`}>
        {ctaLabel}
      </Link>
    </div>
  );
}