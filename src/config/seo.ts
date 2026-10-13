// Per-route SEO metadata. Used at runtime by <Seo /> and at build time by the
// static-HTML generator in vite.config.ts so crawlers get correct tags without JS.

export const defaultTitle = 'SS IT Solution | Software Engineering Portfolio';

export const defaultDescription =
  'Portfolio of SS IT Solution — software engineering work across enterprise software, cloud infrastructure, industrial automation, mobile applications, AI integrations, websites, dashboards and reporting.';

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
    title: 'Skills | Enterprise Software, Cloud, AI & Automation | SS IT Solution',
    description:
      'Skills across enterprise software, websites, mobile apps, cloud & DevOps, databases, AI automation, industrial automation, reporting and communication systems.',
    priority: 0.9, changefreq: 'monthly',
  },
  {
    path: '/technologies',
    title: 'Technologies | React, NodeJS, Docker, Kubernetes, Oracle | SS IT Solution',
    description:
      'Technology stack spanning React, TypeScript, NodeJS, FastAPI, PHP, Docker, Kubernetes, Linux, MySQL, Oracle, PostgreSQL, MongoDB, SQL Server and Grafana.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/portfolio',
    title: 'Portfolio | Government, International & Community Platforms | SS IT Solution',
    description:
      'Selected projects, including a government news portal, an international business website and a community platform.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/chat-bot',
    title: 'Chat Bot Demo | WhatsApp & Website Chat Bots | SS IT Solution',
    description:
      'Try two live chat bot demos: a WhatsApp bot that books clinic appointments and a custom website chat widget that qualifies real-estate leads.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/ecommerce-demo',
    title: 'E-commerce Website Demo | Online Store | SS IT Solution',
    description:
      'A single-page e-commerce store demo with search, filters, wishlist, cart, coupon codes and checkout — built in React on mock data.',
    priority: 0.6, changefreq: 'monthly',
  },
  {
    path: '/mobile-app-demo',
    title: 'Mobile App Demo | Café Order Management App | SS IT Solution',
    description:
      'A café order-management mobile app demo: take table orders, track them through the kitchen and see the day’s sales dashboard.',
    priority: 0.6, changefreq: 'monthly',
  },
  {
    path: '/industries',
    title: 'Industries | Manufacturing, Government, Healthcare & More | SS IT Solution',
    description:
      'Sector experience spanning manufacturing, industrial automation, government, education, healthcare, retail, logistics, startups, SMEs and professional services.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/about',
    title: 'About | Software Engineering Portfolio | SS IT Solution',
    description:
      'A software engineering portfolio covering enterprise software, cloud, automation and IoT projects delivered over a multi-year career.',
    priority: 0.7, changefreq: 'yearly',
  },
  {
    path: '/contact',
    title: 'Contact | SS IT Solution',
    description:
      'Get in touch about enterprise software, cloud infrastructure, automation, mobile and AI projects, or job opportunities.',
    priority: 0.8, changefreq: 'yearly',
  },
];

export const getRouteMeta = (path: string): RouteMeta | undefined =>
  routeMeta.find((r) => r.path === path);
