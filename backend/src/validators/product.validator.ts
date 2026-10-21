import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(1).max(160),
  model_number: z.string().trim().min(1).max(80),
  sku_base: z.string().trim().min(1).max(40),
  slug: z.string().trim().min(1).max(180).optional(),
  description: z.string().trim().min(1),
  brand_id: z.coerce.number().int().positive(),
  category_id: z.coerce.number().int().positive(),
  base_price_dzd: z.coerce.number().int().nonnegative(),
  base_old_price_dzd: z.coerce
    .number()
    .int()
    .nonnegative()
    .nullable()
    .optional(),
  base_cost_dzd: z.coerce.number().int().nonnegative().nullable().optional(),
  badge: z.string().trim().max(30).nullable().optional(),
  cover_image_url: z.string().url().nullable().optional(),
  warranty_months: z.coerce.number().int().nonnegative().nullable().optional(),
  is_featured: z.boolean().optional(),
  status: z.enum(["draft", "active", "hidden", "archived"]).optional(),
});
export const updateProductSchema = z.object({
  name: z.string().trim().min(1).max(160),
  model_number: z.string().trim().min(1).max(80),
  sku_base: z.string().trim().min(1).max(40),
  slug: z.string().trim().min(1).max(180).optional(),
  description: z.string().trim().min(1),
  brand_id: z.coerce.number().int().positive(),
  category_id: z.coerce.number().int().positive(),
  base_price_dzd: z.coerce.number().int().nonnegative(),
  base_old_price_dzd: z.coerce
    .number()
    .int()
    .nonnegative()
    .nullable()
    .optional(),
  base_cost_dzd: z.coerce.number().int().nonnegative().nullable().optional(),
  badge: z.string().trim().max(30).nullable().optional(),
  cover_image_url: z.string().url().nullable().optional(),
  warranty_months: z.coerce.number().int().nonnegative().nullable().optional(),
  is_featured: z.boolean().optional(),
  status: z.enum(["draft", "active", "hidden", "archived"]).optional(),
});
