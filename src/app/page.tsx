import Link from "next/link";
import styles from "./page.module.scss";
import { guides } from "@/data/guides";

const categories = [
  {
    icon: "⌨️",
    title: "Keyboards",
    description: "Find a comfortable keyboard for coding and everyday work.",
    href: "/category/keyboards",
  },
  {
    icon: "🖱️",
    title: "Computer Mice",
    description: "Explore wireless, ergonomic and productivity mice.",
    href: "/category/mice",
  },
  {
    icon: "💻",
    title: "Laptop Accessories",
    description: "Stands, hubs and accessories for a better workspace.",
    href: "/category/laptop-accessories",
  },
  {
    icon: "🎧",
    title: "Audio Gear",
    description: "Headphones, microphones and audio essentials.",
    href: "/category/audio",
  },
];

const featuredArticles = guides.filter((guide) => guide.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className="eyebrow">Technology made practical</span>

            <h1>
              Find the right tech for your{" "}
              <span className={styles.highlight}>everyday work.</span>
            </h1>

            <p>
              Discover practical buying guides, product comparisons and
              technology recommendations for developers, students and
              professionals in India.
            </p>

            <div className={styles.heroActions}>
              <Link href="/guides" className={styles.primaryButton}>
                Explore Buying Guides
              </Link>

              <Link href="/reviews" className={styles.secondaryButton}>
                Browse Reviews
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualContent}>
              <p>Build a better workspace</p>
              <h2>Small upgrades. Better productivity.</h2>

              <div className={styles.gadgetGrid}>
                <div className={styles.gadget}>
                  <span>⌨️</span>
                  <span>Keyboard</span>
                </div>
                <div className={styles.gadget}>
                  <span>🖱️</span>
                  <span>Mouse</span>
                </div>
                <div className={styles.gadget}>
                  <span>🎧</span>
                  <span>Audio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Browse by interest</span>
              <h2>Explore tech categories</h2>
              <p>Start with the products that matter to your setup.</p>
            </div>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link
                href={category.href}
                key={category.title}
                className={styles.categoryCard}
              >
                <span aria-hidden="true">{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Learn before you buy</span>
              <h2>Explore our guides</h2>
              <p>Practical advice to help you make informed decisions.</p>
            </div>

            <Link href="/guides" className="text-link">
              View all guides →
            </Link>
          </div>

          <div className={styles.featuredGrid}>
            {featuredArticles.map((article) => (
              <article className={styles.articleCard} key={article.slug}>
                <div className={styles.articleVisual} aria-hidden="true">
                  {article.icon}
                </div>

                <div className={styles.articleContent}>
                  <span>{article.category} Guide</span>

                  <h3>
                    <Link href={`/guides/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={`container ${styles.trustGrid}`}>
          <div>
            <span className={styles.trustIcon}>🔍</span>
            <h3>Research-led recommendations</h3>
            <p>We aim to explain what matters before recommending a product.</p>
          </div>

          <div>
            <span className={styles.trustIcon}>💡</span>
            <h3>Practical buying advice</h3>
            <p>Focus on useful features, real needs and sensible budgets.</p>
          </div>

          <div>
            <span className={styles.trustIcon}>🤝</span>
            <h3>Transparent recommendations</h3>
            <p>We disclose affiliate relationships clearly to our readers.</p>
          </div>
        </div>
      </section>
    </>
  );
}
