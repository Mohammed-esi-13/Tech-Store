import {
  BadgeCheck,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import products from "../../data/products";

export default function ProductPage() {
  const product = products[0];

  return (
    <main className="page-section product-page">
      <div className="breadcrumb">Home / Laptops / ASUS / ROG Strix G16</div>
      <div className="product-detail">
        <div className="gallery">
          <div className="thumbs">
            {[product.image, products[3].image, product.image, products[2].image].map(
              (image, index) => (
                <button type="button" key={index}>
                  <img src={image} alt="" />
                </button>
              ),
            )}
          </div>
          <div className="gallery-main">
            <img src={product.image} alt="ASUS ROG Strix G16" />
            <Badge tone="red">-10%</Badge>
            <IconButton label="Add to wishlist">
              <Heart size={19} />
            </IconButton>
          </div>
        </div>
        <div className="detail-copy">
          <div className="detail-brand">
            ASUS{" "}
            <Badge tone="green">
              <BadgeCheck size={13} /> Official
            </Badge>
          </div>
          <h1>ROG Strix G16 Gaming Laptop</h1>
          <code>G614JV-N4071W · SKU NT-AS-10482</code>
          <div className="rating detail-rating">
            <span className="stars">★★★★★</span>
            <strong>4.8</strong>
            <span>124 reviews</span>
          </div>
          <div className="detail-badges">
            <Badge tone="green">In stock</Badge>
            <Badge>New</Badge>
            <Badge tone="blue">2 year warranty</Badge>
          </div>
          <p className="detail-lead">
            Dominate every match with desktop-class power, intelligent cooling, and
            an immersive Nebula display.
          </p>
          <div className="configuration">
            <strong>Memory</strong>
            <div>
              <button className="config-option active" type="button">
                16GB
              </button>
              <button className="config-option" type="button">
                32GB <small>+24 000 DA</small>
              </button>
            </div>
          </div>
          <div className="configuration">
            <strong>Storage</strong>
            <div>
              <button className="config-option active" type="button">
                1TB SSD
              </button>
              <button className="config-option" type="button">
                2TB SSD <small>+18 000 DA</small>
              </button>
            </div>
          </div>
          <div className="detail-price">
            <span>
              <del>319 900 DA</del>
              <strong>289 900 DA</strong>
            </span>
            <small>or 12 monthly payments from 24 158 DA</small>
          </div>
          <div className="buy-row">
            <div className="quantity">
              <Minus size={15} />
              <span>1</span>
              <Plus size={15} />
            </div>
            <Button className="grow">
              <ShoppingCart size={18} /> Add to cart
            </Button>
            <Button variant="secondary">Buy now</Button>
          </div>
          <div className="delivery-card">
            <Truck size={20} />
            <span>
              <strong>Delivery to Algiers</strong>
              <small>Estimated 24–48 hours · Free</small>
            </span>
            <ChevronRight size={17} />
          </div>
        </div>
      </div>
      <div className="detail-tabs">
        <span>Overview</span>
        <span className="active">Specifications</span>
        <span>Reviews (124)</span>
        <span>Q&amp;A</span>
        <span>Warranty &amp; returns</span>
      </div>
      <div className="specification-card">
        <div>
          <h3>Processor</h3>
          <dl>
            <dt>Processor</dt>
            <dd>Intel Core i7-13650HX</dd>
            <dt>Cores / Threads</dt>
            <dd>14 / 20</dd>
            <dt>Boost clock</dt>
            <dd>Up to 4.9 GHz</dd>
          </dl>
        </div>
        <div>
          <h3>Memory &amp; storage</h3>
          <dl>
            <dt>Memory</dt>
            <dd>16GB DDR5-4800</dd>
            <dt>Storage</dt>
            <dd>1TB PCIe 4.0 NVMe SSD</dd>
            <dt>Upgradeable</dt>
            <dd>Up to 64GB</dd>
          </dl>
        </div>
        <div>
          <h3>Display &amp; graphics</h3>
          <dl>
            <dt>Display</dt>
            <dd>16-inch QHD+ 165Hz</dd>
            <dt>Graphics</dt>
            <dd>NVIDIA RTX 4070 8GB</dd>
            <dt>Response time</dt>
            <dd>3ms</dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
