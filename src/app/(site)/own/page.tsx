import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCtaSection from "@/components/FinalCtaSection";
import OwnJumpBar from "@/components/own/OwnJumpBar";
import CottagesSection from "@/components/own/CottagesSection";
import LandSection from "@/components/own/LandSection";
import PaymentTrustSection from "@/components/own/PaymentTrustSection";
import EarnSection from "@/components/own/EarnSection";
import OwnGalleryTeaser from "@/components/own/OwnGalleryTeaser";
import { ownHero, ownClosingCta } from "@/data/Own.data";

export const metadata: Metadata = {
  title: "Own at Elysian",
  description:
    "Aduke Cottages (1, 2 and 3 bedroom) and land plots with a C of O and a payment plan, in a managed countryside resort community in Ibadan, Nigeria.",
};

export default function OwnPage() {
  return (
    <>
      <PageHero
        eyebrow={ownHero.eyebrow}
        headline={ownHero.headline}
        subtext={ownHero.subtext}
        imageUrl={ownHero.imageUrl}
        imageAlt={ownHero.imageAlt}
      />

      <OwnJumpBar />

      <CottagesSection />

      <LandSection />

      <PaymentTrustSection />

      <EarnSection />

      <OwnGalleryTeaser />

      <FinalCtaSection
        eyebrow={ownClosingCta.eyebrow}
        heading={ownClosingCta.heading}
        subtext={ownClosingCta.subtext}
        primaryCta={{ label: ownClosingCta.primaryCtaLabel, href: ownClosingCta.primaryCtaHref }}
        secondaryCta={{
          label: ownClosingCta.secondaryCtaLabel,
          href: ownClosingCta.secondaryCtaHref,
        }}
      />
    </>
  );
}