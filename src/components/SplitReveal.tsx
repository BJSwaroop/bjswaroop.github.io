'use client';

import { Fragment, type ElementType } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motionVariants';

interface SplitRevealProps {
  text: string;
  className?: string;
  /** Semantic tag to render (default h2). */
  as?: ElementType;
  id?: string;
  /** Extra delay before the first word fires. */
  delay?: number;
}

// Reveals a heading word-by-word as it scrolls into view (the reference's
// signature motion). The real text lives on the tag's aria-label so screen
// readers and SEO read it as one heading; the word spans are decorative.
export default function SplitReveal({ text, className, as, id, delay = 0 }: SplitRevealProps) {
  const Tag = (as || 'h2') as ElementType;
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    );
  }

  const words = text.split(' ');

  return (
    <Tag id={id} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span
            aria-hidden="true"
            className="inline-block will-change-[transform,opacity]"
            initial={{ opacity: 0, y: '0.45em' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: delay + i * 0.05 }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  );
}
