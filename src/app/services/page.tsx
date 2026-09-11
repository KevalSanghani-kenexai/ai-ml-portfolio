import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { ServicesPreview } from "@/components/services/services-preview";
import { ContactCTA } from "@/components/contact/contact-cta";
import { Container, MetaLabel } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Generative AI applications, RAG systems, AI agents, LLM integrations, MLOps, cloud AI, and consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-32">
      <Container className="pb-4">
        <FadeIn>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            What I Build
          </p>
          <h1 className="max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            Services
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            Practical AI engineering for teams that need systems that ship — not
            slideware.
          </p>
        </FadeIn>
      </Container>

      <ServicesPreview services={services} />

      <Container className="pb-[var(--section-pad)]">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="bg-background p-6 md:p-8">
              <MetaLabel>{service.number}</MetaLabel>
              <h2 className="mt-4 text-xl font-medium tracking-tight md:text-2xl">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{service.solves}</p>
              <p className="mt-4 text-sm text-foreground/90">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Typical deliverable
                </span>
                <span className="mt-2 block">{service.deliverable}</span>
              </p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {service.technologies.join(" · ")}
              </p>
              <MagneticLink href="/contact" variant="ghost" className="mt-6">
                Start a conversation
                <ArrowUpRight size={14} />
              </MagneticLink>
            </article>
          ))}
        </div>
      </Container>

      <ContactCTA />
    </div>
  );
}
