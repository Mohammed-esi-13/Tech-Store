import {
  Cpu,
  Gauge,
  Gamepad2,
  HardDrive,
  Headphones,
  MemoryStick,
  Monitor,
  Phone,
  Wifi,
  Zap,
} from "lucide-react";
import type { Product } from "../types/catalog";

const products: Product[] = [
  {
    brand: "ASUS",
    name: "ROG Strix G16",
    model: "G614JV-N4071W",
    price: "289 900 DA",
    oldPrice: "319 900 DA",
    badge: "-10%",
    stock: "Only 3 left",
    image:
      "https://images.unsplash.com/photo-1785245566050-8aaa947c74b8?auto=format&fit=crop&w=900&q=85",
    specs: [
      [Cpu, "i7-13650HX"],
      [MemoryStick, "16GB DDR5"],
      [HardDrive, "1TB SSD"],
      [Monitor, '16" 165Hz'],
    ],
  },
  {
    brand: "APPLE",
    name: "iPhone 15 Pro",
    model: "MTV43ZD/A",
    price: "249 900 DA",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1511140973288-19bf21d7e771?auto=format&fit=crop&w=900&q=85",
    specs: [
      [Cpu, "A17 Pro"],
      [MemoryStick, "256GB"],
      [Phone, "48MP"],
      [Zap, "USB-C"],
    ],
  },
  {
    brand: "SONY",
    name: "WH-1000XM5",
    model: "WH1000XM5/B",
    price: "69 900 DA",
    oldPrice: "79 900 DA",
    badge: "-13%",
    image:
      "https://images.unsplash.com/photo-1761005654347-f5907893edb7?auto=format&fit=crop&w=900&q=85",
    specs: [
      [Headphones, "ANC"],
      [Zap, "30h battery"],
      [Wifi, "Bluetooth 5.2"],
      [Gauge, "250g"],
    ],
  },
  {
    brand: "SAMSUNG",
    name: "Odyssey G7",
    model: "LS32BG700EUXEN",
    price: "119 900 DA",
    badge: "Open Box",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    specs: [
      [Monitor, '32" 4K'],
      [Gauge, "144Hz"],
      [Zap, "1ms"],
      [Gamepad2, "G-Sync"],
    ],
  },
];

export default products;
