// EDIT THIS FILE TO ADD PROJECTS
// All project UI renders from this single data source.

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-powered-interview-system",
    number: "01",
    title: "AI Powered Interview System",
    shortDescription:
      "Multi-agent interview automation with real-time voice, adaptive questioning, and LLM-driven scoring.",
    description:
      "An end-to-end multi-agent interview automation system that conducts role-aware voice interviews, adapts follow-up questions in real time, and scores candidates against role-specific criteria.",
    category: "AI Agents",
    year: "2025",
    featured: true,
    caseStudy: true,
    role: "Solution Architect",
    technologies: [
      "Python",
      "CrewAI",
      "OpenAI",
      "SQLite",
      "WebSocket",
      "WebRTC",
      "Pipecat",
      "Deepgram",
      "Cartesia",
      "Docker",
      "Azure App Service",
      "GitHub Actions",
    ],
    problem:
      "Initial candidate screening is slow, inconsistent across interviewers, and difficult to scale without burning recruiter time.",
    context:
      "Hiring teams need a reliable first-pass interview layer that can handle many candidates concurrently while remaining fair, structured, and conversational.",
    businessUseCase:
      "Automate the initial screening phase with role-based voice interviews so recruiters focus on high-signal candidates instead of repetitive first-round calls.",
    solution:
      "Designed and architected an end-to-end multi-agent interview automation system using CrewAI, defining the agent orchestration, voice pipeline, and real-time communication architecture. Role-based question generation, adaptive follow-ups, LLM-driven scoring, and a low-latency WebRTC/WebSocket voice layer work together as one production system.",
    architecture: [
      "Candidate Session",
      "WebRTC / WebSocket",
      "Pipecat Voice Pipeline",
      "Deepgram STT",
      "CrewAI Agents",
      "LLM Reasoning & Scoring",
      "Cartesia TTS",
      "Azure Deployment",
    ],
    implementation: [
      "Designed and architected an end-to-end multi-agent interview automation system using CrewAI, defining the agent orchestration, voice pipeline, and real-time communication architecture.",
      "Implemented role-based question generation to dynamically tailor interview questions across different job profiles and seniority levels.",
      "Integrated adaptive questioning logic that adjusts follow-up questions in real time based on candidate responses, using LLM-driven reasoning.",
      "Built an LLM-driven scoring mechanism for unbiased, consistent evaluation of candidate answers against role-specific criteria.",
      "Architected a low-latency, real-time voice interaction layer using WebSocket and WebRTC for bidirectional audio streaming between candidate and system.",
      "Integrated Pipecat to orchestrate the real-time voice pipeline, coordinating STT, LLM inference, and TTS with minimal latency.",
      "Incorporated Deepgram for Speech-to-Text and Cartesia for Text-to-Speech, enabling natural interactive voice interviews.",
      "Deployed and containerized the solution using Docker, with CI/CD via GitHub Actions, on Azure App Service (or AKS for scalable multi-session handling).",
    ],
    challenges: [
      "Keeping voice round-trips low-latency while coordinating STT, LLM reasoning, and TTS.",
      "Maintaining consistent scoring across roles without brittle rubric logic.",
      "Designing multi-agent orchestration that stays deterministic enough for production interview flows.",
      "[ADD REAL CHALLENGE]",
    ],
    results: [
      "Automated the initial screening phase end-to-end, reducing recruiter workload and improving hiring efficiency.",
      "[ADD REAL RESULT]",
      "[ADD REAL RESULT]",
    ],
    lessons: [
      "Voice AI systems succeed when latency, turn-taking, and evaluation are treated as first-class product constraints.",
      "Agent orchestration is most useful when each agent owns a clear responsibility boundary.",
      "[ADD REAL LESSON]",
    ],
    metrics: [
      { label: "Latency", value: "[ADD REAL METRIC]" },
      { label: "Screening coverage", value: "[ADD REAL METRIC]" },
      { label: "Sessions", value: "[ADD REAL METRIC]" },
    ],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "explainable-ai-platform",
    number: "02",
    title: "Explainable AI Platform",
    shortDescription:
      "Text-to-SQL, RAG, and knowledge-graph architecture for grounded, explainable business answers.",
    description:
      "An end-to-end AI platform that combines structured SQL querying, unstructured RAG workflows, and Neo4j knowledge graphs to deliver explainable insights over enterprise data.",
    category: "RAG / Knowledge Systems",
    year: "2025",
    featured: true,
    caseStudy: true,
    role: "Solution Architect",
    technologies: [
      "Python",
      "Neo4j",
      "PostgreSQL",
      "AWS",
      "LangChain",
      "LlamaIndex",
      "FastAPI",
      "Docker",
    ],
    problem:
      "Business users struggle to query complex enterprise data and often receive answers that are hard to trust or explain.",
    context:
      "Organizations hold valuable structured and unstructured knowledge, but access is fragmented across SQL databases, documents, and relationship-heavy domains.",
    businessUseCase:
      "Enable natural-language querying of business data with retrieval, graph context, and explainability so stakeholders can act on trustworthy AI answers.",
    solution:
      "Designed and architected an end-to-end AI solution integrating structured SQL data, unstructured RAG workflows, knowledge graphs, and scalable retrieval architecture. Text-to-SQL, vector search, and Neo4j relationship modeling work together to ground responses.",
    architecture: [
      "Business Query",
      "Text-to-SQL",
      "PostgreSQL",
      "Document Chunking",
      "Embeddings",
      "Vector Search",
      "Neo4j Knowledge Graph",
      "LLM Response",
    ],
    implementation: [
      "Designed and architected an end-to-end AI solution integrating structured SQL data, unstructured RAG workflows, knowledge graphs, and scalable retrieval architecture.",
      "Developed Text-to-SQL models to enable natural language querying for business users.",
      "Performed data analysis and validation to ensure reliability and accuracy of query results.",
      "Built knowledge graph models using Neo4j to enhance explainability and relationship-based insights.",
      "Implemented scalable retrieval pipelines using vector search for large datasets.",
      "Deployed the system on AWS with CI/CD pipelines ensuring production readiness.",
    ],
    challenges: [
      "Balancing SQL accuracy with flexible natural-language intent.",
      "Combining graph context and vector retrieval without noisy answers.",
      "Keeping explainability visible to non-technical users.",
      "[ADD REAL CHALLENGE]",
    ],
    results: [
      "[ADD REAL RESULT]",
      "[ADD REAL RESULT]",
      "[ADD REAL RESULT]",
    ],
    lessons: [
      "Explainability improves when retrieval, graph context, and SQL evidence are surfaced together.",
      "Validation of generated queries is as important as generation quality.",
      "[ADD REAL LESSON]",
    ],
    metrics: [
      { label: "Query accuracy", value: "[ADD REAL METRIC]" },
      { label: "Retrieval relevance", value: "[ADD REAL METRIC]" },
      { label: "Latency", value: "[ADD REAL METRIC]" },
    ],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "floor-plan-segmentation",
    number: "03",
    title: "Floor Plan Segmentation & Compliance Analysis",
    shortDescription:
      "Multi-agent vision-language workflows for floor plan segmentation, layout insight, and compliance review.",
    description:
      "An AI system that uses LangGraph multi-agent workflows and vision-language models to extract structured insights from floor plans and support compliance analysis.",
    category: "Computer Vision / Agents",
    year: "2025",
    featured: true,
    caseStudy: true,
    role: "Solution Architect",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "PyTorch",
      "PostgreSQL",
      "Docker",
      "Streamlit",
    ],
    problem:
      "Manual floor plan review is slow and inconsistent when teams need structured layout insights and compliance checks at scale.",
    context:
      "Architecture and compliance workflows require extracting rooms, relationships, and rule-relevant signals from complex visual layouts.",
    businessUseCase:
      "Accelerate floor plan analysis by combining vision-language understanding with multi-agent reasoning and conversational querying over extracted structure.",
    solution:
      "Designed and architected an end-to-end AI solution for floor plan segmentation and compliance analysis, integrating multi-agent workflows, vision-language models, backend services, and scalable deployment architecture.",
    architecture: [
      "Floor Plan Input",
      "Vision-Language Model",
      "LangGraph Agents",
      "Segmentation & Reasoning",
      "PostgreSQL Store",
      "FastAPI Backend",
      "Streamlit UI",
      "Compliance Report",
    ],
    implementation: [
      "Designed and architected an end-to-end AI solution for floor plan segmentation and compliance analysis, integrating multi-agent workflows, vision-language models, backend services, and scalable deployment architecture.",
      "Built multi-agent workflows using LangGraph for parallel processing of vision and reasoning tasks.",
      "Integrated vision-language models for extracting structured insights from layouts.",
      "Developed FastAPI-based backend and Streamlit UI for interaction and visualization.",
      "Implemented storage and retrieval systems using PostgreSQL for conversational querying.",
      "Deployed the solution using Docker and CI/CD pipelines.",
    ],
    challenges: [
      "Coordinating vision and reasoning agents without blocking the full pipeline.",
      "Extracting reliable structure from noisy or inconsistent floor plan drawings.",
      "Turning visual understanding into queryable compliance-ready data.",
      "[ADD REAL CHALLENGE]",
    ],
    results: [
      "[ADD REAL RESULT]",
      "[ADD REAL RESULT]",
      "[ADD REAL RESULT]",
    ],
    lessons: [
      "Multi-agent workflows help when vision and reasoning can run as parallel responsibilities.",
      "Structured storage is essential if conversational querying is part of the product surface.",
      "[ADD REAL LESSON]",
    ],
    metrics: [
      { label: "Segmentation quality", value: "[ADD REAL METRIC]" },
      { label: "Review time saved", value: "[ADD REAL METRIC]" },
      { label: "Throughput", value: "[ADD REAL METRIC]" },
    ],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "project-slot-04",
    number: "04",
    title: "Project Slot 04",
    shortDescription:
      "Replace this placeholder with your project description.",
    description:
      "Replace this placeholder with a longer project narrative covering the business problem, system design, and outcome.",
    category: "Generative AI",
    year: "2026",
    featured: false,
    caseStudy: true,
    role: "[ADD ROLE]",
    technologies: ["Python", "LLM", "RAG"],
    problem: "Replace with the real problem.",
    context: "Replace with project context.",
    businessUseCase: "Replace with the business use case.",
    solution: "Replace with the implemented solution.",
    architecture: [
      "Input",
      "Processing",
      "Model",
      "API",
      "Deployment",
    ],
    implementation: ["[ADD IMPLEMENTATION DETAIL]"],
    challenges: ["[ADD REAL CHALLENGE]"],
    results: ["[ADD REAL RESULT]"],
    lessons: ["[ADD REAL LESSON]"],
    metrics: [],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
    isPlaceholder: true,
  },
  {
    slug: "project-slot-05",
    number: "05",
    title: "Project Slot 05",
    shortDescription:
      "Replace this placeholder with your project description.",
    description:
      "Replace this placeholder with a longer project narrative covering the business problem, system design, and outcome.",
    category: "AI Automation",
    year: "2026",
    featured: false,
    caseStudy: true,
    role: "[ADD ROLE]",
    technologies: ["Python", "FastAPI", "Agents"],
    problem: "Replace with the real problem.",
    context: "Replace with project context.",
    businessUseCase: "Replace with the business use case.",
    solution: "Replace with the implemented solution.",
    architecture: [
      "Input",
      "Agent",
      "Tools",
      "Database",
      "Result",
    ],
    implementation: ["[ADD IMPLEMENTATION DETAIL]"],
    challenges: ["[ADD REAL CHALLENGE]"],
    results: ["[ADD REAL RESULT]"],
    lessons: ["[ADD REAL LESSON]"],
    metrics: [],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
    isPlaceholder: true,
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured && !project.isPlaceholder);
}

export function getVisibleProjects() {
  return projects.filter((project) => !project.isPlaceholder);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const visible = getVisibleProjects();
  const index = visible.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: visible[(index - 1 + visible.length) % visible.length] ?? null,
    next: visible[(index + 1) % visible.length] ?? null,
  };
}
