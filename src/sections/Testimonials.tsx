import { Quote } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/data/company';

export function Testimonials() {
  return (
    <Section id="testimonials" labelledBy="testimonials-title" tone="raised">
      <SectionHeading
        id="testimonials-title"
        eyebrow="Client Feedback"
        title="Trusted by organizations across sectors"
        align="center"
      />

      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.client} delay={i * 0.08} className="h-full">
            <figure className="card flex h-full flex-col p-8">
              <Quote size={26} aria-hidden="true" className="text-accent/70" />
              <blockquote className="mt-6 flex-1 leading-relaxed text-pretty text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-ink text-sm font-semibold text-accent-soft">
                  {t.client.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.client}</span>
                  <span className="block text-xs text-muted">{t.sector}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
