export interface Project {
  id: string;
  title: string;
  url: string;
  category: string;
  summary: string;
  highlights: string[];
  /** Visual theme for the screenshot placeholder. */
  layout: 'news' | 'corporate' | 'portal';
}

export const projects: Project[] = [
  {
    id: 'maharashtra-news-portal',
    title: 'Maharashtra Government News Portal',
    url: 'https://amrutmaharashtra.org/',
    category: 'Government Media Platform',
    summary:
      'A public-sector news and information portal built for dependable publishing workflows and consistent availability under traffic peaks.',
    highlights: ['Content Management', 'High Availability', 'Cloud Deployment'],
    layout: 'news',
  },
  {
    id: 'uae-business-platform',
    title: 'UAE Client Portfolio Platform',
    url: 'https://ms-website-uae.vercel.app/',
    category: 'International Business Website',
    summary:
      'A modern corporate presence for an international client, designed for clarity, speed and a premium brand experience on every device.',
    highlights: ['Modern UI', 'Responsive Design', 'Performance Optimization'],
    layout: 'corporate',
  },
  {
    id: 'pujari-online-platform',
    title: 'Pujari Online Platform',
    url: 'https://pujari.mydashboard.site/',
    category: 'Community Platform',
    summary:
      'A custom community portal with role-based user management and cloud hosting, built to connect service providers with their communities.',
    highlights: ['Custom Portal', 'User Management', 'Cloud Hosting'],
    layout: 'portal',
  },
];

/** Sample project demos — hosted on this site (built from separate projects, see scripts/add-demos.mjs). */
export interface Demo {
  id: string;
  title: string;
  /** Site-relative path of the hosted demo; omitted while the demo is not published yet. */
  path?: string;
  category: string;
  summary: string;
  highlights: string[];
  layout: 'scada' | 'chat';
}

export const demos: Demo[] = [
  {
    id: '3d-web-scada',
    title: '3D Web SCADA',
    path: '/scada-demo/',
    category: 'Industrial Automation · Live Demo',
    summary:
      'A browser-based SCADA for plant monitoring: live 2D and 3D mimics of a plating line and a dairy plant, alarms, and twelve production reports with CSV and PDF export. Runs on simulated data.',
    highlights: ['3D Visualization', 'Real-time Monitoring', 'Reports & Analytics'],
    layout: 'scada',
  },
  {
    id: 'chat-bot',
    title: 'AI Chat Bot',
    category: 'Conversational AI · Coming soon',
    summary:
      'A conversational assistant that answers customer questions from your own content and hands over to a person when it should.',
    highlights: ['Natural Language', 'Knowledge Base', 'Website Integration'],
    layout: 'chat',
  },
];

export const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');
