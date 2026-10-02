// components/product-grid.tsx
import type { Product } from "@/config/products";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/Reveal";

type ProductGridProps = {
  products: Product[];
  /** Columns on desktop: 2, 3, or 4. Default: 3 */
  columns?: 2 | 3 | 4;
  /** Pass to render a different empty state */
  emptyMessage?: string;
};

export default function ProductGrid({
  products,
  columns = 3,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  const colsClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-text-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${colsClass}`}>
      {products.map((product, index) => (
        <Reveal key={product.id} delay={index * 50}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}