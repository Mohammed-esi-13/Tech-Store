import { Link, useSearchParams } from "react-router";
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Grid2X2,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import ProductCard from "../../components/ui/ProductCard";
import { PageEmpty } from "../../components/shared/PageState";
import { getAllProducts, searchProducts } from "../../services/products";
import { shopFilters } from "../../data/storefront";

export default function ShopPage() {
  const [params] = useSearchParams();
  const query = params.get("search") ?? "";
  const base = getAllProducts();
  const visible = query ? searchProducts(query) : [...base, ...base];

  return (
    <main className="page-section shop-page">
      <div className="breadcrumb">Home / Laptops / Gaming laptops</div>
      <div className="shop-title">
        <div>
          <p className="eyebrow">284 PRODUCTS</p>
          <h1>{query ? `Results for “${query}”` : "Gaming laptops"}</h1>
          <p>High-performance machines built for serious play.</p>
        </div>
        <div className="view-tools">
          <Button variant="secondary">
            Featured <ChevronDown size={16} />
          </Button>
          <IconButton label="Grid view">
            <Grid2X2 size={18} />
          </IconButton>
          <IconButton label="List view">
            <List size={18} />
          </IconButton>
        </div>
      </div>
      <div className="active-filters">
        <Badge tone="blue">
          ASUS <X size={12} />
        </Badge>
        <Badge tone="blue">
          16GB RAM <X size={12} />
        </Badge>
        <Badge tone="blue">
          RTX 40 Series <X size={12} />
        </Badge>
        <Button variant="ghost" size="sm">
          Clear all
        </Button>
      </div>
      <div className="catalog-layout">
        <aside className="filters-card">
          <div className="filter-heading">
            <strong>Filters</strong>
            <SlidersHorizontal size={18} />
          </div>
          {shopFilters.map(([title, options]) => (
            <div className="filter-group" key={title}>
              <strong>{title}</strong>
              {options.map((option, index) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    defaultChecked={index === 0 && title === "Brand"}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          ))}
          <div className="filter-group">
            <strong>Price range</strong>
            <input className="range" type="range" defaultValue="65" />
            <div className="price-inputs">
              <span>85 000 DA</span>
              <span>650 000 DA</span>
            </div>
          </div>
        </aside>
        <div>
          <Button variant="secondary" className="mobile-filter">
            <Filter size={17} /> Filter products
          </Button>
          {visible.length === 0 ? (
            <PageEmpty
              title="No products found"
              text={`Nothing matches “${query}”. Try another brand, model or category.`}
              action={
                <Link to="/catalog">
                  <Button variant="secondary">Clear search</Button>
                </Link>
              }
            />
          ) : (
            <div className="product-grid catalog-grid">
              {visible.map((product, index) => (
                <ProductCard product={product} key={`${product.model}-${index}`} />
              ))}
            </div>
          )}
          <div className="pagination">
            <Button variant="secondary" size="icon">
              <ChevronRight size={17} />
            </Button>
            <Button size="icon">1</Button>
            <Button variant="secondary" size="icon">
              2
            </Button>
            <Button variant="secondary" size="icon">
              3
            </Button>
            <span>...</span>
            <Button variant="secondary" size="icon">
              18
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
