import { ChevronRight } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import { categories } from "../../../data/storefront";

export default function CategorySection({
  onShop,
}: {
  onShop: () => void;
}) {
  return (
    <section className="page-section">
      <SectionHeading eyebrow="EXPLORE" title="Shop by category" />
      <div className="category-grid">
        {categories.map(([Icon, name, count]) => (
          <button
            type="button"
            className="category-card"
            key={name}
            onClick={onShop}
          >
            <span className="category-icon">
              <Icon size={26} />
            </span>
            <strong>{name}</strong>
            <small>{count}</small>
            <ChevronRight size={18} />
          </button>
        ))}
      </div>
    </section>
  );
}
