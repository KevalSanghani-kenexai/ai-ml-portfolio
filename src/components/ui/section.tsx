import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--content-max)] px-5 md:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 md:mb-16 max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MetaLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.24em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
