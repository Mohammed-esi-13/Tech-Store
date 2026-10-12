import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  BadgeCheck,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import { PageEmpty } from "../../components/shared/PageState";
import { getProductById } from "../../services/products";
import { useCart } from "../../stores/cart";
import products from "../../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const product = getProductById(id) ?? (id === undefined ? products[0] : undefined);

  if (!product) {
    return (
      <main className="page-section product-page">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/catalog">Catalog</Link> / Not found
        </div>
        <PageEmpty
          title="Product not found"
          text="This product may have been removed or the link is incorrect."
          action={
            <Button variant="secondary" onClick={() => navigate("/catalog")}>
              Back to catalog
            </Button>
          }
        />
      </main>
    );
  }

  const gallery = [product.image, products[3]?.image ?? product.image, product.image, products[2]?.image ?? product.image];

  return (
    <main className="page-section product-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/catalog">Catalog</Link> / {product.brand} / {product.name}
      </div>
      <div className="product-detail">
        <div className="gallery">
          <div className="thumbs">
            {gallery.map((image, index) => (
              <button type="button" key={index}>
                <img src={image} alt="" />
              </button>
            ))}
          </div>
          <div className="gallery-main">
            <img src={product.image} alt={`${product.brand} ${product.name}`} />
            {product.badge && <Badge tone="red">{product.badge}</Badge>}
            <IconButton label="Add to wishlist">
              <Heart size={19} />
            </IconButton>
          </div>
        </div>
        <div className="detail-copy">
          <div className="detail-brand">
            {product.brand}{" "}
            <Badge tone="green">
              <BadgeCheck size={13} /> Official
            </Badge>
          </div>
          <h1>
            {product.brand} {product.name}
          </h1>
          <code>
            {product.model} · SKU NT-{product.brand.slice(0, 2).toUpperCase()}-10482
          </code>
          <div className="rating detail-rating">
            <span className="stars">★★★★★</span>
            <strong>4.8</strong>
            <span>124 reviews</span>
          </div>
          <div className="detail-badges">
            <Badge tone="green">In stock</Badge>
            <Badge>New</Badge>
            <Badge tone="blue">2 year warranty</Badge>
          </div>
          <p className="detail-lead">
            Dominate every match with desktop-class power, intelligent cooling, and
            an immersive Nebula display.
          </p>
          <div className="configuration">
            <strong>Memory</strong>
            <div>
              <button className="config-option active" type="button">
                16GB
              </button>
              <button className="config-option" type="button">
                32GB <small>+24 000 DA</small>
              </button>
            </div>
          </div>
          <div className="configuration">
            <strong>Storage</strong>
            <div>
              <button className="config-option active" type="button">
                1TB SSD
              </button>
              <button className="config-option" type="button">
                2TB SSD <small>+18 000 DA</small>
              </button>
            </div>
          </div>
          <div className="detail-price">
            <span>
              {product.oldPrice && <del>{product.oldPrice}</del>}
              <strong>{product.price}</strong>
            </span>
            <small>or 12 monthly payments from 24 158 DA</small>
          </div>
          <div className="buy-row">
            <div className="quantity" aria-label="Quantity">
              <Minus size={15} onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ cursor: "pointer" }} />
              <span>{qty}</span>
              <Plus size={15} onClick={() => setQty((q) => Math.min(9, q + 1))} style={{ cursor: "pointer" }} />
            </div>
            <Button className="grow" onClick={() => add(product, qty)}>
              <ShoppingCart size={18} /> Add to cart
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                add(product, qty);
                navigate("/checkout");
              }}
            >
              Buy now
            </Button>
          </div>
          <div className="delivery-card">
            <Truck size={20} />
            <span>
              <strong>Delivery to Algiers</strong>
              <small>Estimated 24–48 hours · Free</small>
            </span>
            <ChevronRight size={17} />
          </div>
        </div>
      </div>
      <div className="detail-tabs">
        <span>Overview</span>
        <span className="active">Specifications</span>
        <span>Reviews (124)</span>
        <span>Q&amp;A</span>
        <span>Warranty &amp; returns</span>
      </div>
      <div className="specification-card">
        <div>
          <h3>Processor</h3>
          <dl>
            <dt>Processor</dt>
            <dd>Intel Core i7-13650HX</dd>
            <dt>Cores / Threads</dt>
            <dd>14 / 20</dd>
            <dt>Boost clock</dt>
            <dd>Up to 4.9 GHz</dd>
          </dl>
        </div>
        <div>
          <h3>Memory &amp; storage</h3>
          <dl>
            <dt>Memory</dt>
            <dd>16GB DDR5-4800</dd>
            <dt>Storage</dt>
            <dd>1TB PCIe 4.0 NVMe SSD</dd>
            <dt>Upgradeable</dt>
            <dd>Up to 64GB</dd>
          </dl>
        </div>
        <div>
          <h3>Display &amp; graphics</h3>
          <dl>
            <dt>Display</dt>
            <dd>16-inch QHD+ 165Hz</dd>
            <dt>Graphics</dt>
            <dd>NVIDIA RTX 4070 8GB</dd>
            <dt>Response time</dt>
            <dd>3ms</dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
