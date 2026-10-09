import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { hostOf, projects, type Project } from '@/data/portfolio';

export function Portfolio() {
  return (
    <Section id="portfolio" labelledBy="portfolio-title" tone="raised">
      <SectionHeading
        id="portfolio-title"
        eyebrow="Portfolio"
        title="Selected work delivered for our clients"
        description="Platforms built for public-sector, international and community organizations — engineered for availability, performance and ease of management."
      />

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/70 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/40">
              <ScreenshotPlaceholder project={p} />
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold tracking-widest text-accent-soft uppercase">{p.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
                  {p.highlights.map((h) => (
                    <li key={h} className="rounded-md border border-line bg-ink/60 px-2.5 py-1 text-xs font-medium text-slate-300">
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-white transition-colors hover:text-accent-soft"
                >
                  Visit {hostOf(p.url)}
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/** Browser-frame placeholder until real screenshots are added. */
function ScreenshotPlaceholder({ project }: { project: Project }) {
  return (
    <div aria-hidden="true" className="relative border-b border-line bg-ink">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="flex-1 truncate rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-slate-400">
          {hostOf(project.url)}
        </span>
      </div>
      <div className="bg-grid relative aspect-[16/10] overflow-hidden p-5">
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative flex h-full flex-col gap-3 transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-16 rounded bg-white/20" />
            <span className="flex gap-2">
              <span className="h-2 w-8 rounded bg-white/10" />
              <span className="h-2 w-8 rounded bg-white/10" />
              <span className="h-2 w-8 rounded bg-white/10" />
            </span>
          </div>
          {project.layout === 'news' && (
            <div className="grid flex-1 grid-cols-3 gap-2.5">
              <div className="col-span-2 rounded-lg bg-accent/25" />
              <div className="flex flex-col gap-2.5">
                <div className="flex-1 rounded-lg bg-white/[0.07]" />
                <div className="flex-1 rounded-lg bg-white/[0.07]" />
              </div>
              <div className="h-8 rounded bg-white/[0.06]" />
              <div className="h-8 rounded bg-white/[0.06]" />
              <div className="h-8 rounded bg-white/[0.06]" />
            </div>
          )}
          {project.layout === 'corporate' && (
            <div className="flex flex-1 flex-col justify-center gap-3">
              <span className="h-4 w-3/4 rounded bg-white/25" />
              <span className="h-4 w-1/2 rounded bg-white/15" />
              <span className="h-2 w-2/3 rounded bg-white/10" />
              <span className="mt-2 h-6 w-24 rounded-md bg-accent/60" />
            </div>
          )}
          {project.layout === 'portal' && (
            <div className="flex flex-1 gap-2.5">
              <div className="flex w-1/4 flex-col gap-2 rounded-lg bg-white/[0.06] p-2">
                <span className="h-2 rounded bg-white/15" />
                <span className="h-2 rounded bg-accent/50" />
                <span className="h-2 rounded bg-white/15" />
                <span className="h-2 rounded bg-white/15" />
              </div>
              <div className="grid flex-1 grid-cols-2 gap-2.5">
                <div className="rounded-lg bg-white/[0.07]" />
                <div className="rounded-lg bg-white/[0.07]" />
                <div className="col-span-2 rounded-lg bg-accent/20" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
