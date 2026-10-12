import { Link, useParams } from "react-router";
import Button from "../../components/ui/Button";
import { PageEmpty } from "../../components/shared/PageState";
import { getProductById } from "../../services/products";
import ProductEditorPreview from "./ProductEditorPreview";

/**
 * /admin/products/new and /admin/products/:id/edit.
 * Reuses the existing <ProductEditorPreview /> form so there is exactly
 * one product-editor implementation.
 */
export default function ProductEditorPage() {
  const { id } = useParams();
  const isNew = id === undefined;
  const product = isNew ? undefined : getProductById(id);

  if (!isNew && !product) {
    return (
      <main className="admin-content module-page">
        <PageEmpty
          title="Product not found"
          text="This product may have been deleted."
          action={
            <Link to="/admin/products">
              <Button variant="secondary">Back to products</Button>
            </Link>
          }
        />
      </main>
    );
  }

  return (
    <main className="admin-content module-page">
      <div className="breadcrumb">
        <Link to="/admin/products">Products</Link> / {isNew ? "New" : product?.model}
      </div>
      <div className="admin-title">
        <div>
          <p className="eyebrow">{isNew ? "NEW PRODUCT" : "EDIT PRODUCT"}</p>
          <h1>{isNew ? "Add product" : `${product?.brand} ${product?.name}`}</h1>
          <p>
            {isNew
              ? "Create a new catalog entry with media, specs and variants."
              : `Editing ${product?.model}. Changes update the storefront preview.`}
          </p>
        </div>
        <div>
          <Link to="/admin/products">
            <Button variant="secondary">Back to products</Button>
          </Link>
        </div>
      </div>
      <ProductEditorPreview />
    </main>
  );
}
