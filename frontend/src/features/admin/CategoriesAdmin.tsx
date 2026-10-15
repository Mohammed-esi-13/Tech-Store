import { ChevronDown, Laptop, MoreHorizontal, Package, X } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { categoryTree } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function CategoriesAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="CATALOG STRUCTURE"
        title="Categories"
        description="Organize products and assign category-specific specification templates."
        action="Add category"
      />
      <div className="category-admin-layout">
        <article className="tree-card">
          <div className="card-title">
            <div>
              <h3>Category tree</h3>
              <p>Drag categories to reorder or change parent</p>
            </div>
            <Button variant="secondary" size="sm">
              Expand all
            </Button>
          </div>
          {categoryTree.map(([name, count, depth], index) => (
            <div
              className="tree-row"
              style={{ paddingLeft: `${depth * 24 + 12}px` }}
              key={name}
            >
              <span className="drag-handle">••</span>
              {depth < 2 ? (
                <ChevronDown size={15} />
              ) : (
                <span className="tree-dot" />
              )}
              <span className="category-mini-icon">
                {index % 3 === 0 ? <Laptop size={16} /> : <Package size={16} />}
              </span>
              <strong>{name}</strong>
              <Badge>{count} products</Badge>
              <code>/{name.toLowerCase().replace(/ /g, "-")}</code>
              <MoreHorizontal size={16} />
            </div>
          ))}
        </article>
        <aside className="form-card category-dialog">
          <div className="card-title">
            <div>
              <h3>Edit category</h3>
              <p>Gaming Laptops</p>
            </div>
            <X size={17} />
          </div>
          <label>
            <span>Category name</span>
            <input defaultValue="Gaming Laptops" />
          </label>
          <label>
            <span>Slug</span>
            <input defaultValue="gaming-laptops" />
          </label>
          <label>
            <span>Parent category</span>
            <button type="button" className="select-field">
              Laptops <ChevronDown size={15} />
            </button>
          </label>
          <label>
            <span>Specification template</span>
            <button type="button" className="select-field">
              Laptop specifications <ChevronDown size={15} />
            </button>
          </label>
          <div className="category-cover">
            <Laptop size={28} />
            <span>
              <strong>Category image</strong>
              <small>Drop an image or browse</small>
            </span>
          </div>
          <Button className="full-width">Save category</Button>
        </aside>
      </div>
    </>
  );
}
