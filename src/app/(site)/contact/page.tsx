import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactHelpSection from "@/components/contact/ContactHelpSection";
import ExploreMoreSection from "@/components/contact/ExploreMoreSection";
import LocationMapSection from "@/components/contact/LocationMapSection";
import StayConnectedSection from "@/components/contact/StayConnectedSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import { contactHero, contactFinalCta } from "@/data/Contact.data";

export const metadata: Metadata = {
  title: "Get in Touch with us",
  description:
    "Get in touch with Elysian Farms & Resort — ownership questions, farm experiences, corporate events, investment, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        headline={contactHero.headline}
        subtext={contactHero.subtext}
        imageUrl={contactHero.imageUrl}
        imageAlt={contactHero.imageAlt}
      />

      <ContactHelpSection />

      <ExploreMoreSection />

      <LocationMapSection />

      <StayConnectedSection />

      <FinalCtaSection
        eyebrow={contactFinalCta.eyebrow}
        heading={contactFinalCta.heading}
        subtext={contactFinalCta.subtext}
        primaryCta={{ label: contactFinalCta.primaryCtaLabel, href: contactFinalCta.primaryCtaHref }}
        secondaryCta={{
          label: contactFinalCta.secondaryCtaLabel,
          href: contactFinalCta.secondaryCtaHref,
        }}
      />
    </>
  );
}