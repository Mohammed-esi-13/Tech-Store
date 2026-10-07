import BrandsAdmin from "./BrandsAdmin";
import CategoriesAdmin from "./CategoriesAdmin";
import CustomersAdmin from "./CustomersAdmin";
import InventoryAdmin from "./InventoryAdmin";
import OrdersAdmin from "./OrdersAdmin";
import ProductsAdmin from "./ProductsAdmin";
import ReportsAdmin from "./ReportsAdmin";
import ReturnsAdmin from "./ReturnsAdmin";
import SettingsAdmin from "./SettingsAdmin";

export default function AdminModule({ page }: { page: string }) {
  return (
    <main className="admin-content module-page">
      {page === "Orders" && <OrdersAdmin />}
      {page === "Products" && <ProductsAdmin />}
      {page === "Categories" && <CategoriesAdmin />}
      {page === "Brands" && <BrandsAdmin />}
      {page === "Inventory" && <InventoryAdmin />}
      {page === "Customers" && <CustomersAdmin />}
      {page === "Warranty & returns" && <ReturnsAdmin />}
      {page === "Reports" && <ReportsAdmin />}
      {page === "Settings" && <SettingsAdmin />}
    </main>
  );
}
