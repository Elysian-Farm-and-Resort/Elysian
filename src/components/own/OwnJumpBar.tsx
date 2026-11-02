"use client";

import { useEffect, useState } from "react";
import { ownJumpLinks } from "@/data/Own.data";
import styles from "@/styles/own/OwnJumpBar.module.css";

export default function OwnJumpBar() {
  const [offset, setOffset] = useState(72);
  const [active, setActive] = useState(ownJumpLinks[0].id);

  // Sit directly under the site header, whatever its height is.
  useEffect(() => {
    const header = document.querySelector("header");
    const update = () => setOffset(header ? header.getBoundingClientRect().height : 72);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = ownJumpLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={styles.bar}
      aria-label="On this page"
      style={{ "--header-offset": `${offset}px` } as React.CSSProperties}
    >
      <div className={`container ${styles.inner}`}>
        {ownJumpLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={styles.link}
            data-active={active === link.id}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}