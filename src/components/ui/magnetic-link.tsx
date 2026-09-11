import Link from "next/link";
import { cn, isExternalLink, isPlaceholderLink } from "@/lib/utils";
import type { ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "text";
  external?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const variants = {
  primary:
    "inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-foreground hover:border-foreground hover:text-background",
  secondary:
    "inline-flex items-center gap-2 border border-border bg-transparent px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-accent hover:text-accent",
  ghost:
    "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent",
  text: "inline-flex items-center gap-2 transition-colors duration-300 hover:text-accent",
};

export function MagneticLink({
  href,
  children,
  className,
  variant = "text",
  external,
  onMouseEnter,
  onMouseLeave,
}: MagneticLinkProps) {
  if (isPlaceholderLink(href)) {
    return (
      <span
        className={cn(variants[variant], "cursor-not-allowed opacity-50", className)}
        title="Link placeholder — update in src/lib/constants.ts"
        aria-disabled
      >
        {children}
      </span>
    );
  }

  const isExt = external ?? isExternalLink(href);
  const classes = cn(variants[variant], className);

  if (isExt) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  );
}
