import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getWritingBySlug, writing } from "@/data/writing";
import { buildMetadata } from "@/lib/seo";
import { Container, MetaLabel } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";

type Props = PageProps<"/writing/[slug]">;

export function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) return buildMetadata({ title: "Writing not found", noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/writing/${post.slug}`,
  });
}

export default async function WritingArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pt-28 pb-[var(--section-pad)] md:pt-32">
      <Container className="max-w-3xl">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All writing
        </Link>

        <FadeIn>
          <div className="mt-10 flex flex-wrap gap-3">
            <MetaLabel>{post.category}</MetaLabel>
            <MetaLabel>{post.date}</MetaLabel>
            <MetaLabel>{post.readTime}</MetaLabel>
          </div>
          <h1 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{post.excerpt}</p>
        </FadeIn>

        <div className="mt-12 space-y-6 border-t border-border pt-10 text-base leading-relaxed text-foreground/90">
          {post.isPlaceholder ? (
            <p className="border border-dashed border-border bg-surface p-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Placeholder article — replace content in src/data/writing.ts
            </p>
          ) : null}
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
