import { useNavigate } from "react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../../components/ui/Button";
import { formatPrice, parsePrice } from "../../services/products";
import { useCart } from "../../stores/cart";

export default function OrderSummary({ mode = "cart" }: { mode?: "cart" | "checkout" }) {
  const navigate = useNavigate();
  const { lines, clear } = useCart();

  const subtotal = lines.reduce((sum, l) => sum + parsePrice(l.product.price) * l.qty, 0);
  // Preserve the legacy demo story when the cart is untouched (static fixture).
  const demoSubtotal = 609700;
  const demoDiscount = 29000;
  const effectiveSubtotal = lines.length > 0 ? subtotal : demoSubtotal;
  const discount = lines.length > 0 ? 0 : demoDiscount;
  const total = effectiveSubtotal - discount;

  const handlePrimary = () => {
    if (mode === "cart") {
      navigate("/checkout");
    } else {
      clear();
      navigate("/account");
    }
  };

  return (
    <aside className="order-summary">
      <h3>Order summary</h3>
      <div className="promo-field">
        <input placeholder="Promo code" aria-label="Promo code" />
        <Button variant="secondary">Apply</Button>
      </div>
      <div className="summary-lines">
        <span>
          Subtotal <strong>{formatPrice(effectiveSubtotal)}</strong>
        </span>
        <span>
          Discount{" "}
          <strong className="positive">
            {discount > 0 ? `−${formatPrice(discount)}` : "—"}
          </strong>
        </span>
        <span>
          Delivery <strong>Free</strong>
        </span>
      </div>
      <div className="summary-total">
        <span>
          Total <small>VAT included</small>
        </span>
        <strong>{formatPrice(total)}</strong>
      </div>
      <Button className="full-width" onClick={handlePrimary}>
        {mode === "cart" ? (
          <>
            Proceed to checkout <ArrowRight size={16} />
          </>
        ) : (
          <>Place order</>
        )}
      </Button>
      <div className="summary-trust">
        <ShieldCheck size={15} /> Secure payment · Easy returns
      </div>
    </aside>
  );
}
