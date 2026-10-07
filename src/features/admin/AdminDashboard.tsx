import {
  ArrowRight,
  Check,
  Download,
  MoreHorizontal,
  Plus,
  X,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import MiniChart from "../../components/ui/MiniChart";
import products from "../../data/products";
import { dashboardKpis, dashboardOrderRows } from "../../data/admin";

export default function AdminDashboard() {
  return (
    <main className="admin-content">
      <div className="admin-title">
        <div>
          <p className="eyebrow">TUESDAY, JUNE 18</p>
          <h1>Good morning, Amine.</h1>
          <p>Here’s what’s happening with your store today.</p>
        </div>
        <div>
          <Button variant="secondary">
            <Download size={16} /> Export report
          </Button>
          <Button>
            <Plus size={16} /> Add product
          </Button>
        </div>
      </div>
      <div className="kpi-grid">
        {dashboardKpis.map(([Icon, label, value, trend, color]) => (
          <article className="kpi-card" key={label}>
            <div className={`kpi-icon kpi-${color}`}>
              <Icon size={20} />
            </div>
            <Badge tone={color === "amber" ? "amber" : "green"}>{trend}</Badge>
            <small>{label}</small>
            <strong>{value}</strong>
            <MiniChart color={color} />
          </article>
        ))}
      </div>
      <div className="chart-grid">
        <article className="chart-card sales-chart">
          <div className="card-title">
            <div>
              <h3>Revenue overview</h3>
              <p>Revenue and orders over time</p>
            </div>
            <div className="segmented">
              <span>7D</span>
              <span className="active">30D</span>
              <span>12M</span>
            </div>
          </div>
          <div className="chart-metrics">
            <span>
              <i className="dot blue" /> Revenue <strong>8.42M DA</strong>
            </span>
            <span>
              <i className="dot violet" /> Orders <strong>1,284</strong>
            </span>
          </div>
          <div className="large-chart">
            <div className="grid-lines" />
            <svg viewBox="0 0 800 220" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity=".28"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d="M0,180 C70,175 80,100 150,120 S250,155 300,95 S410,65 460,105 S560,145 610,70 S720,90 800,30 L800,220 L0,220 Z"
                fill="url(#area)"
              />
              <path
                d="M0,180 C70,175 80,100 150,120 S250,155 300,95 S410,65 460,105 S560,145 610,70 S720,90 800,30"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="4"
              />
            </svg>
          </div>
        </article>
        <article className="chart-card order-status">
          <div className="card-title">
            <div>
              <h3>Orders by status</h3>
              <p>Last 30 days</p>
            </div>
            <IconButton label="More">
              <MoreHorizontal size={18} />
            </IconButton>
          </div>
          <div className="donut">
            <div>
              <strong>1,284</strong>
              <small>Total orders</small>
            </div>
          </div>
          <div className="legend">
            <span>
              <i className="dot blue" /> Delivered <strong>62%</strong>
            </span>
            <span>
              <i className="dot violet" /> Shipped <strong>18%</strong>
            </span>
            <span>
              <i className="dot amber" /> Processing <strong>14%</strong>
            </span>
            <span>
              <i className="dot gray" /> Cancelled <strong>6%</strong>
            </span>
          </div>
        </article>
      </div>
      <div className="table-grid">
        <article className="table-card">
          <div className="card-title">
            <div>
              <h3>Recent orders</h3>
              <p>12 orders need your attention</p>
            </div>
            <Button variant="ghost" size="sm">
              View all <ArrowRight size={15} />
            </Button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {dashboardOrderRows.map((row, index) => (
                  <tr key={row[0]}>
                    <td>
                      <code>{row[0]}</code>
                      <small>2 min ago</small>
                    </td>
                    <td>
                      <span className="customer-cell">
                        <i>{row[1].slice(0, 1)}</i>
                        {row[1]}
                      </span>
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
                    <td>
                      <strong>{row[3]}</strong>
                    </td>
                    <td>{row[4]}</td>
                    <td>
                      <X size={17} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <aside className="alerts-card">
          <div className="card-title">
            <div>
              <h3>Stock alerts</h3>
              <p>28 items running low</p>
            </div>
            <Badge tone="amber">Action needed</Badge>
          </div>
          {products.slice(0, 3).map((product, index) => (
            <div className="stock-item" key={product.model}>
              <img src={product.image} alt="" />
              <div>
                <strong>{product.name}</strong>
                <code>{product.model}</code>
                <span>
                  <i style={{ width: `${25 + index * 13}%` }} />
                </span>
              </div>
              <Badge tone={index === 2 ? "red" : "amber"}>
                {index === 2 ? "Out" : `${3 + index} left`}
              </Badge>
            </div>
          ))}
          <Button variant="secondary" className="full-width">
            Review inventory
          </Button>
        </aside>
      </div>
      <div className="toast-preview">
        <span>
          <Check size={17} />
        </span>
        <div>
          <strong>Order status updated</strong>
          <small>#NT-10842 moved to Confirmed.</small>
        </div>
        <MoreHorizontal size={17} />
      </div>
    </main>
  );
}
