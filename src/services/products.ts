import products from "../data/products";
import type { Product } from "../types/catalog";

/**
 * Frontend service abstraction over the product catalog.
 *
 * Today this wraps the local `data/products` fixture so pages don't couple
 * directly to fake data. When a backend exists, replace the bodies of these
 * functions with fetch calls — the signatures stay the same.
 */

export const DEFAULT_PRODUCT_ID = products[0]?.model ?? "G614JV-N4071W";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string | undefined): Product | undefined {
  if (!id) return undefined;
  const needle = decodeURIComponent(id).trim().toLowerCase();
  return products.find(
    (p) =>
      p.model.toLowerCase() === needle ||
      p.name.toLowerCase() === needle ||
      `${p.brand} ${p.name}`.toLowerCase() === needle,
  );
}

export function getDefaultProduct(): Product {
  return getProductById(DEFAULT_PRODUCT_ID) ?? products[0];
}

export function getRelatedProducts(id: string | undefined, count = 4): Product[] {
  return products.filter((p) => p.model !== id).slice(0, count);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) =>
    `${p.brand} ${p.name} ${p.model}`.toLowerCase().includes(q),
  );
}

export function toProductPath(product: Pick<Product, "model">): string {
  return `/product/${encodeURIComponent(product.model)}`;
}

/** "289 900 DA" -> 289900. Returns 0 when unparseable. */
export function parsePrice(price: string): number {
  const digits = price.replace(/[^0-9]/g, "");
  const value = Number.parseInt(digits, 10);
  return Number.isFinite(value) ? value : 0;
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString("fr-FR").replace(/,/g, " ")} DA`;
}
