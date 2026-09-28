export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  year: string;
  featured: boolean;
  caseStudy: boolean;
  role: string;
  technologies: string[];
  problem: string;
  context: string;
  businessUseCase: string;
  solution: string;
  architecture: string[];
  implementation: string[];
  challenges: string[];
  results: string[];
  lessons: string[];
  metrics: ProjectMetric[];
  images: ProjectImage[];
  github: string;
  demo: string;
  accent: string;
  isPlaceholder?: boolean;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  solves: string;
  deliverable: string;
  technologies: string[];
};

export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
  isPlaceholder?: boolean;
};

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  description: string;
};

export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  isPlaceholder?: boolean;
  content: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  isPlaceholder: boolean;
};

export type GithubStats = {
  username: string;
  publicRepos: number;
  followers: number;
  featuredRepos: Array<{
    name: string;
    description: string;
    language: string;
    stars: number;
    url: string;
  }>;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};
