# PROJECT_STRUCTURE.md — NEOTEK Tech-Store frontend

> Monorepo note: this file lives in `frontend/` — all `src/...` paths below are
> relative to `frontend/`. Backend design lives in `../backend/DataBase.json`.

> Stack: Vite + React 19 + `react-router` v7 + Tailwind v4 + `lucide-react`.
> Styling lives in `src/index.css` + `src/styles/tokens.css` (design tokens, dark mode via `.app.dark`).
> Path alias: `@/*` → `src/*`.

## 1. Overall frontend architecture

Feature-based + layout-based. Routing is real (`createBrowserRouter` in
`src/app/routes.tsx`), not the previous `useState` page switcher (deleted).

- `src/app/` — router, route guards, top-level providers.
- `src/components/` — reusable UI, split by concern (`layout/`, `navigation/`, `ui/`, `shared/`).
- `src/features/` — one folder per business domain; each page is a `*Page.tsx` plus its private sections/components.
- `src/services/` — frontend service abstractions (swap bodies for `fetch` when a backend exists; signatures stay).
- `src/stores/` — client state (auth, cart, theme) via React context.
- `src/data/` — static fixtures consumed **only** through `src/services/` (pages never import fixtures directly for new code).
- `src/types/`, `src/lib/`, `src/styles/` — models, helpers, tokens.

## 2. Route structure

Defined once in `src/app/routes.tsx` (canonical source of truth).

```
PUBLIC (PublicLayout: header + footer + bottom nav)
├── /                  Home                  → features/storefront/HomePage.tsx
├── /catalog           Product Catalog       → features/catalog/ShopPage.tsx
│   └── /product/:id   Product Details       → features/catalog/ProductPage.tsx
├── /builder           PC Builder            → features/builder/PCBuilderPage.tsx
├── /compare           Product Comparison    → features/catalog/ComparePage.tsx
├── /cart              Shopping Cart         → features/checkout/CartPage.tsx
├── /checkout          Checkout (auth)       → features/checkout/CheckoutPage.tsx
├── /account           Customer Account (auth) → features/account/AccountPage.tsx
├── /auth              Sign in (standalone)  → features/account/AuthPage.tsx
├── /support           Support               → features/support/SupportPage.tsx
└── /style-guide       Style Guide (dev, not in nav) → features/style-guide/StyleGuide.tsx

ADMIN (AdminLayout + RequireAdmin, /admin/*)
├── /admin                     Dashboard     → features/admin/AdminDashboard.tsx
├── /admin/orders               Orders        → features/admin/OrdersAdmin.tsx
├── /admin/products             Products      → features/admin/ProductsAdmin.tsx
│   ├── /admin/products/new         New       → features/admin/ProductEditorPage.tsx
│   └── /admin/products/:id/edit    Edit      → features/admin/ProductEditorPage.tsx
├── /admin/categories          Categories    → features/admin/CategoriesAdmin.tsx
├── /admin/brands               Brands        → features/admin/BrandsAdmin.tsx
├── /admin/inventory            Inventory     → features/admin/InventoryAdmin.tsx
├── /admin/customers            Customers     → features/admin/CustomersAdmin.tsx
├── /admin/returns              Warranty & returns → features/admin/ReturnsAdmin.tsx
├── /admin/reports              Reports       → features/admin/ReportsAdmin.tsx
└── /admin/settings             Settings      → features/admin/SettingsAdmin.tsx

Fallbacks: /* → NotFoundPage (public), /admin/* → AdminNotFoundPage (admin).
Legacy aliases redirect, never duplicate: /shop, /category, /brand, /search → /catalog;
  /product → default product; /pc-builder → /builder; /contact, /warranty → /support;
  /components → /style-guide.
```

No promotions admin page exists on purpose: there was no promotions UI/data in the
codebase, and empty placeholder modules are banned by the project brief.

## 3. Public / customer architecture

- Layout: `src/components/layout/PublicLayout.tsx` (theme wrapper + `<Header/>` + `<Outlet/>` + `<Footer/>` + `<BottomNavigation/>`).
- Header: `src/components/layout/Header.tsx` — logo, search (`/catalog?search=`), theme toggle, wishlist, cart badge (live from cart store), account. **No categories bar.**
- Pages: `src/features/{storefront,catalog,builder,checkout,account,support}/…`.
- Product flow is connected, not isolated demos:
  `Catalog (/catalog)` → `Product Details (/product/:id)` → `Add to cart (cart store)`
  → `Cart (/cart)` → `Checkout (/checkout, auth)` → `Account (/account)`.
  `ProductCard`, `ComparePage` and `PCBuilderPage` all add through the same cart store;
  `OrderSummary` computes totals from it and navigates cart → checkout → account.

## 4. Admin architecture

- Layout: `src/components/layout/AdminLayout.tsx` — sidebar (from `adminNavItems`), top bar, `<Outlet/>`. Mounted **only** under `/admin` behind `RequireAdmin`. Never rendered inside customer pages.
- Pages: `src/features/admin/*.tsx` — `AdminDashboard` + one module per file (`OrdersAdmin`, `ProductsAdmin`, `CategoriesAdmin`, `BrandsAdmin`, `InventoryAdmin`, `CustomersAdmin`, `ReturnsAdmin`, `ReportsAdmin`, `SettingsAdmin`) + `ProductEditorPage` (new/edit share one implementation via `ProductEditorPreview`) + `AdminPageHeader` (shared header with optional `actionTo` navigation).
- Tables, filters, dialogs, KPIs and widgets live inside each `*Admin.tsx` module using existing CSS classes (`.table-card`, `.admin-filterbar`, `.status-tabs`, `.kpi-grid`, …). No new visual system was introduced.

## 5. Shared components

- `src/components/ui/` — `Button`, `Badge`, `IconButton`, `ProductCard`, `SectionHeading`, `MiniChart`, `MapPinIcon`, `GlobeIcon`. Used by both public and admin; no duplicates.
- `src/components/shared/` — `PageState.tsx` (`PageLoading`, `PageEmpty`, `PageError`) and `NotFoundPage.tsx` (public 404).
- `src/components/layout/` — `Header`, `Footer`, `PublicLayout`, `AdminLayout`, `AuthLayout`.
- `src/components/navigation/` — `navigation.config.ts` + `BottomNavigation.tsx` (see §9).

## 6. Feature modules

| Feature dir | Pages | Notes |
|---|---|---|
| `features/storefront/` | `HomePage`, `Hero`, `sections/*` | `CategorySection` navigates to `/catalog`; `Hero`/`BuilderBanner` navigate via router |
| `features/catalog/` | `ShopPage`, `ProductPage`, `ComparePage` | `ShopPage` reads `?search=`; `ProductPage` reads `:id` with not-found state |
| `features/builder/` | `PCBuilderPage` | Adds build to cart → `/cart` |
| `features/checkout/` | `CartPage`, `CheckoutPage`, `OrderSummary` | `OrderSummary mode="cart" \| "checkout"` |
| `features/account/` | `AccountPage`, `AuthPage` | `AuthPage` signs in as customer/admin demo roles |
| `features/support/` | `SupportPage` | Static content + warranty FAQ |
| `features/admin/` | dashboard + 9 modules + editor | See §4 |
| `features/style-guide/` | `StyleGuide` | Dev reference, kept out of primary nav |

## 7. API / service organization

- `src/services/products.ts` — `getAllProducts`, `getProductById`, `getDefaultProduct`, `getRelatedProducts`, `searchProducts`, `toProductPath`, `parsePrice`, `formatPrice`, `DEFAULT_PRODUCT_ID`. Wraps `data/products.ts` today; replace bodies with backend calls later.
- `src/data/` — fixtures only (`products`, `storefront`, `checkout`, `support`, `admin`, `layout`, `styleGuide`). New code should consume them via services, not direct imports.
- No backend exists yet, so pages render realistic UI states (`PageEmpty` for empty cart / no search results / unknown product; `PageError` available; forms show validation states already in CSS) instead of pretending backend features exist.

## 8. Authentication / authorization flow

There was no auth system in the codebase, so one minimal demo system was added
(single source, no duplicates): `src/stores/auth.tsx` (`AuthProvider`, `useAuth`,
roles `guest | customer | admin`, persisted to `localStorage`).

- Guards: `src/app/guards.tsx` — `<RequireAuth>` (guests → `/auth` with `state.from`), `<RequireAdmin>` (non-admins → `/auth`).
- Protected: `/checkout` + `/account` require sign-in; all of `/admin/*` requires admin.
- `/auth` (`AuthPage`) offers “Continue as customer” / “Continue as admin” and redirects back to `state.from` (so cart → checkout → auth → checkout works). Signed-in users visiting `/auth` bounce to `/account` (customers) or `/admin` (admins).
- `AccountPage` shows an “Open admin” banner only for admins and a working sign-out.

## 9. Navigation architecture

- Customer primary navigation: `src/components/navigation/navigation.config.ts` (`publicNavItems`: Home, Catalog, Product, Builder, Compare, Cart, Checkout, Account, Support) rendered **only** by `src/components/navigation/BottomNavigation.tsx` (`NavLink`s, prefix `match` for active highlight incl. `/product/:id`, existing `.demo-nav` floating-pill style preserved, horizontally scrollable on mobile). No navigation logic is hard-coded anywhere else.
- Admin navigation: same config file (`adminNavItems`: Dashboard, Orders, Products, Categories, Brands, Inventory, Customers, Warranty & returns, Reports, Settings) rendered **only** by `AdminLayout` sidebar (`NavLink`, `end` on dashboard). Customer nav never shows admin items and vice versa.
- Header search → `/catalog?search=`; logo → `/`; cart icon → `/cart`; account → `/account`. Style Guide (`/style-guide`) and Admin (`/admin`) exist but are deliberately excluded from the customer pill (style guide is a dev reference; admin is role-gated).
- Removed: the old horizontal `.category-nav` bar from `Header.tsx` (+ its CSS) and the legacy state-based `DemoNav` pill. There is now exactly one customer navigation system.

## 10. Where to find each page

- Customer pages → `src/features/<domain>/*Page.tsx` (see table in §6 + route map in §2).
- Admin pages → `src/features/admin/*Admin.tsx`, `AdminDashboard.tsx`, `ProductEditorPage.tsx`.
- Layouts → `src/components/layout/{PublicLayout,AdminLayout,AuthLayout,Header,Footer}.tsx`.
- Navigations → `src/components/navigation/{navigation.config,BottomNavigation}.tsx`.
- Routes → `src/app/routes.tsx`. Guards → `src/app/guards.tsx`. Providers → `src/app/App.tsx`.
- State → `src/stores/{auth,cart,theme}.tsx`. Services → `src/services/products.ts`.

## 11. Where to add a new feature

1. Domain logic/UI → new folder `src/features/<name>/` (`<Name>Page.tsx` + private `components/`, `sections/`, `hooks/` as needed — never one giant file).
2. Data access → extend `src/services/` (keep `data/` as fixtures only).
3. Shared UI → `src/components/ui/` (both audiences) or `src/components/shared/` (page states).
4. State → `src/stores/` (new context) or local `useState` if page-local.

## 12. Where to add a new public page

1. Create `src/features/<domain>/<Name>Page.tsx` (with loading/empty/error states where applicable).
2. Add the route as a child of `PublicLayout` in `src/app/routes.tsx`.
3. If it belongs in primary navigation, add one entry to `publicNavItems` in `src/components/navigation/navigation.config.ts` — nothing else needs to change (`BottomNavigation` renders from config).

## 13. Where to add a new admin page

1. Create `src/features/admin/<Name>Admin.tsx` reusing `AdminPageHeader`, `.table-card`, `.admin-filterbar`, `.status-tabs`, `.module-kpis` classes.
2. Add the route as a child of the `/admin` route in `src/app/routes.tsx` (it automatically inherits `AdminLayout` + `RequireAdmin`).
3. Add one entry to `adminNavItems` in `src/components/navigation/navigation.config.ts` — the sidebar updates automatically. Do **not** add it to `publicNavItems`.

## Appendix — final folder structure

```
src/
├── app/
│   ├── App.tsx            # providers (Theme/Auth/Cart) + RouterProvider
│   ├── routes.tsx         # full public + admin route map + aliases + 404s
│   └── guards.tsx         # RequireAuth, RequireAdmin
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # logo/search/theme/wishlist/cart/account (no categories nav)
│   │   ├── Footer.tsx
│   │   ├── PublicLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   └── AuthLayout.tsx
│   ├── navigation/
│   │   ├── navigation.config.ts  # publicNavItems + adminNavItems (single source)
│   │   └── BottomNavigation.tsx  # primary pill nav (NavLink + active highlight)
│   ├── shared/
│   │   ├── PageState.tsx  # PageLoading / PageEmpty / PageError
│   │   └── NotFoundPage.tsx
│   └── ui/                # Button, Badge, IconButton, ProductCard, …
├── features/
│   ├── storefront/        # HomePage, Hero, sections/
│   ├── catalog/           # ShopPage, ProductPage, ComparePage
│   ├── builder/           # PCBuilderPage
│   ├── checkout/          # CartPage, CheckoutPage, OrderSummary
│   ├── account/           # AccountPage, AuthPage
│   ├── support/           # SupportPage
│   ├── admin/             # dashboard + modules + ProductEditorPage + AdminNotFoundPage
│   └── style-guide/       # StyleGuide (dev only)
├── services/
│   └── products.ts        # catalog abstraction (swap for backend later)
├── stores/
│   ├── auth.tsx           # role-based demo auth (guest/customer/admin)
│   ├── cart.tsx           # cart lines + add/remove/setQty/clear
│   └── theme.tsx          # dark mode
├── data/                  # static fixtures (consumed via services)
├── types/                 # catalog models
├── lib/                   # cn() helper
└── styles/                # tokens.css
```
