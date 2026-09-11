import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { writing } from "@/data/writing";
import { Container, MetaLabel, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Writing",
  description:
    "Technical writing on RAG, AI agents, LLM evaluation, ML deployment, and production AI systems.",
  path: "/writing",
});

export default function WritingPage() {
  return (
    <div className="pt-28 pb-[var(--section-pad)] md:pt-32">
      <Container>
        <SectionHeading
          eyebrow="Writing / Insights"
          title="Writing"
          description="Placeholder articles ready to replace with real essays and notes."
        />

        <div className="divide-y divide-border border-y border-border">
          {writing.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.03}>
              <Link
                href={`/writing/${post.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-[140px_1fr_auto] md:items-center md:py-10"
              >
                <MetaLabel>{post.date}</MetaLabel>
                <div>
                  <div className="mb-2 flex flex-wrap gap-3">
                    <MetaLabel>{post.category}</MetaLabel>
                    <MetaLabel>{post.readTime}</MetaLabel>
                    {post.isPlaceholder ? (
                      <MetaLabel className="text-accent/70">Placeholder</MetaLabel>
                    ) : null}
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowUpRight className="text-muted transition-colors group-hover:text-accent" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
