'use client';

import { CSSProperties, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motionVariants';
import { hiring } from '@/lib/content';

const perspective: CSSProperties = { perspective: '1200px' };

export default function Hiring() {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState<boolean[]>(() => hiring.painPoints.map(() => false));

  const toggle = (i: number) =>
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const flippedCount = flipped.filter(Boolean).length;

  return (
    <section
      id="hiring"
      aria-labelledby="hiring-heading"
      className="relative bg-[#0A0A0A] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{hiring.label}</p>
        <h2 id="hiring-heading" className="heading-section text-[var(--text-primary)]">
          Sound <span className="italic text-[var(--accent)]">familiar?</span>
        </h2>
        <p className="mt-3 text-[var(--text-muted)]">{hiring.subheading}</p>

        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hiring.painPoints.map((p, i) => {
            const isFlipped = flipped[i];
            return (
              <motion.div
                key={i}
                variants={reduce ? undefined : fadeUpVariant}
                style={perspective}
                className="h-[260px]"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isFlipped}
                  aria-label={`${p.trait}: ${isFlipped ? p.counter : 'tap to reveal how I solve this'}`}
                  className="group block h-full w-full text-left"
                >
                  <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front - the frustration */}
                    <div className="flip-card-face justify-between rounded-[4px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors group-hover:border-white/25">
                      <span className="mono-accent text-[var(--text-dim)]">0{i + 1}</span>
                      <p className="font-display text-lg font-bold leading-snug text-[var(--text-primary)]">
                        {p.pain}
                      </p>
                      <span className="mono-accent inline-flex items-center gap-2 text-[var(--text-dim)] transition-colors group-hover:text-[var(--accent)]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        Tap to flip
                      </span>
                    </div>

                    {/* Back - how I answer it */}
                    <div className="flip-card-face flip-card-back justify-between rounded-[4px] border border-[var(--accent)]/40 bg-[var(--accent-glow)] p-6 backdrop-blur-sm">
                      <p className="text-[0.95rem] leading-relaxed text-[var(--text-primary)]">
                        {p.counter}
                      </p>
                      <span className="mono-accent w-fit rounded-[4px] border border-[var(--accent)]/50 px-2.5 py-1 text-[var(--accent)]">
                        {p.trait}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="section-label mt-6 text-right text-[var(--text-dim)]" aria-live="polite">
          {flippedCount}/{hiring.painPoints.length} revealed
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 border-t border-[var(--border)] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="heading-sub text-[var(--text-primary)]">{hiring.closingLine}</p>
          <a href={hiring.cta.href} className="btn-primary shrink-0">
            {hiring.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
