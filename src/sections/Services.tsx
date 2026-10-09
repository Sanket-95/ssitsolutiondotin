import { Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';

export function Services() {
  return (
    <Section id="services" labelledBy="services-title" tone="raised">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="End-to-end capabilities for modern organizations"
        description="From business applications and cloud platforms to plant-floor automation, our teams design, build and support systems that run critical operations."
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s, i) => (
          <Reveal as="li" key={s.id} delay={(i % 3) * 0.06} className="h-full">
            <article
              id={s.id}
              className="group relative flex h-full scroll-mt-28 flex-col rounded-2xl border border-line bg-panel/70 p-7 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-7 top-0 h-px scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-ink text-accent-soft transition-colors group-hover:border-accent/50 group-hover:text-white">
                  <s.icon size={20} aria-hidden="true" />
                </span>
                <span aria-hidden="true" className="text-xs font-semibold tracking-widest text-slate-500 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 border-t border-line pt-6 sm:grid-cols-2" aria-label={`${s.title} capabilities`}>
                {s.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-soft" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
