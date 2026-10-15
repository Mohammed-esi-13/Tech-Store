import { ArrowRight, BarChart3, Clock3 } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import products from "../../data/products";
import { reportCategories, reportKpis, reportTabs } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function ReportsAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="BUSINESS INTELLIGENCE"
        title="Reports"
        description="Analyze sales, margins, product performance, and stock value."
        action="Create report"
      />
      <div className="report-toolbar">
        <div className="status-tabs">
          {reportTabs.map((tab, index) => (
              <button
                className={index === 0 ? "active" : ""}
                type="button"
                key={tab}
              >
                {tab}
              </button>
            ),
          )}
        </div>
        <Button variant="secondary">
          <Clock3 size={16} /> Jun 1 – Jun 30
        </Button>
      </div>
      <div className="module-kpis">
        {reportKpis.map(([value, label], index) => (
          <div key={label}>
            <span className={`kpi-icon kpi-${index === 2 ? "green" : "blue"}`}>
              <BarChart3 size={18} />
            </span>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <div className="reports-grid">
        <article className="chart-card">
          <div className="card-title">
            <div>
              <h3>Sales and margin</h3>
              <p>Daily performance for selected period</p>
            </div>
            <Badge tone="green">+12.5% vs last period</Badge>
          </div>
          <div className="large-chart report-chart">
            <div className="grid-lines" />
            <svg viewBox="0 0 800 220" preserveAspectRatio="none">
              <path
                d="M0,175 C70,170 90,100 155,120 S250,150 310,90 S410,68 470,110 S560,135 620,62 S720,85 800,28"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="4"
              />
              <path
                d="M0,195 C80,160 120,170 180,145 S300,178 360,125 S470,145 520,105 S680,130 800,80"
                fill="none"
                stroke="var(--success)"
                strokeWidth="3"
              />
            </svg>
          </div>
        </article>
        <article className="chart-card">
          <div className="card-title">
            <div>
              <h3>Sales by category</h3>
              <p>Share of gross revenue</p>
            </div>
          </div>
          <div className="horizontal-bars">
            {reportCategories.map(([name, width, value]) => (
              <div key={name}>
                <span>
                  <strong>{name}</strong>
                  <small>{value} DA</small>
                </span>
                <i>
                  <b style={{ width: `${width}%` }} />
                </i>
              </div>
            ))}
          </div>
        </article>
      </div>
      <article className="table-card report-table">
        <div className="card-title">
          <div>
            <h3>Top-selling products</h3>
            <p>Ranked by net revenue</p>
          </div>
          <Button variant="ghost" size="sm">
            View full report <ArrowRight size={14} />
          </Button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Product</th>
                <th>Units sold</th>
                <th>Gross sales</th>
                <th>Cost</th>
                <th>Margin</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.model}>
                  <td>
                    <strong>0{index + 1}</strong>
                  </td>
                  <td>
                    <div className="product-cell">
                      <img src={product.image} alt="" />
                      <span>
                        <strong>{product.name}</strong>
                        <code>{product.model}</code>
                      </span>
                    </div>
                  </td>
                  <td>{82 - index * 13}</td>
                  <td>{product.price}</td>
                  <td>{210 - index * 31} 000 DA</td>
                  <td>
                    <Badge tone="green">{24 + index * 2}%</Badge>
                  </td>
                  <td className="positive">+{12 - index}.4%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
}
