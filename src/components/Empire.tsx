'use client';

import SectionReveal from './SectionReveal';
import GridBackground from './GridBackground';
import PlatformIcon from './PlatformIcon';
import { empire } from '@/lib/content';

const dotColor = (i: number) => (i === 0 ? 'var(--accent)' : i === 1 ? '#4b8ef0' : '#8a8a8a');

// Simple, reliable ecosystem map: three groups, every channel visible with its
// platform logo and handle. (Replaced the orbital - the spinning/3D nodes were
// never reliably clickable.)
export default function Empire() {
  return (
    <section
      id="empire"
      aria-labelledby="empire-heading"
      className="relative overflow-hidden bg-[#030303] py-[var(--section-gap)]"
    >
      <GridBackground opacity={0.12} size={56} />

      <div className="section-shell relative">
        <SectionReveal>
          <p className="section-label mb-3">{empire.label}</p>
          <h2 id="empire-heading" className="heading-section text-[var(--text-primary)]">
            {empire.heading}
          </h2>
          <p className="heading-sub mt-3 text-[var(--accent)]">{empire.subheading}</p>
          <p className="mt-5 max-w-[680px] text-[var(--text-muted)]">{empire.description}</p>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {empire.rings.map((ring, ri) => (
            <SectionReveal key={ring.name} delay={ri * 0.08}>
              <div className="h-full rounded-lg border border-[var(--border)] bg-[var(--bg-card)]/40 p-6 transition-colors hover:border-[var(--border-hover)]">
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: dotColor(ri) }}
                  />
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {ring.name}
                  </h3>
                  <span className="mono-accent ml-auto text-[var(--text-dim)]">
                    {ring.properties.length}
                  </span>
                </div>
                <ul className="flex flex-col">
                  {ring.properties.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-center gap-3 border-t border-[var(--border)] py-3 first:border-t-0"
                    >
                      <PlatformIcon name={p.platform} className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span className="min-w-0 truncate text-[var(--text-primary)]">{p.name}</span>
                      <span className="mono-accent ml-auto shrink-0 text-xs text-[var(--text-dim)]">
                        {p.handle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
