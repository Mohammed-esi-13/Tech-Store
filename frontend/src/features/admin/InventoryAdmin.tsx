import {
  Boxes,
  ChevronDown,
  Filter,
  Minus,
  Plus,
  X,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import products from "../../data/products";
import { inventoryKpis } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function InventoryAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="STOCK CONTROL"
        title="Inventory"
        description="Track variant stock, serial numbers, movements, and purchasing."
        action="Adjust stock"
      />
      <div className="module-kpis">
        {inventoryKpis.map(([value, label], index) => (
          <div key={label}>
            <span className={`kpi-icon kpi-${index > 1 ? "amber" : "blue"}`}>
              <Boxes size={18} />
            </span>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <div className="inventory-grid">
        <article className="table-card">
          <div className="card-title">
            <div>
              <h3>Stock by variant</h3>
              <p>Live quantities and reorder thresholds</p>
            </div>
            <div className="component-row">
              <Button variant="secondary" size="sm">
                <Filter size={14} /> Low stock
              </Button>
              <Button variant="secondary" size="sm">
                Movement history
              </Button>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Product / Variant</th>
                  <th>On hand</th>
                  <th>Reserved</th>
                  <th>Available</th>
                  <th>Threshold</th>
                  <th>Supplier</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.concat(products).map((product, index) => (
                  <tr key={`${product.model}-${index}`}>
                    <td>
                      <div className="product-cell">
                        <img src={product.image} alt="" />
                        <span>
                          <strong>{product.name}</strong>
                          <code>
                            {index % 2 ? "32GB / 1TB" : "16GB / 512GB"} ·{" "}
                            {product.model}
                          </code>
                        </span>
                      </div>
                    </td>
                    <td>
                      <strong>{index === 3 ? 0 : index + 2}</strong>
                    </td>
                    <td>{index % 3}</td>
                    <td>{Math.max(0, index + 2 - (index % 3))}</td>
                    <td>5</td>
                    <td>{index % 2 ? "TechData DZ" : "Global IT"}</td>
                    <td>
                      <Badge
                        tone={index === 3 ? "red" : index < 2 ? "amber" : "green"}
                      >
                        {index === 3
                          ? "Out of stock"
                          : index < 2
                            ? "Low stock"
                            : "In stock"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <aside className="adjust-dialog">
          <div className="card-title">
            <div>
              <h3>Adjust stock</h3>
              <p>ASUS ROG Strix G16 · 16GB/1TB</p>
            </div>
            <X size={17} />
          </div>
          <div className="current-stock">
            <span>Current stock</span>
            <strong>3 units</strong>
          </div>
          <div className="adjust-toggle">
            <button className="active" type="button">
              Add
            </button>
            <button type="button">Remove</button>
          </div>
          <label>
            <span>Quantity</span>
            <div className="quantity-input">
              <Minus size={15} />
              <strong>12</strong>
              <Plus size={15} />
            </div>
          </label>
          <label>
            <span>Reason</span>
            <button type="button" className="select-field">
              Purchase received <ChevronDown size={15} />
            </button>
          </label>
          <label>
            <span>Reference / note</span>
            <input placeholder="PO-2025-0618" />
          </label>
          <div className="stock-result">
            <span>New stock level</span>
            <strong>15 units</strong>
          </div>
          <Button className="full-width">Confirm adjustment</Button>
        </aside>
      </div>
    </>
  );
}
