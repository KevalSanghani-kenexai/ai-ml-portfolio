"use client";

import { useEffect } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { CursorProvider } from "@/hooks/use-cursor";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { CommandPalette } from "@/components/navigation/command-palette";
import { PageTransition } from "@/components/animations/page-transition";
import { usePrefersFinePointer } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  const finePointer = usePrefersFinePointer();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    if (finePointer && !reducedMotion) {
      root.classList.add("has-custom-cursor");
    } else {
      root.classList.remove("has-custom-cursor");
    }
    return () => root.classList.remove("has-custom-cursor");
  }, [finePointer, reducedMotion]);

  return (
    <CursorProvider>
      <PageTransition>{children}</PageTransition>
      <CustomCursor />
      <CommandPalette />
      <div className="grain-overlay" aria-hidden />
    </CursorProvider>
  );
}
