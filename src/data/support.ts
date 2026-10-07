import {
  CreditCard,
  Headphones,
  PackageCheck,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

export const supportOptions: [LucideIcon, string, string][] = [
  [PackageCheck, "Track an order", "Get real-time delivery updates."],
  [RefreshCcw, "Returns & warranty", "Start or review an RMA request."],
  [CreditCard, "Payments", "Cards, bank transfers, and COD."],
  [Headphones, "Contact an expert", "Talk to our technology team."],
];

export const warrantyQuestions = [
  "Coverage and duration",
  "How to submit a claim",
  "Diagnosis and repair timelines",
  "Replacement and refund conditions",
];
