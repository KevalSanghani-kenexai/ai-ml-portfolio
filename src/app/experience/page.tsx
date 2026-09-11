import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { experience } from "@/data/experience";
import { Container, MetaLabel, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "Professional experience as an AI/ML Engineer building production Generative AI and ML systems.",
  path: "/experience",
});

export default function ExperiencePage() {
  const items = experience.filter((item) => !item.isPlaceholder);

  return (
    <div className="pt-28 pb-[var(--section-pad)] md:pt-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="Focused on AI/ML engineering, solution architecture, and shipping production systems."
        />

        <div className="relative border-l border-border pl-6 md:pl-10">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <article className="relative mb-12 last:mb-0">
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 border border-accent bg-background md:-left-[2.9rem]" />
                <div className="flex flex-wrap items-center gap-3">
                  <MetaLabel>{item.period}</MetaLabel>
                  {item.current ? (
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
                      Present
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                  {item.role}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="border-l border-border pl-4 text-sm leading-relaxed text-muted md:text-base"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {item.technologies.join(" · ")}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {experience.some((item) => item.isPlaceholder) ? (
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Earlier roles available as placeholders in src/data/experience.ts
          </p>
        ) : null}
      </Container>
    </div>
  );
}
