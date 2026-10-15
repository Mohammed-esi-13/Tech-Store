import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import { pcBuilderIcons } from "../../../data/storefront";

export default function BuilderBanner() {
  const navigate = useNavigate();

  return (
    <section className="builder-banner">
      <div>
        <Badge tone="blue">BUILD. CHECK. PLAY.</Badge>
        <h2>Your perfect PC, part by part.</h2>
        <p>
          Pick components with confidence. Our visual builder checks compatibility
          and power requirements as you go.
        </p>
        <Button onClick={() => navigate("/builder")}>
          Start your build <ArrowRight size={17} />
        </Button>
      </div>
      <div className="builder-parts">
        {pcBuilderIcons.map((Icon, index) => (
          <span key={index}>
            <Icon size={30} />
          </span>
        ))}
      </div>
    </section>
  );
}
