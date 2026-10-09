// Company-wide constants. This file is shared by the app and vite.config.ts,
// so it must stay free of browser- or Vite-specific APIs.

export const DEFAULT_SITE_URL = 'https://www.ssitsolution.com';

export const company = {
  name: 'SS IT Solution',
  legalName: 'SS IT Solution',
  tagline: 'Enterprise Software • Cloud Infrastructure • Automation Solutions',
  email: 'ssitsolutionindia@gmail.com',
  hours: {
    days: 'Monday - Saturday',
    time: '09:00 AM - 08:00 PM IST',
    schema: 'Mo-Sa 09:00-20:00',
  },
} as const;

export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
