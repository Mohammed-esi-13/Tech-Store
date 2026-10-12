import { Outlet } from "react-router";
import { useTheme } from "../../stores/theme";

/** Standalone layout for sign-in: no header, footer or bottom navigation. */
export default function AuthLayout() {
  const { dark } = useTheme();
  return (
    <div className={dark ? "app dark" : "app"}>
      <Outlet />
    </div>
  );
}
