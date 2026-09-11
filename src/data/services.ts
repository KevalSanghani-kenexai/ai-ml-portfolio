// EDIT THIS FILE TO UPDATE SERVICES
import type { Service } from "@/types";

export const services: Service[] = [
  {
    number: "01",
    slug: "generative-ai-applications",
    title: "Generative AI Applications",
    summary:
      "Design and ship production GenAI products that solve a clear business workflow end to end.",
    solves:
      "Teams need usable Generative AI products, not demos that break outside a notebook.",
    deliverable:
      "A scoped GenAI application with APIs, evaluation hooks, and a deployment path.",
    technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "Docker"],
  },
  {
    number: "02",
    slug: "rag-knowledge-systems",
    title: "RAG & Knowledge Systems",
    summary:
      "Transform internal documents and knowledge bases into searchable AI systems with grounded responses and citations.",
    solves:
      "Enterprise knowledge is fragmented across docs, databases, and tools, making answers hard to trust.",
    deliverable:
      "A retrieval architecture with chunking, embeddings, vector search, and grounded response generation.",
    technologies: [
      "RAG",
      "Embeddings",
      "Qdrant",
      "Azure AI Search",
      "LangChain",
      "LlamaIndex",
    ],
  },
  {
    number: "03",
    slug: "ai-agents-automation",
    title: "AI Agents & Automation",
    summary:
      "Build agent systems that reason, call tools, and automate multi-step operational workflows.",
    solves:
      "Manual multi-step processes waste time and create inconsistent outcomes across teams.",
    deliverable:
      "An agent orchestration layer with tool calling, guardrails, and observable execution.",
    technologies: ["CrewAI", "LangGraph", "Tool Calling", "Python", "APIs"],
  },
  {
    number: "04",
    slug: "llm-integrations",
    title: "LLM Integrations",
    summary:
      "Integrate LLM capabilities into existing products with clean APIs, latency control, and evaluation.",
    solves:
      "Products need LLM features without rewriting the entire stack or compromising reliability.",
    deliverable:
      "Production LLM integration with prompt/version strategy, logging, and fallbacks.",
    technologies: ["OpenAI", "Azure OpenAI", "FastAPI", "Observability"],
  },
  {
    number: "05",
    slug: "ai-ml-apis-backend",
    title: "AI/ML APIs & Backend Systems",
    summary:
      "Build the backend systems that make AI features reliable, secure, and easy to consume.",
    solves:
      "Models alone are not enough — teams need durable APIs, storage, and service boundaries.",
    deliverable:
      "API-first AI backends with auth-ready contracts, persistence, and deployment packaging.",
    technologies: ["FastAPI", "PostgreSQL", "Docker", "REST", "Microservices"],
  },
  {
    number: "06",
    slug: "ml-deployment-mlops",
    title: "ML Deployment & MLOps",
    summary:
      "Move models from experimentation into monitored, deployable production systems.",
    solves:
      "Many models never leave the prototype stage because packaging, CI/CD, and monitoring are missing.",
    deliverable:
      "A deployment and monitoring path with containers, pipelines, and operational visibility.",
    technologies: ["MLflow", "Docker", "CI/CD", "Azure", "AWS"],
  },
  {
    number: "07",
    slug: "cloud-ai-solutions",
    title: "Cloud AI Solutions",
    summary:
      "Architect AI systems on Azure and AWS using managed AI services and scalable infrastructure.",
    solves:
      "Cloud AI projects stall when architecture, cost, and operational constraints are ignored.",
    deliverable:
      "Cloud-ready AI architecture with service selection, deployment plan, and integration map.",
    technologies: ["Azure OpenAI", "AWS", "AKS", "Lambda", "Blob / S3"],
  },
  {
    number: "08",
    slug: "ai-consulting",
    title: "AI Consulting",
    summary:
      "Help teams decide what to build, what not to build, and how to take AI into production responsibly.",
    solves:
      "Stakeholders need clarity on feasibility, architecture, and delivery sequencing before writing code.",
    deliverable:
      "A practical recommendation: architecture options, risks, scope, and an implementation roadmap.",
    technologies: ["Solution Architecture", "Evaluation", "System Design"],
  },
];
