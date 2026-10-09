import { Link } from 'react-router-dom';
import { Clock, Mail } from 'lucide-react';
import { company } from '@/config/site';
import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

const quickLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const linkClass = 'text-sm text-muted transition-colors hover:text-white';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="SS IT Solution — Home" className="inline-block rounded-md">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{company.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Technology consulting and software development for enterprises, industry, the public sector and growing
              businesses worldwide.
            </p>
          </div>

          <nav aria-labelledby="footer-quick" className="lg:col-span-2">
            <h2 id="footer-quick" className="text-sm font-semibold text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className="text-sm font-semibold text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="flex items-start gap-2.5 text-muted transition-colors hover:text-white">
                  <Mail size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-soft" />
                  <span className="break-words">{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted">
                <Clock size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-soft" />
                <span>
                  {company.hours.days}
                  <br />
                  {company.hours.time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>Enterprise Software • Cloud Infrastructure • Automation Solutions</p>
        </div>
      </Container>
    </footer>
  );
}
