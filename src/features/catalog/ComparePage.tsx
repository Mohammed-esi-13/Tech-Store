import {
  Plus,
  ShoppingCart,
  X,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import products from "../../data/products";
import { comparisonRows } from "../../data/storefront";

export default function ComparePage() {
  const compareProducts = products.slice(0, 3);

  return (
    <main className="page-section compare-page">
      <div className="breadcrumb">Home / Compare products</div>
      <div className="shop-title">
        <div>
          <p className="eyebrow">PRODUCT COMPARISON</p>
          <h1>Compare side by side.</h1>
          <p>Review the differences that matter before you choose.</p>
        </div>
        <label className="difference-switch">
          <span>Show only differences</span>
          <i className="switch on">
            <b />
          </i>
        </label>
      </div>
      <div className="compare-table">
        <div className="compare-head">
          <div className="compare-label">
            <Badge tone="blue">3 of 4 products</Badge>
            <Button variant="secondary" size="sm">
              <Plus size={15} /> Add product
            </Button>
          </div>
          {compareProducts.map((product) => (
            <div className="compare-product" key={product.model}>
              <IconButton label="Remove">
                <X size={16} />
              </IconButton>
              <img src={product.image} alt="" />
              <small>{product.brand}</small>
              <strong>{product.name}</strong>
              <code>{product.model}</code>
              <span>{product.price}</span>
              <Button size="sm">
                <ShoppingCart size={15} /> Add to cart
              </Button>
            </div>
          ))}
        </div>
        <div className="compare-section-title">Core specifications</div>
        {comparisonRows.map(([label, ...values]) => (
          <div className="compare-row" key={label}>
            <strong>{label}</strong>
            {values.map((value, index) => (
              <span
                className={index === 0 ? "highlight" : ""}
                key={`${label}-${value}`}
              >
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="floating-compare">
        <div className="compare-stack">
          {compareProducts.map((product) => (
            <img src={product.image} alt="" key={product.model} />
          ))}
        </div>
        <span>
          <strong>3 products selected</strong>
          <small>Add one more product to compare</small>
        </span>
        <Button>Compare now</Button>
        <IconButton label="Close">
          <X size={16} />
        </IconButton>
      </div>
    </main>
  );
}
