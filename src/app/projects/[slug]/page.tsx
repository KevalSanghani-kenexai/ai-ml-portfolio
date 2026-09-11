import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getVisibleProjects,
} from "@/data/projects";
import { buildMetadata, creativeWorkJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { Container, MetaLabel } from "@/components/ui/section";
import { PipelineDiagram } from "@/components/projects/pipeline-diagram";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { FadeIn } from "@/components/animations/fade-in";

type Props = PageProps<"/projects/[slug]">;

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project not found", noIndex: true });

  return buildMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
  });
}

function CaseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border py-10 md:py-14">
      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <MetaLabel className="md:pt-1">{title}</MetaLabel>
        <div className="max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.isPlaceholder) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <article className="pt-28 md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            creativeWorkJsonLd({
              title: project.title,
              description: project.shortDescription,
              url: absoluteUrl(`/projects/${project.slug}`),
              datePublished: project.year,
            }),
          ),
        }}
      />

      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <FadeIn>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {project.number}
                </span>
                <MetaLabel>{project.category}</MetaLabel>
                <MetaLabel>{project.year}</MetaLabel>
              </div>
              <h1 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
            <div className="border border-border bg-surface p-6">
              <div className="space-y-5">
                <div>
                  <MetaLabel>Role</MetaLabel>
                  <p className="mt-2 text-sm">{project.role}</p>
                </div>
                <div>
                  <MetaLabel>Tech Stack</MetaLabel>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.demo ? (
                    <MagneticLink href={project.demo} variant="secondary" external>
                      Demo
                      <ArrowUpRight size={14} />
                    </MagneticLink>
                  ) : null}
                  {project.github ? (
                    <MagneticLink href={project.github} variant="secondary" external>
                      GitHub
                      <ArrowUpRight size={14} />
                    </MagneticLink>
                  ) : null}
                  {!project.demo && !project.github ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Demo / GitHub links pending
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 min-h-64 border border-border bg-surface p-6 md:p-10">
          <PipelineDiagram steps={project.architecture} />
        </div>

        <CaseBlock title="What problem existed?">
          <p>{project.problem}</p>
        </CaseBlock>

        <CaseBlock title="Context">
          <p>{project.context}</p>
        </CaseBlock>

        <CaseBlock title="Business use case">
          <p>{project.businessUseCase}</p>
        </CaseBlock>

        <CaseBlock title="What did I build?">
          <p>{project.solution}</p>
        </CaseBlock>

        <CaseBlock title="Why this architecture?">
          <p className="mb-6 text-muted">
            The pipeline below reflects the system flow designed for this problem.
          </p>
          <PipelineDiagram steps={project.architecture} />
        </CaseBlock>

        <CaseBlock title="Technology">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border-b border-border pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </CaseBlock>

        <CaseBlock title="Implementation">
          <ul className="space-y-4">
            {project.implementation.map((item) => (
              <li key={item} className="border-l border-accent/40 pl-4 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </CaseBlock>

        <CaseBlock title="Challenges">
          <ul className="space-y-4">
            {project.challenges.map((item) => (
              <li key={item} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </CaseBlock>

        <CaseBlock title="Results">
          <ul className="space-y-4">
            {project.results.map((item) => (
              <li key={item} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </CaseBlock>

        {project.metrics.length > 0 ? (
          <CaseBlock title="Metrics">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border border-border p-5">
                  <MetaLabel>{metric.label}</MetaLabel>
                  <p className="mt-3 text-2xl font-medium tracking-tight">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </CaseBlock>
        ) : null}

        <CaseBlock title="Screenshots">
          {project.images.length > 0 ? (
            <div className="grid gap-4">
              {project.images.map((image) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="border border-border"
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-40 items-center justify-center border border-dashed border-border font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Screenshot placeholders — add assets later
            </div>
          )}
        </CaseBlock>

        <CaseBlock title="Lessons learned">
          <ul className="space-y-4">
            {project.lessons.map((item) => (
              <li key={item} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </CaseBlock>

        {next ? (
          <div className="border-b border-border py-12 md:py-16">
            <MetaLabel>Next project</MetaLabel>
            <Link
              href={`/projects/${next.slug}`}
              className="group mt-4 flex items-end justify-between gap-6"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {next.number}
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                  {next.title}
                </h2>
              </div>
              <ArrowUpRight className="mb-1 text-accent" />
            </Link>
          </div>
        ) : null}

        <div className="py-12">
          <MagneticLink href="/contact" variant="primary">
            Discuss a similar project
            <ArrowUpRight size={14} />
          </MagneticLink>
        </div>
      </Container>
    </article>
  );
}
