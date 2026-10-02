// app/basket/basket-client.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBasket } from "@/components/basket-provider";
import { getProductById } from "@/config/products";
import { business } from "@/config/business";

export default function BasketClient() {
  const { items, updateQuantity, remove, clear, hydrated } = useBasket();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  /* ---------- Enrich items with product data ---------- */

  const enriched = useMemo(() => {
    return items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        const variant = item.variantId
          ? product.variants?.find((v) => v.id === item.variantId)
          : undefined;
        return { item, product, variant };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }, [items]);

  /* ---------- Validation ---------- */

  const hasItemsMissingVariant = enriched.some(
    (row) => row.product.variants?.length && !row.item.variantId
  );

  const detailsComplete = name.trim() && phone.trim();

  const canSend =
    enriched.length > 0 && !hasItemsMissingVariant && detailsComplete;

  /* ---------- WhatsApp message builder ---------- */

  const handleSend = () => {
    if (!canSend) return;

    const lines: string[] = [];
    lines.push(`Quote Request from ${business.name}`);
    lines.push("");
    lines.push(`Name: ${name.trim()}`);
    lines.push(`Phone: ${phone.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    lines.push("");
    lines.push("Items:");
    enriched.forEach((row, i) => {
      const variantPart = row.variant ? ` (${row.variant.label})` : "";
      lines.push(
        `${i + 1}. ${row.product.name}${variantPart} — Qty: ${row.item.quantity}`
      );
    });
    if (notes.trim()) {
      lines.push("");
      lines.push(`Notes: ${notes.trim()}`);
    }

    const message = lines.join("\n");
    const url = `https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* ---------- Not hydrated yet ---------- */

  if (!hydrated) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center text-text-muted">
        Loading basket...
      </div>
    );
  }

  /* ---------- Empty ---------- */

  if (enriched.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-5xl mb-6" aria-hidden="true">🧺</p>
        <h1 className="text-3xl font-heading font-bold text-text">
          Your basket is empty
        </h1>
        <p className="mt-3 text-text-muted leading-relaxed">
          Browse our products and add the items you'd like a quote for.
        </p>
        <Link
          href="/products"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary text-text-inverse hover:bg-primary-hover transition font-semibold"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  /* ---------- Main basket ---------- */

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="flex items-baseline justify-between gap-4 flex-wrap">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
          Your Basket
        </h1>
        <button
          type="button"
          onClick={clear}
          className="text-sm text-text-muted hover:text-text transition"
        >
          Clear basket
        </button>
      </header>

      {hasItemsMissingVariant && (
        <div className="mt-6 p-4 rounded-lg border border-accent/40 bg-accent/10 text-sm text-text">
          Some items need a size selected before you can send your request.
        </div>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] items-start">
        {/* ---------- Items list ---------- */}
        <div className="space-y-4">
          {enriched.map((row) => (
            <BasketLine
              key={`${row.item.productId}::${row.item.variantId ?? "default"}`}
              product={row.product}
              variant={row.variant}
              variantId={row.item.variantId}
              quantity={row.item.quantity}
              onUpdateQuantity={(q) =>
                updateQuantity(row.item.productId, row.item.variantId, q)
              }
              onRemove={() => remove(row.item.productId, row.item.variantId)}
            />
          ))}
        </div>

        {/* ---------- Sidebar: contact details + send ---------- */}
        <aside className="lg:sticky lg:top-24 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-heading font-bold text-text">
            Your details
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            So we know who to send the quote to.
          </p>

          <div className="mt-6 space-y-4">
            <Field
              label="Name"
              value={name}
              onChange={setName}
              placeholder="John Doe"
              required
            />
            <Field
              label="Phone"
              value={phone}
              onChange={setPhone}
              placeholder="+263 77 123 4567"
              required
            />
            <Field
              label="Email (optional)"
              value={email}
              onChange={setEmail}
              placeholder="john@example.com"
              type="email"
            />
            <div>
              <label className="block text-sm font-medium text-text">
                Notes (optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything else we should know?"
                className="
                  mt-1 w-full px-3 py-2 rounded-lg
                  border border-border bg-background text-text
                  placeholder:text-text-muted text-sm
                  focus:border-primary focus:ring-2 focus:ring-primary/20
                  outline-none transition resize-none
                "
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSend}
            disabled={!canSend}
            className="
              mt-6 w-full py-3 rounded-lg
              bg-emerald-500 text-white font-semibold
              hover:bg-emerald-600 transition
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Send Quote Request via WhatsApp
          </button>

          <p className="mt-3 text-xs text-text-muted text-center">
            We reply within business hours
          </p>
        </aside>
      </div>
    </div>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function BasketLine({
  product,
  variant,
  variantId,
  quantity,
  onUpdateQuantity,
  onRemove,
}: {
  product: ReturnType<typeof getProductById> extends infer P
    ? P extends undefined ? never : P
    : never;
  variant?: { id: string; label: string };
  variantId?: string;
  quantity: number;
  onUpdateQuantity: (q: number) => void;
  onRemove: () => void;
}) {
  const hasVariants = product.variants && product.variants.length > 0;
  const needsVariant = hasVariants && !variantId;

  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-border bg-background">
      {/* Image */}
      <Link
        href={`/products/${product.id}`}
        className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-surface border border-border overflow-hidden relative"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="96px"
          className="object-contain p-2"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/products/${product.id}`}
              className="font-heading font-semibold text-text hover:text-primary transition-colors block truncate"
            >
              {product.name}
            </Link>
            <p className="mt-0.5 text-xs text-text-muted uppercase tracking-wider">
              {product.category.name}
            </p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${product.name}`}
            className="shrink-0 text-text-muted hover:text-primary transition text-sm"
          >
            Remove
          </button>
        </div>

        {/* Variant selector or label */}
        {hasVariants && (
          <div className="mt-3">
            {needsVariant ? (
              <div>
                <p className="text-xs font-medium text-accent mb-1.5">
                  Choose a size
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.variants!.map((v) => (
                    <VariantPickerButton
                      key={v.id}
                      productId={product.id}
                      variantId={v.id}
                      label={v.label}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-text-muted">{variant?.label}</p>
            )}
          </div>
        )}

        {/* Quantity */}
        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center rounded-lg border border-border bg-background">
            <button
              type="button"
              onClick={() => onUpdateQuantity(quantity - 1)}
              aria-label="Decrease quantity"
              className="w-9 h-9 flex items-center justify-center text-text-muted hover:text-text transition"
            >
              −
            </button>
            <span className="w-10 text-center text-sm font-medium text-text">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(quantity + 1)}
              aria-label="Increase quantity"
              className="w-9 h-9 flex items-center justify-center text-text-muted hover:text-text transition"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantPickerButton({
  productId,
  variantId,
  label,
}: {
  productId: string;
  variantId: string;
  label: string;
}) {
  const { add, remove } = useBasket();

  const handleClick = () => {
    // Remove the variant-less line, add a line with the chosen variant
    remove(productId, undefined);
    add(productId, variantId, 1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        px-3 py-1 rounded-lg text-xs font-medium
        border border-border bg-background text-text
        hover:border-primary/40 hover:text-primary
        transition
      "
    >
      {label}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          mt-1 w-full px-3 py-2 rounded-lg
          border border-border bg-background text-text
          placeholder:text-text-muted text-sm
          focus:border-primary focus:ring-2 focus:ring-primary/20
          outline-none transition
        "
      />
    </div>
  );
}