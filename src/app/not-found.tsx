import Link from "next/link";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center pt-28">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          404
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
        >
          Back home
        </Link>
      </Container>
    </div>
  );
}
