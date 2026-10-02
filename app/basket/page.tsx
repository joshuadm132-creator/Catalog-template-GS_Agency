// app/basket/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import BasketClient from "./basket-client";

export const metadata: Metadata = {
  title: "Your Basket",
  description:
    "Review the products you'd like a quote for and send your enquiry to G & S Chemicals.",
  robots: { index: false, follow: true },
};

export default function BasketPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-text-muted">Loading basket...</div>}>
      <BasketClient />
    </Suspense>
  );
}
