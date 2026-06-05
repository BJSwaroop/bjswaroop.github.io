'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { whatIDo } from '@/lib/content';
import PlatformIcon from './PlatformIcon';
import AnimatedCounter from './AnimatedCounter';

const EASE = [0.16, 1, 0.3, 1] as const;

type Growth = { name: string; from: number; to: number }[];

function GrowthRows({ growth, reduce }: { growth: Growth; reduce: boolean | null }) {
  return (
    <div className="mt-5 flex flex-col gap-3">
      {growth.map((g) => (
        <div key={g.name} className="flex items-center gap-3">
          <PlatformIcon name={g.name} className="h-4 w-4 shrink-0 text-[var(--accent)]" />
          <span className="w-24 shrink-0 text-left text-sm text-[var(--text-muted)]">{g.name}</span>
          <span className="font-display text-sm text-[var(--text-dim)]">{g.from}K</span>
          <div className="relative h-px flex-1 bg-[var(--border)]">
            <motion.span
              className="absolute inset-y-0 left-0 block bg-[var(--accent)]"
              initial={reduce ? false : { width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            />
          </div>
          <span className="w-14 shrink-0 text-right font-display text-base font-bold text-[var(--accent)]">
            <AnimatedCounter value={g.to} suffix="K" />
          </span>
        </div>
      ))}
    </div>
  );
}

// Centered timeline of capabilities with a light that travels down the middle
// as you scroll (reference-style). Everything is visible for readability.
export default function WhatIDo() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 70%', 'end 65%'],
  });
  const fillScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lightTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="whatido" className="section-shell scroll-mt-24 py-[var(--section-gap)]">
      <div className="text-center">
        <p className="section-label mb-4">{whatIDo.label}</p>
        <motion.h2
          className="heading-section text-[var(--text-primary)]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {whatIDo.heading}
        </motion.h2>
        <p className="body-lg mx-auto mt-5 max-w-[48ch] text-[var(--text-muted)]">{whatIDo.intro}</p>
      </div>

      <div ref={railRef} className="relative mx-auto mt-16 max-w-[1000px]">
        {/* base line (left on mobile, centered on desktop) */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[19px] top-0 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2"
        />
        {/* amber fill that grows with scroll */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-[var(--accent)] md:left-1/2 md:-translate-x-1/2"
          style={{ scaleY: reduce ? 1 : fillScaleY }}
        />
        {/* the travelling light */}
        {!reduce && (
          <motion.div
            aria-hidden="true"
            className="absolute left-[19px] z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] md:left-1/2"
            style={{ top: lightTop, boxShadow: '0 0 18px 5px rgba(232,168,56,0.65)' }}
          />
        )}

        <div className="flex flex-col gap-12 md:gap-20">
          {whatIDo.items.map((item, i) => {
            const left = i % 2 === 0;
            const growth = (item as { growth?: Growth }).growth;
            return (
              <div key={item.title} className="relative md:grid md:grid-cols-2 md:gap-x-16">
                {/* node dot on the line */}
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[#050505] md:left-1/2"
                />
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={
                    left
                      ? 'pl-12 md:col-start-1 md:pl-0 md:pr-16 md:text-right'
                      : 'pl-12 md:col-start-2 md:pl-16'
                  }
                >
                  <span className="mono-accent text-[var(--accent)]">
                    {String(i + 1).padStart(2, '0')} · {item.tag}
                  </span>
                  <h3 className="mt-2 font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-bold leading-tight tracking-[-0.02em] text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-muted)]">{item.body}</p>
                  {growth && <GrowthRows growth={growth} reduce={reduce} />}
                  <ul className={`mt-4 flex flex-col gap-2 ${left ? 'md:items-end' : ''}`}>
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className={`flex items-start gap-3 text-sm text-[var(--text-muted)] ${
                          left ? 'md:flex-row-reverse md:text-right' : ''
                        }`}
                      >
                        <span className="mt-[0.5em] h-px w-4 shrink-0 bg-[var(--accent)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
