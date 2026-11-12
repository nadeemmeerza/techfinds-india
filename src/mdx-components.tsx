import type { MDXComponents } from "mdx/types";
import ProductCard from "@/components/products/ProductCard";
import ProductComparison from "@/components/products/ProductComparison";

const components: MDXComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  a: (props) => <a {...props} />,
   ProductCard,
   ProductComparison,
};

export function useMDXComponents(): MDXComponents {
  return components;
}







