import styles from './Footer.module.css';

// A simple rolling-hill horizon with a small tree line and a barn silhouette,
// sitting on the page background color and dipping into the footer's
// evergreen. Purely decorative (aria-hidden) — ties the footer back to the
// farm/countryside brand without depending on final photography.
export default function HorizonDivider() {
  return (
    <div className={styles.horizonWrap} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={styles.horizonSvg}
      >
        <path
          d="M0,80 C240,20 420,100 660,60 C900,20 1080,90 1440,50 L1440,120 L0,120 Z"
          fill="var(--surface-dark-alt)"
        />
        {/* tree line */}
        <g fill="var(--golden-orange)" opacity="0.35">
          <circle cx="180" cy="52" r="14" />
          <rect x="176" y="52" width="8" height="18" />
          <circle cx="220" cy="46" r="18" />
          <rect x="215" y="46" width="10" height="22" />
          <circle cx="1250" cy="58" r="15" />
          <rect x="1246" y="58" width="8" height="18" />
        </g>
        {/* barn silhouette */}
        <g fill="var(--golden-orange)" opacity="0.45">
          <path d="M980 70 L1010 48 L1040 70 L1040 90 L980 90 Z" />
          <rect x="1005" y="76" width="10" height="14" fill="var(--surface-dark-alt)" />
        </g>
      </svg>
    </div>
  );
}