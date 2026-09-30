import { skillCategories } from "@/data/skills";
import { Container, SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border py-[var(--section-pad)]">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical capability"
          description="A focused stack for designing, building, and deploying production AI systems."
        />

        <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.05} className="bg-background p-6 md:p-8">
              <div className="mb-6 border-b border-accent/40 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 whitespace-nowrap text-lg font-medium tracking-tight">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border/70 pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
