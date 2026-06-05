'use client';

import { CSSProperties, useState } from 'react';
import SectionReveal from './SectionReveal';
import GridBackground from './GridBackground';
import PlatformIcon from './PlatformIcon';
import { empire } from '@/lib/content';

type Prop = { name: string; platform: string; handle: string };
type Active = (Prop & { ring: string }) | null;

const RING_CLASSES = ['orbit-ring-1', 'orbit-ring-2', 'orbit-ring-3'];
const RING_RADII = [160, 240, 320];
const RING_TAG = ['amber', 'blue', 'gray'] as const;

const dotColor = (i: number) => (i === 0 ? 'var(--accent)' : i === 1 ? '#4b8ef0' : '#8a8a8a');

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="mono-accent flex items-center gap-2 text-[var(--text-muted)]">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

export default function Empire() {
  const [active, setActive] = useState<Active>(null);

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

        {/* ---------- Desktop: orbital system ---------- */}
        <div className="relative mt-8 hidden md:block">
          <div className="orbit-stage relative mx-auto h-[700px] w-full max-w-[760px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display font-black leading-none text-[var(--text-primary)] opacity-[0.035]"
              style={{ fontSize: 'clamp(180px, 26vw, 360px)' }}
            >
              S
            </span>

            {empire.rings.map((ring, ri) => (
              <div key={ring.name} className={`orbit-ring ${RING_CLASSES[ri]}`}>
                {ring.properties.map((prop, pi) => {
                  const angle = (360 / ring.properties.length) * pi;
                  const style: CSSProperties = {
                    transform: `rotate(${angle}deg) translateX(${RING_RADII[ri]}px)`,
                  };
                  return (
                    <div key={prop.name} className="orbit-node" style={style}>
                      <button
                        type="button"
                        className="orbit-node-dot appearance-none border-0 p-0"
                        data-ring={RING_TAG[ri]}
                        data-active={active?.name === prop.name}
                        aria-label={`${prop.name} - ${prop.platform}, ${prop.handle}`}
                        onMouseEnter={() => setActive({ ...prop, ring: ring.name })}
                        onFocus={() => setActive({ ...prop, ring: ring.name })}
                        onClick={() => setActive({ ...prop, ring: ring.name })}
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Center info panel (acts as the node tooltip - always upright + readable) */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[240px] -translate-x-1/2 -translate-y-1/2 text-center">
              {active ? (
                <div className="border border-[var(--border-hover)] bg-[var(--bg-card)]/90 px-5 py-4 backdrop-blur-sm">
                  <PlatformIcon name={active.platform} className="mx-auto mb-2 h-6 w-6 text-[var(--accent)]" />
                  <p className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {active.name}
                  </p>
                  <p className="mono-accent mt-1 text-[var(--accent)]">{active.platform}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{active.handle}</p>
                  <p className="label-caption mt-2 text-[var(--text-dim)]">{active.ring}</p>
                </div>
              ) : (
                <p className="mono-accent leading-relaxed text-[var(--text-dim)]">
                  Hover a node
                  <br />
                  to inspect
                </p>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {empire.rings.map((ring, i) => (
              <LegendItem
                key={ring.name}
                color={dotColor(i)}
                label={`${ring.name} (${ring.properties.length})`}
              />
            ))}
          </div>
        </div>

        {/* ---------- Mobile: categorized grid ---------- */}
        <div className="mt-12 flex flex-col gap-8 md:hidden">
          {empire.rings.map((ring, ri) => (
            <SectionReveal key={ring.name}>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: dotColor(ri) }}
                  />
                  <h3 className="font-display font-bold text-[var(--text-primary)]">{ring.name}</h3>
                  <span className="mono-accent text-[var(--text-dim)]">
                    ({ring.properties.length})
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ring.properties.map((prop) => (
                    <span
                      key={prop.name}
                      className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                    >
                      {prop.name} <span className="text-[var(--text-dim)]">· {prop.platform}</span>
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
