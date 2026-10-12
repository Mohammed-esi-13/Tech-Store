import { NavLink, useLocation } from "react-router";
import { publicNavItems } from "./navigation.config";

function isActivePath(pathname: string, match: string): boolean {
  if (match === "/") return pathname === "/";
  return pathname === match || pathname.startsWith(`${match}/`);
}

/**
 * Primary application navigation (floating pill).
 * Reuses the legacy `.demo-nav` visual style; only the behavior changed:
 * real router links + centralized config + active-route highlight.
 */
export default function BottomNavigation() {
  const { pathname } = useLocation();

  return (
    <nav className="demo-nav" aria-label="Primary">
      {publicNavItems.map(({ key, label, to, match, Icon }) => (
        <NavLink
          key={key}
          to={to}
          className={isActivePath(pathname, match) ? "active" : ""}
        >
          <Icon size={15} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
