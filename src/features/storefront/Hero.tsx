import { useNavigate } from "react-router";
import { ArrowRight, Cpu, Gauge, Sparkles } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { DEFAULT_PRODUCT_ID, toProductPath, getProductById } from "../../services/products";

export default function Hero() {
  const navigate = useNavigate();
  const featured = getProductById(DEFAULT_PRODUCT_ID);

  return (
    <section className="hero">
      <div className="hero-copy">
        <Badge tone="blue">
          <Sparkles size={13} /> Next-gen performance
        </Badge>
        <p className="eyebrow">ROG GAMING WEEK</p>
        <h1>Power without limits.</h1>
        <p>
          Level up with the ASUS ROG Strix G16. RTX 4070 graphics, a 165Hz display,
          and the cooling to push every frame.
        </p>
        <div className="hero-price">
          <span>Starting at</span>
          <strong>289 900 DA</strong>
        </div>
        <div className="hero-actions">
          <Button onClick={() => navigate("/catalog")}>
            Shop the collection <ArrowRight size={17} />
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              navigate(featured ? toProductPath(featured) : "/catalog")
            }
          >
            Explore specs
          </Button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orb" />
        <img
          src="https://images.unsplash.com/photo-1785245566050-8aaa947c74b8?auto=format&fit=crop&w=1200&q=90"
          alt="Gaming laptop illuminated in a dark studio"
        />
        <div className="floating-spec floating-spec-one">
          <Cpu size={18} />
          <span>
            Intel Core
            <strong>i7-13650HX</strong>
          </span>
        </div>
        <div className="floating-spec floating-spec-two">
          <Gauge size={18} />
          <span>
            Display
            <strong>165Hz</strong>
          </span>
        </div>
      </div>
      <div className="hero-dots">
        <span className="active" />
        <span />
        <span />
      </div>
    </section>
  );
}
