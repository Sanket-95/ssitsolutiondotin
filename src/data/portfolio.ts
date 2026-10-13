import maharashtraPreview from '@/assets/previews/maharashtra.jpg';
import uaePreview from '@/assets/previews/uae.jpg';
import pujariPreview from '@/assets/previews/pujari.jpg';
import scadaPreview from '@/assets/previews/scada.jpg';
import chatbotPreview from '@/assets/previews/chatbot.jpg';
import shopPreview from '@/assets/previews/shop.jpg';
import cafePreview from '@/assets/previews/cafe.jpg';

export interface Project {
  id: string;
  title: string;
  url: string;
  category: string;
  summary: string;
  highlights: string[];
  /** Screenshot of the live site (16:10). */
  image: string;
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
    image: maharashtraPreview,
  },
  {
    id: 'uae-business-platform',
    title: 'UAE Client Portfolio Platform',
    url: 'https://ms-website-uae.vercel.app/',
    category: 'International Business Website',
    summary:
      'A modern corporate presence for an international client, designed for clarity, speed and a premium brand experience on every device.',
    highlights: ['Modern UI', 'Responsive Design', 'Performance Optimization'],
    image: uaePreview,
  },
  {
    id: 'pujari-online-platform',
    title: 'Pujari Online Platform',
    url: 'https://pujari.mydashboard.site/',
    category: 'Community Platform',
    summary:
      'A custom community portal with role-based user management and cloud hosting, built to connect service providers with their communities.',
    highlights: ['Custom Portal', 'User Management', 'Cloud Hosting'],
    image: pujariPreview,
  },
];

/** Sample project demos — hosted on this site (built from separate projects, see scripts/add-demos.mjs). */
export interface Demo {
  id: string;
  title: string;
  /** Site-relative path of the hosted demo; omitted while the demo is not published yet. */
  path?: string;
  /** True for a page of this app (opened in place); otherwise a separate app opened in a new tab. */
  internal?: boolean;
  category: string;
  summary: string;
  highlights: string[];
  /** Screenshot of the demo (16:9). */
  image: string;
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
    image: scadaPreview,
  },
  {
    id: 'chat-bot',
    title: 'Chat Bot',
    path: '/chat-bot',
    internal: true,
    category: 'Customer Engagement · Live Demo',
    summary:
      'Two chat bots you can talk to: a WhatsApp bot that books clinic appointments and a custom website widget that qualifies real-estate leads.',
    highlights: ['WhatsApp Bot', 'Website Chat Widget', 'Guided Conversations'],
    image: chatbotPreview,
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    path: '/ecommerce-demo',
    internal: true,
    category: 'Online Retail · Live Demo',
    summary:
      'A single-page online store with search, category filters, wishlist, cart, coupon codes and a checkout flow. Runs on mock data.',
    highlights: ['Product Catalogue', 'Cart & Checkout', 'Responsive Design'],
    image: shopPreview,
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application',
    path: '/mobile-app-demo',
    internal: true,
    category: 'Mobile App · Live Demo',
    summary:
      'A café order-management app for staff: take table orders, move them through the kitchen and track the day’s sales on a dashboard.',
    highlights: ['Order Management', 'Kitchen Tracking', 'Sales Dashboard'],
    image: cafePreview,
  },
];

export const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');
