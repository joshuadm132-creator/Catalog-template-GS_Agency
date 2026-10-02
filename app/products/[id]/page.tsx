// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProductById, products } from "@/config/products";
import ProductDetailBody from "@/components/product-detail-body";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/Reveal";

/* ---------- Static generation ----------
   Pre-renders one HTML page per product at build time.
   Fast, SEO friendly, no runtime lookups. */

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

/* ---------- Per-product metadata ---------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images[0] ? [product.images[0]] : undefined,
    },
  };
}

/* ---------- Page ---------- */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Related products — same category, excluding this one
  const related = products
    .filter((p) => p.category.id === product.category.id && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-text-muted"
        >
          <Link href="/" className="hover:text-text transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-text-muted/50">/</span>
          <Link href="/products" className="hover:text-text transition-colors">
            Products
          </Link>
          <span aria-hidden="true" className="text-text-muted/50">/</span>
          <Link
            href={`/products?category=${product.category.id}`}
            className="hover:text-text transition-colors"
          >
            {product.category.name}
          </Link>
          <span aria-hidden="true" className="text-text-muted/50">/</span>
          <span className="text-text font-medium">{product.name}</span>
        </nav>

        {/* Main detail body — image, description, sidebar */}
        <section className="mt-10">
          <ProductDetailBody product={product} />
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t border-border">
            <Reveal>
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-text">
                  Related products
                </h2>
                <Link
                  href={`/products?category=${product.category.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View all in {product.category.name} →
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
