"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Container, MetaLabel } from "@/components/ui/section";
import { GlassPanel } from "@/components/ui/glass-panel";
import { useCursor } from "@/hooks/use-cursor";

const IntelligenceCore = dynamic(
  () =>
    import("@/components/three/intelligence-core").then(
      (mod) => mod.IntelligenceCore,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="h-40 w-40 rounded-full border border-border/60" />
      </div>
    ),
  },
);

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const METADATA_LABELS = [
  "MODEL.RUNTIME",
  "VECTOR.INDEX",
  "INFERENCE",
  "PIPELINE",
  "AGENT",
  "LATENCY",
];

function SystemMonitor() {
  const rows = [
    { label: "SYSTEM", value: "ONLINE" },
    { label: "MODEL", value: "LLM" },
    { label: "RETRIEVAL", value: "ACTIVE" },
    { label: "AGENTS", value: "READY" },
    { label: "API", value: "CONNECTED" },
  ];

  return (
    <GlassPanel
      tone="strong"
      className="pointer-events-none absolute bottom-8 right-5 z-20 hidden w-52 p-3.5 md:block lg:right-10"
      aria-hidden="true"
    >
      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
        System Monitor
      </p>
      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]"
          >
            <span className="text-muted">{row.label}</span>
            <span className="text-accent">{row.value}</span>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

export function Hero() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden border-b border-border tech-grid"
    >
      {/* Full-bleed 3D — primary visual plane */}
      <div className="absolute inset-0 z-0">
        <WebGLErrorBoundary
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full border border-accent/25" />
            </div>
          }
        >
          <IntelligenceCore />
        </WebGLErrorBoundary>
      </div>

      {/* Soft vignette only — keep scene visible */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_72%_42%,transparent_0%,transparent_38%,rgba(8,8,10,0.35)_70%,rgba(8,8,10,0.75)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(42%,28rem)] bg-gradient-to-r from-background/70 via-background/25 to-transparent md:w-[min(38%,26rem)]"
        aria-hidden
      />

      {METADATA_LABELS.map((label, index) => (
        <span
          key={label}
          className="pointer-events-none absolute z-[2] hidden font-mono text-[9px] uppercase tracking-[0.28em] text-muted/50 lg:block"
          style={{
            top: `${16 + index * 12}%`,
            left: index % 2 === 0 ? "3%" : "auto",
            right: index % 2 === 1 ? "4%" : "auto",
          }}
          aria-hidden
        >
          {label}
        </span>
      ))}

      <SystemMonitor />

      <Container className="relative z-10 flex min-h-[100dvh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-xl lg:max-w-2xl">
          <GlassPanel
            tone="accent"
            shine={false}
            className="mb-6 inline-flex items-center gap-3 px-3 py-2"
          >
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              {SITE.availabilityShort}
            </span>
          </GlassPanel>

          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            {SITE.shortName}
          </p>

          <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-foreground [text-shadow:0_2px_40px_rgba(8,8,10,0.65)]">
            AI/ML ENGINEER
          </h1>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent md:text-xs">
            Generative AI · RAG · LLMs · AI Agents · Automation
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg [text-shadow:0_1px_24px_rgba(8,8,10,0.8)]">
            {SITE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <GlassPanel tone="default" shine={false} className="px-3.5 py-2.5">
              <MetaLabel>Location</MetaLabel>
              <p className="mt-1 text-sm text-foreground">Based in {SITE.location}</p>
            </GlassPanel>
            <GlassPanel tone="default" shine={false} className="px-3.5 py-2.5">
              <MetaLabel>Experience</MetaLabel>
              <p className="mt-1 text-sm text-foreground">{SITE.experienceYears} years</p>
            </GlassPanel>
            <GlassPanel tone="default" shine={false} className="max-w-xs px-3.5 py-2.5">
              <MetaLabel>Availability</MetaLabel>
              <p className="mt-1 text-sm text-foreground">{SITE.availability}</p>
            </GlassPanel>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticLink
              href="/projects"
              variant="primary"
              onMouseEnter={() => setCursor("view", "VIEW")}
              onMouseLeave={resetCursor}
            >
              View Selected Work
              <ArrowUpRight size={14} />
            </MagneticLink>
            <MagneticLink
              href="/contact"
              variant="secondary"
              className="border-white/15 bg-black/25 backdrop-blur-md hover:border-accent hover:bg-black/40"
              onMouseEnter={() => setCursor("hover")}
              onMouseLeave={resetCursor}
            >
              Let&apos;s Work Together
              <ArrowUpRight size={14} />
            </MagneticLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
