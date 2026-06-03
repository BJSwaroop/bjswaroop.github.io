'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motionVariants';
import { qualities } from '@/lib/content';
import SplitReveal from './SplitReveal';

export default function Qualities() {
  const reduce = useReducedMotion();

  return (
    <section
      id="qualities"
      aria-labelledby="qualities-heading"
      className="relative bg-[#050505] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{qualities.label}</p>
        <SplitReveal as="h2" id="qualities-heading" className="heading-section text-[var(--text-primary)]" text={qualities.heading} />

        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2"
        >
          {qualities.items.map((q) => (
            <motion.div key={q.trait} variants={reduce ? undefined : fadeUpVariant} className="flex gap-4">
              <span className="mt-[0.6rem] h-[2px] w-4 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                  {q.trait}
                </h3>
                <p className="mt-1 text-[var(--text-muted)]">{q.proof}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
