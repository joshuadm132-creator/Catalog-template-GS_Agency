// components/product-card.tsx (full replacement)
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/config/products";
import AddToBasketButton from "@/components/add-to-basket-button";

type ProductCardProps = {
  product: Product;
  size?: "default" | "compact";
};

export default function ProductCard({
  product,
  size = "default",
}: ProductCardProps) {
  const hasVariants = product.variants && product.variants.length > 0;
  const isCompact = size === "compact";

  return (
    <div
      className="
        group flex flex-col h-full
        rounded-2xl border border-border bg-background
        overflow-hidden
        transition-all duration-300
        hover:border-primary/40 hover:shadow-lg
      "
    >
      {/* Image links to detail page */}
      <Link
        href={`/products/${product.id}`}
        className={`relative bg-surface overflow-hidden block ${
          isCompact ? "aspect-square" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent text-text-inverse text-[10px] font-semibold uppercase tracking-wider">
            Featured
          </span>
        )}
        {hasVariants && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-hero-bg/80 backdrop-blur text-hero-text text-[10px] font-medium">
            {product.variants!.length} sizes
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/products/${product.id}`} className="block">
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
            {product.category.name}
          </p>
          <h3
            className={`
              mt-2 font-heading font-semibold text-text
              group-hover:text-primary transition-colors
              ${isCompact ? "text-base" : "text-lg"}
            `}
          >
            {product.name}
          </h3>
          {!isCompact && (
            <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2">
              {product.shortDescription}
            </p>
          )}
        </Link>

        <div className="mt-auto pt-4 flex items-center gap-2">
          <AddToBasketButton
            product={product}
            context="card"
            className="flex-1"
          />
          <Link
            href={`/products/${product.id}`}
            aria-label={`View details for ${product.name}`}
            className="
              shrink-0 w-10 h-10 rounded-lg
              border border-border
              flex items-center justify-center
              text-text-muted hover:text-primary hover:border-primary/40
              transition
            "
          >
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}