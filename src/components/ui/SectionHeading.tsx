import { ArrowRight } from "lucide-react";
import Button from "./Button";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  action?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  action = "View all",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      <Button variant="ghost" size="sm">
        {action} <ArrowRight size={16} />
      </Button>
    </div>
  );
}
