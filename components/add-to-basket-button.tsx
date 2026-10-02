// components/add-to-basket-button.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBasket } from "@/components/basket-provider";
import type { Product } from "@/config/products";

type AddToBasketButtonProps = {
  product: Product;
  /** If provided, this is the selected variant (detail page only) */
  selectedVariantId?: string;
  /**
   * Context: "card" (navigates if variants exist) or
   * "detail" (adds with selectedVariantId).
   */
  context?: "card" | "detail";
  className?: string;
};

export default function AddToBasketButton({
  product,
  selectedVariantId,
  context = "card",
  className = "",
}: AddToBasketButtonProps) {
  const { add } = useBasket();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(false);

  const hasVariants = !!product.variants && product.variants.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    // Stop the click from triggering a parent Link
    e.preventDefault();
    e.stopPropagation();

    if (context === "card" && hasVariants) {
      // Send them to the detail page to pick a size
      router.push(`/products/${product.id}`);
      return;
    }

    // Add to basket
    add(product.id, selectedVariantId);

    // Show feedback
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2.5 rounded-lg
        text-sm font-semibold
        transition
        ${
          justAdded
            ? "bg-accent text-text-inverse"
            : "bg-primary text-text-inverse hover:bg-primary-hover"
        }
        ${className}
      `}
      aria-label={
        context === "card" && hasVariants
          ? `Choose a size for ${product.name}`
          : `Add ${product.name} to basket`
      }
    >
      {justAdded ? (
        <>
          <span aria-hidden="true">✓</span>
          Added
        </>
      ) : context === "card" && hasVariants ? (
        <>
          Choose size
          <span aria-hidden="true">→</span>
        </>
      ) : (
        <>
          <span aria-hidden="true">+</span>
          Add to basket
        </>
      )}
    </button>
  );
}