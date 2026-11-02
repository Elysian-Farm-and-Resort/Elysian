import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SanctuarySection from "@/components/resort/SanctuarySection";
import AmenitiesRow from "@/components/resort/AmenitiesRow";
import RoomsSection from "@/components/resort/RoomsSection";
import ExperiencesMoreSection from "@/components/resort/ExperiencesMoreSection";
import ResortWaitlistSection from "@/components/resort/ResortWaitlist";
import GalleryTeaserSplit from "@/components/resort/GalleryTeaserSplit";
import FinalCtaSection from "@/components/FinalCtaSection";
import { resortHero, resortClosingCta } from "@/data/Resort.data";

export const metadata: Metadata = {
  title: "The Resort",
  description:
    "A world-class resort designed for comfort, wellness and unforgettable moments — pool, spa, dining, helipad, nature-themed weddings and more, set within the natural beauty of Ibadan.",
};

export default function ResortPage() {
  return (
    <>
      <PageHero
        eyebrow={resortHero.eyebrow}
        headline={resortHero.headline}
        subtext={resortHero.subtext}
        imageUrl={resortHero.imageUrl}
        imageAlt={resortHero.imageAlt}
      />

      <SanctuarySection />

      <AmenitiesRow />

      <RoomsSection />

      <ExperiencesMoreSection />

      <ResortWaitlistSection />

      <GalleryTeaserSplit />

      <FinalCtaSection
        eyebrow={resortClosingCta.eyebrow}
        heading={resortClosingCta.heading}
        subtext={resortClosingCta.subtext}
        primaryCta={{ label: resortClosingCta.ctaLabel, href: resortClosingCta.ctaHref }}
      />
    </>
  );
}