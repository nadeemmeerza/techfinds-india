import type { Metadata } from "next";
import GuidesListing from "../../components/guides/GuidesListing";

export const metadata: Metadata = {
  title: "Buying Guides & Tech Advice | TechFinds India",
  description:
    "Explore practical technology buying guides, product advice and comparisons from TechFinds India.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return <GuidesListing />;
}
