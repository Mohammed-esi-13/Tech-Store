import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Role = "guest" | "customer" | "admin";

export type AuthUser = {
  name: string;
  email: string;
  role: Role;
};

type AuthContextValue = {
  user: AuthUser | null;
  role: Role;
  isAuthenticated: boolean;
  isAdmin: boolean;
  signInAsCustomer: () => void;
  signInAsAdmin: () => void;
  signOut: () => void;
};

const STORAGE_KEY = "neotek-auth-role";

const DEMO_USERS: Record<Exclude<Role, "guest">, AuthUser> = {
  customer: {
    name: "Yasmine Benali",
    email: "yasmine.b@email.dz",
    role: "customer",
  },
  admin: { name: "Admin ", email: "admin@gmail.com", role: "admin" },
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredRole(): Role {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "customer" || raw === "admin") return raw;
  } catch {
    // ignore (SSR / private mode)
  }
  return "guest";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("guest");

  useEffect(() => {
    setRole(readStoredRole());
  }, []);

  useEffect(() => {
    try {
      if (role === "guest") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, role);
    } catch {
      // ignore
    }
  }, [role]);

  const signInAsCustomer = useCallback(() => setRole("customer"), []);
  const signInAsAdmin = useCallback(() => setRole("admin"), []);
  const signOut = useCallback(() => setRole("guest"), []);

  const value = useMemo<AuthContextValue>(() => {
    const user = role === "guest" ? null : DEMO_USERS[role];
    return {
      user,
      role,
      isAuthenticated: role !== "guest",
      isAdmin: role === "admin",
      signInAsCustomer,
      signInAsAdmin,
      signOut,
    };
  }, [role, signInAsCustomer, signInAsAdmin, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
