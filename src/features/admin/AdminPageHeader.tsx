import { Download, Plus } from "lucide-react";
import Button from "../../components/ui/Button";

type AdminPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: string;
};

export default function AdminPageHeader({
  eyebrow,
  title,
  description,
  action = "Add new",
}: AdminPageHeaderProps) {
  return (
    <div className="admin-title">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <Button variant="secondary">
          <Download size={16} /> Export
        </Button>
        <Button>
          <Plus size={16} /> {action}
        </Button>
      </div>
    </div>
  );
}
