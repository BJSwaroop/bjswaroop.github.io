'use client';

import { motion, useReducedMotion } from 'framer-motion';
import DotMatrix from './DotMatrix';
import { staggerContainer, fadeUpVariant } from '@/lib/motionVariants';
import { systems } from '@/lib/content';

export default function Systems() {
  const reduce = useReducedMotion();

  return (
    <section
      id="systems"
      aria-labelledby="systems-heading"
      className="relative overflow-hidden bg-[#0E0E0E] py-[var(--section-gap)]"
    >
      <DotMatrix />

      <div className="section-shell relative">
        <p className="section-label mb-3">{systems.label}</p>
        <h2 id="systems-heading" className="heading-section text-[var(--text-primary)]">
          {systems.heading}
        </h2>
        <p className="mt-3 max-w-[640px] text-[var(--text-muted)]">{systems.subheading}</p>

        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {systems.engines.map((engine) => (
            <motion.div
              key={engine.name}
              variants={reduce ? undefined : fadeUpVariant}
              className="glow-card relative flex flex-col p-7"
            >
              <span className="mono-accent absolute right-5 top-5 text-[var(--accent)]">
                {engine.stat}
              </span>
              <h3 className="pr-24 font-display text-xl font-bold text-[var(--text-primary)]">
                {engine.name}
              </h3>
              <p className="mt-3 text-[var(--text-muted)]">{engine.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
