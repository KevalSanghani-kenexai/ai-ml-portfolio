import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  asChild?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-ink hover:bg-foreground hover:border-foreground hover:text-background",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  ghost: "border border-transparent bg-transparent text-muted hover:text-foreground",
  accent: "border border-accent bg-accent text-ink hover:bg-accent/90",
};

export function Button({
  variant = "secondary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
