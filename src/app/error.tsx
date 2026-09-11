"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center pt-28">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          Error
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page failed to render. You can try again without leaving the portfolio.
        </p>
        <Button className="mt-8" variant="secondary" onClick={reset}>
          Try again
        </Button>
      </Container>
    </div>
  );
}
