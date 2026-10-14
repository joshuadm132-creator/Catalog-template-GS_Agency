// components/product-gallery.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { ProductGalleryImage } from "@/config/products";

type ProductGalleryProps = {
  title?: string;
  subtitle?: string;
  images: ProductGalleryImage[];
};

export default function ProductGallery({
  title = "In Use",
  subtitle,
  images,
}: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  /* ---------- Arrow handlers ---------- */

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  /* ---------- Keyboard navigation ---------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  if (!images || total === 0) return null;

  const current = images[index];

  return (
    <section className="mt-16">
      {/* Header */}
      <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-text">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Counter — "2 / 4" */}
        {total > 1 && (
          <p className="text-xs font-medium text-text-muted tabular-nums">
            {index + 1} / {total}
          </p>
        )}
      </div>

      {/* Carousel viewport */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-surface">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.caption ?? `Gallery image ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>

        {/* Prev button */}
        {total > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="
              absolute left-3 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-background/90 backdrop-blur
              border border-border
              flex items-center justify-center
              text-text hover:bg-background hover:border-primary/40
              transition
            "
          >
            <span aria-hidden="true">←</span>
          </button>
        )}

        {/* Next button */}
        {total > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-background/90 backdrop-blur
              border border-border
              flex items-center justify-center
              text-text hover:bg-background hover:border-primary/40
              transition
            "
          >
            <span aria-hidden="true">→</span>
          </button>
        )}

        {/* Caption bar — sits inside the image on desktop, above dots */}
        {current.caption && (
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-medium">
              {current.caption}
            </p>
          </div>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={`
                transition-all
                ${
                  i === index
                    ? "w-6 h-2 rounded-full bg-primary"
                    : "w-2 h-2 rounded-full bg-border hover:bg-text-muted"
                }
              `}
            />
          ))}
        </div>
      )}
    </section>
  );
}