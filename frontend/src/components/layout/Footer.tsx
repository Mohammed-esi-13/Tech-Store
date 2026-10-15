import { ArrowRight, Zap } from "lucide-react";
import Button from "../ui/Button";
import { footerSections } from "../../data/layout";

export default function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <div>
          <p className="eyebrow">STAY AHEAD</p>
          <h2>Fresh tech, straight to your inbox.</h2>
          <p>New drops, honest advice, and members-only prices.</p>
        </div>
        <div className="newsletter-input">
          <input placeholder="Email address" />
          <Button>
            Subscribe <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      <div className="footer-grid">
        <div>
          <div className="brand">
            <span className="brand-mark">
              <Zap size={20} fill="currentColor" />
            </span>
            <span>NEOTEK</span>
          </div>
          <p>Technology selected by people who understand it.</p>
        </div>
        {footerSections.map(([title, links]) => (
          <div key={title}>
            <strong>{title}</strong>
            {links.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2025 NEOTEK Algeria. All rights reserved.</span>
        <span>Visa · CIB · Edahabia · Cash on delivery</span>
      </div>
    </footer>
  );
}
