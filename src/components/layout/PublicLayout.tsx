import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import BottomNavigation from "../navigation/BottomNavigation";
import { useTheme } from "../../stores/theme";

/**
 * Customer-facing layout: announcement + header (no categories nav),
 * page content, footer and the floating bottom navigation.
 */
export default function PublicLayout() {
  const { dark } = useTheme();
  return (
    <div className={dark ? "app dark" : "app"}>
      <Header />
      <Outlet />
      <Footer />
      <BottomNavigation />
    </div>
  );
}
