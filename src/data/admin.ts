import {
  CircleDollarSign,
  Package,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";

export const orderRows = [
  ["#NT-10842", "Yasmine Benali", "New", "289 900 DA", "Card", "Alger"],
  ["#NT-10841", "Riad Mansouri", "Preparing", "69 900 DA", "COD", "Oran"],
  ["#NT-10840", "Nesrine Amari", "Shipped", "418 500 DA", "Transfer", "Sétif"],
  ["#NT-10839", "Karim Larbi", "Delivered", "32 900 DA", "Card", "Blida"],
  ["#NT-10838", "Lina Saadi", "Confirmed", "119 900 DA", "COD", "Constantine"],
];

export const dashboardKpis: [
  LucideIcon,
  string,
  string,
  string,
  "blue" | "green" | "amber",
][] = [
  [CircleDollarSign, "Total revenue", "8.42M DA", "+12.5%", "blue"],
  [ShoppingBag, "Orders", "1,284", "+8.2%", "green"],
  [Users, "Customers", "4,812", "+5.7%", "blue"],
  [Package, "Low stock", "28", "-3 today", "amber"],
];

export const dashboardOrderRows: [string, string, string, string, string][] = [
  ["#NT-10842", "Yasmine B.", "New", "289 900 DA", "Card"],
  ["#NT-10841", "Riad M.", "Preparing", "69 900 DA", "COD"],
  ["#NT-10840", "Nesrine A.", "Shipped", "418 500 DA", "Transfer"],
  ["#NT-10839", "Karim L.", "Delivered", "32 900 DA", "Card"],
  ["#NT-10838", "Lina S.", "Confirmed", "119 900 DA", "COD"],
];

export const orderStatusTabs = [
  "All 1,284",
  "New 12",
  "Confirmed 18",
  "Preparing 9",
  "Shipped 46",
  "Delivered 1,132",
  "Returned 8",
];

export const productKpis: [string, string][] = [
  ["1,428", "Total products"],
  ["1,312", "Active"],
  ["88", "Draft"],
  ["28", "Low stock"],
];

export const inventoryKpis: [string, string][] = [
  ["38.2M DA", "Stock value"],
  ["4,892", "Units on hand"],
  ["28", "Low stock"],
  ["12", "Reorder suggestions"],
];

export const returnStatusTabs = [
  "All 42",
  "Received 8",
  "Diagnosing 12",
  "Waiting parts 6",
  "Resolved 16",
];

export const reportTabs = [
  "Sales",
  "Margins",
  "Products",
  "Categories",
  "Brands",
  "Stock",
];

export const reportKpis: [string, string][] = [
  ["8.42M DA", "Gross sales"],
  ["2.18M DA", "Gross margin"],
  ["25.9%", "Margin rate"],
  ["1,284", "Orders"],
];

export const productEditorSpecs: [string, string][] = [
  ["Processor", "Intel Core i7-13650HX"],
  ["Memory", "16GB DDR5-4800"],
  ["Storage", "1TB PCIe 4.0 NVMe"],
  ["Graphics", "NVIDIA GeForce RTX 4070 8GB"],
  ["Display", "16-inch QHD+ 165Hz"],
];

export const productEditorVariants = [
  "16GB / 1TB / Eclipse Gray",
  "32GB / 1TB / Eclipse Gray",
  "32GB / 2TB / Volt Green",
];

export const categoryTree: [string, string, number][] = [
  ["Computers", "438", 0],
  ["Laptops", "284", 1],
  ["Gaming Laptops", "96", 2],
  ["Ultrabooks", "74", 2],
  ["Desktop PCs", "154", 1],
  ["PC Components", "542", 0],
  ["Processors", "84", 1],
  ["Graphics Cards", "96", 1],
  ["Memory", "122", 1],
  ["Smartphones", "196", 0],
];

export const adminBrands = [
  "Apple",
  "Samsung",
  "ASUS",
  "Lenovo",
  "HP",
  "Dell",
  "MSI",
  "Acer",
  "Logitech",
  "Sony",
  "Xiaomi",
  "Corsair",
];

export const customerNames = [
  "Yasmine Benali",
  "Riad Mansouri",
  "Nesrine Amari",
  "Karim Larbi",
  "Lina Saadi",
  "Sofiane Hakim",
];

export const returnStages = [
  "Received",
  "Diagnosing",
  "Repaired",
  "Replaced",
  "Refunded",
];

export const settingsTabs = [
  "Store information",
  "Shipping & wilayas",
  "Payment methods",
  "Spec templates",
  "Users & roles",
  "Notifications",
  "Language & currency",
];

export const reportCategories: [string, number, string][] = [
  ["Laptops", 86, "3.82M"],
  ["Smartphones", 64, "2.41M"],
  ["Components", 48, "1.27M"],
  ["Peripherals", 31, "620K"],
  ["Networking", 18, "310K"],
];
