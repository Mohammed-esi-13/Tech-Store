import { Navigate, useLocation } from "react-router";
import type { ReactNode } from "react";
import { useAuth } from "../stores/auth";

/** Allows only signed-in users (customer or admin). Guests go to /auth. */
export function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}

/** Allows only admins. Non-admins go to /auth with the original target. */
export function RequireAdmin({ children }: { children: ReactNode }) {
  const { isAdmin } = useAuth();
  const location = useLocation();
  if (!isAdmin) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}
