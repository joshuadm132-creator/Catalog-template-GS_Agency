// app/products/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./products-client";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse our full range of paints, coatings, adhesives, sealants, and automotive products. Enquire directly for pricing and availability.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ProductsClient />
    </Suspense>
  );
}

function ProductsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="h-8 w-64 bg-surface rounded animate-pulse" />
      <div className="mt-10 h-12 bg-surface rounded-xl animate-pulse" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-2xl bg-surface animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}