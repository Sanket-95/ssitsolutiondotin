// Portfolio Planet — game content. Edit this file to change the monuments, the ship
// parts and the wording; nothing else in the game needs to change.
//
// Positions are latitude / longitude on the planet in degrees:
//   lat: -90 (south pole) … 90 (north pole)   lon: -180 … 180
// The player starts next to the ship, so keep monuments at least ~25° away from it.

export type MonumentShape = 'tower' | 'crystal' | 'pillar' | 'arch' | 'dome';
export type PartKind = 'nose' | 'wing-left' | 'wing-right' | 'dish' | 'thruster';

export interface LatLon {
  lat: number;
  lon: number;
}

export interface Monument {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Live site. A path starting with "/" opens a page of this website. */
  link?: string;
  github?: string;
  /** Accent colour of the monument and its ship part. */
  color: string;
  shape: MonumentShape;
  position: LatLon;
}

export interface ShipPart {
  id: string;
  name: string;
  kind: PartKind;
  /** The monument this part lies next to. */
  monument: string;
}

export const monuments: Monument[] = [
  {
    id: 'maharashtra-news-portal',
    title: 'Maharashtra Government News Portal',
    description:
      'A public-sector news and information portal built for dependable publishing workflows and consistent availability under traffic peaks.',
    tech: ['Content Management', 'High Availability', 'Cloud Deployment'],
    link: 'https://amrutmaharashtra.org/',
    color: '#f59e0b',
    shape: 'tower',
    position: { lat: 38, lon: 72 },
  },
  {
    id: 'uae-business-platform',
    title: 'UAE Client Portfolio Platform',
    description:
      'A modern corporate presence for an international client, designed for clarity, speed and a premium brand experience on every device.',
    tech: ['Modern UI', 'Responsive Design', 'Performance Optimization'],
    link: 'https://ms-website-uae.vercel.app/',
    color: '#38bdf8',
    shape: 'crystal',
    position: { lat: -28, lon: 118 },
  },
  {
    id: 'pujari-online-platform',
    title: 'Pujari Online Platform',
    description:
      'A custom community portal with role-based user management and cloud hosting, built to connect service providers with their communities.',
    tech: ['Custom Portal', 'User Management', 'Cloud Hosting'],
    link: 'https://pujari.mydashboard.site/',
    color: '#f472b6',
    shape: 'dome',
    position: { lat: 12, lon: -168 },
  },
  {
    id: '3d-web-scada',
    title: '3D Web SCADA',
    description:
      'A browser-based SCADA for plant monitoring: live 2D and 3D mimics, alarms and production reports with CSV and PDF export.',
    tech: ['3D Visualization', 'Real-time Monitoring', 'Reports & Analytics'],
    link: '/scada-demo/',
    color: '#34d399',
    shape: 'pillar',
    position: { lat: -40, lon: -95 },
  },
  {
    id: 'chat-bot',
    title: 'Chat Bot',
    description:
      'Two chat bots you can talk to: a WhatsApp bot that books clinic appointments and a website widget that qualifies real-estate leads.',
    tech: ['WhatsApp Bot', 'Website Chat Widget', 'Guided Conversations'],
    link: '/chat-bot',
    color: '#a78bfa',
    shape: 'arch',
    position: { lat: 50, lon: -40 },
  },
];

export const shipParts: ShipPart[] = [
  { id: 'nose', name: 'Nose cone', kind: 'nose', monument: 'maharashtra-news-portal' },
  { id: 'wing-left', name: 'Left wing', kind: 'wing-left', monument: 'uae-business-platform' },
  { id: 'dish', name: 'Navigation dish', kind: 'dish', monument: 'pujari-online-platform' },
  { id: 'thruster', name: 'Thruster', kind: 'thruster', monument: '3d-web-scada' },
  { id: 'wing-right', name: 'Right wing', kind: 'wing-right', monument: 'chat-bot' },
];

/** Where the ship crash-landed. The player starts right next to it. */
export const shipSite: LatLon = { lat: 4, lon: 0 };

/** Texts shown in the game. */
export const copy = {
  title: 'Portfolio Planet',
  story: [
    'Your spaceship crash-landed on a tiny planet and its 5 parts are scattered around it.',
    'Each part lies next to a monument to one of my projects. Find them all and fly home.',
  ],
  viewProjects: 'View my projects',
  contact: 'Contact me',
};
