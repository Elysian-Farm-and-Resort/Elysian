import type { Metadata } from "next";
import Hero from "@/components/Hero";
import JournalCard from "@/components/Journalcard";
import { getJournalPosts } from "@/sanity/queries";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Own the Escape",
  description:
    "A managed countryside resort community in Nigeria where you can own a private Aduke cottage, enjoy curated farm-and-resort experiences, and tap into a potential lodging-income pathway.",
};

export default async function HomePage() {
  const allPosts = await getJournalPosts();
  const latestPosts = allPosts.slice(0, 5);

  return (
    <>
      <Hero />

      {/* Remaining Home sections (Own/Escape/Experience/Earn, Trust snapshot,
          Farm/Resort teaser, closing CTA) get added here as we build them. */}

      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Latest Updates</h2>
            <p className="text-lead">Follow our progress as the resort comes to life.</p>
            <div className={styles.journalGrid}>
              {latestPosts.map((post) => (
                <JournalCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}