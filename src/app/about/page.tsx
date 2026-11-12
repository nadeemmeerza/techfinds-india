import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechFinds India, our mission and our approach to technology buying guides and product recommendations.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>ABOUT TECHFINDS INDIA</span>

        <h1>Helping You Make Smarter Tech Decisions</h1>

        <p className={styles.intro}>
          Technology shopping can be confusing. With so many products,
          specifications and brands available, choosing the right gadget
          isn't always easy.
        </p>

        <section>
          <h2>Our Mission</h2>
          <p>
            TechFinds India aims to make technology easier to understand.
            We publish practical buying guides, product comparisons and
            educational content to help readers make informed decisions.
          </p>
        </section>

        <section>
          <h2>What We Cover</h2>
          <ul>
            <li>Keyboards, mice and computer accessories</li>
            <li>Developer and productivity tools</li>
            <li>Work-from-home technology</li>
            <li>Monitors, headphones and desk accessories</li>
            <li>Practical technology buying advice</li>
          </ul>
        </section>

        <section>
          <h2>Our Editorial Approach</h2>
          <p>
            We focus on useful information, clear explanations and
            transparent recommendations. Our content may include
            independently researched product information and comparisons.
          </p>
          <p>
            We distinguish products we have personally tested from those
            we recommend based on available research. We do not claim
            hands-on testing when it has not taken place.
          </p>
        </section>

        <section>
          <h2>How We Make Money</h2>
          <p>
            Some links on TechFinds India may be affiliate links. If
            readers make qualifying purchases through these links, we
            may earn a commission at no additional cost to them.
          </p>
          <p>
            Affiliate relationships do not guarantee positive
            recommendations. Read our Affiliate Disclosure for details.
          </p>
        </section>

        <section>
          <h2>Our Commitment</h2>
          <p>
            We are building TechFinds India with a simple goal:
            publish helpful, understandable and transparent technology
            content that respects our readers.
          </p>
        </section>
      </div>
    </main>
  );
}