import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AuthProvider } from "../stores/auth";
import { CartProvider } from "../stores/cart";
import { ThemeProvider } from "../stores/theme";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
