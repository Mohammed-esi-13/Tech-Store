import { Eye, Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../../types/catalog";
import Badge from "./Badge";
import Button from "./Button";
import IconButton from "./IconButton";
import cn from "../../lib/cn";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export default function ProductCard({
  product,
  compact = false,
}: ProductCardProps) {
  return (
    <article className={cn("product-card", compact && "product-card-compact")}>
      <div className="product-media">
        <img src={product.image} alt={`${product.brand} ${product.name}`} />
        <div className="product-badges">
          {product.badge && (
            <Badge tone={product.badge.startsWith("-") ? "red" : "blue"}>
              {product.badge}
            </Badge>
          )}
          <Badge tone="green">2 year warranty</Badge>
        </div>
        <IconButton label="Add to wishlist">
          <Heart size={18} />
        </IconButton>
        <label className="compare-check">
          <input type="checkbox" /> Compare
        </label>
      </div>
      <div className="product-body">
        <div className="product-meta">
          <span>{product.brand}</span>
          <span>•</span>
          <span>Tech</span>
        </div>
        <h3>{product.name}</h3>
        <code>{product.model}</code>
        <div className="spec-list">
          {product.specs.map(([Icon, value]) => (
            <span className="spec-chip" key={value}>
              <Icon size={13} /> {value}
            </span>
          ))}
        </div>
        <div className="rating">
          <span className="stars">★★★★★</span>
          <span>4.8 (124)</span>
        </div>
        {product.stock && <p className="low-stock">{product.stock}</p>}
        <div className="price-row">
          <div>
            <strong>{product.price}</strong>
            {product.oldPrice && <del>{product.oldPrice}</del>}
            <small>From 24 158 DA/month</small>
          </div>
          <IconButton label="Quick view">
            <Eye size={18} />
          </IconButton>
        </div>
        <Button className="full-width">
          <ShoppingCart size={17} /> Add to cart
        </Button>
      </div>
    </article>
  );
}
