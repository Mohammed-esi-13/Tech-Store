import {
  Check,
  Clock3,
  Filter,
  MoreHorizontal,
  Printer,
  Search,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import MapPinIcon from "../../components/ui/MapPinIcon";
import products from "../../data/products";
import { orderRows, orderStatusTabs } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function OrdersAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="FULFILMENT"
        title="Orders"
        description="Review, prepare, and dispatch incoming orders."
        action="Create order"
      />
      <div className="status-tabs">
        {orderStatusTabs.map((item, index) => (
          <button
            type="button"
            className={index === 1 ? "active" : ""}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="admin-filterbar">
        <div>
          <Search size={16} />
          <input placeholder="Search order or customer..." />
        </div>
        <Button variant="secondary">
          <Filter size={16} /> Status
        </Button>
        <Button variant="secondary">
          <Clock3 size={16} /> Date range
        </Button>
        <Button variant="secondary">
          <MapPinIcon /> Wilaya
        </Button>
        <span>12 orders selected</span>
      </div>
      <div className="admin-split">
        <article className="table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th>Wilaya</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {orderRows.map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index === 0 ? "selected-row" : ""}
                  >
                    <td>
                      <input type="checkbox" defaultChecked={index === 0} />
                    </td>
                    <td>
                      <code>{row[0]}</code>
                      <small>Jun 18, 10:42</small>
                    </td>
                    <td>
                      <strong>{row[1]}</strong>
                    </td>
                    <td>
                      <Badge
                        tone={
                          index === 0 ? "blue" : index === 3 ? "green" : "amber"
                        }
                      >
                        {row[2]}
                      </Badge>
                    </td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                    <td>
                      <strong>{row[3]}</strong>
                    </td>
                    <td>
                      <MoreHorizontal size={16} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <aside className="order-inspector">
          <div className="card-title">
            <div>
              <h3>Order #NT-10842</h3>
              <p>Placed 2 minutes ago</p>
            </div>
            <Badge tone="blue">New</Badge>
          </div>
          <div className="customer-summary">
            <span>YB</span>
            <div>
              <strong>Yasmine Benali</strong>
              <small>yasmine.b@email.dz · +213 555 24 18 90</small>
            </div>
          </div>
          {products.slice(0, 2).map((product, index) => (
            <div className="order-line" key={product.model}>
              <img src={product.image} alt="" />
              <div>
                <strong>{product.name}</strong>
                <code>{product.model}</code>
                <small>Qty {index + 1} · 16GB / 1TB</small>
              </div>
              <strong>{product.price}</strong>
            </div>
          ))}
          <div className="order-totals">
            <span>
              Subtotal <strong>359 800 DA</strong>
            </span>
            <span>
              Delivery <strong>Free</strong>
            </span>
            <span>
              Total <strong>359 800 DA</strong>
            </span>
          </div>
          <div className="timeline-mini">
            {["Order received", "Payment confirmed", "Preparing", "Shipped"].map(
              (step, index) => (
                <div className={index < 2 ? "done" : ""} key={step}>
                  <i>{index < 2 && <Check size={10} />}</i>
                  <span>
                    <strong>{step}</strong>
                    <small>{index < 2 ? "Today, 10:44" : "Pending"}</small>
                  </span>
                </div>
              ),
            )}
          </div>
          <div className="inspector-actions">
            <Button className="full-width">Confirm order</Button>
            <Button variant="secondary" className="full-width">
              <Printer size={16} /> Print invoice
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
