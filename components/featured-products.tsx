// components/featured-products.tsx
import Link from "next/link";
import { featuredProducts } from "@/config/products";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/Reveal";

type FeaturedProductsProps = {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  /** How many to show. Default 6 */
  limit?: number;
};

export default function FeaturedProducts({
  title,
  subtitle,
  ctaText,
  ctaHref,
  limit = 6,
}: FeaturedProductsProps) {
  const items = featuredProducts.slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-text-muted leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <Link
            href={ctaHref}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-lg
              bg-primary text-text-inverse hover:bg-primary-hover
              transition font-medium text-sm
              whitespace-nowrap
            "
          >
            {ctaText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
