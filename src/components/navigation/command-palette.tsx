"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LINKS, NAV_ITEMS, SITE } from "@/lib/constants";
import { cn, isPlaceholderLink } from "@/lib/utils";

type Command = {
  id: string;
  label: string;
  hint?: string;
  action: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const items: Command[] = [
      {
        id: "home",
        label: "Go Home",
        hint: "/",
        action: () => {
          router.push("/");
          close();
        },
      },
      ...NAV_ITEMS.map((item) => ({
        id: item.href,
        label: item.label === "Work" ? "View Work" : item.label,
        hint: item.href,
        action: () => {
          router.push(item.href);
          close();
        },
      })),
      {
        id: "experience",
        label: "Experience",
        hint: "/experience",
        action: () => {
          router.push("/experience");
          close();
        },
      },
    ];

    if (!isPlaceholderLink(LINKS.linkedin)) {
      items.push({
        id: "linkedin",
        label: "LinkedIn",
        hint: "external",
        action: () => {
          window.open(LINKS.linkedin, "_blank", "noopener,noreferrer");
          close();
        },
      });
    }

    if (!isPlaceholderLink(LINKS.resume)) {
      items.push({
        id: "resume",
        label: "Resume",
        hint: "external",
        action: () => {
          window.open(LINKS.resume, "_blank", "noopener,noreferrer");
          close();
        },
      });
    }

    items.push({
      id: "email",
      label: "Email",
      hint: SITE.email,
      action: () => {
        window.location.href = LINKS.email;
        close();
      },
    });

    return items;
  }, [close, router]);

  const filtered = useMemo(
    () =>
      commands.filter((command) =>
        command.label.toLowerCase().includes(query.toLowerCase()),
      ),
    [commands, query],
  );

  const safeActive = Math.min(active, Math.max(filtered.length - 1, 0));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") close();
    };

    const onOpen = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((value) => Math.min(value + 1, Math.max(filtered.length - 1, 0)));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((value) => Math.max(value - 1, 0));
      }
      if (event.key === "Enter" && filtered[safeActive]) {
        event.preventDefault();
        filtered[safeActive].action();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered, open, safeActive]);

  const onQueryChange = (value: string) => {
    setQuery(value);
    setActive(0);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-background/70 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal
            aria-label="Command palette"
            className="w-full max-w-xl overflow-hidden border border-white/12 bg-white/[0.06] shadow-2xl backdrop-blur-xl backdrop-saturate-150"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-border px-4 py-3">
              <input
                autoFocus
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Jump to a page, open a link…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                aria-label="Search commands"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto py-2" role="listbox">
              {filtered.length === 0 ? (
                <li className="px-4 py-6 text-sm text-muted">No matching commands.</li>
              ) : (
                filtered.map((command, index) => (
                  <li key={command.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={index === safeActive}
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors",
                        index === safeActive
                          ? "bg-accent-muted text-foreground"
                          : "text-muted hover:bg-surface-elevated hover:text-foreground",
                      )}
                      onMouseEnter={() => setActive(index)}
                      onClick={command.action}
                    >
                      <span>{command.label}</span>
                      {command.hint ? (
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                          {command.hint}
                        </span>
                      ) : null}
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="border-t border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              ↑↓ navigate · enter select · esc close
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
