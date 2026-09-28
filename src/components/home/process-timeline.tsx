"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProcessStep } from "@/types";
import { Container, SectionHeading } from "@/components/ui/section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const pinned = desktop && !reduced;

  useEffect(() => {
    if (!pinned || !trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const amount = track.scrollWidth - window.innerWidth + 80;

      gsap.to(track, {
        x: () => -amount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${amount}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [pinned, steps]);

  return (
    // GSAP pinning re-parents the section into a pin-spacer; this wrapper keeps
    // React's parent/child bookkeeping intact so route changes don't crash.
    <div>
      <section
        id="process"
        ref={sectionRef}
        className="border-b border-border py-[var(--section-pad)]"
      >
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How I work"
            description="A clear path from problem framing to production and iteration."
          />
        </Container>

        <div
          className={cn(
            pinned
              ? "overflow-hidden"
              : "overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-5 md:scroll-px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-4 px-5 md:gap-6 md:px-8 lg:px-10"
          >
            {steps.map((step) => (
              <GlassPanel
                key={step.number}
                tone="default"
                hover
                className="w-[280px] shrink-0 snap-start p-6 md:w-[340px] md:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {step.number}
                </p>
                <h3 className="mt-8 text-2xl font-medium tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
        {!pinned ? (
          <Container>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Swipe to explore →
            </p>
          </Container>
        ) : null}
      </section>
    </div>
  );
}
