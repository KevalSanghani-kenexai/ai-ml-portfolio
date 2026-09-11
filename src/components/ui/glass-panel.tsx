import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type GlassTone = "default" | "accent" | "strong" | "subtle";

type GlassPanelProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children: ReactNode;
  tone?: GlassTone;
  hover?: boolean;
  shine?: boolean;
};

const tones: Record<GlassTone, string> = {
  default:
    "border-white/12 bg-black/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
  accent:
    "border-accent/35 bg-black/30 shadow-[inset_0_1px_0_0_rgba(198,242,78,0.2)]",
  strong:
    "border-white/14 bg-black/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
  subtle:
    "border-white/10 bg-black/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
};

export function GlassPanel({
  children,
  className,
  tone = "default",
  hover = false,
  shine = true,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden border",
        tones[tone],
        hover &&
          "transition-[border-color,background-color] duration-300 hover:border-accent/30 hover:bg-black/50",
        className,
      )}
      {...props}
    >
      {shine ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      ) : null}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
