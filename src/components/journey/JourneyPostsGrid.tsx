"use client";

import { useState, useMemo } from "react";
import { journeyCategories } from "@/data/Journey.data";
import type { JournalPostSummary } from "../../../sanity/queries";
import JournalCard from "@/components/home/JournalCard";
import JournalEmptyState from "@/components/home/JournalEmptyState";
import styles from "@/styles/journey/JourneyPostsGrid.module.css";

type JourneyPostsGridProps = {
  posts: JournalPostSummary[];
};
 
export default function JourneyPostsGrid({ posts }: JourneyPostsGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <section id="all-posts" className="section">
      <div className="container">
        <p className={styles.eyebrow}>All Posts</p>

        <div className={styles.tabs}>
          {journeyCategories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={styles.tab}
              data-active={activeCategory === category.value}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className={styles.grid}>
            {filteredPosts.map((post) => (
              <JournalCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <JournalEmptyState />
        )}
      </div>
    </section>
  );
}
