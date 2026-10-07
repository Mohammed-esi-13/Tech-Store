import {
  Heart,
  Settings,
  ShieldCheck,
  ShoppingBag,
  User,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import MapPinIcon from "../../components/ui/MapPinIcon";
import products from "../../data/products";
import { orderRows } from "../../data/admin";

export default function AccountPage() {
  return (
    <main className="page-section account-page">
      <div className="account-hero">
        <div className="profile-avatar">YB</div>
        <div>
          <p className="eyebrow">MY ACCOUNT</p>
          <h1>Welcome back, Yasmine.</h1>
          <p>Manage orders, addresses, warranties, and saved products.</p>
        </div>
        <Button variant="secondary">Edit profile</Button>
      </div>
      <div className="account-layout">
        <aside className="account-nav">
          {[
            [User, "Profile"],
            [ShoppingBag, "Orders"],
            [MapPinIcon, "Addresses"],
            [Heart, "Wishlist"],
            [ShieldCheck, "Warranty & RMA"],
            [Settings, "Settings"],
          ].map(([Icon, label], index) => {
            const NavIcon = Icon as typeof User;
            return (
              <button
                className={index === 1 ? "active" : ""}
                type="button"
                key={label as string}
              >
                <NavIcon size={17} />
                {label as string}
                {index === 1 && <Badge tone="blue">9</Badge>}
              </button>
            );
          })}
          <button type="button" className="logout">
            Sign out
          </button>
        </aside>
        <div className="account-content">
          <div className="card-title">
            <div>
              <h3>Recent orders</h3>
              <p>Track and manage your purchases</p>
            </div>
            <Button variant="secondary" size="sm">
              View all orders
            </Button>
          </div>
          {orderRows.slice(0, 3).map((row, index) => (
            <article className="order-card-mobile" key={row[0]}>
              <div className="order-card-head">
                <span>
                  <code>{row[0]}</code>
                  <small>Placed Jun {18 - index}, 2025</small>
                </span>
                <Badge
                  tone={index === 0 ? "blue" : index === 1 ? "amber" : "green"}
                >
                  {row[2]}
                </Badge>
              </div>
              <div className="order-card-products">
                {products.slice(0, index === 0 ? 2 : 1).map((product) => (
                  <img src={product.image} alt="" key={product.model} />
                ))}
                <span>{index === 0 ? "2 products" : "1 product"}</span>
                <strong>{row[3]}</strong>
              </div>
              <div className="account-timeline">
                <i className="done" />
                <i className={index < 2 ? "done" : ""} />
                <i className={index === 2 ? "done" : ""} />
                <i />
                <span>Ordered</span>
                <span>Confirmed</span>
                <span>Shipped</span>
                <span>Delivered</span>
              </div>
              <div className="component-row">
                <Button size="sm">Track order</Button>
                <Button variant="secondary" size="sm">
                  View details
                </Button>
                <Button variant="ghost" size="sm">
                  Get support
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
