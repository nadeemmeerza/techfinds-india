import type { Metadata } from "next";
import "./globals.scss";

// import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://techfindsindia.com"),

  title: {
    default: "TechFinds India | Smart Tech Buying Guides",
    template: "%s | TechFinds India",
  },

  description:
    "Discover practical technology buying guides, honest product comparisons and recommendations to make smarter tech purchases.",

  applicationName: "TechFinds India",

  keywords: [
    "technology buying guides",
    "tech product reviews",
    "computer accessories",
    "programming keyboards",
    "tech gadgets India",
  ],

  openGraph: {
    title: "TechFinds India | Smart Tech Buying Guides",
    description: "Practical technology buying guides and product comparisons.",
    siteName: "TechFinds India",
    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
