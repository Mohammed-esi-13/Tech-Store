import { Check, ChevronDown, Eye, Plus, X } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import ProductCard from "../../components/ui/ProductCard";
import { productEditorSpecs, productEditorVariants } from "../../data/admin";
import products from "../../data/products";

export default function ProductEditorPreview() {
  return (
    <section className="editor-preview">
      <div className="sticky-save">
        <div>
          <strong>Add product</strong>
          <small>Unsaved draft · Product card preview enabled</small>
        </div>
        <Button variant="secondary">Save draft</Button>
        <Button>
          <Check size={16} /> Publish product
        </Button>
      </div>
      <div className="editor-layout">
        <div className="editor-form">
          <div className="form-card">
            <div className="card-title">
              <div>
                <h3>Basic information</h3>
                <p>Product identity and catalog placement</p>
              </div>
              <Badge tone="blue">Required</Badge>
            </div>
            <div className="field-grid">
              <label className="wide">
                <span>Product name</span>
                <input defaultValue="ROG Strix G16 Gaming Laptop" />
              </label>
              <label>
                <span>Brand</span>
                <button type="button" className="select-field">
                  ASUS <ChevronDown size={15} />
                </button>
              </label>
              <label>
                <span>Category</span>
                <button type="button" className="select-field">
                  Gaming laptops <ChevronDown size={15} />
                </button>
              </label>
              <label>
                <span>Model number</span>
                <input defaultValue="G614JV-N4071W" />
              </label>
              <label>
                <span>SKU</span>
                <input defaultValue="NT-AS-10482" />
              </label>
            </div>
          </div>
          <div className="form-card">
            <div className="card-title">
              <div>
                <h3>Media</h3>
                <p>Drag to reorder. First image becomes the cover.</p>
              </div>
              <Button variant="secondary" size="sm">
                <Plus size={14} /> Add media
              </Button>
            </div>
            <div className="upload-grid">
              <div className="upload-drop">
                <Plus size={20} />
                <strong>Upload images</strong>
                <small>PNG, JPG or WEBP</small>
              </div>
              {products.slice(0, 3).map((product) => (
                <div className="upload-image" key={product.model}>
                  <img src={product.image} alt="" />
                  <Badge tone="blue">Cover</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="form-card">
            <div className="card-title">
              <div>
                <h3>Dynamic specifications</h3>
                <p>Template: Gaming laptop</p>
              </div>
              <Button variant="secondary" size="sm">
                <Plus size={14} /> Custom spec
              </Button>
            </div>
            {productEditorSpecs.map(([key, value], index) => (
              <div className="spec-edit-row" key={key}>
                <span className="drag-handle">••</span>
                <input defaultValue={key} />
                <input defaultValue={value} />
                <label>
                  <input type="checkbox" defaultChecked={index < 4} /> Key spec
                </label>
                <X size={15} />
              </div>
            ))}
          </div>
          <div className="form-card">
            <div className="card-title">
              <div>
                <h3>Variants & inventory</h3>
                <p>RAM × Storage × Color matrix</p>
              </div>
              <Button variant="secondary" size="sm">
                <Plus size={14} /> Add option
              </Button>
            </div>
            <div className="variant-head">
              <span>Variant</span>
              <span>SKU</span>
              <span>Price</span>
              <span>Stock</span>
            </div>
            {productEditorVariants.map((variant, index) => (
              <div className="variant-row" key={variant}>
                <strong>{variant}</strong>
                <code>G614-{16 + index}-1T</code>
                <span>{289900 + index * 24000} DA</span>
                <Badge tone={index === 2 ? "amber" : "green"}>
                  {index === 2 ? "3 left" : 18 - index * 5}
                </Badge>
              </div>
            ))}
          </div>
        </div>
        <aside className="preview-panel">
          <p className="eyebrow">LIVE PREVIEW</p>
          <ProductCard product={products[0]} />
          <div className="preview-note">
            <Eye size={16} />
            <span>
              <strong>Customer-facing preview</strong>
              <small>Updates as product fields change.</small>
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
