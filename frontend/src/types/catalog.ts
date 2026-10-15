import type { LucideIcon } from "lucide-react";

export type Product = {
  brand: string;
  name: string;
  model: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: string;
  stock?: string;
  specs: [LucideIcon, string][];
};
