import { Heart, Minus, Plus, ShieldCheck, X } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import products from "../../data/products";
import CheckoutPage from "./CheckoutPage";
import OrderSummary from "./OrderSummary";

export default function CartPage({ checkout = false }: { checkout?: boolean }) {
  if (checkout) return <CheckoutPage />;

  return (
    <main className="page-section cart-page">
      <div className="breadcrumb">Home / Shopping cart</div>
      <div className="shop-title">
        <div>
          <p className="eyebrow">YOUR BAG</p>
          <h1>Shopping cart</h1>
          <p>3 items reserved for the next 20 minutes.</p>
        </div>
        <Badge tone="green">
          <ShieldCheck size={14} /> Secure checkout
        </Badge>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {products.slice(0, 3).map((product, index) => (
            <article className="cart-item" key={product.model}>
              <img src={product.image} alt="" />
              <div className="cart-product">
                <small>{product.brand}</small>
                <h3>{product.name}</h3>
                <code>{product.model}</code>
                <span>
                  {index === 0
                    ? "16GB / 1TB / Eclipse Gray"
                    : index === 1
                      ? "256GB / Natural Titanium"
                      : "Black"}
                </span>
                <div>
                  <Badge tone="green">In stock</Badge>
                  <Badge>2 year warranty</Badge>
                </div>
              </div>
              <div className="cart-qty">
                <Minus size={14} />
                <strong>{index + 1}</strong>
                <Plus size={14} />
              </div>
              <div className="cart-price">
                <strong>{product.price}</strong>
                {product.oldPrice && <del>{product.oldPrice}</del>}
                <button type="button">
                  <Heart size={14} /> Save
                </button>
                <button type="button">
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
        <OrderSummary />
      </div>
    </main>
  );
}
