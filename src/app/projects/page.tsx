import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getVisibleProjects } from "@/data/projects";
import { Container, MetaLabel, SectionHeading } from "@/components/ui/section";
import { PipelineDiagram } from "@/components/projects/pipeline-diagram";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Selected Work",
  description:
    "Selected AI/ML projects spanning Generative AI, RAG, AI agents, voice systems, and production architecture.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <div className="pt-28 md:pt-32">
      <Container className="pb-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Production-oriented AI systems, experiments and engineering case studies."
        />
      </Container>

      <div className="divide-y divide-border border-y border-border">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.04}>
            <Container>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-8 py-12 md:grid-cols-[1fr_1.3fr] md:py-16"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                      {project.number}
                    </p>
                    <MetaLabel>{project.year}</MetaLabel>
                  </div>
                  <h2 className="mt-5 text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                    {project.shortDescription}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <MetaLabel>Category</MetaLabel>
                      <p className="mt-2 text-sm">{project.category}</p>
                    </div>
                    <div>
                      <MetaLabel>Role</MetaLabel>
                      <p className="mt-2 text-sm">{project.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {project.technologies.slice(0, 8).join(" · ")}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Open case study
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="min-h-56 border border-border bg-surface p-5 transition-colors group-hover:border-accent/40 md:p-8">
                  <PipelineDiagram steps={project.architecture} />
                </div>
              </Link>
            </Container>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
