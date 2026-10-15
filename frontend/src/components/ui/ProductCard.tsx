import { Link } from "react-router";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../../types/catalog";
import { toProductPath } from "../../services/products";
import { useCart } from "../../stores/cart";
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
  const { add } = useCart();
  const detailsPath = toProductPath(product);

  return (
    <article className={cn("product-card", compact && "product-card-compact")}>
      <div className="product-media">
        <Link to={detailsPath} aria-label={`${product.brand} ${product.name} details`}>
          <img src={product.image} alt={`${product.brand} ${product.name}`} />
        </Link>
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
        <h3>
          <Link
            to={detailsPath}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {product.name}
          </Link>
        </h3>
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
          <Link
            to={detailsPath}
            className="icon-btn"
            aria-label={`Quick view ${product.name}`}
            style={{ textDecoration: "none" }}
          >
            <Eye size={18} />
          </Link>
        </div>
        <Button className="full-width" onClick={() => add(product, 1)}>
          <ShoppingCart size={17} /> Add to cart
        </Button>
      </div>
    </article>
  );
}
