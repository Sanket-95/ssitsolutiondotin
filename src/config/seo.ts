// Per-route SEO metadata. Used at runtime by <Seo /> and at build time by the
// static-HTML generator in vite.config.ts so crawlers get correct tags without JS.

export const defaultTitle = 'SS IT Solution | Enterprise Software, Cloud & Automation Solutions';

export const defaultDescription =
  'SS IT Solution provides enterprise software development, cloud infrastructure, industrial automation systems, mobile applications, AI integrations, websites, dashboards, reporting solutions and database services.';

export const keywords = [
  'React Development', 'NodeJS Development', 'FastAPI Development', 'PHP Development', 'Mobile App Development',
  'Cloud Services', 'Docker', 'Kubernetes', 'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB',
  'Grafana', 'SCADA', 'IoT', 'Automation Solutions', 'CRM Development', 'ERP Solutions',
  'Business Software', 'Enterprise Software', 'Industrial Dashboards',
].join(', ');

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
}

export const routeMeta: RouteMeta[] = [
  { path: '/', title: defaultTitle, description: defaultDescription, priority: 1.0, changefreq: 'weekly' },
  {
    path: '/services',
    title: 'Services | Enterprise Software, Cloud, AI & Automation | SS IT Solution',
    description:
      'Enterprise software, websites, mobile apps, cloud & DevOps, databases, AI automation, industrial automation, reporting and communication solutions from SS IT Solution.',
    priority: 0.9, changefreq: 'monthly',
  },
  {
    path: '/technologies',
    title: 'Technologies | React, NodeJS, Docker, Kubernetes, Oracle | SS IT Solution',
    description:
      'Our technology stack spans React, TypeScript, NodeJS, FastAPI, PHP, Docker, Kubernetes, Linux, MySQL, Oracle, PostgreSQL, MongoDB, SQL Server and Grafana.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/portfolio',
    title: 'Portfolio | Government, International & Community Platforms | SS IT Solution',
    description:
      'Selected projects delivered by SS IT Solution, including a government news portal, an international business website and a community platform.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/industries',
    title: 'Industries | Manufacturing, Government, Healthcare & More | SS IT Solution',
    description:
      'Technology solutions for manufacturing, industrial automation, government, education, healthcare, retail, logistics, startups, SMEs and professional services.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/about',
    title: 'About Us | Technology Consulting & Software Development | SS IT Solution',
    description:
      'SS IT Solution is a technology consulting and software development company delivering reliable enterprise software, cloud, automation and IoT solutions.',
    priority: 0.7, changefreq: 'yearly',
  },
  {
    path: '/contact',
    title: 'Contact Us | SS IT Solution',
    description:
      'Contact SS IT Solution by email for enterprise software, cloud infrastructure, automation, mobile and AI projects. Monday to Saturday, 09:00 AM to 08:00 PM IST.',
    priority: 0.8, changefreq: 'yearly',
  },
];

export const getRouteMeta = (path: string): RouteMeta | undefined =>
  routeMeta.find((r) => r.path === path);
