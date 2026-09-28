import { achievements } from "@/data/achievements";
import { MetaLabel } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

export function Achievements({ className }: { className?: string }) {
  if (achievements.length === 0) return null;

  return (
    <section className={cn("mt-16 md:mt-24", className)} aria-labelledby="achievements-heading">
      <FadeIn>
        <MetaLabel>Achievements</MetaLabel>
        <h2
          id="achievements-heading"
          className="mt-4 text-2xl font-medium tracking-tight md:text-3xl"
        >
          Certifications & achievements
        </h2>
      </FadeIn>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            <article className="h-full border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                {item.issuer}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-tight md:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
