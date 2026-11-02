import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { privacyPolicy, legalLastUpdated } from "@/data/Legal.data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Elysian Farms & Resort collects, uses and protects personal information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={privacyPolicy} lastUpdated={legalLastUpdated} />;
}