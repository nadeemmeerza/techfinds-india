
import styles from "./ProductComparison.module.scss";

type Product = {
  name: string;
  amazonUrl: string;
};

type Feature = {
  label: string;
  values: string[];
};

type ProductComparisonProps = {
  title?: string;
  products: Product[];
  features: Feature[];
};

export default function ProductComparison({
  title = "Product comparison",
  products,
  features,
}: ProductComparisonProps) {
  const validFeatures = features.filter(
    (feature) => feature.values.length === products.length
  );

  return (
    <section className={styles.comparison}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Features</th>
              {products.map((product) => (
                <th scope="col" key={product.name}>
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {validFeatures.map((feature) => (
              <tr key={feature.label}>
                <th scope="row">{feature.label}</th>
                {feature.values.map((value, index) => (
                  <td key={`${feature.label}-${index}`}>{value}</td>
                ))}
              </tr>
            ))}

            <tr>
              <th scope="row">Check product</th>
              {products.map((product) => (
                <td key={product.name}>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className={styles.link}
                  >
                    View on Amazon ↗
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className={styles.disclosure}>
        We may earn a commission from qualifying purchases made through
        these affiliate links.
      </p>
    </section>
  );
}
