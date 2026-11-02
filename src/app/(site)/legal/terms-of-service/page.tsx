import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { termsOfService, legalLastUpdated } from "@/data/Legal.data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to your use of the Elysian Farms & Resort website, including how property information, enquiries and waitlists work.",
};

export default function TermsOfServicePage() {
  return <LegalDocument doc={termsOfService} lastUpdated={legalLastUpdated} />;
}