import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import JournalCard from "@/components/JournalCard";
import JournalEmptyState from "@/components/JournalEmptyState";
import TrustSnapshot from "@/components/TrustSnapshot";
import CottagesTeaser from "@/components/CottagesTeaser";
import ShowcaseSection from "@/components/ShowcaseSection";
import AudienceSection from "@/components/AudienceSection";
import { getJournalPosts } from "@/sanity/queries";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Own the Escape",
  description:
    "A managed countryside resort community in Nigeria where you can own a private Aduke cottage, enjoy curated farm-and-resort experiences, and tap into a potential lodging-income pathway.",
};

export default async function HomePage() {
  // Wrapped so a network hiccup or an unreachable Sanity dataset never
  // takes down the whole page — it just falls back to the empty state
  // below, same as having zero posts published.
  let latestPosts: Awaited<ReturnType<typeof getJournalPosts>> = [];
  try {
    const allPosts = await getJournalPosts();
    latestPosts = allPosts.slice(0, 5);
  } catch (error) {
    console.error("Failed to fetch journal posts for Home:", error);
  }

  return (
    <>
      <Hero />

      <PillarsSection />

      <section className="section">
        <div className="container">
          <h2>Latest Updates</h2>
          <p className="text-lead">Follow our progress as the resort comes to life.</p>
          {latestPosts.length > 0 ? (
            <div className={styles.journalGrid}>
              {latestPosts.map((post) => (
                <JournalCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <JournalEmptyState />
          )}
        </div>
      </section>

      <TrustSnapshot />

      <CottagesTeaser />

      <ShowcaseSection />

      <AudienceSection />
    </>
  );
}