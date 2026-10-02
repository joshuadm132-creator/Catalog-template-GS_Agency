// components/basket-provider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type BasketItem = {
  productId: string;
  /** undefined for products without variants */
  variantId?: string;
  quantity: number;
};

type BasketContextValue = {
  items: BasketItem[];
  /** Total number of individual units (not lines) */
  count: number;
  add: (productId: string, variantId: string | undefined, quantity?: number) => void;
  remove: (productId: string, variantId: string | undefined) => void;
  updateQuantity: (
    productId: string,
    variantId: string | undefined,
    quantity: number
  ) => void;
  clear: () => void;
  /** True once localStorage has been read */
  hydrated: boolean;
};

const BasketContext = createContext<BasketContextValue | null>(null);

/** Stable key for a basket line */
export function itemKey(productId: string, variantId?: string) {
  return `${productId}::${variantId ?? "default"}`;
}

type BasketProviderProps = {
  children: ReactNode;
  /** Used to namespace localStorage per business */
  storageKey: string;
};

export function BasketProvider({ children, storageKey }: BasketProviderProps) {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* ---------- Load from localStorage on mount ---------- */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as BasketItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* corrupt data — start fresh */
    }
    setHydrated(true);
  }, [storageKey]);

  /* ---------- Persist to localStorage on every change ---------- */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {
      /* quota exceeded or blocked — ignore */
    }
  }, [items, hydrated, storageKey]);

  /* ---------- Methods ---------- */

  const add = (
    productId: string,
    variantId: string | undefined,
    quantity = 1
  ) => {
    setItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.productId === productId && i.variantId === variantId
      );
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity,
        };
        return next;
      }
      return [...prev, { productId, variantId, quantity }];
    });
  };

  const remove = (productId: string, variantId: string | undefined) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.variantId === variantId)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    variantId: string | undefined,
    quantity: number
  ) => {
    if (quantity <= 0) {
      remove(productId, variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.variantId === variantId
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clear = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <BasketContext.Provider
      value={{ items, count, add, remove, updateQuantity, clear, hydrated }}
    >
      {children}
    </BasketContext.Provider>
  );
}

/* ---------- Hook ---------- */

export function useBasket() {
  const ctx = useContext(BasketContext);
  if (!ctx) {
    throw new Error("useBasket must be used inside <BasketProvider>");
  }
  return ctx;
}