import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { guides } from "@/data/guides";
import styles from "./page.module.scss";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title} | TechFinds India`,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const { default: Article } = await import(`@/content/guides/${slug}.mdx`);

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <span className={styles.category}>{guide.category} Guide</span>

        <h1>{guide.title}</h1>

        <p className={styles.description}>{guide.description}</p>

        <div className={styles.meta}>
          TechFinds India Editorial Team · {guide.readTime}
        </div>

        <div className={styles.articleBody}>
          <Article />
        </div>
      </div>
    </article>
  );
}
