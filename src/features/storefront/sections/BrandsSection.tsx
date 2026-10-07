import SectionHeading from "../../../components/ui/SectionHeading";
import { homeBrands } from "../../../data/storefront";

export default function BrandsSection() {
  return (
    <section className="page-section brand-section">
      <SectionHeading title="The brands you trust" />
      <div className="brand-row">
        {homeBrands.map((brand) => (
          <div className="brand-card" key={brand}>
            <strong>{brand}</strong>
            <small>View products</small>
          </div>
        ))}
      </div>
    </section>
  );
}
