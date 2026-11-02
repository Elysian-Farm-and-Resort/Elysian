import Link from "next/link";
import StatusPage from "@/components/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      eyebrow="Page not found"
      heading="This path doesn't lead anywhere yet."
      body="The page you're looking for may have moved, or it never existed. Let's get you back to somewhere real."
    >
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
      <Link href="/journey" className="btn btn-secondary">
        Our Journey
      </Link>
    </StatusPage>
  );
}