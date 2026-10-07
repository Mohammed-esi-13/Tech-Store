import { Gamepad2 } from "lucide-react";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import SectionHeading from "../../../components/ui/SectionHeading";
import products from "../../../data/products";

export default function BundlesSection() {
  return (
    <section className="page-section">
      <SectionHeading title="Complete your setup" action="Browse bundles" />
      <div className="bundle-grid">
        <div className="bundle-card">
          <div className="bundle-images">
            {products.slice(0, 3).map((product) => (
              <img src={product.image} alt="" key={product.model} />
            ))}
          </div>
          <div>
            <Badge tone="green">Save 18 000 DA</Badge>
            <h3>Creator workspace bundle</h3>
            <p>ASUS laptop + Samsung monitor + Logitech MX Master 3S</p>
            <strong>399 900 DA</strong>
          </div>
          <Button>View bundle</Button>
        </div>
        <div className="deal-card">
          <div className="deal-icon">
            <Gamepad2 size={28} />
          </div>
          <div>
            <Badge tone="amber">LIMITED DROP</Badge>
            <h3>Ultimate gaming essentials</h3>
            <p>Only 8 bundles remaining at this price.</p>
            <div className="progress">
              <span />
            </div>
            <small>12 sold / 20</small>
          </div>
        </div>
      </div>
    </section>
  );
}
