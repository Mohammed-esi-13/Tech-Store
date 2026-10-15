import { Link, NavLink, Outlet } from "react-router";
import {
  Bell,
  ChevronDown,
  Moon,
  PanelLeftClose,
  Search,
  Store,
  Sun,
  Zap,
} from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import { adminNavItems } from "../navigation/navigation.config";
import { useAuth } from "../../stores/auth";
import { useTheme } from "../../stores/theme";

/**
 * Admin-only layout: sidebar navigation, top bar and routed content.
 * Never rendered inside the customer layout; mounted only under /admin
 * behind <RequireAdmin />.
 */
export default function AdminLayout() {
  const { dark, toggle } = useTheme();
  const { user } = useAuth();

  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="admin-shell">
        <aside className="admin-sidebar">
          <div className="admin-brand">
            <span className="brand-mark">
              <Zap size={18} fill="currentColor" />
            </span>
            <strong>NEOTEK</strong>
            <small>ADMIN</small>
          </div>
          <nav aria-label="Admin">
            {adminNavItems.map(({ key, label, to, Icon, badge }) => (
              <NavLink
                key={key}
                to={to}
                end={to === "/admin"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Icon size={18} />
                <span>{label}</span>
                {badge && <Badge tone="blue">{badge}</Badge>}
              </NavLink>
            ))}
          </nav>
          <Link to="/" className="store-link">
            <Store size={18} /> View storefront
          </Link>
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
              <IconButton label="Change theme" onClick={toggle}>
                {dark ? <Sun size={19} /> : <Moon size={19} />}
              </IconButton>
              <span className="badged-icon">
                <IconButton label="Notifications">
                  <Bell size={19} />
                </IconButton>
                <i />
              </span>
              <div className="admin-user">
                <span>{user?.name ? user.name.slice(0, 1) : "A"}</span>
                <div>
                  <strong>{user?.name ?? "Administrator"}</strong>
                  <small>Administrator</small>
                </div>
                <ChevronDown size={15} />
              </div>
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
