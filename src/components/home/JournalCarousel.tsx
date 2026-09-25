"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { JournalPostSummary } from "../../../sanity/queries";
import JournalCard from "./JournalCard";
import styles from "@/styles/home/JournalCarousel.module.css";

type JournalCarouselProps = {
    posts: JournalPostSummary[];
};

export default function JournalCarousel({ posts }: JournalCarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    const move = (direction: "previous" | "next") => {
        const track = trackRef.current;
        if (!track) return;

        const card = track.querySelector<HTMLElement>('[data-journal-card="true"]');
        const distance = card ? card.offsetWidth + 24 : track.clientWidth;
        track.scrollBy({
            left: direction === "next" ? distance : -distance,
            behavior: "smooth",
        });
    };

    return (
        <div className={styles.carousel}>
            <button
                type="button"
                className={`${styles.control} ${styles.previous}`}
                onClick={() => move("previous")}
                aria-label="Previous journal posts"
            >
                <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div ref={trackRef} className={styles.track}>
                {posts.map((post) => (
                    <div key={post.slug} className={styles.slide} data-journal-card="true">
                        <JournalCard post={post} />
                    </div>
                ))}
            </div>

            <button
                type="button"
                className={`${styles.control} ${styles.next}`}
                onClick={() => move("next")}
                aria-label="Next journal posts"
            >
                <ChevronRight size={20} aria-hidden="true" />
            </button>
        </div>
    );
}