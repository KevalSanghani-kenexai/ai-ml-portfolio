"use client";

import { useEffect, useRef } from "react";
import { useCursor } from "@/hooks/use-cursor";
import { usePrefersFinePointer } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const { state, label } = useCursor();
  const finePointer = usePrefersFinePointer();
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const rafRef = useRef(0);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!finePointer || reducedMotion) return;

    const onMove = (event: MouseEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;

      if (!visibleRef.current && rootRef.current) {
        visibleRef.current = true;
        rootRef.current.style.opacity = "1";
      }

      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const el = rootRef.current;
        if (!el) return;
        el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      });
    };

    const onLeave = () => {
      visibleRef.current = false;
      if (rootRef.current) rootRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [finePointer, reducedMotion]);

  if (!finePointer || reducedMotion) return null;

  const expanded = state !== "default";
  const labeled = state === "view" || state === "open";

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 will-change-transform"
      style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-150",
          expanded ? "h-14 w-14" : "h-2 w-2 border-foreground bg-foreground",
          labeled
            ? "border-accent bg-accent text-ink"
            : expanded
              ? "border-foreground/70 bg-foreground/10"
              : "",
        )}
      >
        {labeled ? (
          <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
            {label || (state === "view" ? "VIEW" : "OPEN")}
          </span>
        ) : null}
      </div>
    </div>
  );
}
