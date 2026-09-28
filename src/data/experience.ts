// EDIT THIS FILE TO UPDATE EXPERIENCE
import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "kenexai",
    period: "NOV 2024 — PRESENT",
    role: "AI/ML Engineer",
    company: "KenexAi (formerly Ridgeant Technologies)",
    location: "Ahmedabad",
    current: true,
    responsibilities: [
      "Designed a multi-agent LangGraph contract analysis platform on Azure with an LLM-based intent router, prompt-injection detection, and a production RAG pipeline delivering answers with page-level citations.",
      "Built an LLM-powered gap analysis engine that scores contract clauses against standard positions by risk and criticality, with async, fault-tolerant job orchestration deployed as a FastAPI service on Azure App Service.",
      "Built a real-time voice AI mock interviewer on Pipecat (Deepgram STT, GPT-4o-mini, Cartesia TTS) with RAG-based question generation over Qdrant, low-latency WebRTC audio, and VAD-based turn-taking.",
      "Built a hybrid Text-to-SQL and RAG system on AWS (RDS, S3, OpenSearch, Bedrock) using LangChain and LlamaIndex, surfacing schema references and document page citations for explainable answers.",
      "Built an ACL-aware semantic email folder recommendation system on Qdrant and benchmarked vector databases (Qdrant, Milvus, FAISS, Pinecone, pgvector) and indexing strategies for latency, recall, and scale.",
    ],
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "Azure OpenAI",
      "Azure AI Search",
      "AWS Bedrock",
      "FastAPI",
      "Pipecat",
      "Qdrant",
      "WebRTC",
      "Langfuse",
    ],
  },
  {
    id: "fxis-ai",
    period: "JUL 2024 — OCT 2024",
    role: "Machine Learning Intern",
    company: "Fxis AI",
    location: "Ahmedabad",
    current: false,
    responsibilities: [
      "Contributed to AI Lawyer Ben, a live AI legal assistant for conversational querying and automated legal document generation.",
      "Designed and implemented a RAG pipeline to retrieve relevant legal content from embedded documents.",
      "Built ingestion workflows to chunk files, generate embeddings, and store vectors in Qdrant for semantic search.",
      "Used Docker-based services to manage vector storage, retrieval pipelines, and deployment.",
    ],
    technologies: ["Python", "RAG", "Qdrant", "Generative AI", "NLP", "Docker"],
  },
];
