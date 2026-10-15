import { useNavigate } from "react-router";
import {
  Box,
  Check,
  Download,
  Gauge,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import { getDefaultProduct } from "../../services/products";
import { useCart } from "../../stores/cart";
import { pcBuilderParts } from "../../data/storefront";

export default function PCBuilderPage() {
  const navigate = useNavigate();
  const { add } = useCart();

  const addBuildToCart = () => {
    add(getDefaultProduct(), 1);
    navigate("/cart");
  };

  return (
    <main className="page-section builder-page">
      <div className="builder-title">
        <div>
          <p className="eyebrow">SMART PC BUILDER</p>
          <h1>Build without the guesswork.</h1>
          <p>
            Choose your parts. We’ll visually flag compatibility and estimated power.
          </p>
        </div>
        <Badge tone="green">
          <Check size={14} /> All parts compatible
        </Badge>
      </div>
      <div className="builder-layout">
        <div className="parts-list">
          {pcBuilderParts.map(([Icon, type, name, price], index) => (
            <article className="part-card" key={type}>
              <span className="step-number">{index + 1}</span>
              <span className="part-icon">
                <Icon size={23} />
              </span>
              <div>
                <small>{type}</small>
                <strong>{name}</strong>
                <code>
                  {index === 1 ? "LGA1700 · DDR5 · ATX" : "Selected component"}
                </code>
              </div>
              <Badge tone="green">
                <Check size={12} /> Compatible
              </Badge>
              <strong>{price}</strong>
              <IconButton label="More options">
                <MoreHorizontal size={18} />
              </IconButton>
            </article>
          ))}
          <article className="part-card empty-part">
            <span className="step-number">7</span>
            <span className="part-icon">
              <Box size={23} />
            </span>
            <div>
              <small>Case</small>
              <strong>Choose a PC case</strong>
              <code>ATX motherboard support required</code>
            </div>
            <Button variant="secondary" size="sm">
              <Plus size={15} /> Choose part
            </Button>
          </article>
        </div>
        <aside className="build-summary">
          <h3>Build summary</h3>
          <div className="wattage">
            <Gauge size={26} />
            <span>
              <small>Estimated wattage</small>
              <strong>574W / 850W</strong>
            </span>
          </div>
          <div className="power-bar">
            <span />
          </div>
          <ul>
            <li>
              <span>6 components</span>
              <strong>392 900 DA</strong>
            </li>
            <li>
              <span>Assembly</span>
              <strong>Free</strong>
            </li>
            <li>
              <span>Build warranty</span>
              <strong>2 years</strong>
            </li>
          </ul>
          <div className="summary-total">
            <span>Total</span>
            <strong>392 900 DA</strong>
          </div>
          <Button className="full-width" onClick={addBuildToCart}>
            Add build to cart
          </Button>
          <Button className="full-width" variant="secondary">
            <Download size={16} /> Save build as PDF
          </Button>
        </aside>
      </div>
    </main>
  );
}
