import { ChevronDown, Plus } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import ProductCard from "../../components/ui/ProductCard";
import SectionHeading from "../../components/ui/SectionHeading";
import products from "../../data/products";
import { foundationSwatches } from "../../data/styleGuide";

export default function StyleGuide() {
  return (
    <main className="page-section style-page">
      <div className="style-hero">
        <p className="eyebrow">DESIGN SYSTEM 1.0</p>
        <h1>NEOTEK Commerce System</h1>
        <p>
          A clear, adaptable interface kit for modern technology retail across
          storefront and operations.
        </p>
      </div>
      <section>
        <SectionHeading title="Foundation" action="Light & dark ready" />
        <div className="swatches">
          {foundationSwatches.map(([name, className]) => (
            <div className="swatch" key={name}>
              <i className={className} />
              <strong>{name}</strong>
              <code>Semantic token</code>
            </div>
          ))}
        </div>
      </section>
      <section>
        <SectionHeading title="Typography" action="Inter + JetBrains Mono" />
        <div className="type-card">
          <div>
            <span>Display / 48</span>
            <h1>Tech that moves you.</h1>
          </div>
          <div>
            <span>Heading / 32</span>
            <h2>Performance by design.</h2>
          </div>
          <div>
            <span>Body / 16</span>
            <p>
              Practical, precise typography designed for dense technical details
              and easy scanning.
            </p>
          </div>
          <div>
            <span>Mono / 14</span>
            <code>ROG-G614JV · 189 900 DA</code>
          </div>
        </div>
      </section>
      <section>
        <SectionHeading title="Components" />
        <div className="component-board">
          <div>
            <h3>Buttons</h3>
            <div className="component-row">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Delete</Button>
              <Button size="icon">
                <Plus size={17} />
              </Button>
            </div>
          </div>
          <div>
            <h3>Badges</h3>
            <div className="component-row">
              <Badge>Default</Badge>
              <Badge tone="blue">Featured</Badge>
              <Badge tone="green">In stock</Badge>
              <Badge tone="amber">Low stock</Badge>
              <Badge tone="red">Out of stock</Badge>
            </div>
          </div>
          <div>
            <h3>Form fields</h3>
            <div className="form-row">
              <label>
                <span>Product name</span>
                <input placeholder="Enter product name" />
              </label>
              <label>
                <span>Category</span>
                <button type="button" className="select-field">
                  Laptops <ChevronDown size={16} />
                </button>
              </label>
              <label className="error-field">
                <span>SKU</span>
                <input defaultValue="NT-AS-" />
                <small>SKU is already in use.</small>
              </label>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionHeading title="Card variants" />
        <div className="card-showcase">
          <ProductCard product={products[0]} />
          <ProductCard compact product={products[1]} />
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              “Delivery was fast and the laptop arrived perfectly sealed. Excellent
              support throughout.”
            </p>
            <div>
              <span>KB</span>
              <strong>Karim B.</strong>
              <Badge tone="green">Verified buyer</Badge>
            </div>
          </div>
          <div className="address-card">
            <div className="card-title">
              <h3>Home</h3>
              <Badge tone="blue">Default</Badge>
            </div>
            <strong>Sarah Benali</strong>
            <p>
              12 Rue Didouche Mourad
              <br />
              Alger Centre, Alger 16000
            </p>
            <small>+213 555 12 34 56</small>
            <Button variant="secondary" size="sm">
              Edit address
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
