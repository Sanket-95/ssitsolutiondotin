import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { demos, hostOf, projects, type Demo, type Project } from '@/data/portfolio';

// The link's ::after covers the whole card, so a click anywhere on it follows the link.
const cardLinkClass =
  "mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-white transition-colors group-hover:text-accent-soft after:absolute after:inset-0 after:rounded-2xl after:content-['']";

export function Portfolio({ tone = 'raised' }: { tone?: 'default' | 'raised' }) {
  return (
    <Section id="portfolio" labelledBy="portfolio-title" tone={tone}>
      <SectionHeading
        id="portfolio-title"
        eyebrow="Portfolio"
        title="Selected work"
        description="Platforms built for public-sector, international and community organizations — engineered for availability, performance and ease of management."
      />

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.1} variant="scale" className="h-full">
            <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-panel/70 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/40">
              <ScreenshotPreview project={p} />
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
                  className={cardLinkClass}
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

      <div className="mt-20">
        <h3 id="demos-title" className="eyebrow">Sample project demos</h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          Working demos of products we build. Open one and explore it yourself — all data is simulated.
        </p>
        <ul aria-labelledby="demos-title" className="mt-8 grid gap-6 md:grid-cols-2">
          {demos.map((d, i) => (
            <Reveal as="li" key={d.id} delay={i * 0.1} variant="scale" className="h-full">
              <DemoCard demo={d} />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function DemoCard({ demo }: { demo: Demo }) {
  const live = !!demo.path;
  const arrow = (
    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  );
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/70 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/40 ${live ? 'cursor-pointer' : ''}`}
    >
      <DemoPreview demo={demo} />
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-semibold tracking-widest text-accent-soft uppercase">{demo.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{demo.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{demo.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
          {demo.highlights.map((h) => (
            <li key={h} className="rounded-md border border-line bg-ink/60 px-2.5 py-1 text-xs font-medium text-slate-300">
              {h}
            </li>
          ))}
        </ul>
        {live && demo.internal ? (
          <Link to={demo.path!} className={cardLinkClass}>
            Open live demo
            {arrow}
          </Link>
        ) : live ? (
          <a href={demo.path} target="_blank" rel="noopener" className={cardLinkClass}>
            Open live demo
            {arrow}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <p className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-slate-400">
            <Clock size={16} aria-hidden="true" />
            Coming soon
          </p>
        )}
      </div>
    </article>
  );
}

/** Browser-frame preview for a demo card. */
function DemoPreview({ demo }: { demo: Demo }) {
  return (
    <BrowserPreview address={demo.path ? `ssitsolution.in${demo.path.replace(/\/$/, '')}` : 'coming soon'} image={demo.image} aspect="aspect-[16/9]" />
  );
}

/** Browser-frame preview for a client project card. */
function ScreenshotPreview({ project }: { project: Project }) {
  return <BrowserPreview address={hostOf(project.url)} image={project.image} aspect="aspect-[16/10]" />;
}

/** A screenshot under a small browser address bar. Decorative: the card's heading names the page. */
function BrowserPreview({ address, image, aspect }: { address: string; image: string; aspect: string }) {
  return (
    <div aria-hidden="true" className="relative border-b border-line bg-ink">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="flex-1 truncate rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-slate-400">{address}</span>
      </div>
      <div className={`relative overflow-hidden bg-panel ${aspect}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          width={960}
          height={aspect === 'aspect-[16/9]' ? 540 : 600}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}
