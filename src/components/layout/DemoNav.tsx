import {
  Cpu,
  CreditCard,
  Grid2X2,
  Headphones,
  LayoutDashboard,
  Package,
  RefreshCcw,
  ShoppingCart,
  Sparkles,
  Store,
  User,
} from "lucide-react";
import type { AppPage } from "../../types/app";

type DemoNavProps = {
  page: AppPage;
  onNavigate: (page: AppPage) => void;
};

export default function DemoNav({ page, onNavigate }: DemoNavProps) {
  return (
    <nav className="demo-nav">
      <button
        className={page === "home" ? "active" : ""}
        onClick={() => onNavigate("home")}
        type="button"
      >
        <Store size={15} /> Home
      </button>
      <button
        className={page === "shop" ? "active" : ""}
        onClick={() => onNavigate("shop")}
        type="button"
      >
        <Grid2X2 size={15} /> Catalog
      </button>
      <button
        className={page === "product" ? "active" : ""}
        onClick={() => onNavigate("product")}
        type="button"
      >
        <Package size={15} /> Product
      </button>
      <button
        className={page === "builder" ? "active" : ""}
        onClick={() => onNavigate("builder")}
        type="button"
      >
        <Cpu size={15} /> Builder
      </button>
      <button
        className={page === "compare" ? "active" : ""}
        onClick={() => onNavigate("compare")}
        type="button"
      >
        <RefreshCcw size={15} /> Compare
      </button>
      <button
        className={page === "cart" ? "active" : ""}
        onClick={() => onNavigate("cart")}
        type="button"
      >
        <ShoppingCart size={15} /> Cart
      </button>
      <button
        className={page === "checkout" ? "active" : ""}
        onClick={() => onNavigate("checkout")}
        type="button"
      >
        <CreditCard size={15} /> Checkout
      </button>
      <button
        className={page === "account" ? "active" : ""}
        onClick={() => onNavigate("account")}
        type="button"
      >
        <User size={15} /> Account
      </button>
      <button
        className={page === "support" ? "active" : ""}
        onClick={() => onNavigate("support")}
        type="button"
      >
        <Headphones size={15} /> Support
      </button>
      <button
        className={page === "style" ? "active" : ""}
        onClick={() => onNavigate("style")}
        type="button"
      >
        <Sparkles size={15} /> Style guide
      </button>
      <button onClick={() => onNavigate("admin")} type="button">
        <LayoutDashboard size={15} /> Admin
      </button>
    </nav>
  );
}
