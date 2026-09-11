"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LINKS, NAV_ITEMS, SITE } from "@/lib/constants";
import { cn, isPlaceholderLink } from "@/lib/utils";
import { useCursor } from "@/hooks/use-cursor";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/55 py-3 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-between gap-6 px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex flex-col"
          onClick={closeMenu}
          onMouseEnter={() => setCursor("hover")}
          onMouseLeave={resetCursor}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted transition-colors group-hover:text-accent">
            {SITE.initials}
          </span>
          <span
            className={cn(
              "text-sm font-medium tracking-tight text-foreground transition-all",
              scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100",
            )}
          >
            {SITE.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors",
                  active ? "text-accent" : "text-muted hover:text-foreground",
                )}
                onMouseEnter={() => setCursor("hover")}
                onMouseLeave={resetCursor}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {!isPlaceholderLink(LINKS.resume) ? (
            <MagneticLink
              href={LINKS.resume}
              variant="ghost"
              external
              onMouseEnter={() => setCursor("open", "OPEN")}
              onMouseLeave={resetCursor}
            >
              Resume
            </MagneticLink>
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted/50">
              Resume
            </span>
          )}
          {!isPlaceholderLink(LINKS.github) ? (
            <MagneticLink
              href={LINKS.github}
              variant="ghost"
              external
              onMouseEnter={() => setCursor("open", "OPEN")}
              onMouseLeave={resetCursor}
            >
              GitHub
            </MagneticLink>
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted/50">
              GitHub
            </span>
          )}
          <button
            type="button"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-command-palette"))
            }
            onMouseEnter={() => setCursor("hover")}
            onMouseLeave={resetCursor}
            aria-label="Open command palette"
          >
            ⌘K
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-border p-2 text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-transparent",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={`${pathname}-${item.href}`}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-border py-4 font-mono text-sm uppercase tracking-[0.2em] text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-4 py-3 text-left font-mono text-xs uppercase tracking-[0.2em] text-muted"
            onClick={() => {
              closeMenu();
              window.dispatchEvent(new CustomEvent("open-command-palette"));
            }}
          >
            Command Palette (⌘K)
          </button>
        </nav>
      </div>
    </header>
  );
}
