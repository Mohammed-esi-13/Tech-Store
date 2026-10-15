import {
  CircleDollarSign,
  CreditCard,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

export const checkoutSteps = ["Information", "Delivery", "Payment", "Review"];

export const paymentMethods: [LucideIcon, string, string][] = [
  [CreditCard, "CIB / Edahabia card", "Secure online payment"],
  [CircleDollarSign, "Cash on delivery", "Pay when your order arrives"],
  [RefreshCcw, "Bank transfer", "Order held for 48 hours"],
];
