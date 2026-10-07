import { ArrowRight, Check, Eye, Zap } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

export default function AuthPage() {
  return (
    <main className="auth-page">
      <section className="auth-visual">
        <div className="brand">
          <span className="brand-mark">
            <Zap size={20} fill="currentColor" />
          </span>
          <span>NEOTEK</span>
        </div>
        <div>
          <Badge tone="blue">MEMBER BENEFITS</Badge>
          <h1>Better tech starts with a better account.</h1>
          <p>
            Track orders, save configurations, manage warranties, and get member
            pricing.
          </p>
          <ul>
            <li>
              <Check size={16} /> Faster checkout
            </li>
            <li>
              <Check size={16} /> Order and warranty tracking
            </li>
            <li>
              <Check size={16} /> Personalized product alerts
            </li>
          </ul>
        </div>
      </section>
      <section className="auth-form">
        <div>
          <p className="eyebrow">WELCOME BACK</p>
          <h1>Sign in to your account</h1>
          <p>
            New to NEOTEK? <strong>Create an account</strong>
          </p>
          <label>
            <span>Email address</span>
            <input defaultValue="yasmine.b@email.dz" />
          </label>
          <label>
            <span>Password</span>
            <div className="password-field">
              <input type="password" defaultValue="password123" />
              <Eye size={17} />
            </div>
          </label>
          <div className="auth-options">
            <label>
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <button type="button">Forgot password?</button>
          </div>
          <Button className="full-width">
            Sign in <ArrowRight size={16} />
          </Button>
          <div className="auth-divider">
            <span>or continue with</span>
          </div>
          <Button variant="secondary" className="full-width">
            Continue with Google
          </Button>
          <small className="auth-legal">
            By continuing, you agree to our Terms and Privacy Policy.
          </small>
        </div>
      </section>
    </main>
  );
}
