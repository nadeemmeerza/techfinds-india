
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  pros?: string[];
  cons?: string[];
  amazonUrl: string;
  badge?: string;
};

export default function ProductCard({
  name,
  category,
  description,
  imageSrc,
  imageAlt,
  pros = [],
  cons = [],
  amazonUrl,
  badge,
}: ProductCardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || name}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>Product image</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.topLine}>
          <span className={styles.category}>{category}</span>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

        <h3 className={styles.name}>{name}</h3>

        <p className={styles.description}>{description}</p>

        {(pros.length > 0 || cons.length > 0) && (
          <div className={styles.points}>
            {pros.length > 0 && (
              <div>
                <h4 className={styles.proTitle}>What we like</h4>
                <ul>
                  {pros.map((pro) => (
                    <li key={pro}>{pro}</li>
                  ))}
                </ul>
              </div>
            )}

            {cons.length > 0 && (
              <div>
                <h4 className={styles.conTitle}>Things to consider</h4>
                <ul>
                  {cons.map((con) => (
                    <li key={con}>{con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <a
          href={amazonUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className={styles.button}
        >
          View on Amazon
          <span aria-hidden="true">↗</span>
        </a>

        <p className={styles.disclosure}>
          Affiliate link. We may earn a commission from qualifying purchases.
        </p>
      </div>
    </section>
  );
}
