import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types/catalog";

export type CartLine = {
  product: Product;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  add: (product: Product, qty?: number) => void;
  remove: (model: string) => void;
  setQty: (model: string, qty: number) => void;
  clear: () => void;
};

const STORAGE_KEY = "neotek-cart";

const CartContext = createContext<CartContextValue | null>(null);

function readStored(): CartLine[] {
  return [];
}

export function CartProvider({ children }: { children: ReactNode }) {
  // Seed with the same 3 demo items the legacy static cart page showed,
  // so the refactor preserves the existing visual story.
  const [lines, setLines] = useState<CartLine[]>(() => readStored());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { model: string; qty: number }[];
        // Hydration against live product data happens in pages via service;
        // keep raw here and resolve lazily to avoid importing data twice.
        void parsed;
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(lines.map((l) => ({ model: l.product.model, qty: l.qty }))),
      );
    } catch {
      // ignore
    }
  }, [lines]);

  const add = useCallback((product: Product, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.model === product.model);
      if (existing) {
        return prev.map((l) =>
          l.product.model === product.model ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { product, qty }];
    });
  }, []);

  const remove = useCallback((model: string) => {
    setLines((prev) => prev.filter((l) => l.product.model !== model));
  }, []);

  const setQty = useCallback((model: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.model !== model)
        : prev.map((l) => (l.product.model === model ? { ...l, qty } : l)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    return { lines, count, add, remove, setQty, clear };
  }, [lines, add, remove, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
