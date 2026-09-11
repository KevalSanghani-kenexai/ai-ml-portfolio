"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Container, MetaLabel, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { useCursor } from "@/hooks/use-cursor";
import { PipelineDiagram } from "@/components/projects/pipeline-diagram";
import { cn } from "@/lib/utils";

export function SelectedWork({ projects }: { projects: Project[] }) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="work" className="border-b border-border py-[var(--section-pad)]">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            className="mb-0"
            eyebrow="Selected Work"
            title="Selected Work"
            description="Production-oriented AI systems, experiments and engineering projects."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
            onMouseEnter={() => setCursor("view", "VIEW")}
            onMouseLeave={resetCursor}
          >
            View all
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.04}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-8 py-10 transition-colors md:grid-cols-[0.9fr_1.4fr_1.2fr] md:py-14"
                onMouseEnter={() => setCursor("view", "VIEW")}
                onMouseLeave={resetCursor}
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                    {project.number}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <MetaLabel>Category</MetaLabel>
                      <p className="mt-2 text-sm">{project.category}</p>
                    </div>
                    <div>
                      <MetaLabel>Year</MetaLabel>
                      <p className="mt-2 text-sm">{project.year}</p>
                    </div>
                    <div className="col-span-2">
                      <MetaLabel>Tech</MetaLabel>
                      <p className="mt-2 text-sm text-muted">
                        {project.technologies.slice(0, 6).join(" · ")}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Case study
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>

                  <div
                  className={cn(
                    "relative min-h-48 overflow-hidden border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-colors duration-300 group-hover:border-accent/35 group-hover:bg-white/[0.05]",
                  )}
                >
                  <PipelineDiagram steps={project.architecture} compact />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
