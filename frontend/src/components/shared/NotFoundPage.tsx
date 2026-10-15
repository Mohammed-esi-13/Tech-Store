import { Link } from "react-router";
import { ArrowLeft, Compass } from "lucide-react";
import Button from "../ui/Button";

/** Catch-all 404. Rendered inside the public layout (header + bottom nav kept). */
export default function NotFoundPage() {
  return (
    <main className="page-section" style={{ textAlign: "center", padding: "72px 0" }}>
      <p className="eyebrow">404 — PAGE NOT FOUND</p>
      <h1 style={{ fontSize: 40, letterSpacing: "-0.04em", margin: "0 0 10px" }}>
        This page doesn&apos;t exist.
      </h1>
      <p style={{ color: "var(--muted)", margin: "0 0 24px" }}>
        The link may be broken, or the page may have moved.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <Link to="/">
          <Button>
            <ArrowLeft size={16} /> Back home
          </Button>
        </Link>
        <Link to="/catalog">
          <Button variant="secondary">
            <Compass size={16} /> Browse catalog
          </Button>
        </Link>
      </div>
    </main>
  );
}
