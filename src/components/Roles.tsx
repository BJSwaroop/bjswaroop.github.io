'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import GridBackground from './GridBackground';
import SectionReveal from './SectionReveal';
import { roles } from '@/lib/content';

type RoleItem = (typeof roles.items)[number];

function CardContent({ item }: { item: RoleItem }) {
  return (
    <div className="relative flex h-full w-full items-center">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display font-black leading-none text-[var(--text-primary)] opacity-[0.04]"
        style={{ fontSize: '30vw' }}
      >
        {item.number}
      </span>
      <div className="section-shell relative z-10">
        <span className="section-label">{`// ROLE ${item.number}`}</span>
        <h3 className="mt-4 font-display text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
          {item.title}
        </h3>
        <p className="mono-accent mt-3 text-[var(--accent)]">
          {item.role} · {item.org}
        </p>
        <ul className="mt-6 flex max-w-[660px] flex-col gap-3">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[var(--text-muted)]">
              <span
                aria-hidden="true"
                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-[660px] text-[clamp(1.05rem,1.6vw,1.4rem)] italic leading-snug text-[var(--text-primary)]">
          “{item.quote}”
        </p>
      </div>
    </div>
  );
}

export default function Roles() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActiveDot(p < 0.38 ? 0 : p < 0.72 ? 1 : 2);
  });

  const card1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const card1X = useTransform(scrollYProgress, [0.3, 0.4], ['0%', '-20%']);

  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.65, 0.75], [0, 1, 1, 0]);
  const card2X = useTransform(scrollYProgress, [0.3, 0.4, 0.65, 0.75], ['20%', '0%', '0%', '-20%']);

  const card3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);
  const card3X = useTransform(scrollYProgress, [0.65, 0.75], ['20%', '0%']);

  const cardStyles = [
    { opacity: card1Opacity, x: card1X },
    { opacity: card2Opacity, x: card2X },
    { opacity: card3Opacity, x: card3X },
  ];

  return (
    <section id="roles" aria-labelledby="roles-heading" className="relative bg-[#050505]">
      {/* ---------- Desktop: scroll-pinned card stack ---------- */}
      <div ref={containerRef} className="relative hidden h-[300vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <GridBackground opacity={0.07} size={72} />

          <div className="absolute left-0 right-0 top-[96px] z-20">
            <div className="section-shell">
              <p className="section-label">{roles.label}</p>
              <h2 id="roles-heading" className="heading-sub mt-2 text-[var(--text-primary)]">
                {roles.heading}
              </h2>
            </div>
          </div>

          {roles.items.map((item, i) => (
            <motion.div
              key={item.number}
              style={cardStyles[i]}
              className="absolute inset-0 flex items-center"
            >
              <CardContent item={item} />
            </motion.div>
          ))}

          {/* Progress dots */}
          <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {roles.items.map((item, i) => (
              <span
                key={item.number}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  activeDot === i ? 'w-8 bg-[var(--accent)]' : 'w-[6px] bg-[var(--border-hover)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Mobile: stacked reveal cards ---------- */}
      <div className="md:hidden">
        <div className="section-shell py-[var(--section-gap)]">
          <p className="section-label mb-3">{roles.label}</p>
          <h2 className="heading-section mb-12 text-[var(--text-primary)]">{roles.heading}</h2>
          <div className="flex flex-col gap-6">
            {roles.items.map((item) => (
              <SectionReveal key={item.number}>
                <article className="glow-card border border-[var(--border)] p-7">
                  <span className="font-display text-5xl font-black text-[var(--text-dim)] opacity-40">
                    {item.number}
                  </span>
                  <h3 className="heading-sub mt-2 text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mono-accent mt-2 text-[var(--accent)]">
                    {item.role} · {item.org}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-[var(--text-muted)]">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 italic text-[var(--text-primary)]">“{item.quote}”</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
