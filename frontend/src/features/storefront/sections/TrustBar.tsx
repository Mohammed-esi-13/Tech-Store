import type { LucideIcon } from "lucide-react";
import { trustItems } from "../../../data/storefront";

export default function TrustBar() {
  return (
    <section className="trust-bar">
      {trustItems.map(([Icon, title, text]) => {
        const TrustIcon = Icon as LucideIcon;
        return (
          <div key={title}>
            <TrustIcon size={23} />
            <span>
              <strong>{title}</strong>
              <small>{text}</small>
            </span>
          </div>
        );
      })}
    </section>
  );
}
