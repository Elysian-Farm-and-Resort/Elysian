import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeaturedPostSection from "@/components/journey/FeaturedPostSection";
import JourneyPostsGrid from "@/components/journey/JourneyPostsGrid";
import JourneyClosingSection from "@/components/journey/JourneyClosingSection";
import { journeyHero } from "@/data/Journey.data";
import { getJournalPosts } from "../../../../sanity/queries";

export const metadata: Metadata = {
  title: "Our Journey",
  description:
    "Follow the journey as Elysian Farms & Resort comes to life — construction progress, farm updates, and milestones from Ibadan, Nigeria.",
};

export default async function JourneyPage() {
  // Wrapped so a Sanity/network hiccup never breaks this page — every
  // section below falls back gracefully to its own empty state.
  let posts: Awaited<ReturnType<typeof getJournalPosts>> = [];
  try {
    posts = await getJournalPosts();
  } catch (error) {
    console.error("Failed to fetch journal posts for Journey page:", error);
  }

  const featuredPost = posts[0] || null;

  return (
    <>
      <PageHero
        eyebrow={journeyHero.eyebrow}
        headline={journeyHero.headline}
        subtext={journeyHero.subtext}
        imageUrl={journeyHero.imageUrl}
        imageAlt={journeyHero.imageAlt}
      />

      <FeaturedPostSection featuredPost={featuredPost} />

      <JourneyPostsGrid posts={posts} />

      <JourneyClosingSection />
    </>
  );
}