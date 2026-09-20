import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactHelpSection from "@/components/contact/ContactHelpSection";
import ExploreMoreSection from "@/components/contact/ExploreMoreSection";
import LocationMapSection from "@/components/contact/LocationMapSection";
import StayConnectedSection from "@/components/contact/StayConnectedSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import { contactHero, contactFinalCta } from "@/data/Contact.data";
import { getSiteSettings } from "../../../../sanity/queries";

export const metadata: Metadata = {
  title: "Get in Touch with us",
  description:
    "Get in touch with Elysian Farms & Resort — ownership questions, farm experiences, corporate events, investment, or partnerships.",
};

export default async function ContactPage() {
  // Wrapped so a Sanity/network hiccup never breaks this page — every
  // section below falls back to placeholder content in Contact.data.ts.
  let settings = null;
  try {
    settings = await getSiteSettings();
  } catch (error) {
    console.error("Failed to fetch site settings for Contact page:", error);
  }

  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        headline={contactHero.headline}
        subtext={contactHero.subtext}
        imageUrl={contactHero.imageUrl}
        imageAlt={contactHero.imageAlt}
      />

      <ContactHelpSection settings={settings} />

      <ExploreMoreSection />

      <LocationMapSection settings={settings} />

      <StayConnectedSection settings={settings} />

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