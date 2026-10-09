import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { whyChooseUs } from '@/data/company';

export function WhyChooseUs() {
  return (
    <Section id="why-us" labelledBy="why-title" tone="raised">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="why-title"
              eyebrow="Why Choose Us"
              title="A delivery partner built for the long term"
              description="Organizations choose us for engineering depth across software, infrastructure and automation — and for the support that continues long after launch."
            />
          </div>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {whyChooseUs.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 2) * 0.06} className="card p-7 hover:border-line-strong">
              <f.icon size={22} aria-hidden="true" className="text-accent-soft" />
              <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
