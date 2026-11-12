
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { guides } from "@/data/guides";
import styles from "./GuidesListing.module.scss";

const PAGE_SIZE = 6;

export default function GuidesListing() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    ...Array.from(new Set(guides.map((guide) => guide.category))),
  ];

  const filteredGuides = useMemo(() => {
    const query = search.trim().toLowerCase();

    return guides.filter((guide) => {
      const matchesSearch =
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        guide.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const totalPages = Math.ceil(filteredGuides.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const visibleGuides = filteredGuides.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  function handleSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>TECHFIND INDIA GUIDES</span>
          <h1>Buying Guides & Tech Advice</h1>
          <p>
            Practical advice to help you choose the right technology
            and accessories for your needs.
          </p>
        </header>

        <div className={styles.toolbar}>
          <input
            type="search"
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Search guides..."
            aria-label="Search guides"
            className={styles.search}
          />

          <div className={styles.categories} aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={
                  selectedCategory === category
                    ? `${styles.categoryButton} ${styles.active}`
                    : styles.categoryButton
                }
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.resultsInfo}>
          {filteredGuides.length}{" "}
          {filteredGuides.length === 1 ? "guide" : "guides"} found
        </div>

        {visibleGuides.length > 0 ? (
          <div className={styles.grid}>
            {visibleGuides.map((guide) => (
              <article key={guide.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.cardCategory}>
                    {guide.category}
                  </span>
                  <span className={styles.readTime}>
                    {guide.readTime}
                  </span>
                </div>

                <h2>{guide.title}</h2>

                <p>{guide.description}</p>

                <Link
                  href={`/guides/${guide.slug}`}
                  className={styles.readLink}
                >
                  Read guide <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No guides found</h2>
            <p>Try another search term or select a different category.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setCurrentPage(1);
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <nav className={styles.pagination} aria-label="Guide pages">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
