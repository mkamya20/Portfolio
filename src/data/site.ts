export const site = {
  name: "Moses Kamya",
  title: "Applied Data Scientist & Software Engineer",
  tagline:
    "Building data pipelines, GenAI systems, and full-stack tools that turn research into reliable, production-ready software.",
  email: "mkamya@syr.edu",
  phone: "+1 (315) 450-0530",
  profileImage: "/profile.jpg",
  links: {
    github: "https://github.com/mkamya20",
    linkedin: "https://www.linkedin.com/in/mkamya20",
    resume: "/Resume_MS.docx",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const education = [
  {
    school: "Syracuse University",
    detail: "School of Information Studies · Syracuse, NY",
    degree: "Master of Science in Applied Data Science",
    date: "Dec 2026",
    coursework: [
      "Python for Data Analysis",
      "Applied Machine Learning",
      "Natural Language Processing",
    ],
  },
  {
    school: "University of Regina",
    detail: "Regina, SK, Canada",
    degree: "Bachelor of Science in Computer Science",
    date: "May 2024",
    coursework: [
      "Database Programming",
      "Advanced Artificial Intelligence",
      "Object Oriented Design",
    ],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Open Source Program Office, Syracuse University",
    location: "Syracuse, NY",
    period: "Jan 2026 – Present",
    highlights: [
      "Advanced a Python QGIS plugin for an NSF grant-funded ($719K) open source project, automating GitHub CI/CD, cutting release effort by 50%.",
      "Built full-stack web app with React/Vue.js frontend and Django backend using a PostgreSQL database supporting external contributor workflows at scale.",
      "Maintain DevOps workflows across 8 open source projects, automating testing, building validation, and deployment via GitHub Actions across 100+ pull requests, cutting integration failures by 35%.",
    ],
  },
  {
    role: "Research Assistant",
    company: "C4 Lab, Syracuse University",
    location: "Syracuse, NY",
    period: "Aug 2025 – Present",
    highlights: [
      "Co-led development of a production GenAI service using Azure OpenAI, LangChain, and Hugging Face with RAG pipelines, PDF ingestion, vector embeddings, and semantic search across 1,000+ scientific documents.",
      "Developed ingestion, embedding, and API workflows with ChromaDB and FastAPI, improving retrieval accuracy and throughput by 45%.",
      "Containerized RAG services with Docker and designed Kubernetes-ready deployment architecture, reducing setup time by 40%.",
      "Built ML models (XGBoost, random forest, PCA, k-means, TensorFlow neural networks) with GPU acceleration, improving clustering reliability by 50%.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Infectious Disease Research Collaboration (IDRC)",
    location: "Kampala, Uganda",
    period: "Jun 2024 – Jun 2025",
    highlights: [
      "Eliminated manual data extraction for 100+ researchers, cutting retrieval time by 50%, by deploying SSIS packages across 70 datasets from remotely located sites into SQL Server.",
      "Cut query execution time by 50% for 20+ research teams, by designing optimized SQL Server schemas and an ASP.NET/C# data access layer with role-based access control managing 1M+ malaria records.",
      "Reduced pipeline failure rates by 50%, by building distributed ETL pipelines loading 100K+ monthly blood sample records.",
      "Enabled data-driven public health decisions across 25+ districts by translating complex operational data needs into Power BI and R Shiny dashboards for cross-functional non-technical stakeholders.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Innovation Federal Credit Union",
    location: "Regina, Canada",
    period: "Jan 2023 – May 2023",
    highlights: [
      "Built Java and React/Node.js backend features, shipping client-facing digital banking components within agile sprint cycles, page load benchmarks up 60%.",
      "Applied unit testing, A/B testing, and QA procedures to validate production releases, ensuring accuracy and reliability of financial software handling real client transactions across weekly deployments.",
      "Managed code via Git/GitHub and Azure DevOps CI/CD pipelines, participated in code reviews, architecture discussions, and sprint retrospectives following SDLC best practices.",
    ],
  },
] as const;

export const projects = [
  {
    title: "GRAVITYbot - LLM Summarization Tool",
    stack: "Azure OpenAI · Docker · cron · BeautifulSoup · Pandas",
    period: "2025 – Present",
    description:
      "Co-developed an LLM-driven narrative generation system that automatically distills hundreds of citizen science forum posts into researcher-ready summaries for LIGO/Gravity Spy teams, eliminating manual review.",
    href: "https://github.com/mkamya20/GravityBot",
  },
  {
    title: "Gallery of Possibilities Platform",
    stack: "Django · PostgreSQL · React · Vite",
    period: "2026 – Present",
    description:
      "Centralized icon data into a PostgreSQL REST API (Django REST Framework), designing workflows for browse, search, upload, and approval of community assets—shared backend serving both the web platform and QGIS plugin.",
    href: "https://github.com/su-cartography/gop-web",
  },
  {
    title: "LLM-Powered RAG Knowledge Agent",
    stack: "Python, LangChain, Azure OpenAI, Docker, Kubernetes",
    period: "Jan 2026 – Present",
    description:
      "Architected a scalable query and retrieval service over 1,000+ unstructured documents with ingestion, embedding, and retrieval pipelines, deployed on Kubernetes with automated scheduling.",
    href: "https://github.com/mkamya20/GenAI-RAG-chatbot-",
  },
  {
    title: "Phylogenetic Trait Analysis Project",
    stack: "Python (PyTorch, TensorFlow, scikit-learn, Matplotlib)",
    period: "Aug 2025 – Present",
    description:
      "Implemented algorithms for pattern detection across large biological datasets using distributed Spark processing, applying PCA, SVM, GMM, and UMAP to identify evolutionary trait dependencies.",
    href: "https://github.com/mkamya20/SyndromeandLevers.git",
  },
  {
    title: "Malaria Surveillance Dashboard",
    stack: "R, dplyr, ggplot, Posit, R Shiny",
    period: "Jan 2025 – May 2025",
    description:
      "Built an interactive R Shiny dashboard analyzing time-series malaria incidence, test positivity rates, and spatial trends across 25+ districts. Presented findings to UCSF investigators to support early intervention decisions by public health researchers.",
    href: "https://github.com/mkamya20/UMSP-Dashboard",
  },
  {
    title: "Malaria Samples Tracking Application",
    stack: "ASP.NET MVC, C#, SQL Server",
    period: "Jun 2024 – Dec 2024",
    description:
      "Developed a full-stack web application for CRUD operations on 1M+ malaria blood samples with optimized schemas, role-based authentication, and an ASP.NET MVC interface.",
    href: "https://github.com/mkamya20/Malaria-Sample-Tracking-Application.git",
  },
] as const;

export const skills = {
  languages: ["Python", "R", "SQL", "C#", "JavaScript"],
  technologies: [
    "Pandas",
    "NumPy",
    "scikit-learn",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "Matplotlib",
    "R Shiny",
    "ggplot2",
    "dplyr",
    "Seaborn",
    "LangChain",
    "Django",
    "React",
    "BeautifulSoup",
  ],
  tools: [
    "Git/GitHub",
    "Azure",
    "Databricks",
    "Power BI",
    "Tableau",
    "Jupyter",
    "Cursor",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Vite",
  ],
} as const;
