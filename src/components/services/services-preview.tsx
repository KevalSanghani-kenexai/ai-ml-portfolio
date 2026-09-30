import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { Container, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function ServicesPreview({
  services,
  limit,
}: {
  services: Service[];
  limit?: number;
}) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="border-b border-border py-[var(--section-pad)]">
      <Container>
        <SectionHeading
          eyebrow="What I Build"
          title="What I build"
          description="From RAG systems and agents to APIs, deployment, and consulting."
        />

        <div className="divide-y divide-border border-y border-border">
          {items.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.03}>
              <article className="grid gap-6 py-8 md:grid-cols-[120px_1.2fr_1fr] md:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {service.number}
                </p>
                <div>
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {service.summary}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {service.technologies.slice(0, 4).join(" · ")}
                  </p>
                  <MagneticLink href="/contact" variant="ghost" className="self-start">
                    Discuss this
                    <ArrowUpRight size={14} />
                  </MagneticLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {limit ? (
          <div className="mt-10 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
            >
              View all services
              <ArrowUpRight size={14} />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
