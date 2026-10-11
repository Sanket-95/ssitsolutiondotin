import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Building2,
  ClipboardList,
  Code2,
  Cog,
  Compass,
  Eye,
  Factory,
  FlaskConical,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  LifeBuoy,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Target,
  Truck,
  Workflow,
  Wrench,
  BadgeCheck,
} from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutParagraphs = [
  'SS IT Solution brings senior-level software development experience across enterprise software, cloud infrastructure, industrial automation, IoT systems, reporting platforms, mobile applications and business process automation.',
  'This portfolio reflects systems built to improve operational efficiency, automate workflows, centralize data and scale with the business.',
  'The focus throughout is quality, reliability, performance, maintainability and clean engineering practice.',
];

export const missionVision: Feature[] = [
  {
    title: 'Focus',
    description:
      'Building dependable software, cloud and automation systems that solve real business problems and remain maintainable for years.',
    icon: Target,
  },
  {
    title: 'Growth',
    description:
      'Continuing to deepen engineering skills across enterprise software, infrastructure and automation — with an eye on quality, transparency and measurable outcomes.',
    icon: Eye,
  },
];

export const industries: Feature[] = [
  { title: 'Manufacturing', description: 'Production tracking, ERP integration and plant-floor reporting.', icon: Factory },
  { title: 'Industrial Automation', description: 'SCADA, PLC data integration and real-time monitoring.', icon: Cog },
  { title: 'Government', description: 'Secure, accessible public portals and information systems.', icon: Landmark },
  { title: 'Education', description: 'Institute websites, portals and administration tools.', icon: GraduationCap },
  { title: 'Healthcare', description: 'Patient-facing portals, records workflows and reporting.', icon: HeartPulse },
  { title: 'Retail', description: 'Inventory, sales analytics and customer communication.', icon: ShoppingBag },
  { title: 'Logistics', description: 'Fleet and shipment visibility with field-service apps.', icon: Truck },
  { title: 'Startups', description: 'Product engineering from MVP to scalable platform.', icon: Rocket },
  { title: 'SMEs', description: 'Affordable automation and business software that grows with you.', icon: Building2 },
  { title: 'Professional Services', description: 'Client portals, CRM systems and workflow automation.', icon: Briefcase },
];

export const whyChooseUs: Feature[] = [
  {
    title: 'Enterprise Development',
    description: 'Business-critical applications built with proven patterns, code reviews and documentation.',
    icon: Code2,
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Containerized, monitored deployments on Linux, Docker and Kubernetes.',
    icon: Server,
  },
  {
    title: 'Automation',
    description: 'From business workflows to industrial SCADA and IoT data pipelines.',
    icon: Workflow,
  },
  {
    title: 'Scalable Architecture',
    description: 'Modular systems designed to handle growth in users, data and features.',
    icon: Layers,
  },
  {
    title: 'Long-Term Thinking',
    description: 'Code written with maintenance, monitoring and future iteration in mind.',
    icon: LifeBuoy,
  },
  {
    title: 'Security Minded',
    description: 'Secure defaults, access control and dependency hygiene throughout development.',
    icon: ShieldCheck,
  },
  {
    title: 'Performance Driven',
    description: 'Measured, optimized and tuned for fast load times and efficient queries.',
    icon: Gauge,
  },
  {
    title: 'Structured Process',
    description: 'Defined milestones, transparent progress tracking and predictable releases.',
    icon: BadgeCheck,
  },
];

export const processSteps: Feature[] = [
  {
    title: 'Requirement Analysis',
    description: 'Working with stakeholders to understand goals, constraints, users and success criteria.',
    icon: ClipboardList,
  },
  {
    title: 'Architecture Planning',
    description: 'Defining the system architecture, technology stack, integrations and delivery roadmap.',
    icon: Compass,
  },
  {
    title: 'Development',
    description: 'Iterative development in milestones, with regular demos and transparent progress.',
    icon: Code2,
  },
  {
    title: 'Testing',
    description: 'Functional, performance and security testing to ensure production readiness.',
    icon: FlaskConical,
  },
  {
    title: 'Deployment',
    description: 'Automated, monitored rollout to cloud or on-premise infrastructure with zero surprises.',
    icon: Rocket,
  },
  {
    title: 'Support & Optimization',
    description: 'Ongoing maintenance, monitoring and enhancements as your business evolves.',
    icon: Wrench,
  },
];
