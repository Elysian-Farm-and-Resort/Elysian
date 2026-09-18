import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import StorySection from "@/components/about/StorySection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import StandForSection from "@/components/about/StandForSection";
import ConceptSection from "@/components/about/ConceptSection";
import SplitFeature from "@/components/about/SplitFeature";
import FinalCtaSection from "@/components/FinalCtaSection";
import { aboutHero, locationContent, developmentContent, aboutFinalCta } from "@/data/About.data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, vision and mission behind Elysian Farms & Resort — a countryside destination taking shape in Ibadan, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        headline={aboutHero.headline}
        subtext={aboutHero.subtext}
        location={aboutHero.location}
        imageUrl={aboutHero.imageUrl}
        imageAlt={aboutHero.imageAlt}
      />
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

      <FinalCtaSection
        eyebrow={aboutFinalCta.eyebrow}
        heading={aboutFinalCta.heading}
        subtext={aboutFinalCta.subtext}
        primaryCta={{ label: aboutFinalCta.primaryCtaLabel, href: aboutFinalCta.primaryCtaHref }}
        secondaryCta={{
          label: aboutFinalCta.secondaryCtaLabel,
          href: aboutFinalCta.secondaryCtaHref,
        }}
      />
    </>
  );
}