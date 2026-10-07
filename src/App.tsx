import { useState } from "react";
import AdminShell from "./components/layout/AdminShell";
import DemoNav from "./components/layout/DemoNav";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AccountPage from "./features/account/AccountPage";
import AuthPage from "./features/account/AuthPage";
import CartPage from "./features/checkout/CartPage";
import ComparePage from "./features/catalog/ComparePage";
import ProductPage from "./features/catalog/ProductPage";
import ShopPage from "./features/catalog/ShopPage";
import PCBuilderPage from "./features/builder/PCBuilderPage";
import AdminDashboard from "./features/admin/AdminDashboard";
import AdminModule from "./features/admin/AdminModule";
import StyleGuide from "./features/style-guide/StyleGuide";
import SupportPage from "./features/support/SupportPage";
import HomePage from "./features/storefront/HomePage";
import type { AppPage } from "./types/app";

export default function App() {
  const path = window.location.pathname;
  const initialPage = path.startsWith("/admin")
    ? "admin"
    : path.startsWith("/cart")
      ? "cart"
      : path.startsWith("/checkout")
        ? "checkout"
        : path.startsWith("/compare")
          ? "compare"
          : path.startsWith("/account")
            ? "account"
            : path.startsWith("/auth")
              ? "auth"
              : path.startsWith("/contact") || path.startsWith("/warranty")
                ? "support"
                : path.startsWith("/pc-builder")
                  ? "builder"
                  : path.startsWith("/product")
                    ? "product"
                    : path.startsWith("/shop") ||
                        path.startsWith("/category") ||
                        path.startsWith("/brand") ||
                        path.startsWith("/search")
                      ? "shop"
                      : path.startsWith("/style-guide") ||
                          path.startsWith("/components")
                        ? "style"
                        : "home";
  const [page, setPage] = useState<AppPage>(initialPage);
  const [dark, setDark] = useState(false);
  const storefront = page !== "admin";

  return (
    <div className={dark ? "app dark" : "app"}>
      {storefront && (
        <Header
          onAdmin={() => setPage("account")}
          onHome={() => setPage("home")}
          dark={dark}
          setDark={() => setDark(!dark)}
        />
      )}
      {page === "home" && <HomePage onShop={() => setPage("shop")} />}
      {page === "shop" && <ShopPage onProduct={() => setPage("product")} />}
      {page === "product" && <ProductPage />}
      {page === "builder" && <PCBuilderPage />}
      {page === "style" && <StyleGuide />}
      {page === "compare" && <ComparePage />}
      {page === "cart" && <CartPage />}
      {page === "checkout" && <CartPage checkout />}
      {page === "account" && <AccountPage />}
      {page === "auth" && <AuthPage />}
      {page === "support" && <SupportPage />}
      {page === "admin" && (
        <AdminShell
          onStore={() => setPage("home")}
          dark={dark}
          setDark={() => setDark(!dark)}
          renderContent={(adminPage) =>
            adminPage === "Dashboard" ? (
              <AdminDashboard />
            ) : (
              <AdminModule page={adminPage} />
            )
          }
        />
      )}
      {storefront && <Footer />}
      {storefront && <DemoNav page={page} onNavigate={setPage} />}
    </div>
  );
}
