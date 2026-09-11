// EDIT THIS FILE TO ADD WRITING / INSIGHTS
import type { WritingPost } from "@/types";

export const writing: WritingPost[] = [
  {
    slug: "building-production-rag-systems",
    title: "Building Production RAG Systems",
    excerpt:
      "What changes when retrieval-augmented generation leaves the notebook and has to survive real users, latency budgets, and messy documents.",
    category: "RAG",
    date: "2026-01-12",
    readTime: "8 min",
    featured: true,
    isPlaceholder: true,
    content: [
      "Replace this placeholder with the full article.",
      "Cover chunking strategy, embedding choices, retrieval evaluation, and citation patterns.",
    ],
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs Fine-Tuning",
    excerpt:
      "A practical decision framework for when to retrieve, when to fine-tune, and when the better answer is better data.",
    category: "LLM Systems",
    date: "2026-01-05",
    readTime: "6 min",
    featured: true,
    isPlaceholder: true,
    content: [
      "Replace this placeholder with the full article.",
      "Compare cost, freshness, control, and evaluation trade-offs.",
    ],
  },
  {
    slug: "ai-agent-architecture",
    title: "AI Agent Architecture",
    excerpt:
      "How to design agent systems with clear tool boundaries, observable traces, and failure modes you can actually debug.",
    category: "Agents",
    date: "2025-12-18",
    readTime: "9 min",
    featured: true,
    isPlaceholder: true,
    content: [
      "Replace this placeholder with the full article.",
      "Discuss orchestration patterns, memory, tool calling, and human-in-the-loop controls.",
    ],
  },
  {
    slug: "llm-evaluation-in-production",
    title: "LLM Evaluation in Production",
    excerpt:
      "Offline metrics are useful, but production AI needs continuous evaluation tied to product outcomes.",
    category: "Evaluation",
    date: "2025-12-02",
    readTime: "7 min",
    featured: false,
    isPlaceholder: true,
    content: [
      "Replace this placeholder with the full article.",
      "Include regression suites, human review loops, and online monitoring signals.",
    ],
  },
  {
    slug: "fastapi-for-ai-systems",
    title: "FastAPI for AI Systems",
    excerpt:
      "Patterns for wrapping models and agents behind clean APIs with timeouts, streaming, and operational hygiene.",
    category: "Engineering",
    date: "2025-11-20",
    readTime: "5 min",
    featured: false,
    isPlaceholder: true,
    content: [
      "Replace this placeholder with the full article.",
      "Cover request validation, async boundaries, and deployment packaging.",
    ],
  },
];

export function getFeaturedWriting() {
  return writing.filter((post) => post.featured);
}

export function getWritingBySlug(slug: string) {
  return writing.find((post) => post.slug === slug);
}
