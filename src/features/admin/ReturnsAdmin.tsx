import { Check } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import products from "../../data/products";
import {
  orderRows,
  returnStages,
  returnStatusTabs,
} from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function ReturnsAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="AFTER-SALES"
        title="Warranty & returns"
        description="Process warranty claims, repairs, replacements, and refunds."
        action="New request"
      />
      <div className="status-tabs">
        {returnStatusTabs.map((stage, index) => (
            <button
              className={index === 1 ? "active" : ""}
              type="button"
              key={stage}
            >
              {stage}
            </button>
          ),
        )}
      </div>
      <div className="rma-layout">
        <article className="table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Request</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Serial / IMEI</th>
                  <th>Issue</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.concat(products.slice(0, 2)).map((product, index) => (
                  <tr
                    className={index === 0 ? "selected-row" : ""}
                    key={`${product.model}-${index}`}
                  >
                    <td>
                      <code>#RMA-{2048 + index}</code>
                      <small>{2 + index} days ago</small>
                    </td>
                    <td>{orderRows[index % 5][1]}</td>
                    <td>
                      <strong>{product.name}</strong>
                      <small>{product.model}</small>
                    </td>
                    <td>
                      <code>SN8K2{index}A91X</code>
                    </td>
                    <td>{index % 2 ? "Battery issue" : "Display flicker"}</td>
                    <td>
                      <Badge
                        tone={
                          index < 2 ? "amber" : index === 4 ? "green" : "blue"
                        }
                      >
                        {returnStages[Math.min(index, 4)]}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <aside className="rma-detail">
          <div className="card-title">
            <div>
              <h3>RMA #2048</h3>
              <p>ASUS ROG Strix G16</p>
            </div>
            <Badge tone="amber">Diagnosing</Badge>
          </div>
          <div className="rma-product">
            <img src={products[0].image} alt="" />
            <span>
              <strong>ASUS ROG Strix G16</strong>
              <code>SN8K2048A91X</code>
              <small>Warranty valid until Jun 2027</small>
            </span>
          </div>
          <h4>Customer issue</h4>
          <p className="issue-copy">
            Display flickers intermittently at 165Hz after the device warms up.
            External monitor works correctly.
          </p>
          <div className="rma-steps">
            {returnStages.map((stage, index) => (
              <div className={index < 2 ? "done" : ""} key={stage}>
                <i>{index < 2 ? <Check size={11} /> : index + 1}</i>
                <span>{stage}</span>
              </div>
            ))}
          </div>
          <label>
            <span>Technician note</span>
            <textarea defaultValue="Initial diagnostic suggests display cable connection. Running extended test." />
          </label>
          <Button className="full-width">Update to repaired</Button>
        </aside>
      </div>
    </>
  );
}
