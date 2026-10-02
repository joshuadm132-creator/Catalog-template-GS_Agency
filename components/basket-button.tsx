// components/basket-button.tsx
"use client";

import Link from "next/link";
import { useBasket } from "@/components/basket-provider";

type BasketButtonProps = {
  /** "header" (default) or "floating" for the mobile floating button */
  variant?: "header" | "floating";
};

export default function BasketButton({
  variant = "header",
}: BasketButtonProps) {
  const { count, hydrated } = useBasket();

  /* Don't show count before hydration to avoid SSR/CSR mismatch */
  const showCount = hydrated && count > 0;

  if (variant === "floating") {
    return (
      <Link
        href="/basket"
        aria-label={`Basket, ${count} item${count === 1 ? "" : "s"}`}
        className="
          fixed bottom-6 right-6 z-40
          md:hidden
          w-14 h-14 rounded-full
          bg-primary text-text-inverse
          flex items-center justify-center
          shadow-lg hover:bg-primary-hover
          transition
        "
      >
        <BasketIcon className="w-6 h-6" />
        {showCount && (
          <span
            className="
              absolute -top-1 -right-1
              min-w-6 h-6 px-1.5
              rounded-full bg-accent text-text-inverse
              text-xs font-bold
              flex items-center justify-center
            "
          >
            {count}
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href="/basket"
      aria-label={`Basket, ${count} item${count === 1 ? "" : "s"}`}
      className="
        relative flex items-center gap-2
        px-3 py-2 rounded-lg
        text-text hover:text-primary
        transition
      "
    >
      <BasketIcon className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">Basket</span>
      {showCount && (
        <span
          className="
            absolute -top-0.5 -right-0.5 sm:static sm:ml-1
            min-w-5 h-5 px-1.5
            rounded-full bg-primary text-text-inverse
            text-xs font-bold
            flex items-center justify-center
          "
        >
          {count}
        </span>
      )}
    </Link>
  );
}

/* ---------- Icon ---------- */

function BasketIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}