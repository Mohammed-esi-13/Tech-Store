import {
  Cpu,
  CreditCard,
  Grid2X2,
  Headphones,
  Package,
  RefreshCcw,
  ShoppingCart,
  Store,
  User,
  BarChart3,
  BadgeCheck,
  Boxes,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DEFAULT_PRODUCT_ID } from "../../services/products";

export type NavItem = {
  key: string;
  label: string;
  to: string;
  /** Prefix used to mark the item active for nested routes (e.g. /product/:id). */
  match: string;
  Icon: LucideIcon;
};

/**
 * Single source of truth for the customer-facing primary navigation.
 * Rendered only by <BottomNavigation /> inside the public layout.
 * Admin and style-guide routes are intentionally NOT listed here.
 */
export const publicNavItems: NavItem[] = [
  { key: "home", label: "Home", to: "/", match: "/", Icon: Store },
  { key: "catalog", label: "Catalog", to: "/catalog", match: "/catalog", Icon: Grid2X2 },
  {
    key: "product",
    label: "Product",
    to: `/product/${encodeURIComponent(DEFAULT_PRODUCT_ID)}`,
    match: "/product",
    Icon: Package,
  },
  { key: "builder", label: "Builder", to: "/builder", match: "/builder", Icon: Cpu },
  { key: "compare", label: "Compare", to: "/compare", match: "/compare", Icon: RefreshCcw },
  { key: "cart", label: "Cart", to: "/cart", match: "/cart", Icon: ShoppingCart },
  { key: "checkout", label: "Checkout", to: "/checkout", match: "/checkout", Icon: CreditCard },
  { key: "account", label: "Account", to: "/account", match: "/account", Icon: User },
  { key: "support", label: "Support", to: "/support", match: "/support", Icon: Headphones },
];

export type AdminNavItem = {
  key: string;
  label: string;
  to: string;
  Icon: LucideIcon;
  badge?: string;
};

/**
 * Single source of truth for the admin sidebar.
 * Rendered only by the admin layout — never inside customer navigation.
 */
export const adminNavItems: AdminNavItem[] = [
  { key: "dashboard", label: "Dashboard", to: "/admin", Icon: LayoutDashboard },
  { key: "orders", label: "Orders", to: "/admin/orders", Icon: ShoppingBag, badge: "12" },
  { key: "products", label: "Products", to: "/admin/products", Icon: Package },
  { key: "categories", label: "Categories", to: "/admin/categories", Icon: Grid2X2 },
  { key: "brands", label: "Brands", to: "/admin/brands", Icon: BadgeCheck },
  { key: "inventory", label: "Inventory", to: "/admin/inventory", Icon: Boxes },
  { key: "customers", label: "Customers", to: "/admin/customers", Icon: Users },
  { key: "returns", label: "Warranty & returns", to: "/admin/returns", Icon: RefreshCcw },
  { key: "reports", label: "Reports", to: "/admin/reports", Icon: BarChart3 },
  { key: "settings", label: "Settings", to: "/admin/settings", Icon: Settings },
];
