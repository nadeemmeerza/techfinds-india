import type { Metadata } from "next";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Learn how TechFinds India uses affiliate links and earns commissions from qualifying purchases.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>TRANSPARENCY</span>

        <h1>Affiliate Disclosure</h1>

        <p className={styles.updated}>Last updated: November 2026</p>

        <section>
          <h2>Our Affiliate Relationships</h2>

          <p>
            TechFinds India participates in affiliate marketing programs.
            This means some links on our website may be affiliate links.
          </p>

          <p>
            When you click an affiliate link and make a qualifying purchase,
            we may earn a commission at no additional cost to you.
          </p>
        </section>

        <section>
          <h2>Amazon Associates Disclosure</h2>

          <p>
            As an Amazon Associate I earn from qualifying purchases.
          </p>

          <p>
            We participate in the Amazon Associates Program, an affiliate
            advertising program designed to provide a means for websites
            to earn advertising fees by linking to Amazon.
          </p>
        </section>

        <section>
          <h2>Our Editorial Approach</h2>

          <p>
            Our goal is to help readers make informed technology purchasing
            decisions. Affiliate commissions do not guarantee positive
            recommendations or influence our editorial conclusions.
          </p>

          <p>
            We aim to provide useful, accurate and transparent information.
            We will clearly distinguish researched recommendations from
            products we have personally tested.
          </p>
        </section>

        <section>
          <h2>Questions?</h2>

          <p>
            If you have questions about this disclosure, please contact
            us through our Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}