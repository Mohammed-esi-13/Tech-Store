import { useState, type ReactNode } from "react";
import {
  BarChart3,
  BadgeCheck,
  Bell,
  Boxes,
  ChevronDown,
  Grid2X2,
  LayoutDashboard,
  Moon,
  Package,
  PanelLeftClose,
  RefreshCcw,
  Search,
  Settings,
  ShoppingBag,
  Store,
  Sun,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

const adminNav: [LucideIcon, string][] = [
  [LayoutDashboard, "Dashboard"],
  [ShoppingBag, "Orders"],
  [Package, "Products"],
  [Grid2X2, "Categories"],
  [BadgeCheck, "Brands"],
  [Boxes, "Inventory"],
  [Users, "Customers"],
  [RefreshCcw, "Warranty & returns"],
  [BarChart3, "Reports"],
  [Settings, "Settings"],
];

type AdminShellProps = {
  onStore: () => void;
  dark: boolean;
  setDark: () => void;
  renderContent: (page: string) => ReactNode;
};

export default function AdminShell({
  onStore,
  dark,
  setDark,
  renderContent,
}: AdminShellProps) {
  const [adminPage, setAdminPage] = useState("Dashboard");

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="brand-mark">
            <Zap size={18} fill="currentColor" />
          </span>
          <strong>NEOTEK</strong>
          <small>ADMIN</small>
        </div>
        <nav>
          {adminNav.map(([Icon, label]) => (
            <button
              type="button"
              onClick={() => setAdminPage(label)}
              className={adminPage === label ? "active" : ""}
              key={label}
            >
              <Icon size={18} />
              <span>{label}</span>
              {label === "Orders" && <Badge tone="blue">12</Badge>}
            </button>
          ))}
        </nav>
        <button type="button" className="store-link" onClick={onStore}>
          <Store size={18} /> View storefront
        </button>
      </aside>
      <div className="admin-main">
        <header className="admin-topbar">
          <IconButton label="Collapse sidebar">
            <PanelLeftClose size={19} />
          </IconButton>
          <div className="admin-search">
            <Search size={17} />
            <span>Search orders, products, customers...</span>
            <kbd>⌘ K</kbd>
          </div>
          <div className="admin-actions">
            <Button variant="ghost" size="sm">
              FR <ChevronDown size={14} />
            </Button>
            <IconButton label="Change theme" onClick={setDark}>
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </IconButton>
            <span className="badged-icon">
              <IconButton label="Notifications">
                <Bell size={19} />
              </IconButton>
              <i />
            </span>
            <div className="admin-user">
              <span>AK</span>
              <div>
                <strong>Amine K.</strong>
                <small>Administrator</small>
              </div>
              <ChevronDown size={15} />
            </div>
          </div>
        </header>
        {renderContent(adminPage)}
      </div>
    </div>
  );
}
