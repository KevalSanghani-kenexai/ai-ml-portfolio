import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function isPlaceholderLink(href: string) {
  return !href || href === "[ADD LINK]" || href.startsWith("[ADD");
}

export function formatYear(year: string) {
  return year;
}

export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://keval-ai.netlify.app";
  if (!path) return base;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncate(text: string, length: number) {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}…`;
}
