import {
  ChevronDown,
  Filter,
  Grid2X2,
  List,
  MoreHorizontal,
  Package,
  Search,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import products from "../../data/products";
import { productKpis } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";
import ProductEditorPreview from "./ProductEditorPreview";

export default function ProductsAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="CATALOG"
        title="Products"
        description="Manage your catalog, pricing, variants, and visibility."
        action="Add product"
      />
      <div className="module-kpis">
        {productKpis.map(([value, label], index) => (
          <div key={label}>
            <span className={`kpi-icon kpi-${index === 3 ? "amber" : "blue"}`}>
              <Package size={18} />
            </span>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <div className="admin-filterbar">
        <div>
          <Search size={16} />
          <input placeholder="Search products, model, SKU..." />
        </div>
        <Button variant="secondary">
          <Filter size={16} /> Category
        </Button>
        <Button variant="secondary">
          Brand <ChevronDown size={15} />
        </Button>
        <Button variant="secondary">
          Stock <ChevronDown size={15} />
        </Button>
        <div className="view-spacer" />
        <IconButton label="Table view">
          <List size={17} />
        </IconButton>
        <IconButton label="Grid view">
          <Grid2X2 size={17} />
        </IconButton>
      </div>
      <article className="table-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Price</th>
                <th>Cost</th>
                <th>Margin</th>
                <th>Stock</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {products.concat(products).map((product, index) => (
                <tr key={`${product.model}-${index}`}>
                  <td>
                    <div className="product-cell">
                      <img src={product.image} alt="" />
                      <span>
                        <strong>
                          {product.brand} {product.name}
                        </strong>
                        <code>{product.model}</code>
                      </span>
                    </div>
                  </td>
                  <td>
                    <code>
                      NT-{product.brand.slice(0, 2)}-{1042 + index}
                    </code>
                  </td>
                  <td>{index % 2 ? "Smartphones" : "Laptops"}</td>
                  <td>
                    <strong>{product.price}</strong>
                  </td>
                  <td>{index % 2 ? "48 500 DA" : "214 000 DA"}</td>
                  <td>
                    <Badge tone="green">{index % 2 ? "29%" : "26%"}</Badge>
                  </td>
                  <td>
                    <Badge
                      tone={index === 3 ? "red" : index === 0 ? "amber" : "green"}
                    >
                      {index === 3 ? "Out" : index === 0 ? "3 left" : `${18 + index}`}
                    </Badge>
                  </td>
                  <td>
                    <Badge tone={index === 5 ? "neutral" : "green"}>
                      {index === 5 ? "Draft" : "Active"}
                    </Badge>
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
      <ProductEditorPreview />
    </>
  );
}
