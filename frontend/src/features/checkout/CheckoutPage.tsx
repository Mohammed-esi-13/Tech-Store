import {
  Check,
  ChevronDown,
  PackageCheck,
  Truck,
} from "lucide-react";
import { checkoutSteps, paymentMethods } from "../../data/checkout";
import products from "../../data/products";
import { useCart } from "../../stores/cart";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {
  const { lines } = useCart();
  const summaryLines = lines.length > 0 ? lines.map((l) => l.product) : products.slice(0, 2);

  return (
    <main className="page-section checkout-page">
      <div className="checkout-header">
        <div>
          <p className="eyebrow">SECURE CHECKOUT</p>
          <h1>Complete your order</h1>
        </div>
        <div className="checkout-steps">
          {checkoutSteps.map((step, index) => (
            <span className={index < 2 ? "active" : ""} key={step}>
              <i>{index === 0 ? <Check size={11} /> : index + 1}</i>
              {step}
            </span>
          ))}
        </div>
      </div>
      <div className="checkout-layout">
        <div className="checkout-form">
          <section className="checkout-card">
            <div className="checkout-number">1</div>
            <div className="checkout-card-body">
              <h3>Customer information</h3>
              <div className="field-grid">
                <label>
                  <span>First name</span>
                  <input defaultValue="Yasmine" />
                </label>
                <label>
                  <span>Last name</span>
                  <input defaultValue="Benali" />
                </label>
                <label>
                  <span>Email</span>
                  <input defaultValue="yasmine.b@email.dz" />
                </label>
                <label>
                  <span>Phone</span>
                  <input defaultValue="+213 555 24 18 90" />
                </label>
              </div>
            </div>
          </section>
          <section className="checkout-card">
            <div className="checkout-number">2</div>
            <div className="checkout-card-body">
              <h3>Shipping address</h3>
              <div className="field-grid">
                <label className="wide">
                  <span>Street address</span>
                  <input defaultValue="12 Rue Didouche Mourad" />
                </label>
                <label>
                  <span>Wilaya</span>
                  <button className="select-field" type="button">
                    Alger <ChevronDown size={15} />
                  </button>
                </label>
                <label>
                  <span>City / commune</span>
                  <button className="select-field" type="button">
                    Alger Centre <ChevronDown size={15} />
                  </button>
                </label>
                <label className="error-field">
                  <span>Postal code</span>
                  <input defaultValue="160" />
                  <small>Enter a valid 5-digit postal code.</small>
                </label>
              </div>
            </div>
          </section>
          <section className="checkout-card">
            <div className="checkout-number">3</div>
            <div className="checkout-card-body">
              <h3>Delivery method</h3>
              <div className="option-grid">
                <label className="option-card selected">
                  <input type="radio" defaultChecked name="delivery" />
                  <Truck size={20} />
                  <span>
                    <strong>Express delivery</strong>
                    <small>Tomorrow, 9:00–18:00</small>
                  </span>
                  <b>Free</b>
                </label>
                <label className="option-card">
                  <input type="radio" name="delivery" />
                  <PackageCheck size={20} />
                  <span>
                    <strong>Store pickup</strong>
                    <small>Ready in 2 hours</small>
                  </span>
                  <b>Free</b>
                </label>
              </div>
            </div>
          </section>
          <section className="checkout-card">
            <div className="checkout-number">4</div>
            <div className="checkout-card-body">
              <h3>Payment method</h3>
              <div className="option-grid payment-options">
                {paymentMethods.map(([PaymentIcon, title, text], index) => {
                  return (
                    <label
                      className={`option-card ${index === 0 ? "selected" : ""}`}
                      key={title}
                    >
                      <input
                        type="radio"
                        defaultChecked={index === 0}
                        name="payment"
                      />
                      <PaymentIcon size={20} />
                      <span>
                        <strong>{title}</strong>
                        <small>{text}</small>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <aside>
          <OrderSummary mode="checkout" />
          <div className="mini-cart-summary">
            {summaryLines.map((product) => (
              <div key={product.model}>
                <img src={product.image} alt={product.name} />
                <span>
                  <strong>{product.name}</strong>
                  <small>Qty 1 · {product.model}</small>
                </span>
                <b>{product.price}</b>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
