import { ArrowRight, Plus, Search, ShieldCheck } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { supportOptions, warrantyQuestions } from "../../data/support";

export default function SupportPage() {
  return (
    <main className="page-section support-page">
      <div className="support-hero">
        <Badge tone="blue">WE’RE HERE TO HELP</Badge>
        <h1>Expert support, before and after your purchase.</h1>
        <p>Get product advice, track an order, or start a warranty request.</p>
        <div className="support-search">
          <Search size={20} />
          <input placeholder="What can we help you with?" />
          <Button>Search</Button>
        </div>
      </div>
      <div className="support-grid">
        {supportOptions.map(([Icon, title, text]) => (
          <article key={title}>
            <span>
              <Icon size={23} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
            <Button variant="ghost" size="sm">
              Learn more <ArrowRight size={14} />
            </Button>
          </article>
        ))}
      </div>
      <div className="policy-layout">
        <article>
          <h2>Warranty policy</h2>
          <p>
            All products include clear warranty coverage from the manufacturer or
            NEOTEK. Coverage details are displayed on every product page and order
            record.
          </p>
          {warrantyQuestions.map((item) => (
            <details key={item}>
              <summary>
                {item}
                <Plus size={16} />
              </summary>
              <p>
                Keep your invoice and product serial number. Claims are reviewed by
                our technical team and tracked from your customer account.
              </p>
            </details>
          ))}
        </article>
        <aside>
          <ShieldCheck size={34} />
          <h3>Need to start a claim?</h3>
          <p>Have your order number and serial number ready.</p>
          <Button className="full-width">Start warranty request</Button>
          <Button variant="secondary" className="full-width">
            Contact support
          </Button>
        </aside>
      </div>
    </main>
  );
}
