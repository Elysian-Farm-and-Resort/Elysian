import Link from 'next/link';
import Image from 'next/image';
import {
  footerLinkGroups,
  socialLinks,
  contactInfo,
  footerCta,
  parentCompany,
  type SocialLink,
} from '../data/Footer.data';
import HorizonDivider from './HorizonDivider';
import WaitlistForm from './WaitlistForm';
import styles from './Footer.module.css';
import { JSX } from 'react/jsx-runtime';

type IconProps = { size?: number; 'aria-hidden'?: boolean | 'true' | 'false' };
type IconComponent = (props: IconProps) => JSX.Element;

function Icon({ size = 18, children }: IconProps & { children: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={children} />
    </svg>
  );
}

const Instagram = (props: IconProps) => <Icon {...props}>M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.5h.01</Icon>;
const Facebook = (props: IconProps) => <Icon {...props}>M15 3h3V0h-3a5 5 0 0 0-5 5v3H7v4h3v9h4v-9h3l1-4h-4V5a2 2 0 0 1 1-2Z</Icon>;
const Youtube = (props: IconProps) => <Icon {...props}>M22.5 6.5a2.5 2.5 0 0 0-1.75-1.77C19.2 4.25 12 4.25 12 4.25s-7.2 0-8.75.48A2.5 2.5 0 0 0 1.5 6.5 26 26 0 0 0 1.25 12a26 26 0 0 0 .25 5.5 2.5 2.5 0 0 0 1.75 1.77c1.55.48 8.75.48 8.75.48s7.2 0 8.75-.48a2.5 2.5 0 0 0 1.75-1.77 26 26 0 0 0 .25-5.5 26 26 0 0 0-.25-5.5ZM10 15.75v-7.5L16.5 12 10 15.75Z</Icon>;
const Linkedin = (props: IconProps) => <Icon {...props}>M4 4v16M4 8h.01M8 20v-7a4 4 0 0 1 8 0v7m0-7a4 4 0 0 1 4 0v7</Icon>;
const MessageCircle = (props: IconProps) => <Icon {...props}>M21 11.5a8.4 8.4 0 0 1-9 8.5 9.4 9.4 0 0 1-4-.9L3 21l1.9-4.5A8.4 8.4 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.5 8.4 8.4 0 0 1 9 8.5Z</Icon>;
const MapPin = (props: IconProps) => <Icon {...props}>M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z</Icon>;
const Phone = (props: IconProps) => <Icon {...props}>M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z</Icon>;
const Mail = (props: IconProps) => <Icon {...props}>M3 5h18v14H3V5Zm0 1 9 7 9-7</Icon>;

const socialIcons: Record<SocialLink['icon'], IconComponent> = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTokIcon,
  youtube: Youtube,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <HorizonDivider />

      <div className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className={styles.ctaEyebrow}>{footerCta.eyebrow}</p>
            <h2 className={styles.ctaHeadline}>{footerCta.headline}</h2>
            <p className={styles.ctaSubtext}>{footerCta.subtext}</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={footerCta.ctaHref} className="btn btn-primary">
              {footerCta.ctaLabel}
            </Link>
            <WaitlistForm />
          </div>
        </div>
      </div>

      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo} aria-label="Elysian Farms & Resort — Home">
            <Image src="/logo.png" alt="Elysian Farms & Resort" width={150} height={44} />
          </Link>
          <p className={styles.tagline}>
            A managed countryside resort community — own a cottage, escape the city, and
            experience farm-to-table living.
          </p>

          <ul className={styles.socialList}>
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={styles.socialLink}
                  >
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {footerLinkGroups.map((group) => (
          <nav key={group.heading} className={styles.linkCol} aria-label={group.heading}>
            <h3 className={styles.linkHeading}>{group.heading}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.contactCol}>
          <h3 className={styles.linkHeading}>Get in Touch</h3>
          <address className={styles.address}>
            <p className={styles.contactRow}>
              <MapPin size={16} aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </p>
            <p className={styles.contactRow}>
              <Phone size={16} aria-hidden="true" />
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
            </p>
            <p className={styles.contactRow}>
              <Mail size={16} aria-hidden="true" />
              <a href={contactInfo.emailHref}>{contactInfo.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          © {year} Elysian Farms & Resort. All rights reserved.
        </p>
        <p className={styles.parentCompany}>
          A project of{' '}
          <a href={parentCompany.href} target="_blank" rel="noopener noreferrer">
            {parentCompany.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

// lucide-react doesn't ship a TikTok glyph — small inline SVG kept local
// to the footer rather than pulled in as a separate file.
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-1.06-.93-1.7-2.24-1.7-3.7h-3.14v13.86c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1-2.72-2.72 2.72 2.72 0 0 1 2.72-2.72c.3 0 .6.05.87.14v-3.19c-.28-.04-.57-.06-.87-.06A5.86 5.86 0 0 0 3.18 15.9a5.86 5.86 0 0 0 5.86 5.86 5.86 5.86 0 0 0 5.86-5.86V9.01a7.32 7.32 0 0 0 4.28 1.37V7.24a4.18 4.18 0 0 1-2.58-1.42Z" />
    </svg>
  );
}