import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WritingPost } from "@/types";
import { Container, MetaLabel, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";

export function WritingPreview({ posts }: { posts: WritingPost[] }) {
  return (
    <section id="writing" className="border-b border-border py-[var(--section-pad)]">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            className="mb-0"
            eyebrow="Writing / Insights"
            title="Writing"
            description="Notes on production AI systems, RAG, agents, evaluation, and deployment."
          />
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
          >
            All writing
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04} className="bg-background">
              <Link
                href={`/writing/${post.slug}`}
                className="group flex h-full flex-col p-6 transition-colors hover:bg-surface md:p-8"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <MetaLabel>{post.category}</MetaLabel>
                  <MetaLabel>{post.readTime}</MetaLabel>
                </div>
                <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted group-hover:text-accent">
                  Read
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
