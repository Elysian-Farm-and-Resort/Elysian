"use client";

import { useEffect } from "react";
import Link from "next/link";
import StatusPage from "@/components/StatusPage";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      eyebrow="Something went wrong"
      heading="That didn't go as planned."
      body="An unexpected error happened on our side. You can try again, or head back to the home page."
    >
      <button type="button" className="btn btn-primary" onClick={reset}>
        Try again
      </button>
      <Link href="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </StatusPage>
  );
}