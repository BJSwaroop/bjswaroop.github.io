'use client';

import SectionReveal from './SectionReveal';
import Magnetic from './Magnetic';
import SplitReveal from './SplitReveal';
import { contact } from '@/lib/content';

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[#050505] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{contact.label}</p>
        <SplitReveal
          as="h2"
          id="contact-heading"
          className="heading-section text-[var(--text-primary)]"
          text={contact.heading}
        />
        <p className="mt-4 max-w-[620px] text-[var(--text-muted)]">{contact.subheading}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <SectionReveal>
            <div className="flex flex-col items-start gap-4">
              <Magnetic className="w-full sm:w-auto">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp me
                </a>
              </Magnetic>
              <a href={`mailto:${contact.email}`} className="btn-ghost w-full justify-center sm:w-auto">
                Email instead
              </a>
              <p className="mt-1 text-xs text-[var(--text-dim)]">
                Fastest way to reach me. I usually reply within a day.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <div>
                <p className="label-caption text-[var(--text-muted)]">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block font-display text-xl font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="label-caption mb-3 text-[var(--text-muted)]">Find me</p>
                <ul className="flex flex-col gap-2.5">
                  {contact.socials.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-2 text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                      >
                        <span className="mono-accent text-[var(--text-dim)]">{s.platform}</span>
                        <span>{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
