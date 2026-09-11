import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business problem, constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Design",
    description: "Define architecture, scope, evaluation plan, and delivery boundaries.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the AI system with clean APIs, data flows, and observable behavior.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Evaluate performance, reliability, edge cases, and failure modes.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Move the solution into production with packaging, CI/CD, and monitoring.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Monitor, optimize, and iterate based on real usage and evaluation signals.",
  },
];
