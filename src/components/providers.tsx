"use client";

import { useLenis } from "@/hooks/use-lenis";
import { CursorProvider } from "@/hooks/use-cursor";
import { CommandPalette } from "@/components/navigation/command-palette";
import { PageTransition } from "@/components/animations/page-transition";

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <CursorProvider>
      <PageTransition>{children}</PageTransition>
      <CommandPalette />
      <div className="grain-overlay" aria-hidden />
    </CursorProvider>
  );
}
