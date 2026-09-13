"use client";

import { useEffect, useState } from "react";
import { relaunchDate, launchCopy } from "../data/Launch.data";
import styles from "./RelaunchCountdown.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function RelaunchCountdown() {
  const target = new Date(relaunchDate).getTime();

  // Start as null on both server and first client render to avoid a
  // hydration mismatch, then compute the real value once mounted.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(target));

    const interval = setInterval(() => {
      const next = getTimeLeft(target);
      setTimeLeft(next);
      if (!next) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  // Nothing rendered until mounted (avoids hydration flash), and nothing
  // rendered once the date has passed — this component simply disappears
  // on its own after November, no code cleanup required.
  if (!mounted || !timeLeft) return null;

  return (
    <div className={styles.banner} role="status" aria-live="polite">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{launchCopy.eyebrow}</p>
          <p className={styles.headline}>{launchCopy.headline}</p>
        </div>

        <div className={styles.timer} aria-label="Time remaining until relaunch">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hrs" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.timeUnit}>
      <span className={styles.timeValue}>{String(value).padStart(2, "0")}</span>
      <span className={styles.timeLabel}>{label}</span>
    </div>
  );
}
