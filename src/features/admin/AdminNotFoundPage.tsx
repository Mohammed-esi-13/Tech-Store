import { Link } from "react-router";
import Button from "../../components/ui/Button";
import { PageEmpty } from "../../components/shared/PageState";

/** Fallback for unknown /admin/* URLs. Rendered inside the admin layout. */
export default function AdminNotFoundPage() {
  return (
    <main className="admin-content module-page">
      <PageEmpty
        title="Admin page not found"
        text="This admin section doesn't exist."
        action={
          <Link to="/admin">
            <Button variant="secondary">Back to dashboard</Button>
          </Link>
        }
      />
    </main>
  );
}
