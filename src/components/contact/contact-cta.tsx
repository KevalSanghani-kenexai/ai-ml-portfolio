import { ArrowUpRight } from "lucide-react";
import { LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/section";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { FadeIn } from "@/components/animations/fade-in";

export function ContactCTA() {
  return (
    <section id="contact" className="py-[var(--section-pad)]">
      <Container>
        <FadeIn>
          <GlassPanel
            tone="strong"
            className="px-6 py-12 md:px-12 md:py-16 lg:px-16"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Let&apos;s Build
            </p>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Have an AI problem worth solving?
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
              Let&apos;s turn the idea into a production-ready system.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticLink href={LINKS.email} variant="primary">
                Email Me
                <ArrowUpRight size={14} />
              </MagneticLink>
              <MagneticLink href={LINKS.linkedin} variant="secondary" external>
                LinkedIn
                <ArrowUpRight size={14} />
              </MagneticLink>
              <MagneticLink href={LINKS.upwork} variant="secondary" external>
                Upwork
                <ArrowUpRight size={14} />
              </MagneticLink>
              <MagneticLink href="/contact" variant="ghost">
                Contact form
                <ArrowUpRight size={14} />
              </MagneticLink>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {SITE.availability}
            </p>
          </GlassPanel>
        </FadeIn>
      </Container>
    </section>
  );
}
