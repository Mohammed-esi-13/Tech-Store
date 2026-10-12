import { Link } from "react-router";
import { Heart, Minus, Plus, ShieldCheck, X } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { PageEmpty } from "../../components/shared/PageState";
import { useCart } from "../../stores/cart";
import OrderSummary from "./OrderSummary";

export default function CartPage() {
  const { lines, setQty, remove } = useCart();

  if (lines.length === 0) {
    return (
      <main className="page-section cart-page">
        <div className="breadcrumb">Home / Shopping cart</div>
        <div className="shop-title">
          <div>
            <p className="eyebrow">YOUR BAG</p>
            <h1>Shopping cart</h1>
            <p>Your bag is currently empty.</p>
          </div>
          <Badge tone="green">
            <ShieldCheck size={14} /> Secure checkout
          </Badge>
        </div>
        <PageEmpty
          title="Your cart is empty"
          text="Browse the catalog and add products to get started."
          action={
            <Link to="/catalog">
              <Button>Browse catalog</Button>
            </Link>
          }
        />
      </main>
    );
  }

  const reservedMinutes = 20;

  return (
    <main className="page-section cart-page">
      <div className="breadcrumb">Home / Shopping cart</div>
      <div className="shop-title">
        <div>
          <p className="eyebrow">YOUR BAG</p>
          <h1>Shopping cart</h1>
          <p>
            {lines.reduce((n, l) => n + l.qty, 0)} items reserved for the next{" "}
            {reservedMinutes} minutes.
          </p>
        </div>
        <Badge tone="green">
          <ShieldCheck size={14} /> Secure checkout
        </Badge>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {lines.map(({ product, qty }) => (
            <article className="cart-item" key={product.model}>
              <img src={product.image} alt={`${product.brand} ${product.name}`} />
              <div className="cart-product">
                <small>{product.brand}</small>
                <h3>
                  <Link
                    to={`/product/${encodeURIComponent(product.model)}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {product.name}
                  </Link>
                </h3>
                <code>{product.model}</code>
                <div>
                  <Badge tone="green">In stock</Badge>
                  <Badge>2 year warranty</Badge>
                </div>
              </div>
              <div className="cart-qty">
                <Minus
                  size={14}
                  style={{ cursor: "pointer" }}
                  onClick={() => setQty(product.model, qty - 1)}
                />
                <strong>{qty}</strong>
                <Plus
                  size={14}
                  style={{ cursor: "pointer" }}
                  onClick={() => setQty(product.model, qty + 1)}
                />
              </div>
              <div className="cart-price">
                <strong>{product.price}</strong>
                {product.oldPrice && <del>{product.oldPrice}</del>}
                <button type="button">
                  <Heart size={14} /> Save
                </button>
                <button type="button" onClick={() => remove(product.model)}>
                  <X size={14} /> Remove
                </button>
              </div>
            </article>
          ))}
          <article className="protection-card">
            <ShieldCheck size={22} />
            <div>
              <strong>Add extended protection</strong>
              <p>Accidental damage and priority repair for 3 years.</p>
            </div>
            <span>+18 900 DA</span>
            <Button variant="secondary" size="sm">
              Add protection
            </Button>
          </article>
        </div>
        <OrderSummary mode="cart" />
      </div>
    </main>
  );
}
