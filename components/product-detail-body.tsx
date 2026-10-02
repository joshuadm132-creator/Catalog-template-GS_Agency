// components/product-detail-body.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/config/products";
import AddToBasketButton from "@/components/add-to-basket-button";

type ProductDetailBodyProps = {
  product: Product;
};

export default function ProductDetailBody({ product }: ProductDetailBodyProps) {
  const hasVariants = product.variants && product.variants.length > 0;

  // Default to the first variant if any exist
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants![0].id : null
  );

  // Fall back to the first image if no images array — defensive
  const heroImage = product.images[0];

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_380px] md:items-start">
      {/* ---------------- LEFT: Image + Content ---------------- */}
      <div>
        {/* Hero image */}
        <div className="relative aspect-square rounded-2xl bg-surface border border-border overflow-hidden">
          <Image
            src={heroImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain p-12"
            priority
          />
        </div>

        {/* Variant selector */}
        {hasVariants && (
          <div className="mt-6">
            <p className="text-sm font-medium text-text mb-3">
              Available sizes
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants!.map((variant) => {
                const isSelected = selectedVariant === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariant(variant.id)}
                    aria-pressed={isSelected}
                    className={`
                      px-4 py-2 rounded-lg border text-sm font-medium
                      transition-colors
                      ${
                        isSelected
                          ? "border-primary bg-primary text-text-inverse"
                          : "border-border bg-background text-text hover:border-primary/40"
                      }
                    `}
                  >
                    {variant.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Features (optional) */}
        {product.features && product.features.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-heading font-semibold text-text">
              Key features
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-text"
                >
                  <span className="text-accent font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content blocks */}
        <div className="mt-10 space-y-8">
          <ContentBlock title="Description" body={product.description} />
          <ContentBlock title="Application" body={product.application} />
          <ContentBlock title="Precaution" body={product.precaution} />
        </div>
      </div>

      {/* ---------------- RIGHT: Sticky Sidebar ---------------- */}
      <aside className="md:sticky md:top-24">
        <div className="rounded-2xl border border-border bg-background p-6">
          {/* Category */}
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
            {product.category.name}
          </p>

          {/* Name */}
          <h1 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-text">
            {product.name}
          </h1>

          {/* Short description */}
          <p className="mt-3 text-sm text-text-muted leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Selected variant readout */}
          {hasVariants && selectedVariant && (
            <div className="mt-5 p-3 rounded-lg bg-surface border border-border">
              <p className="text-xs text-text-muted">Selected size</p>
              <p className="mt-1 text-sm font-medium text-text">
                {
                  product.variants!.find((v) => v.id === selectedVariant)?.label
                }
              </p>
            </div>
          )}

          <AddToBasketButton
            product={product}
            selectedVariantId={selectedVariant ?? undefined}
            context="detail"
            className="mt-6 w-full"
            />

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="
              mt-6 block w-full text-center
              px-6 py-3 rounded-lg
              bg-primary text-text-inverse
              hover:bg-primary-hover transition
              font-semibold
            "
          >
            Request a Quote
          </Link>

          {/* Secondary: WhatsApp with prefilled message */}
          <a
            href={buildWhatsAppLink(product, selectedVariant)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3 block w-full text-center
              px-6 py-3 rounded-lg
              bg-emerald-500 text-white
              hover:bg-emerald-600 transition
              font-semibold
            "
          >
            Chat on WhatsApp
          </a>

          <p className="mt-4 text-xs text-text-muted text-center">
            We reply within business hours
          </p>
        </div>
      </aside>
    </div>
  );
}

/* ---------- Content block ---------- */

function ContentBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-border pt-8">
      <h2 className="text-lg font-heading font-semibold text-text">{title}</h2>
      <p className="mt-3 text-text-muted leading-relaxed">{body}</p>
    </div>
  );
}

/* ---------- WhatsApp helper ---------- */

function buildWhatsAppLink(
  product: Product,
  variantId: string | null
): string {
  const phone = "263771234567"; // swap for real number
  const variantLabel = variantId
    ? product.variants?.find((v) => v.id === variantId)?.label
    : null;

  const message = variantLabel
    ? `Hi, I'd like a quote for ${product.name} (${variantLabel}).`
    : `Hi, I'd like a quote for ${product.name}.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}