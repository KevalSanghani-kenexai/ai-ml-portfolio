// EDIT THIS FILE TO ADD PROJECTS
// All project UI renders from this single data source.

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "agentic-contract-analysis-platform",
    number: "01",
    title: "Agentic AI Contract Analysis Platform",
    shortDescription:
      "Multi-agent LangGraph platform on Azure for contract Q&A, provision comparison, and risk-scored gap analysis with page-level citations.",
    description:
      "An agentic contract analysis platform on Azure that routes requests through a multi-agent LangGraph architecture, answers questions over contracts with a production RAG pipeline, compares provisions against YAML-driven catalogs, and scores clauses against company-standard positions.",
    category: "AI Agents & RAG",
    year: "2024 – Present",
    featured: true,
    caseStudy: true,
    role: "AI/ML Engineer · KenexAi",
    technologies: [
      "Python",
      "LangGraph",
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Document Intelligence",
      "Azure App Service",
      "Azure Blob Storage",
      "FastAPI",
      "Langfuse",
    ],
    problem:
      "Reviewing contracts against company-standard positions means reading long documents clause by clause, answering the same FAQ questions repeatedly, and judging risk manually.",
    context:
      "Business users needed answers they could verify, requirements they could change without engineering work, and a service that could process multiple contracts reliably within Azure OpenAI rate limits.",
    businessUseCase:
      "Automate contract Q&A, FAQ extraction, provision comparison, and gap analysis so reviewers start from cited answers, risk-scored clauses, suggested mitigations, and executive summaries.",
    solution:
      "Designed a multi-agent LangGraph architecture with an LLM-based intent router that uses structured Pydantic outputs to classify requests into 7 intents and detect prompt-injection and jailbreak attempts. Behind it sit a production RAG pipeline on Azure AI Document Intelligence, Azure OpenAI embeddings and Azure AI Search, YAML-driven extraction and comparison catalogs, and an LLM-powered gap analysis engine, deployed as a FastAPI service on Azure App Service.",
    architecture: [
      "Contract Upload",
      "Document Intelligence",
      "Azure OpenAI Embeddings",
      "Azure AI Search",
      "LangGraph Intent Router",
      "Specialist Agents",
      "Gap Analysis",
      "Cited Answers",
    ],
    implementation: [
      "Designed a multi-agent LangGraph architecture with an LLM-based intent router (structured Pydantic outputs) that classifies requests into 7 intents and detects prompt-injection/jailbreak attempts.",
      "Built a production RAG pipeline on Azure AI Document Intelligence, Azure OpenAI embeddings, and Azure AI Search (HNSW + semantic reranking), delivering answers with page-level citations.",
      "Automated extraction of 83 FAQ questions and comparison of 73 contract provisions using YAML-driven catalogs, letting business users change requirements without code changes.",
      "Developed an LLM-powered gap analysis engine that scores clauses against company-standard positions by risk and criticality, and generates mitigations and executive summaries.",
      "Engineered an async, fault-tolerant job orchestration layer with SHA-256 idempotency keys, Azure Blob Storage state, result caching, parallel processing, and retry/backoff for Azure rate limits.",
      "Deployed as a FastAPI service on Azure App Service (Gunicorn/Uvicorn) supporting multi-file uploads, Apache Impala data-lake lookups, Langfuse tracing, and structured logging with credential redaction.",
    ],
    challenges: [
      "Classifying free-form requests reliably and blocking prompt-injection and jailbreak attempts before they reach downstream agents.",
      "Keeping answers verifiable for business users, which required page-level citations rather than unsupported summaries.",
      "Processing multiple contracts in parallel within Azure OpenAI rate limits without duplicating work or losing job state.",
    ],
    results: [
      "Answers are delivered with page-level citations using Azure AI Search with HNSW and semantic reranking.",
      "Business users can change FAQ and provision requirements through YAML catalogs without code changes.",
      "Clauses are scored by risk and criticality against company-standard positions, with generated mitigations and executive summaries.",
    ],
    lessons: [],
    metrics: [
      { label: "Request intents", value: "7" },
      { label: "FAQ questions automated", value: "83" },
      { label: "Contract provisions compared", value: "73" },
    ],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "ai-mock-interview-voice-agent",
    number: "02",
    title: "AI Mock Interview Platform: Real-Time Voice Interview Agent",
    shortDescription:
      "Real-time voice AI interviewer with streaming STT, LLM and TTS, RAG-tailored questions, and natural turn-taking over WebRTC.",
    description:
      "An end-to-end voice AI interviewer built on Pipecat that conducts spoken mock interviews, tailors questions to the company, role and job description through RAG, and streams low-latency audio between the browser and the bot over WebRTC.",
    category: "Voice AI & RAG",
    year: "2024 – Present",
    featured: true,
    caseStudy: true,
    role: "AI/ML Engineer · KenexAi",
    technologies: [
      "Python",
      "Pipecat",
      "OpenAI GPT-4o-mini",
      "Deepgram",
      "Cartesia",
      "Qdrant",
      "WebRTC",
      "WebSockets",
      "FastAPI",
      "React",
      "TypeScript",
    ],
    problem:
      "Practicing with a static question list or a text chatbot doesn't reflect a real spoken interview, and voice bots that interrupt candidates mid-sentence break the experience.",
    context:
      "A convincing mock interviewer needs natural speech in both directions, questions relevant to the specific job, and a live transcript, all at conversational latency.",
    businessUseCase:
      "Give candidates realistic, spoken mock interviews tailored to a company, role and job description, with a live conversation transcript.",
    solution:
      "Built an end-to-end voice AI interviewer on Pipecat with a streaming pipeline of Deepgram STT, OpenAI GPT-4o-mini, and Cartesia TTS. Questions are generated with RAG over job descriptions embedded in Qdrant, audio flows over WebRTC, turn-taking is tuned with Silero VAD and a local Smart Turn v3 model, and a FastAPI backend manages interview lifecycles for a React + TypeScript frontend.",
    architecture: [
      "Browser (React)",
      "WebRTC Audio",
      "Silero VAD + Smart Turn",
      "Deepgram STT",
      "GPT-4o-mini",
      "Qdrant RAG",
      "Cartesia TTS",
      "Live Transcript",
    ],
    implementation: [
      "Built an end-to-end voice AI interviewer on Pipecat with a streaming pipeline of Deepgram STT, OpenAI GPT-4o-mini, and Cartesia TTS for natural, spoken mock interviews.",
      "Implemented RAG-based question generation: job descriptions embedded with OpenAI embeddings in Qdrant, retrieving the top-5 similar questions to tailor interviews by company, role, and JD, with a fallback question set on failure.",
      "Set up low-latency, two-way audio over WebRTC (SDP offer/answer, ICE/STUN) between the browser and the bot server.",
      "Tuned turn-taking with Silero VAD and a local Smart Turn v3 (ONNX) model, so the bot waits for candidates to finish instead of interrupting mid-sentence.",
      "Built a real-time transcript system using FastAPI WebSockets with auto-reconnect, merging bot and client-side WebRTC transcripts into a live conversation view.",
      "Designed a FastAPI backend managing interview lifecycles (session creation, per-interview bot subprocesses, status) with a React + TypeScript frontend (Vite, Tailwind).",
    ],
    challenges: [
      "Keeping the speech-to-text, LLM and text-to-speech round trip fast enough for natural spoken conversation.",
      "Avoiding interruptions: the bot has to wait for candidates to finish rather than cutting in mid-sentence.",
      "Keeping interviews running when retrieval fails, and merging bot and client transcripts into one live view.",
    ],
    results: [
      "Natural, spoken mock interviews through a streaming Deepgram, GPT-4o-mini and Cartesia pipeline.",
      "Interviews tailored by company, role and job description, with a fallback question set if retrieval fails.",
      "The bot waits for candidates to finish speaking instead of interrupting mid-sentence.",
      "A live conversation view that merges bot and client-side transcripts with auto-reconnect.",
    ],
    lessons: [],
    metrics: [{ label: "Similar questions retrieved", value: "Top 5" }],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "explainable-text-to-sql-rag",
    number: "03",
    title: "Explainable Text-to-SQL & RAG System",
    shortDescription:
      "Hybrid Text-to-SQL and RAG on AWS over 102 structured tables and unstructured documents, with schema and page-level references.",
    description:
      "A hybrid Text-to-SQL and RAG system on AWS that answers natural-language questions across a drug-related dataset of 102 structured tables in RDS and unstructured documents in S3, showing where every answer came from.",
    category: "Text-to-SQL & RAG",
    year: "2024 – Present",
    featured: true,
    caseStudy: true,
    role: "AI/ML Engineer · KenexAi",
    technologies: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "AWS S3",
      "AWS OpenSearch",
      "AWS Bedrock",
      "AWS RDS",
    ],
    problem:
      "Answering questions across a large relational schema and a document corpus normally requires SQL expertise and manual searching, and AI-generated answers are hard to trust without evidence.",
    context:
      "The data spanned 102 structured tables in AWS RDS and unstructured documents in AWS S3, so the system had to handle both structured queries and document retrieval inside the AWS ecosystem.",
    businessUseCase:
      "Let users ask questions in plain language and receive answers backed by the SQL schema references, or the document names and page numbers, used to produce them.",
    solution:
      "Built a hybrid pipeline that uses LangChain to convert natural language into SQL with LLM-based reranking, AWS OpenSearch as the vector store for schema and document embeddings, and LlamaIndex-based RAG for contextual retrieval over S3 documents, deployed within the AWS ecosystem.",
    architecture: [
      "User Question",
      "LangChain Text-to-SQL",
      "AWS RDS",
      "OpenSearch Vectors",
      "LlamaIndex RAG",
      "AWS S3 Documents",
      "AWS Bedrock",
      "Answer + References",
    ],
    implementation: [
      "Built a hybrid Text-to-SQL and RAG pipeline over a drug-related dataset of 102 structured tables (AWS RDS) and unstructured documents (AWS S3).",
      "Used LangChain to convert natural language into SQL with LLM-based reranking, and AWS OpenSearch as the vector store for schema and document embeddings.",
      "Implemented LlamaIndex-based RAG for contextual retrieval over S3 documents.",
      "Displayed schema references for SQL queries and document names with page numbers for unstructured data, ensuring explainability of results.",
      "Deployed and integrated the complete system within the AWS ecosystem for scalable, production-ready usage.",
    ],
    challenges: [
      "Mapping natural language onto a 102-table schema accurately enough to produce correct SQL.",
      "Combining structured query results and unstructured document retrieval in a single system.",
      "Making results explainable for both SQL answers and document answers.",
    ],
    results: [
      "SQL answers display the schema references used to produce them.",
      "Document answers show document names with page numbers.",
      "The complete system is deployed and integrated within the AWS ecosystem.",
    ],
    lessons: [],
    metrics: [{ label: "Structured tables", value: "102" }],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "email-folder-recommendation",
    number: "04",
    title: "Intelligent Email Folder Recommendation System",
    shortDescription:
      "Semantic email classification that recommends the top 5 folders for incoming mail using ACL-aware vector similarity search.",
    description:
      "An end-to-end semantic email classification system that recommends the five most relevant folders for each incoming email using vector similarity search over historical email metadata, while respecting user access controls.",
    category: "Vector Search",
    year: "2024 – Present",
    featured: false,
    caseStudy: true,
    role: "AI/ML Engineer · KenexAi",
    technologies: [
      "Python",
      "Qdrant",
      "FAISS",
      "Milvus",
      "Pinecone",
      "pgvector",
      "Sentence Transformers",
      "FastAPI",
      "Docker",
      "HNSW",
      "IVF",
    ],
    problem:
      "Filing incoming email into the right folder is repetitive manual work, and any automated suggestion must never expose folders a user isn't allowed to access.",
    context:
      "Recommendations had to be real-time and low-latency, built on historical email metadata, and compliant with enterprise security requirements.",
    businessUseCase:
      "Suggest the most relevant folders for each incoming email so users can file faster, with recommendations that strictly follow access controls.",
    solution:
      "Embedded email subject, body, CC and metadata into vectors stored in Qdrant for low-latency similarity search, designed ACL-aware retrieval logic, and benchmarked Qdrant, Milvus, FAISS, Pinecone and pgvector with HNSW and IVF indexing to optimize for latency, recall and scalability.",
    architecture: [
      "Incoming Email",
      "Sentence Transformers",
      "Email Embeddings",
      "Qdrant (HNSW)",
      "ACL Filter",
      "Similarity Search",
      "Top-5 Folders",
    ],
    implementation: [
      "Built an end-to-end semantic email classification system that recommends the top-5 most relevant folders for incoming emails using vector similarity search over historical email metadata.",
      "Embedded email subject, body, CC, and metadata into vectors stored in Qdrant, enabling low-latency, real-time similarity search.",
      "Designed ACL-aware retrieval logic so recommendations strictly complied with user access controls and enterprise security requirements.",
      "Benchmarked vector databases (Qdrant, Milvus, FAISS, Pinecone, pgvector) and indexing strategies (HNSW, IVF), optimizing for latency, recall, and scalability.",
    ],
    challenges: [
      "Guaranteeing recommendations never surface folders outside a user's access rights.",
      "Keeping similarity search low-latency enough for real-time suggestions.",
      "Choosing a vector database and index that balance latency, recall and scalability.",
    ],
    results: [
      "Real-time top-5 folder recommendations for incoming emails.",
      "Recommendations strictly comply with user access controls and enterprise security requirements.",
      "A benchmark of five vector databases and indexing strategies to guide the storage choice.",
    ],
    lessons: [],
    metrics: [
      { label: "Folders recommended", value: "Top 5" },
      { label: "Vector databases benchmarked", value: "5" },
    ],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
  },
  {
    slug: "ai-lawyer-ben",
    number: "05",
    title: "AI Lawyer Ben: Legal Chatbot & Document Generation",
    shortDescription:
      "Contributed to a live AI legal assistant for conversational legal Q&A and automated legal document generation.",
    description:
      "A live AI-powered legal assistant that lets users query legal content conversationally and generates legal documents automatically. I contributed the RAG pipeline, ingestion workflows and vector storage.",
    category: "RAG / Legal AI",
    year: "2024",
    featured: false,
    caseStudy: true,
    role: "Machine Learning Intern · Fxis AI",
    technologies: ["Python", "RAG", "Qdrant", "Generative AI", "NLP", "Docker"],
    problem:
      "Finding relevant legal information and drafting legal documents is slow and requires expertise many users don't have.",
    context:
      "The product was already live, so retrieval quality, response accuracy and system reliability all mattered for real users.",
    businessUseCase:
      "Let users ask legal questions conversationally and generate legal documents automatically, grounded in retrieved legal content.",
    solution:
      "Designed and implemented a RAG pipeline to retrieve relevant legal content from embedded documents, built ingestion workflows that chunk files, generate embeddings and store vectors in Qdrant, and used Docker-based services for vector storage, retrieval and deployment.",
    architecture: [
      "Legal Documents",
      "Chunking",
      "Embeddings",
      "Qdrant",
      "Retrieval",
      "LLM",
      "Answer / Document",
    ],
    implementation: [
      "Contributed to a live AI-powered legal assistant enabling conversational querying and automated legal document generation.",
      "Designed and implemented a RAG pipeline to retrieve relevant legal content from embedded documents.",
      "Built ingestion workflows to chunk files, generate embeddings, and store vectors in Qdrant for efficient semantic search.",
      "Used Docker-based services to manage vector storage, retrieval pipelines, and deployment.",
      "Applied ML, NLP, and Generative AI techniques to improve response accuracy and system reliability.",
    ],
    challenges: [
      "Retrieving the right legal passages from a large set of embedded documents.",
      "Improving response accuracy and reliability for a product already in live use.",
    ],
    results: [
      "Semantic search over legal content through chunked, embedded documents stored in Qdrant.",
      "Containerized vector storage and retrieval services supporting the live assistant.",
    ],
    lessons: [],
    metrics: [],
    images: [],
    github: "",
    demo: "",
    accent: "#C6F24E",
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
