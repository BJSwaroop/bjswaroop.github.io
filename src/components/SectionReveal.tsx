'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { EASE } from '@/lib/motionVariants';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay (seconds) before the reveal fires. */
  delay?: number;
  /** Travel distance in px (default 40). */
  y?: number;
  /** How much must be visible to trigger (0-1). */
  amount?: number;
}

// Scroll-triggered fade-up wrapper. Respects prefers-reduced-motion.
export default function SectionReveal({
  children,
  className,
  delay = 0,
  y = 40,
  amount = 0.2,
}: SectionRevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EASE, delay },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
