"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems, navCta, type NavItem } from "@/data/navigation.data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    // Only Home has a hero worth sitting transparently over — every other
    // page keeps the solid header from the start.
    if (!isHome) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isTransparent = isHome && !isScrolled;

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <header
      className={`${styles.header} ${isTransparent ? styles.transparent : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Elysian Farms & Resort — Home">
          <Image
            src="/logo.png"
            alt="Elysian Farms & Resort"
            width={100}
            height={70}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.href}
                className={styles.navItem}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={styles.navLink}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      <span className={styles.chevron} aria-hidden="true">
                        ▾
                      </span>
                    </button>
                    <ul
                      className={styles.dropdown}
                      data-open={openDropdown === item.label}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className={styles.dropdownLink}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* <Link href={navCta.href} className={`btn btn-primary ${styles.ctaDesktop}`}>
          {navCta.label}
        </Link> */}

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className={styles.hamburger} data-open={mobileOpen} />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={styles.mobileNav}
        data-open={mobileOpen}
        aria-label="Mobile"
      >
        <ul>
          {navItems.map((item) => (
            <MobileNavItem key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
          ))}
          <li>
            <Link
              href={navCta.href}
              className={`btn btn-primary ${styles.ctaMobile}`}
              onClick={() => setMobileOpen(false)}
            >
              {navCta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={styles.mobileLink} onClick={onNavigate}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        className={styles.mobileLink}
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
      >
        {item.label}
        <span className={styles.chevron} aria-hidden="true">
          {expanded ? "▴" : "▾"}
        </span>
      </button>
      <ul className={styles.mobileSubList} data-open={expanded}>
        {item.children.map((child) => (
          <li key={child.href}>
            <Link href={child.href} className={styles.mobileSubLink} onClick={onNavigate}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}