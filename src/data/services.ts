import type { LucideIcon } from 'lucide-react';
import {
  Blocks,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Database,
  Factory,
  Globe,
  MessagesSquare,
  Smartphone,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
}

export const services: Service[] = [
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Development',
    description:
      'Custom business applications and high-performance APIs engineered for reliability, security and scale — from internal portals to integrated CRM and ERP workflows.',
    icon: Blocks,
    capabilities: [
      'React Applications',
      'NodeJS Applications',
      'FastAPI Applications',
      'PHP Applications',
      'Desktop Applications',
      'CRM Solutions',
      'ERP Integrations',
      'Business Portals',
    ],
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description:
      'High-performance, accessible and search-optimized websites and web platforms that represent your organization with credibility.',
    icon: Globe,
    capabilities: [
      'Corporate Websites',
      'Government Portals',
      'Business Websites',
      'Portfolio Websites',
      'Landing Pages',
      'SEO Optimized Websites',
      'Custom Web Platforms',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Application Development',
    description:
      'Cross-platform and Android applications that put business processes, field operations and data capture in your team’s hands.',
    icon: Smartphone,
    capabilities: ['React Native', 'Android Solutions', 'Business Apps', 'Field Service Apps', 'Data Collection Apps'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Containerized deployments, automated pipelines and observable infrastructure that keep your systems available and easy to evolve.',
    icon: CloudCog,
    capabilities: [
      'Docker',
      'Kubernetes',
      'Linux Servers',
      'Cloud Deployments',
      'CI/CD',
      'Monitoring',
      'Infrastructure Support',
    ],
  },
  {
    id: 'database-solutions',
    title: 'Database Solutions',
    description:
      'Design, tuning and migration of relational and document databases for consistent performance and data integrity.',
    icon: Database,
    capabilities: [
      'MySQL',
      'Oracle',
      'PostgreSQL',
      'MongoDB',
      'SQL Server',
      'Database Optimization',
      'Migration Services',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description:
      'Practical AI integrations and workflow automation that reduce manual effort and turn operational data into decisions.',
    icon: BrainCircuit,
    capabilities: [
      'Claude Integrations',
      'Chatbot Development',
      'Workflow Automation',
      'Business Automation',
      'AI Assisted Reporting',
      'Custom AI Tools',
    ],
  },
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    description:
      'Connecting the shop floor to the enterprise — SCADA, IoT and PLC data integration with real-time visibility for operations teams.',
    icon: Factory,
    capabilities: [
      'SCADA Systems',
      'IoT Platforms',
      'PLC Data Integration',
      'Automation Dashboards',
      'Industrial Monitoring',
    ],
  },
  {
    id: 'reporting-analytics',
    title: 'Reporting & Analytics',
    description:
      'Dashboards and reports that give leadership and operators a single, trustworthy view of performance.',
    icon: ChartNoAxesCombined,
    capabilities: [
      'Grafana Dashboards',
      'Executive Dashboards',
      'Custom Reports',
      'Business Intelligence',
      'Real-time Monitoring',
    ],
  },
  {
    id: 'communication-solutions',
    title: 'Communication Solutions',
    description:
      'Automated, reliable customer and team communication across WhatsApp, email and notification channels.',
    icon: MessagesSquare,
    capabilities: [
      'WhatsApp Automation',
      'Email Automation',
      'Cloud Mail Systems',
      'Notification Systems',
      'Customer Communication Platforms',
    ],
  },
];
