'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motionVariants';

// A thin amber light beam that draws across as you scroll between sections,
// with a soft glow at its center. Gives the page a felt "transition" rhythm.
export default function SectionDivider() {
  const reduce = useReducedMotion();

  return (
    <div className="section-shell relative py-2" aria-hidden="true">
      <motion.div
        className="mx-auto h-px w-full origin-center bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.5 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(232,168,56,0.18), transparent 70%)' }}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
      />
    </div>
  );
}
