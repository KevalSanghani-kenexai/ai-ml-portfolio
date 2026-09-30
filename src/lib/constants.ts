import type { NavItem } from "@/types";

export const SITE = {
  name: "Keval Hiteshbhai Sanghani",
  shortName: "Keval Sanghani",
  initials: "KS",
  role: "AI/ML Engineer",
  tagline:
    "Building production-ready AI systems with Generative AI, LLMs, RAG, AI Agents and intelligent automation.",
  positioning:
    "AI/ML Engineer specializing in Generative AI, RAG, LLM Applications, AI Agents, AI Automation and Production AI Systems.",
  location: "Ahmedabad",
  experienceYears: "2+",
  company: "Kenexai PVT LTD.",
  availability: "Available for selected freelance & contract projects.",
  availabilityShort: "AVAILABLE FOR SELECTED PROJECTS",
  email: "kevalsanghani0103@gmail.com",
  url: "https://keval-ai.netlify.app",
  description:
    "AI/ML Engineer building production-ready Generative AI, RAG, LLM applications, AI agents and intelligent automation systems.",
} as const;

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/keval-sanghani-186474299",
  resume: "/resume.pdf",
  email: `mailto:${SITE.email}`,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HOME_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "statement", label: "Approach" },
  { id: "capabilities", label: "Capabilities" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
] as const;

export const PROJECT_TYPES = [
  "Generative AI Application",
  "RAG / Knowledge System",
  "AI Agents & Automation",
  "LLM Integration",
  "ML / MLOps",
  "Consulting",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
] as const;

export const ACCENT = "#C6F24E";
