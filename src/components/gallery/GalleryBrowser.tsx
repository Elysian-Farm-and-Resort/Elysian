"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, List, Camera } from "lucide-react";
import type { GalleryCategory } from "../../../sanity/queries";
import styles from "@/styles/gallery/GalleryBrowser.module.css";

export type CategoryWithCover = GalleryCategory & {
  coverUrl?: string;
  coverAlt?: string;
  imageCount: number;
};

type GalleryBrowserProps = {
  categories: CategoryWithCover[];
};

type ViewMode = "grid" | "list";

export default function GalleryBrowser({ categories }: GalleryBrowserProps) {
  const [activeSlug, setActiveSlug] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filtered =
    activeSlug === "all" ? categories : categories.filter((c) => c.slug === activeSlug);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.toolbar}>
          <div className={styles.tabs}>
            <button
              type="button"
              className={styles.tab}
              data-active={activeSlug === "all"}
              onClick={() => setActiveSlug("all")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                type="button"
                className={styles.tab}
                data-active={activeSlug === category.slug}
                onClick={() => setActiveSlug(category.slug)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className={styles.viewToggle}>
            <span className={styles.viewLabel}>View:</span>
            <button
              type="button"
              className={styles.viewButton}
              data-active={viewMode === "grid"}
              aria-label="Grid view"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              type="button"
              className={styles.viewButton}
              data-active={viewMode === "list"}
              aria-label="List view"
              onClick={() => setViewMode("list")}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>No categories yet — check back soon.</p>
        ) : viewMode === "grid" ? (
          <div className={styles.grid}>
            {filtered.map((category) => (
              <Link
                key={category._id}
                href={`/gallery/${category.slug}`}
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  {category.coverUrl ? (
                    <Image
                      src={category.coverUrl}
                      alt={category.coverAlt || category.title}
                      fill
                      sizes="(min-width: 960px) 33vw, 50vw"
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} aria-hidden="true" />
                  )}
                  <div className={styles.overlay} />
                  <span className={styles.badgeCategory}>{category.title}</span>
                  <span className={styles.badgeCount}>
                    <Camera size={12} aria-hidden="true" />
                    {category.imageCount} Photos
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.list}>
            {filtered.map((category) => (
              <Link key={category._id} href={`/gallery/${category.slug}`} className={styles.listItem}>
                <div className={styles.listImageWrap}>
                  {category.coverUrl ? (
                    <Image
                      src={category.coverUrl}
                      alt={category.coverAlt || category.title}
                      fill
                      sizes="120px"
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.listContent}>
                  <h3 className={styles.listTitle}>{category.title}</h3>
                  {category.description && (
                    <p className={styles.listDescription}>{category.description}</p>
                  )}
                  <span className={styles.listCount}>
                    <Camera size={12} aria-hidden="true" />
                    {category.imageCount} Photos
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}