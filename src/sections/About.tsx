import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { aboutParagraphs, coreValues, missionVision } from '@/data/company';

const focusAreas = [
  'Enterprise Software',
  'Cloud Infrastructure',
  'Industrial Automation',
  'IoT Systems',
  'Reporting Platforms',
  'Mobile Applications',
  'Business Process Automation',
];

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="about-title" eyebrow="Who We Are" title="About SS IT Solution" />
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Focus areas">
              {focusAreas.map((f) => (
                <li key={f} className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-slate-300">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="space-y-5 lg:col-span-7 lg:pt-10">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className={`leading-relaxed text-pretty ${i === 0 ? 'text-lg text-slate-200 sm:text-xl' : 'text-muted'}`}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {missionVision.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="card relative overflow-hidden p-8 sm:p-10">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-accent/20 to-transparent" />
            <item.icon size={22} aria-hidden="true" className="text-accent-soft" />
            <h3 className="mt-5 text-xl font-semibold text-white">Our {item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <h3 className="text-lg font-semibold text-white">Core Values</h3>
        </Reveal>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.05} className="bg-ink p-6">
              <v.icon size={20} aria-hidden="true" className="text-accent-soft" />
              <p className="mt-4 font-semibold text-white">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
