import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE, LINKS } from "@/lib/constants";
import { Container, MetaLabel, SectionHeading } from "@/components/ui/section";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { FadeIn } from "@/components/animations/fade-in";
import { Achievements } from "@/components/about/achievements";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: SITE.positioning,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-[var(--section-pad)] md:pt-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="About"
            description="Engineer-first. Creative technology second."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <FadeIn delay={0.05}>
            <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p className="text-foreground">
                I&apos;m an AI/ML Engineer focused on turning machine learning and modern
                AI capabilities into practical software systems.
              </p>
              <p>
                With {SITE.experienceYears} years of professional experience at{" "}
                {SITE.company}, I work across Generative AI, RAG, LLM applications, AI
                agents, automation, APIs, and deployment — with an engineering mindset
                that prioritizes clarity, reliability, and production readiness.
              </p>
              <p>
                I collaborate closely with clients and stakeholders to frame the problem,
                design the architecture, ship the system, and keep improving it after
                launch. Continuous learning is part of the job — especially as model
                capabilities, tooling, and evaluation practices evolve.
              </p>
              <p>
                Currently based in {SITE.location}, available for selected freelance,
                consulting, and contract AI/ML work.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <aside className="border border-border bg-surface p-6 md:p-8">
              <MetaLabel>Profile</MetaLabel>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm">{SITE.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm">{SITE.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Experience
                  </dt>
                  <dd className="mt-1 text-sm">{SITE.experienceYears} years</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Current
                  </dt>
                  <dd className="mt-1 text-sm">{SITE.company}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm text-muted">
                    GenAI · RAG · Agents · Production AI
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <MagneticLink href={LINKS.email} variant="secondary">
                  Email
                  <ArrowUpRight size={14} />
                </MagneticLink>
                <MagneticLink href={LINKS.linkedin} variant="secondary" external>
                  LinkedIn
                  <ArrowUpRight size={14} />
                </MagneticLink>
                <MagneticLink href={LINKS.resume} variant="ghost" external>
                  Resume
                  <ArrowUpRight size={14} />
                </MagneticLink>
              </div>
            </aside>
          </FadeIn>
        </div>

        <Achievements />
      </Container>
    </div>
  );
}
