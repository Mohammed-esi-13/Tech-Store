import ProductCard from "../../../components/ui/ProductCard";
import SectionHeading from "../../../components/ui/SectionHeading";
import products from "../../../data/products";

export default function FlashDealsSection() {
  return (
    <section className="page-section">
      <SectionHeading eyebrow="ENDS IN 08:42:16" title="Flash deals" />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.model} />
        ))}
      </div>
    </section>
  );
}
