import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../../components/ui/Button";

export default function OrderSummary() {
  return (
    <aside className="order-summary">
      <h3>Order summary</h3>
      <div className="promo-field">
        <input placeholder="Promo code" />
        <Button variant="secondary">Apply</Button>
      </div>
      <div className="summary-lines">
        <span>
          Subtotal <strong>609 700 DA</strong>
        </span>
        <span>
          Discount <strong className="positive">−29 000 DA</strong>
        </span>
        <span>
          Delivery <strong>Free</strong>
        </span>
      </div>
      <div className="summary-total">
        <span>
          Total <small>VAT included</small>
        </span>
        <strong>580 700 DA</strong>
      </div>
      <Button className="full-width">
        Proceed to checkout <ArrowRight size={16} />
      </Button>
      <div className="summary-trust">
        <ShieldCheck size={15} /> Secure payment · Easy returns
      </div>
    </aside>
  );
}
