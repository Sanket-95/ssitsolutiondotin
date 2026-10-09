import { ArrowUpRight, Clock, Mail, MessageSquareText } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { company } from '@/config/site';

const nextSteps = [
  'We review your requirements and objectives.',
  'Our team arranges a discovery discussion.',
  'You receive a recommended approach, timeline and estimate.',
];

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Get in Touch"
            description="Tell us about your project by email. Our team reviews every enquiry and responds during business hours."
          />

          <Reveal delay={0.1} className="mt-10">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
              <MessageSquareText size={17} aria-hidden="true" className="text-accent-soft" />
              What happens next
            </h3>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-muted">
                  <span className="text-xs font-semibold text-accent-soft tabular-nums">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="grid content-start gap-5 lg:col-span-7">
          <Reveal delay={0.1}>
            <a
              href={`mailto:${company.email}`}
              className="card group flex items-center gap-5 p-6 transition-colors hover:border-accent/40 sm:p-8"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-ink text-accent-soft">
                <Mail size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold tracking-widest text-slate-400 uppercase">Email</span>
                <span className="mt-1.5 block truncate text-lg font-medium text-white group-hover:text-accent-soft sm:text-xl">
                  {company.email}
                </span>
              </span>
              <ArrowUpRight size={20} aria-hidden="true" className="shrink-0 text-slate-400 transition-colors group-hover:text-white" />
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="card flex items-center gap-5 p-6 sm:p-8">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-ink text-accent-soft">
                <Clock size={21} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-widest text-slate-400 uppercase">Business Hours</span>
                <span className="mt-1.5 block text-lg font-medium text-white sm:text-xl">{company.hours.days}</span>
                <span className="block text-muted">{company.hours.time}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
