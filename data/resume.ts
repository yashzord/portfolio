export const personal = {
  name: "Yashwant Bitra",
  title: "AI/ML Engineer",
  roles: ["AI/ML Engineer", "Full Stack Developer", "Data Engineer", "Cybersecurity Researcher"],
  email: "yashubitra@gmail.com",
  phone: "(813) 593-8899",
  location: "United States — Open to Relocation",
  linkedin: "https://linkedin.com/in/yashwant-bitra",
  github: "https://github.com/yashzord",
  tagline: "I build AI systems that actually ship.",
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    track: "Artificial Intelligence Track",
    school: "State University of New York at Binghamton",
    gpa: "3.82 / 4.00",
    graduated: "May 2025",
    honors: "Dean's List: Fall 2022 – Spring 2024",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University of New York at Binghamton",
    gpa: "3.82 / 4.00",
    graduated: "May 2024",
    honors: "Dean's List: Fall 2022 – Spring 2024",
  },
];

export const experience = [
  {
    title: "Teaching Assistant & Research Assistant",
    company: "State University of New York at Binghamton",
    department: "School of Computing",
    location: "Binghamton, NY",
    period: "August 2024 – Present",
    bullets: [
      "Mentored 40+ students in full-stack development (React.js, TypeScript, MongoDB); drove 10+ team capstone projects from requirements through production deployment.",
      "Automated project grading infrastructure via custom GradeScope scripts, cutting review time by 15 min/submission across 40+ students.",
      "Researched LLM architectures, RAG systems, and agentic AI frameworks; applied findings to independent production AI system development.",
    ],
  },
  {
    title: "Software Developer / Machine Learning Engineer Intern",
    company: "CoreCard Software, Inc.",
    location: "Atlanta, GA",
    period: "May 2023 – August 2023",
    bullets: [
      "Shipped a production real-time fraud detection REST API (XGBoost, Random Forest, SMOTE) achieving 85% accuracy and cutting fraud 25% across 1M+ transactions.",
      "Delivered an interactive 3D analytics dashboard (D3.js + Plotly) that saved 10 min/session per client and directly informed a $500K+ strategic decision.",
    ],
  },
];

export const projects = [
  {
    name: "ST Intelligent Assistant: Production Agentic AI Platform",
    period: "Jan 2026 – Present",
    stack: ["Python", "FastAPI", "LangGraph", "MCP", "Groq", "Ollama", "vLLM", "ChromaDB", "Langfuse", "DeepEval"],
    bullets: [
      "Building a production agentic AI system with dual architectures (custom ReAct + LangGraph) enabling natural language access to 49+ live business tools via Model Context Protocol (MCP).",
      "Implemented RAG-based semantic tool routing (ChromaDB + nomic-embed-text embeddings) dynamically selecting from 49 tools — zero manual mapping, zero-setup onboarding for new tools.",
      "Architected a model-agnostic inference layer (Groq, Ollama, vLLM, any OpenAI-compatible API) with PII guardrails, Guardrails AI output validation, and OWASP Top 10 for LLM compliance.",
      "Built full MLOps observability with Langfuse (traces, latency, token/cost) and CI/CD evaluation pipelines with promptfoo and DeepEval tracking tool selection accuracy and hallucination rates.",
    ],
    github: null,
    featured: true,
  },
  {
    name: "GRC Compliance Data Ingestion Platform",
    period: "Jan 2026 – Present",
    stack: ["Python", "PostgreSQL", "AWS RDS", "JSONB", "psycopg3", "Docker", "REST APIs"],
    bullets: [
      "Engineered ETL pipelines for 6 regulatory compliance frameworks (CMMC L1/L2/L3, HIPAA, FedRAMP, HITRUST-CSF, DORA, CRI Profile) into a unified AWS RDS PostgreSQL production database.",
      "Designed content-aware versioning — auto-increments version only on data change, preventing duplicate writes and maintaining integrity across 20+ frameworks.",
      "Normalized heterogeneous sources (Excel, PDF, HTML, live REST APIs) into a single JSONB schema supporting compliance trees up to 4 levels deep.",
    ],
    github: null,
    featured: true,
  },
  {
    name: "Mobile Intrusion Detection System",
    period: "Jan 2025 – May 2025",
    stack: ["Python", "TensorFlow", "Keras", "mitmproxy", "LUKS", "Streamlit"],
    bullets: [
      "Intercepted 25,000+ HTTP/HTTPS flows from a live iOS device via mitmproxy; stored in LUKS-encrypted volumes.",
      "Trained a deep autoencoder on 21,993 network flows for unsupervised anomaly detection — cut false positives from 1,100 to 103 (90% reduction).",
      "Shipped a Streamlit real-time monitoring dashboard replacing manual log triage.",
    ],
    github: null,
    featured: false,
  },
  {
    name: "LLM Analytics Platform: Social Media Intelligence",
    period: "Aug 2024 – Dec 2024",
    stack: ["Python", "MongoDB", "Flask", "Hugging Face", "LangChain"],
    bullets: [
      "Ingested 100K+ posts across Reddit, 4chan, and YouTube to power cross-platform toxicity and trend analysis.",
      "Built a RAG-powered chatbot (LangChain + MongoDB) for natural language querying over 100K+ documents; integrated Hugging Face classifiers at 90% toxicity detection accuracy.",
    ],
    github: null,
    featured: false,
  },
];

export const skills = {
  "Languages": ["Python", "TypeScript", "JavaScript", "C++", "C"],
  "AI/ML & GenAI": ["LLMs", "RAG", "Agentic AI", "LangChain", "LangGraph", "MCP", "Hugging Face", "Ollama", "vLLM", "Groq", "TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
  "MLOps & Evaluation": ["Langfuse", "MLflow", "DeepEval", "promptfoo", "Guardrails AI", "GitHub Actions", "CI/CD"],
  "Cloud & Infrastructure": ["AWS (Bedrock, SageMaker, EC2, S3, RDS)", "Docker", "FastAPI", "Flask", "REST APIs", "Linux/Unix", "Git"],
  "Databases": ["ChromaDB", "PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  "Certifications": ["Google Data Analytics", "Google Cybersecurity", "Relational Database Systems"],
};

export const leadership = [
  {
    title: "Vice President",
    org: "Theta Tau Engineering Fraternity",
    location: "Binghamton, NY",
    period: "December 2023 – May 2024",
    bullets: [
      "Led chapter-wide organizational planning, facilitated leadership meetings, tracked action items, and managed competing stakeholder priorities across concurrent chapter initiatives.",
      "Served as primary liaison between chapter leadership and membership, resolving conflicts, communicating decisions, and maintaining alignment on chapter goals.",
    ],
  },
];
