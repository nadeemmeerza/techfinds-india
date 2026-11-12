// src/components/layout/Header.tsx

import Link from "next/link";
import styles from "./Header.module.scss";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Reviews", href: "/reviews" },
  { label: "Buying Guides", href: "/guides" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="TechFinds India home">
          <span className={styles.logoIcon}>T</span>
          <span>
            TechFinds<span className={styles.logoAccent}> India</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/guides" className={styles.headerButton}>
          Explore Guides
        </Link>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>

          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}