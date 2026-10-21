import type { Request, Response } from "express";
import { prisma } from "../../config/db";
import { Prisma } from "../../generated/prisma/client";
import {
  createProductSchema,
  updateProductSchema,
} from "../../validators/product.validator.ts";

// Relations returned with every product
const productInclude = {
  brand: { select: { id: true, name: true, slug: true } },
  category: { select: { id: true, name: true, slug: true } },
  productImages: { orderBy: { sort_order: "asc" } },
  productSpecs: { orderBy: { sort_order: "asc" } },
  productVariants: {
    where: { is_active: true },
    include: { inventoryLevels: true },
  },
} satisfies Prisma.productInclude;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const handlePrismaError = (error: unknown, res: Response) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "A product with this unique value already exists",
        fields: error.meta?.target,
      });
    }

    if (error.code === "P2003") {
      return res.status(400).json({
        message: "brand_id or category_id does not exist",
      });
    }

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Product not found" });
    }
  }

  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
};

// GET /api/products?page=1&limit=20&search=asus
export const getProducts = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    const search =
      typeof req.query.search === "string" ? req.query.search.trim() : "";

    const where: Prisma.productWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { model_number: { contains: search, mode: "insensitive" } },
            { brand: { name: { contains: search, mode: "insensitive" } } },
          ],
        }
      : {};

    const [items, total] = await prisma.$transaction([
      prisma.product.findMany({
        where,
        include: productInclude,
        orderBy: { created_at: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);

    return res.json({ items, total, page, limit });
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

// GET /api/products/:id  (also accepts slug or model_number)
export const getProductById = async (req: Request, res: Response) => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  if (!raw) {
    return res.status(400).json({ message: "Product id is required" });
  }

  const numericId = /^\d+$/.test(raw) ? Number(raw) : null;

  try {
    const product = await prisma.product.findFirst({
      where: numericId
        ? { id: numericId }
        : { OR: [{ slug: raw }, { model_number: raw }] },
      include: productInclude,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

// POST /api/products
export const createProduct = async (req: Request, res: Response) => {
  const parsed = createProductSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;
  const slug = data.slug ?? slugify(`${data.name}-${data.model_number}`);

  try {
    const product = await prisma.product.create({
      data: {
        ...data,
        slug,
        // TODO: replace with req.user.id when auth exists.
        // This user must exist in the DB or you'll get P2003.
        created_by: Number(process.env.ADMIN_USER_ID ?? 1),
      },
      include: productInclude,
    });

    return res.status(201).json(product);
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

// DELETE /api/products/:id
export const deleteProduct = async (req: Request, res: Response) => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  if (!raw) {
    return res.status(400).json({ message: "Product id is required" });
  }

  const numericId = /^\d+$/.test(raw) ? Number(raw) : null;

  try {
    const product = await prisma.product.delete({
      where: numericId ? { id: numericId } : { slug: raw },
    });
    return res.json(product);
  } catch (error) {
    return handlePrismaError(error, res);
  }
};

// PUT /api/products/:id
export const updateProduct = async (req: Request, res: Response) => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  if (!raw) {
    return res.status(400).json({
      message: "Product id is required",
    });
  }

  const numericId = /^\d+$/.test(raw) ? Number(raw) : null;

  const parsed = updateProductSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;

  try {
    const product = await prisma.product.update({
      where: numericId ? { id: numericId } : { slug: raw },

      data,

      include: productInclude,
    });

    return res.status(200).json(product);
  } catch (error) {
    return handlePrismaError(error, res);
  }
};
