// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <Link href="/" className={styles.logo}>
            TechFinds India
          </Link>

          <p>
            Practical technology recommendations for smarter work and
            everyday productivity.
          </p>
        </div>

        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/affiliate-disclosure">
            Affiliate Disclosure
          </Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>

        <p className={styles.copyright}>
          © {year ?? "2026"} TechFinds India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}