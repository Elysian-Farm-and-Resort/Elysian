import Link from "next/link";
import Image from "next/image";
import { latestJourneyContent } from "@/data/Journey.data";
import type { JournalPostSummary } from "../../../sanity/queries";
import JournalEmptyState from "@/components/home/JournalEmptyState";
import styles from "@/styles/journey/FeaturedPostSection.module.css";

type FeaturedPostSectionProps = {
  featuredPost: JournalPostSummary | null;
};

export default function FeaturedPostSection({ featuredPost }: FeaturedPostSectionProps) {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{latestJourneyContent.eyebrow}</p>
          <h2 className={styles.heading}>{latestJourneyContent.heading}</h2>
          <p className={styles.body}>{latestJourneyContent.body}</p>
          <a href="#all-posts" className={`btn btn-primary ${styles.cta}`}>
            {latestJourneyContent.ctaLabel} →
          </a>
        </div>

        {featuredPost ? (
          <Link href={`/journey/${featuredPost.slug}`} className={styles.card}>
            <div className={styles.imageWrap}>
              {featuredPost.coverImage ? (
                <Image
                  src={featuredPost.coverImage.asset.url}
                  alt={featuredPost.coverImage.alt}
                  fill
                  sizes="(min-width: 860px) 40vw, 100vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.imagePlaceholder} aria-hidden="true" />
              )}
              <span className={styles.badge}>Featured</span>
            </div>

            <div className={styles.cardContent}>
              <span className={styles.category}>{featuredPost.category}</span>
              <h3 className={styles.cardTitle}>{featuredPost.title}</h3>
              <time className={styles.date} dateTime={featuredPost.publishedAt}>
                {new Date(featuredPost.publishedAt).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              {featuredPost.excerpt && (
                <p className={styles.excerpt}>{featuredPost.excerpt}</p>
              )}
              <span className={styles.readMore}>Read More →</span>
            </div>
          </Link>
        ) : (
          <JournalEmptyState />
        )}
      </div>
    </section>
  );
}
