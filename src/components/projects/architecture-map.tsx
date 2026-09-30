import type { CSSProperties } from "react";
import type { ArchitectureStage, ProjectMetric } from "@/types";
import { cn } from "@/lib/utils";

export function ArchitectureMap({
  stages,
  metrics = [],
  layout = "stacked",
  className,
}: {
  stages: ArchitectureStage[];
  metrics?: ProjectMetric[];
  layout?: "stacked" | "flow";
  className?: string;
}) {
  if (!stages.length) return null;

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
        System map · {stages.length} stages
      </p>

      {layout === "flow" ? <FlowStages stages={stages} /> : <StackedStages stages={stages} />}

      {metrics.length > 0 ? (
        <div className="mt-auto grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
          {metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <p className="text-lg font-medium tracking-tight text-foreground">{metric.value}</p>
              <p className="mt-1 font-mono text-[9px] uppercase leading-snug tracking-[0.14em] text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function StackedStages({ stages }: { stages: ArchitectureStage[] }) {
  return (
    <ol className="mb-5">
      {stages.map((stage, index) => (
        <li
          key={stage.stage}
          className="relative grid grid-cols-[6.5rem_1fr] gap-3 pb-4 last:pb-0 before:absolute before:bottom-0 before:left-[3px] before:top-4 before:w-px before:bg-accent/25 last:before:hidden"
        >
          <div className="flex items-start gap-2.5">
            <span className="mt-[5px] h-[7px] w-[7px] shrink-0 bg-accent" aria-hidden />
            <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-accent">
              <span className="text-muted">{String(index + 1).padStart(2, "0")}</span> {stage.stage}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {stage.nodes.map((node) => (
              <span
                key={node}
                className="border border-white/10 bg-background/60 px-2 py-1 text-[11px] leading-tight text-foreground/85"
              >
                {node}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

function FlowStages({ stages }: { stages: ArchitectureStage[] }) {
  return (
    <ol
      className="grid gap-6 lg:grid-cols-[repeat(var(--stages),minmax(0,1fr))] lg:gap-0"
      style={{ "--stages": stages.length } as CSSProperties}
    >
      {stages.map((stage, index) => {
        const last = index === stages.length - 1;
        return (
          <li key={stage.stage} className="border-l border-accent/30 pl-4 lg:border-l-0 lg:pl-0">
            <div className="mb-4 flex items-center gap-3 lg:pr-3">
              <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                <span className="text-muted">{String(index + 1).padStart(2, "0")}</span> {stage.stage}
              </span>
              {!last ? (
                <span className="hidden flex-1 items-center lg:flex" aria-hidden>
                  <span className="h-px flex-1 bg-accent/30" />
                  <span className="-ml-1 font-mono text-[10px] text-accent">→</span>
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 lg:pr-6">
              {stage.nodes.map((node) => (
                <span
                  key={node}
                  className="border border-border bg-background/60 px-3 py-2 text-sm leading-snug text-foreground/90"
                >
                  {node}
                </span>
              ))}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
