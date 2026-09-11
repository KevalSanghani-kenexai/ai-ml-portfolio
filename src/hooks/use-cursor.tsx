"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CursorState = "default" | "hover" | "view" | "open";

type CursorContextValue = {
  state: CursorState;
  label: string;
  setCursor: (state: CursorState, label?: string) => void;
  resetCursor: () => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState("");

  const setCursor = (next: CursorState, nextLabel = "") => {
    setState(next);
    setLabel(nextLabel);
  };

  const resetCursor = () => {
    setState("default");
    setLabel("");
  };

  return (
    <CursorContext.Provider value={{ state, label, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return context;
}
