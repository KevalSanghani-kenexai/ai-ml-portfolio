import { Container } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";

export function Statement() {
  return (
    <section id="statement" className="border-b border-border py-[var(--section-pad)]">
      <Container>
        <FadeIn>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Engineering Approach
          </p>
          <h2 className="max-w-5xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            I build AI systems that move from prototype to production.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            I work across machine learning, Generative AI, LLM applications, RAG, AI
            agents, automation, APIs and deployment — with a focus on outcomes, clear
            architecture, and systems that hold up outside the demo.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
