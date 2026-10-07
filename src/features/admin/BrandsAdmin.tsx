import { MoreHorizontal, Search } from "lucide-react";
import Badge from "../../components/ui/Badge";
import { adminBrands } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function BrandsAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="MANUFACTURERS"
        title="Brands"
        description="Manage brand identities, stories, and product associations."
        action="Add brand"
      />
      <div className="admin-filterbar">
        <div>
          <Search size={16} />
          <input placeholder="Search brands..." />
        </div>
        <span>17 active brands</span>
      </div>
      <div className="admin-brand-grid">
        {adminBrands.map((brand, index) => (
          <article key={brand}>
            <div className="brand-logo">{brand}</div>
            <div>
              <strong>{brand}</strong>
              <small>{24 + index * 11} products</small>
            </div>
            <Badge tone={index === 9 ? "neutral" : "green"}>
              {index === 9 ? "Hidden" : "Active"}
            </Badge>
            <MoreHorizontal size={17} />
          </article>
        ))}
      </div>
    </>
  );
}
