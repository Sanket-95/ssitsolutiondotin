import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { techCategories } from '@/data/technologies';

export function Technologies() {
  return (
    <Section id="technologies" labelledBy="technologies-title">
      <SectionHeading
        id="technologies-title"
        eyebrow="Technologies"
        title="A proven, enterprise-ready technology stack"
        description="We select mature, well-supported technologies so the systems we deliver remain secure, performant and maintainable for years."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={(i % 3) * 0.06} className="card flex flex-col p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              <span className="text-xs text-slate-400 tabular-nums">
                {cat.items.length} {cat.items.length === 1 ? 'technology' : 'technologies'}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{cat.description}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {cat.items.map((t) => (
                <li
                  key={t.name}
                  className="flex flex-col items-center justify-center gap-2.5 rounded-xl border border-line bg-ink/60 px-2 py-4 text-center transition-colors hover:border-line-strong hover:bg-ink"
                >
                  <BrandIcon name={t.icon} size={26} />
                  <span className="text-xs font-medium text-slate-300">{t.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
