import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { industries } from '@/data/company';

export function Industries() {
  return (
    <Section id="industries" labelledBy="industries-title">
      <SectionHeading
        id="industries-title"
        eyebrow="Industries We Serve"
        title="Domain-aware solutions across sectors"
        description="We bring sector context to every engagement — from regulated public-sector portals to production-floor systems and fast-moving startups."
      />

      <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <Reveal as="li" key={ind.title} delay={(i % 5) * 0.04} className="group bg-ink p-6 hover:bg-panel sm:p-7">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-accent-soft transition-colors group-hover:border-accent/50 group-hover:text-white">
              <ind.icon size={19} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-semibold text-white">{ind.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{ind.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
