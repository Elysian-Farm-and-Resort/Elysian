"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoBackground.module.css";

type VideoStatus = "idle" | "loading" | "loaded" | "failed";

type VideoBackgroundProps = {
  // Placeholder — swap for the real YouTube video ID once ready.
  // Accepts the ID only (the part after "v=" in a YouTube URL), not a full URL.
  youtubeId: string;
  posterImageUrl: string;
  posterImageAlt: string;
  id?: string;
  children?: React.ReactNode;
};

// If the iframe hasn't confirmed it loaded within this window, treat it as
// failed and fall back to the poster — covers slow/broken connections that
// never fire a clean error event (iframes are unreliable about this).
const LOAD_TIMEOUT_MS = 10000;

export default function VideoBackground({
  youtubeId,
  posterImageUrl,
  posterImageAlt,
  id,
  children,
}: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<VideoStatus>("idle");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced-motion users still get the poster only — this is an
    // accessibility preference, not a device/network limitation, so it
    // applies regardless of screen size or connection quality.
    if (prefersReducedMotion) return;

    const node = containerRef.current;
    if (!node) return;

    // Attempt the video on every screen size now — only viewport entry
    // gates when it starts loading, so it never blocks initial page load.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatus("loading");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (status !== "loading") return;

    // Safety net for connections where the iframe hangs instead of
    // firing onError — after this window, just show the poster.
    const timeout = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "failed" : current));
    }, LOAD_TIMEOUT_MS);

    return () => clearTimeout(timeout);
  }, [status]);

  const showVideo = status === "loading" || status === "loaded";

  return (
    <div ref={containerRef} id={id} className={styles.wrapper}>
      {/* Poster is always present underneath — the fallback for failure,
          timeout, reduced motion, or the brief moment before the video
          finishes loading. */}
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(${posterImageUrl})` }}
        role="img"
        aria-label={posterImageAlt}
      />

      {showVideo && (
        <div
          className={styles.videoFrame}
          data-loaded={status === "loaded"}
          aria-hidden="true"
        >
          <iframe
            className={styles.iframe}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&playsinline=1`}
            title="Background video"
            allow="autoplay; encrypted-media"
            frameBorder={0}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
          />
        </div>
      )}

      <div className={styles.overlay} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}