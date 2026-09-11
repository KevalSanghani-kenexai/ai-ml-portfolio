import { cn } from "@/lib/utils";

export function PipelineDiagram({
  steps,
  compact = false,
  className,
}: {
  steps: string[];
  compact?: boolean;
  className?: string;
}) {
  if (!steps.length) {
    return (
      <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Architecture placeholder
      </div>
    );
  }

  return (
    <div className={cn("flex h-full flex-col justify-center", className)}>
      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
        Architecture
      </p>
      <div
        className={cn(
          "flex flex-wrap items-center gap-2",
          compact ? "content-center" : "gap-3",
        )}
      >
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="flex items-center gap-2">
            <div
              className={cn(
                "border border-border bg-background/60 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/90",
                compact ? "max-w-[7.5rem] truncate" : "px-3 py-2 text-[10px]",
              )}
              title={step}
            >
              {step}
            </div>
            {index < steps.length - 1 ? (
              <span className="font-mono text-[10px] text-accent" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
