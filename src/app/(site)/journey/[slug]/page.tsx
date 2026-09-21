import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import JournalCard from "@/components/home/JournalCard";
import JourneyClosingSection from "@/components/journey/JourneyClosingSection";
import { getJournalPosts, getJournalPostBySlug } from "../../../../../sanity/queries";
import styles from "./blog.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getJournalPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getJournalPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.coverImage
      ? {
          images: [{ url: post.coverImage.asset.url, alt: post.coverImage.alt }],
        }
      : undefined,
  };
}

// Custom rendering for Sanity's rich text (Portable Text) blocks, so body
// copy matches the site's own typography instead of default browser styles.
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className={styles.bodyH2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.bodyH3}>{children}</h3>,
    normal: ({ children }) => <p className={styles.bodyParagraph}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className={styles.bodyBlockquote}>{children}</blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageValue = value as { asset?: { url?: string }; alt?: string };
      if (!imageValue?.asset?.url) return null;
      return (
        <div className={styles.bodyImageWrap}>
          <Image
            src={imageValue.asset.url}
            alt={imageValue.alt || ""}
            fill
            sizes="(min-width: 860px) 700px, 100vw"
            className={styles.bodyImage}
          />
        </div>
      );
    },
  },
};

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getJournalPostBySlug(slug);

  if (!post) notFound();

  const allPosts = await getJournalPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="section">
        <div className={`container ${styles.container}`}>
          <Link href="/journey" className={styles.backLink}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Journey
          </Link>

          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <time className={styles.date} dateTime={post.publishedAt}>
              {formattedDate}
            </time>
          </div>
          <h1 className={styles.title}>{post.title}</h1>

          {post.coverImage && (
            <div className={styles.coverWrap}>
              <Image
                src={post.coverImage.asset.url}
                alt={post.coverImage.alt}
                fill
                priority
                sizes="(min-width: 860px) 800px, 100vw"
                className={styles.coverImage}
              />
            </div>
          )}

          <div className={styles.body}>
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className={styles.bodyParagraph}>{post.excerpt}</p>
            )}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>More in {post.category}</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((relatedPost) => (
                <JournalCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <JourneyClosingSection />
    </>
  );
}