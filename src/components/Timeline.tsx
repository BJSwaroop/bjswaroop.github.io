'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { journey } from '@/lib/content';

export default function Timeline() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);

  // The progress line fills as this block scrolls through the middle of the viewport.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 75%', 'end 60%'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative bg-[#0A0A0A] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{journey.label}</p>
        <h2 id="journey-heading" className="heading-section text-[var(--text-primary)]">
          {journey.heading}
        </h2>

        <div ref={railRef} className="relative mt-14">
          {/* Dim base rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 w-[2px] bg-[var(--border)]"
          />
          {/* Amber progress fill that grows with scroll */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 w-[2px] origin-top bg-[var(--accent)]"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />

          <div className="flex flex-col gap-14">
            {journey.milestones.map((m, i) => (
              <SectionReveal key={i} y={24} className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[#0A0A0A]"
                />
                <span className="mono-accent text-[var(--accent)]">{m.year}</span>
                <h3 className="heading-sub mt-1 text-[var(--text-primary)]">{m.title}</h3>
                <p className="mt-2 max-w-[620px] text-[var(--text-muted)]">{m.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
