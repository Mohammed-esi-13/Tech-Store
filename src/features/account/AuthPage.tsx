import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { ArrowRight, Check, Eye, Zap } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { useAuth } from "../../stores/auth";

export default function AuthPage() {
  const { isAuthenticated, isAdmin, signInAsCustomer, signInAsAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from;

  if (isAuthenticated) {
    // Already signed in: admins return to where they came from (often /admin),
    // customers go to their account.
    return <Navigate to={from ?? (isAdmin ? "/admin" : "/account")} replace />;
  }

  const continueAsCustomer = () => {
    signInAsCustomer();
    navigate(from ?? "/account", { replace: true });
  };

  const continueAsAdmin = () => {
    signInAsAdmin();
    navigate(from ?? "/admin", { replace: true });
  };

  return (
    <main className="auth-page">
      <section className="auth-visual">
        <Link to="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
          <span className="brand-mark">
            <Zap size={20} fill="currentColor" />
          </span>
          <span>NEOTEK</span>
        </Link>
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
          <Button className="full-width" onClick={continueAsCustomer}>
            Sign in <ArrowRight size={16} />
          </Button>
          <div className="auth-divider">
            <span>or continue with a demo role</span>
          </div>
          <Button variant="secondary" className="full-width" onClick={continueAsCustomer}>
            Continue as customer
          </Button>
          <div style={{ height: 8 }} />
          <Button variant="secondary" className="full-width" onClick={continueAsAdmin}>
            Continue as admin
          </Button>
          <small className="auth-legal">
            Demo auth: no backend yet. Customer unlocks account &amp; checkout;
            admin unlocks the /admin area.
          </small>
        </div>
      </section>
    </main>
  );
}
