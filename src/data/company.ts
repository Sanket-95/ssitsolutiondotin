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
  Handshake,
} from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutParagraphs = [
  'SS IT Solution is a technology consulting and software development company delivering reliable digital solutions across enterprise software, cloud infrastructure, industrial automation, IoT systems, reporting platforms, mobile applications and business process automation.',
  'We help organizations improve operational efficiency, automate workflows, centralize data and build scalable software systems designed for long-term growth.',
  'Our focus is quality, reliability, performance, maintainability and ongoing support.',
];

export const missionVision: Feature[] = [
  {
    title: 'Mission',
    description:
      'To help organizations operate more efficiently by delivering dependable software, cloud and automation systems that solve real business problems and remain maintainable for years.',
    icon: Target,
  },
  {
    title: 'Vision',
    description:
      'To be a trusted long-term technology partner for enterprises, industry and the public sector — recognized for engineering quality, transparency and measurable outcomes.',
    icon: Eye,
  },
];

export const coreValues: Feature[] = [
  { title: 'Quality', description: 'Clean, tested and documented engineering on every engagement.', icon: BadgeCheck },
  { title: 'Reliability', description: 'Systems designed to stay available and behave predictably.', icon: ShieldCheck },
  { title: 'Performance', description: 'Fast interfaces, efficient services and tuned databases.', icon: Gauge },
  { title: 'Maintainability', description: 'Architectures your teams can extend with confidence.', icon: Layers },
  { title: 'Partnership', description: 'Clear communication and ongoing support after launch.', icon: Handshake },
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
  { title: 'Professional Services', description: 'Client portals, CRM and workflow automation.', icon: Briefcase },
];

export const whyChooseUs: Feature[] = [
  {
    title: 'Enterprise Development Expertise',
    description: 'Business-critical applications built with proven patterns, code reviews and documentation.',
    icon: Code2,
  },
  {
    title: 'Cloud Infrastructure Knowledge',
    description: 'Containerized, monitored deployments on Linux, Docker and Kubernetes.',
    icon: Server,
  },
  {
    title: 'Automation Experience',
    description: 'From business workflows to industrial SCADA and IoT data pipelines.',
    icon: Workflow,
  },
  {
    title: 'Scalable Architecture',
    description: 'Modular systems designed to handle growth in users, data and features.',
    icon: Layers,
  },
  {
    title: 'Long-Term Support',
    description: 'Maintenance, monitoring and continuous improvement after go-live.',
    icon: LifeBuoy,
  },
  {
    title: 'Security Focused Development',
    description: 'Secure defaults, access control and dependency hygiene throughout delivery.',
    icon: ShieldCheck,
  },
  {
    title: 'Performance Driven Engineering',
    description: 'Measured, optimized and tuned for fast load times and efficient queries.',
    icon: Gauge,
  },
  {
    title: 'Reliable Delivery Process',
    description: 'Defined milestones, transparent progress reporting and predictable releases.',
    icon: BadgeCheck,
  },
];

export const processSteps: Feature[] = [
  {
    title: 'Requirement Analysis',
    description: 'We work with stakeholders to understand goals, constraints, users and success criteria.',
    icon: ClipboardList,
  },
  {
    title: 'Architecture Planning',
    description: 'We define the system architecture, technology stack, integrations and delivery roadmap.',
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

/**
 * Placeholder testimonials attributed by client type. Replace with real,
 * approved client feedback before publishing.
 */
export interface Testimonial {
  quote: string;
  client: string;
  sector: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The team integrated our production line data into a single real-time dashboard. Our supervisors now spot downtime as it happens instead of at the end of the shift.',
    client: 'Manufacturing Client',
    sector: 'Industrial Operations',
  },
  {
    quote:
      'They delivered our new website and admin portal on schedule and have supported us consistently since launch. Communication throughout the project was clear and professional.',
    client: 'Educational Institution',
    sector: 'Education',
  },
  {
    quote:
      'A responsive, performance-focused website that reflects our brand. Working across time zones was seamless, and every milestone was met.',
    client: 'International Business Client',
    sector: 'United Arab Emirates',
  },
];
