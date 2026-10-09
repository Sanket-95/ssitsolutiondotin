import type { CSSProperties } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { heroTechnologies } from '@/data/technologies';

/** Stagger for the CSS entrance animation (.enter in index.css). */
const enterDelay = (seconds: number) => ({ '--enter-delay': `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh items-center overflow-hidden pt-[72px]">
      {/* Background: slowly panning grid with a single soft accent glow. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="mask-radial absolute inset-0 overflow-hidden">
          {/* Oversized by one tile and moved with transform, so the pan is composited, not repainted. */}
          <div className="bg-grid absolute -inset-16 animate-grid-pan will-change-transform" />
        </div>
        <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(ellipse_50%_45%_at_50%_15%,rgb(37_99_235/0.16),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Container className="grid items-center gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <p style={enterDelay(0)} className="enter eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-accent-soft/70" />
            Technology Consulting & Engineering
          </p>

          <h1
            id="hero-title"
            className="enter-move mt-6 text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.025em] text-balance text-white sm:text-6xl lg:text-[4.25rem]"
          >
            Enterprise Software &amp;
            <br />
            <span className="text-slate-400">Cloud Solutions</span>
          </h1>

          <p className="enter-move mt-7 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            We design and deliver scalable software platforms, cloud infrastructure, mobile applications, automation
            systems, AI integrations and business solutions for organizations worldwide.
          </p>

          <div style={enterDelay(0.2)} className="enter mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/#services" size="lg">
              Explore Services
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink to="/#portfolio" size="lg" variant="secondary">
              View Portfolio
            </ButtonLink>
          </div>

          <p style={enterDelay(0.3)} className="enter mt-10 flex items-center gap-2.5 text-sm text-slate-400">
            <ShieldCheck size={18} aria-hidden="true" className="text-accent-soft" />
            Secure, maintainable systems with long-term support.
          </p>
        </div>

        <TechConstellation />
      </Container>
    </section>
  );
}

/** Staggered grid of floating technology tiles. */
function TechConstellation() {
  return (
    <div style={enterDelay(0.15)} className="enter relative lg:col-span-5">
      <p className="sr-only">Core technologies: {heroTechnologies.map((t) => t.name).join(', ')}.</p>
      <div aria-hidden="true" className="relative mx-auto max-w-md lg:max-w-none">
        {/* Faint connecting frame behind the tiles. */}
        <div className="absolute inset-6 rounded-3xl border border-dashed border-white/[0.07]" />
        <ul className="relative grid grid-cols-3 gap-3 sm:gap-4">
          {heroTechnologies.map((tech, i) => (
            <li
              key={tech.name}
              className={`animate-float ${i % 3 === 1 ? 'translate-y-6' : ''}`}
              style={{ animationDelay: `${(i % 5) * -1.4}s` }}
            >
              <div className="flex aspect-square flex-col items-center justify-center gap-2.5 rounded-2xl border border-line bg-panel/80 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] transition-colors hover:border-line-strong sm:gap-3">
                <BrandIcon name={tech.icon} size={30} className="sm:h-9 sm:w-9" />
                <span className="text-[11px] font-medium text-slate-400 sm:text-xs">{tech.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
