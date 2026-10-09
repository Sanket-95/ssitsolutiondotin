import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/data/company';

export function Process() {
  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="Our Process"
        title="A structured, transparent delivery lifecycle"
        description="Every engagement follows a defined process with clear milestones, so you always know what is being delivered and when."
        align="center"
      />

      {/* ::before draws the connecting line: vertical on small screens, horizontal on desktop. */}
      <ol className="relative mt-16 grid gap-10 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-px before:bg-line-strong lg:grid-cols-6 lg:gap-6 lg:before:top-[19px] lg:before:right-[8%] lg:before:bottom-auto lg:before:left-[8%] lg:before:h-px lg:before:w-auto">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.07} className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
            <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-ink text-sm font-semibold text-white tabular-nums shadow-[0_0_0_6px_var(--color-ink)]">
              {i + 1}
            </span>
            <div className="lg:mt-6">
              <p className="text-xs font-semibold tracking-widest text-accent-soft uppercase">Step {i + 1}</p>
              <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
