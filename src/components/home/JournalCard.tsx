import Link from "next/link";
import Image from "next/image";
import type { JournalPostSummary } from "../../../sanity/queries";
import styles from "@/styles/home/JournalCard.module.css";

type JournalCardProps = {
  post: JournalPostSummary;
};

export default function JournalCard({ post }: JournalCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={`/journey/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {post.coverImage ? (
          <Image
            src={post.coverImage.asset.url}
            alt={post.coverImage.alt}
            fill
            sizes="(min-width: 960px) 25vw, 50vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{post.category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        <time className={styles.date} dateTime={post.publishedAt}>
          {formattedDate}
        </time>
      </div>
    </Link>
  );
}