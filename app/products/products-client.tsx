// app/products/products-client.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { products, categories } from "@/config/products";
import ProductGrid from "@/components/product-grid";

const PER_PAGE = 12;

export default function ProductsClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ---------- Read state from URL ---------- */

  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));

  /* ---------- Local query state for the input ----------
     We keep a local copy so typing feels instant. The URL
     only updates after a short debounce so we don't push a
     history entry on every keystroke. */

  const [localQuery, setLocalQuery] = useState(query);

  // Keep local query in sync if URL changes externally
  // (e.g. user hits browser back, or clicks a link)
  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  // Debounce the URL update
  useEffect(() => {
    if (localQuery === query) return;
    const timer = setTimeout(() => {
      updateParams({ q: localQuery || null, page: null });
    }, 510);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localQuery]);

  /* ---------- URL param helper ---------- */

  function updateParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (
        value === null ||
        value === "" ||
        value === "all" ||
        value === "1"
      ) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  /* ---------- Filter + paginate ---------- */

  const filtered = useMemo(() => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category.id === category);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.name.toLowerCase().includes(q)
      );
    }

    return result;
  }, [query, category]);

  const totalMatches = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalMatches / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const paginated = filtered.slice(start, start + PER_PAGE);

  const activeCategory = categories.find((c) => c.id === category);
  const hasActiveFilters = query !== "" || category !== "all";

  /* ---------- Handlers ---------- */

  const handleCategory = (id: string) => {
    updateParams({ category: id, page: null });
  };

  const handleReset = () => {
    setLocalQuery("");
    router.replace(pathname, { scroll: false });
  };

  const handlePage = (n: number) => {
    updateParams({ page: n === 1 ? null : String(n) });
    // Scroll to top of grid so the user sees the new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------- Render ---------- */

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page heading */}
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
          Our Products
        </h1>
        <p className="mt-3 text-text-muted leading-relaxed">
          Browse our full range of paints, coatings, adhesives, sealants,
          and automotive products.
        </p>
      </header>

      {/* Category strip */}
      <nav className="mt-10 flex flex-wrap gap-2">
        <CategoryPill
          label="All Products"
          active={category === "all"}
          onClick={() => handleCategory("all")}
        />
        {categories.map((c) => (
          <CategoryPill
            key={c.id}
            label={c.name}
            active={category === c.id}
            onClick={() => handleCategory(c.id)}
          />
        ))}
      </nav>

      {/* Search + reset row */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <span
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          >
            🔍
          </span>
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search products..."
            className="
              w-full pl-11 pr-4 py-3 rounded-xl
              border border-border bg-background text-text
              placeholder:text-text-muted
              focus:border-primary focus:ring-2 focus:ring-primary/20
              outline-none transition
            "
          />
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleReset}
            className="
              px-5 py-3 rounded-xl font-medium
              border border-border bg-background text-text
              hover:bg-surface transition
              whitespace-nowrap
            "
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="mt-6 text-sm text-text-muted">
        {buildResultLabel({
          query,
          totalMatches,
          categoryName: activeCategory?.name,
        })}
      </p>

      {/* Grid */}
      <div className="mt-8">
        {totalMatches === 0 ? (
          <EmptyState
            query={query}
            categoryName={activeCategory?.name}
            onReset={handleReset}
          />
        ) : (
          <ProductGrid products={paginated} columns={3} />
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          current={currentPage}
          total={totalPages}
          onChange={handlePage}
        />
      )}
    </div>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-colors
        ${
          active
            ? "bg-primary text-text-inverse"
            : "bg-surface text-text-muted hover:text-text border border-border"
        }
      `}
    >
      {label}
    </button>
  );
}

function EmptyState({
  query,
  categoryName,
  onReset,
}: {
  query: string;
  categoryName?: string;
  onReset: () => void;
}) {
  return (
    <div className="py-20 text-center">
      <p className="text-2xl mb-3">🔍</p>
      <p className="text-text font-medium">
        No products match{" "}
        {query ? `"${query}"` : categoryName ? categoryName : "your filters"}
        .
      </p>
      <p className="mt-2 text-sm text-text-muted">
        Try a different term or browse a category.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 px-5 py-2 rounded-lg bg-primary text-text-inverse hover:bg-primary-hover transition text-sm font-medium"
      >
        Clear filters
      </button>
    </div>
  );
}

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (n: number) => void;
}) {
  const pages = buildPageList(current, total);

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex items-center justify-center gap-2"
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="
          w-10 h-10 rounded-lg border border-border
          flex items-center justify-center
          text-text-muted hover:text-text hover:border-primary/40
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border
          transition
        "
        aria-label="Previous page"
      >
        ←
      </button>

      {/* Page numbers */}
      {pages.map((item, i) =>
        item === "…" ? (
          <span
            key={`gap-${i}`}
            className="w-10 h-10 flex items-center justify-center text-text-muted"
          >
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item as number)}
            aria-current={current === item ? "page" : undefined}
            className={`
              w-10 h-10 rounded-lg font-medium text-sm
              transition
              ${
                current === item
                  ? "bg-primary text-text-inverse"
                  : "border border-border text-text hover:border-primary/40"
              }
            `}
          >
            {item}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="
          w-10 h-10 rounded-lg border border-border
          flex items-center justify-center
          text-text-muted hover:text-text hover:border-primary/40
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border
          transition
        "
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  );
}

/* ============================================================
   Helpers
   ============================================================ */

function buildResultLabel({
  query,
  totalMatches,
  categoryName,
}: {
  query: string;
  totalMatches: number;
  categoryName?: string;
}): string {
  const noun = totalMatches === 1 ? "product" : "products";
  const hasQuery = query.trim() !== "";
  const hasCategory = !!categoryName;

  if (hasQuery && hasCategory) {
    return `${totalMatches} ${noun} for "${query}" in ${categoryName}`;
  }
  if (hasQuery) {
    return `${totalMatches} ${noun} for "${query}"`;
  }
  if (hasCategory) {
    return `${totalMatches} ${noun} in ${categoryName}`;
  }
  return `Showing all ${totalMatches} ${noun}`;
}

/**
 * Build the list of page numbers to show. For 1–5 total pages,
 * show all. For more, show first, current ±1, last, with ellipses
 * where gaps exist.
 */
function buildPageList(current: number, total: number): (number | "…")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "…")[] = [1];

  if (current > 3) pages.push("…");

  for (
    let i = Math.max(2, current - 1);
    i <= Math.min(total - 1, current + 1);
    i++
  ) {
    pages.push(i);
  }

  if (current < total - 2) pages.push("…");

  pages.push(total);

  return pages;
}