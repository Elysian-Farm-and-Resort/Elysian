import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import StorySection from "@/components/about/StorySection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import StandForSection from "@/components/about/StandForSection";
import ConceptSection from "@/components/about/ConceptSection";
import SplitFeature from "@/components/about/SplitFeature";
import { locationContent, developmentContent, aboutFinalCta } from "@/data/About.data";
import styles from "./about.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, vision and mission behind Elysian Farms & Resort — a countryside destination taking shape in Ibadan, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAreSection />
      <StorySection />
      <VisionMissionSection />
      <StandForSection />
      <ConceptSection />

      <SplitFeature
        eyebrow={locationContent.eyebrow}
        heading={locationContent.heading}
        body={locationContent.body}
        imageUrl={locationContent.imageUrl}
        imageAlt={locationContent.imageAlt}
        ctaLabel={locationContent.ctaLabel}
        ctaHref={locationContent.ctaHref}
        imagePosition="left"
        background="white"
      />

      <SplitFeature
        eyebrow={developmentContent.eyebrow}
        heading={developmentContent.heading}
        body={developmentContent.body}
        imageUrl={developmentContent.imageUrl}
        imageAlt={developmentContent.imageAlt}
        ctaLabel={developmentContent.ctaLabel}
        ctaHref={developmentContent.ctaHref}
        imagePosition="right"
        background="page"
      />

      <section className={`section ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <p className={styles.ctaEyebrow}>{aboutFinalCta.eyebrow}</p>
          <h2 className={styles.ctaHeading}>{aboutFinalCta.heading}</h2>
          <p className={styles.ctaSubtext}>{aboutFinalCta.subtext}</p>
          <div className={styles.ctaActions}>
            <Link href={aboutFinalCta.primaryCtaHref} className="btn btn-primary">
              {aboutFinalCta.primaryCtaLabel}
            </Link>
            <Link href={aboutFinalCta.secondaryCtaHref} className="btn btn-secondary">
              {aboutFinalCta.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}