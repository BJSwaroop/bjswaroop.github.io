'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { staggerContainer, fadeUpVariant } from '@/lib/motionVariants';
import { proof } from '@/lib/content';

export default function ProofBar() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proof"
      aria-label="Proof in numbers"
      className="relative border-t border-[var(--border)] bg-[#050505] py-[clamp(72px,12vh,140px)]"
    >
      <div className="section-shell">
        <p className="section-label mb-12">{proof.label}</p>

        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3"
        >
          {proof.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={reduce ? undefined : fadeUpVariant}
              className="stat-cell flex min-w-0 flex-col gap-2"
            >
              <span className="stat-num font-black text-[var(--text-primary)]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  compact={stat.value >= 100000}
                />
              </span>
              <span className="label-caption text-[var(--text-muted)]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {proof.caption && (
          <p className="mt-12 max-w-[640px] text-sm italic text-[var(--text-dim)]">
            {proof.caption}
          </p>
        )}
      </div>
    </section>
  );
}
