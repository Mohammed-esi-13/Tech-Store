import { AlertTriangle, PackageSearch } from "lucide-react";
import type { ReactNode } from "react";
import Button from "../../components/ui/Button";

export function PageLoading({ label = "Loading…" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{ padding: "56px 0", textAlign: "center", color: "var(--muted)" }}
    >
      {label}
    </div>
  );
}

export function PageEmpty({
  title,
  text,
  action,
}: {
  title: string;
  text?: string;
  action?: ReactNode;
}) {
  return (
    <div style={{ padding: "48px 24px", textAlign: "center" }}>
      <div
        style={{
          width: 52,
          height: 52,
          margin: "0 auto 14px",
          display: "grid",
          placeItems: "center",
          color: "var(--primary)",
          background: "color-mix(in srgb, var(--primary) 8%, var(--surface))",
          borderRadius: 14,
        }}
      >
        <PackageSearch size={24} />
      </div>
      <h2 style={{ margin: "0 0 8px", letterSpacing: "-0.02em" }}>{title}</h2>
      {text && (
        <p style={{ margin: "0 0 18px", color: "var(--muted)", fontSize: 13 }}>{text}</p>
      )}
      {action}
    </div>
  );
}

export function PageError({
  title = "Something went wrong",
  text = "Please try again. If the problem persists, contact support.",
  onRetry,
}: {
  title?: string;
  text?: string;
  onRetry?: () => void;
}) {
  return (
    <div style={{ padding: "48px 24px", textAlign: "center" }}>
      <div
        style={{
          width: 52,
          height: 52,
          margin: "0 auto 14px",
          display: "grid",
          placeItems: "center",
          color: "var(--danger)",
          background: "color-mix(in srgb, var(--danger) 8%, var(--surface))",
          borderRadius: 14,
        }}
      >
        <AlertTriangle size={24} />
      </div>
      <h2 style={{ margin: "0 0 8px" }}>{title}</h2>
      <p style={{ margin: "0 0 18px", color: "var(--muted)", fontSize: 13 }}>{text}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
