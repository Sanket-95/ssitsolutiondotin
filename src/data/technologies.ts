import type { BrandKey } from './brandIcons';

export interface Technology {
  name: string;
  icon: BrandKey;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  items: Technology[];
}

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Modern, accessible interfaces for web and mobile.',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Vite', icon: 'vite' },
      { name: 'React Native', icon: 'react' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Secure APIs, services and integrations.',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'PHP', icon: 'php' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational and document data platforms.',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Oracle', icon: 'oracle' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'SQL Server', icon: 'sqlserver' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description: 'Containerized, portable infrastructure.',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Version control, automation and delivery.',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Monitoring, dashboards and reporting.',
    items: [{ name: 'Grafana', icon: 'grafana' }],
  },
];

/** Logos shown floating in the hero. */
export const heroTechnologies: Technology[] = [
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'Oracle', icon: 'oracle' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Grafana', icon: 'grafana' },
];
