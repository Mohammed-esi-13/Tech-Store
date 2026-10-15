import {
  Cable,
  Boxes,
  Cpu,
  CreditCard,
  Gamepad2,
  HardDrive,
  Headphones,
  Laptop,
  MemoryStick,
  Monitor,
  MousePointer2,
  ShieldCheck,
  Smartphone,
  Truck,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const categories: [LucideIcon, string, string][] = [
  [Laptop, "Laptops", "284 products"],
  [Smartphone, "Smartphones", "196 products"],
  [Cpu, "Components", "542 products"],
  [Monitor, "Monitors", "128 products"],
  [Gamepad2, "Gaming", "315 products"],
  [MousePointer2, "Peripherals", "409 products"],
  [Wifi, "Networking", "112 products"],
  [Headphones, "Audio", "173 products"],
];

export const homeBrands = [
  "APPLE",
  "SAMSUNG",
  "ASUS",
  "Lenovo",
  "HP",
  "DELL",
  "msi",
  "logitech",
];

export const pcBuilderIcons = [Cpu, MemoryStick, HardDrive, Cable];

export const trustItems: [LucideIcon, string, string][] = [
  [Truck, "Fast delivery", "58 wilayas covered"],
  [ShieldCheck, "Genuine warranty", "Official products"],
  [CreditCard, "Secure payment", "Pay your way"],
  [Headphones, "Expert support", "7 days a week"],
];

export const shopFilters: [string, string[]][] = [
  ["Brand", ["ASUS (42)", "Lenovo (38)", "MSI (31)", "Acer (24)"]],
  ["Processor", ["Intel Core i9", "Intel Core i7", "AMD Ryzen 9", "AMD Ryzen 7"]],
  ["Memory", ["64 GB", "32 GB", "16 GB", "8 GB"]],
  ["Graphics", ["RTX 4090", "RTX 4080", "RTX 4070", "RTX 4060"]],
];

export const pcBuilderParts: [LucideIcon, string, string, string][] = [
  [Cpu, "Processor", "Intel Core i7-14700K", "64 900 DA"],
  [Boxes, "Motherboard", "ASUS ROG Strix Z790-F", "58 900 DA"],
  [MemoryStick, "Memory", "Corsair Vengeance 32GB DDR5", "24 500 DA"],
  [Gamepad2, "Graphics card", "MSI GeForce RTX 4070 SUPER", "189 900 DA"],
  [HardDrive, "Storage", "Samsung 990 PRO 2TB", "31 900 DA"],
  [Zap, "Power supply", "Corsair RM850x 850W", "22 900 DA"],
];

export const comparisonRows = [
  ["Processor", "Intel Core i7-13650HX", "Apple A17 Pro", "—"],
  ["Memory", "16GB DDR5", "8GB", "—"],
  ["Storage", "1TB NVMe SSD", "256GB", "—"],
  ["Display", '16" QHD+ 165Hz', '6.1" OLED 120Hz', "—"],
  ["Graphics", "RTX 4070 8GB", "Apple 6-core GPU", "—"],
  ["Weight", "2.5 kg", "187 g", "250 g"],
  ["Warranty", "2 years", "1 year", "2 years"],
];
