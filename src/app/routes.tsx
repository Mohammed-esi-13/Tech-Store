import { Navigate, createBrowserRouter } from "react-router";
import { RequireAdmin, RequireAuth } from "./guards";
import PublicLayout from "../components/layout/PublicLayout";
import AdminLayout from "../components/layout/AdminLayout";
import AuthLayout from "../components/layout/AuthLayout";
import NotFoundPage from "../components/shared/NotFoundPage";
import HomePage from "../features/storefront/HomePage";
import ShopPage from "../features/catalog/ShopPage";
import ProductPage from "../features/catalog/ProductPage";
import ComparePage from "../features/catalog/ComparePage";
import PCBuilderPage from "../features/builder/PCBuilderPage";
import CartPage from "../features/checkout/CartPage";
import CheckoutPage from "../features/checkout/CheckoutPage";
import AccountPage from "../features/account/AccountPage";
import AuthPage from "../features/account/AuthPage";
import SupportPage from "../features/support/SupportPage";
import StyleGuide from "../features/style-guide/StyleGuide";
import AdminDashboard from "../features/admin/AdminDashboard";
import OrdersAdmin from "../features/admin/OrdersAdmin";
import ProductsAdmin from "../features/admin/ProductsAdmin";
import ProductEditorPage from "../features/admin/ProductEditorPage";
import CategoriesAdmin from "../features/admin/CategoriesAdmin";
import BrandsAdmin from "../features/admin/BrandsAdmin";
import InventoryAdmin from "../features/admin/InventoryAdmin";
import CustomersAdmin from "../features/admin/CustomersAdmin";
import ReturnsAdmin from "../features/admin/ReturnsAdmin";
import ReportsAdmin from "../features/admin/ReportsAdmin";
import SettingsAdmin from "../features/admin/SettingsAdmin";
import AdminNotFoundPage from "../features/admin/AdminNotFoundPage";
import { DEFAULT_PRODUCT_ID } from "../services/products";

const defaultProductPath = `/product/${encodeURIComponent(DEFAULT_PRODUCT_ID)}`;

/**
 * Complete route map.
 *
 * PUBLIC (customer)                     ADMIN (protected, separate layout)
 * ├── /                  Home            ├── /admin                  Dashboard
 * ├── /catalog           Catalog         ├── /admin/orders           Orders
 * │   └── /product/:id   Details         ├── /admin/products         Products
 * ├── /builder           PC Builder      │   ├── /new                New product
 * ├── /compare           Compare         │   └── /:id/edit           Edit product
 * ├── /cart              Cart            ├── /admin/categories       Categories
 * ├── /checkout          Checkout (auth) ├── /admin/brands           Brands
 * ├── /account           Account (auth)  ├── /admin/inventory        Inventory
 * ├── /auth              Sign in         ├── /admin/customers        Customers
 * ├── /support           Support         ├── /admin/returns          Warranty & returns
 * └── /style-guide       Style guide     ├── /admin/reports          Reports
 *                                        └── /admin/settings         Settings
 *
 * Legacy aliases (/shop, /pc-builder, /contact, …) redirect to canonical paths.
 */
export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "catalog", Component: ShopPage },
      { path: "product/:id", Component: ProductPage },
      { path: "product", Component: () => <Navigate to={defaultProductPath} replace /> },
      { path: "builder", Component: PCBuilderPage },
      { path: "compare", Component: ComparePage },
      { path: "cart", Component: CartPage },
      {
        path: "checkout",
        Component: () => (
          <RequireAuth>
            <CheckoutPage />
          </RequireAuth>
        ),
      },
      {
        path: "account",
        Component: () => (
          <RequireAuth>
            <AccountPage />
          </RequireAuth>
        ),
      },
      { path: "support", Component: SupportPage },
      { path: "style-guide", Component: StyleGuide },

      // ---- legacy / alias redirects (no duplicate pages) ----
      { path: "shop", Component: () => <Navigate to="/catalog" replace /> },
      { path: "category", Component: () => <Navigate to="/catalog" replace /> },
      { path: "brand", Component: () => <Navigate to="/catalog" replace /> },
      { path: "search", Component: () => <Navigate to="/catalog" replace /> },
      { path: "pc-builder", Component: () => <Navigate to="/builder" replace /> },
      { path: "contact", Component: () => <Navigate to="/support" replace /> },
      { path: "warranty", Component: () => <Navigate to="/support" replace /> },
      { path: "components", Component: () => <Navigate to="/style-guide" replace /> },

      { path: "*", Component: NotFoundPage },
    ],
  },
  {
    Component: AuthLayout,
    children: [{ path: "auth", Component: AuthPage }],
  },
  {
    path: "admin",
    Component: () => (
      <RequireAdmin>
        <AdminLayout />
      </RequireAdmin>
    ),
    children: [
      { index: true, Component: AdminDashboard },
      { path: "orders", Component: OrdersAdmin },
      { path: "products", Component: ProductsAdmin },
      { path: "products/new", Component: ProductEditorPage },
      { path: "products/:id/edit", Component: ProductEditorPage },
      { path: "categories", Component: CategoriesAdmin },
      { path: "brands", Component: BrandsAdmin },
      { path: "inventory", Component: InventoryAdmin },
      { path: "customers", Component: CustomersAdmin },
      { path: "returns", Component: ReturnsAdmin },
      { path: "reports", Component: ReportsAdmin },
      { path: "settings", Component: SettingsAdmin },
      { path: "*", Component: AdminNotFoundPage },
    ],
  },
]);
