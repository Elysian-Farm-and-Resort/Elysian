import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FarmIntroSection from "@/components/farm/FarmIntroSection";
import CropsSection from "@/components/farm/CropsSection";
import FeatureGridSplit from "@/components/farm/FeatureGridSplit";
import FarmToTableSection from "@/components/farm/FarmToTableSection";
import FarmExperienceSection from "@/components/farm/FarmExperienceSection";
import SplitFeature from "@/components/about/SplitFeature";
import FinalCtaSection from "@/components/FinalCtaSection";
import {
  farmHero,
  modernAgriculture,
  communityContent,
  farmFutureContent,
  farmFinalCta,
} from "@/data/Farm.data";

export const metadata: Metadata = {
  title: "The Farm",
  description:
    "A modern agricultural experience at the heart of Elysian Farms & Resort — greenhouses, fresh produce, farm tours and farm-to-table dining in Ibadan, Nigeria.",
};

export default function FarmPage() {
  return (
    <>
      <PageHero
        eyebrow={farmHero.eyebrow}
        headline={farmHero.headline}
        subtext={farmHero.subtext}
        location={farmHero.location}
        imageUrl={farmHero.imageUrl}
        imageAlt={farmHero.imageAlt}
      />

      <FarmIntroSection />

      <CropsSection />

      <FeatureGridSplit
        eyebrow={modernAgriculture.eyebrow}
        heading={modernAgriculture.heading}
        body={modernAgriculture.body}
        imageUrl={modernAgriculture.imageUrl}
        imageAlt={modernAgriculture.imageAlt}
        features={modernAgriculture.features}
        imagePosition="left"
        background="page"
      />

      <FarmToTableSection />

      <FarmExperienceSection />

      <FeatureGridSplit
        eyebrow={communityContent.eyebrow}
        heading={communityContent.heading}
        body={communityContent.body}
        imageUrl={communityContent.imageUrl}
        imageAlt={communityContent.imageAlt}
        features={communityContent.features}
        imagePosition="left"
        background="white"
      />

      <SplitFeature
        eyebrow={farmFutureContent.eyebrow}
        heading={farmFutureContent.heading}
        body={farmFutureContent.body}
        imageUrl={farmFutureContent.imageUrl}
        imageAlt={farmFutureContent.imageAlt}
        ctaLabel={farmFutureContent.ctaLabel}
        ctaHref={farmFutureContent.ctaHref}
        imagePosition="left"
        background="page"
      />

      <FinalCtaSection
        eyebrow={farmFinalCta.eyebrow}
        heading={farmFinalCta.heading}
        subtext={farmFinalCta.subtext}
        primaryCta={{ label: farmFinalCta.primaryCtaLabel, href: farmFinalCta.primaryCtaHref }}
        secondaryCta={{
          label: farmFinalCta.secondaryCtaLabel,
          href: farmFinalCta.secondaryCtaHref,
        }}
      />
    </>
  );
}