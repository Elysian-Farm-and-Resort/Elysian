import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import PillarsSection from "@/components/home/PillarsSection";
import JournalCarousel from "@/components/home/JournalCarousel";
import JournalEmptyState from "@/components/home/JournalEmptyState";
import TrustSnapshot from "@/components/home/TrustSnapshot";
import CottagesTeaser from "@/components/home/CottagesTeaser";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import AudienceSection from "@/components/home/AudienceSection";
import { getJournalPosts } from "../../../../sanity/queries";
import styles from "./page.module.css";
// import RelaunchCountdown from "@/components/home/RelaunchCountdown";

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
    latestPosts = allPosts.slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch journal posts for Home:", error);
  }

  return (
    <>
      <Hero />

      <PillarsSection />

      {/* <RelaunchCountdown /> */}

      <section className="section">
        <div className="container">
          <div className={styles.journalHeader}>
            <div>
              <h2>Latest Updates</h2>
              <p className="text-lead">Follow our progress as the resort comes to life.</p>
            </div>
            <Link href="/journey" className={styles.journeyLink}>
              View all
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          {latestPosts.length > 0 ? (
            <JournalCarousel posts={latestPosts} />
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