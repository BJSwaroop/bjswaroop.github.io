'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motionVariants';
import { testimonials } from '@/lib/content';
import SplitReveal from './SplitReveal';

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative bg-[#0A0A0A] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{testimonials.label}</p>
        <SplitReveal as="h2" id="testimonials-heading" className="heading-section text-[var(--text-primary)]" text={testimonials.heading} />

        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.items.map((t, i) => (
            <motion.figure
              key={i}
              variants={reduce ? undefined : fadeUpVariant}
              className="glow-card flex flex-col p-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-6xl leading-[0.7] text-[var(--accent)]"
              >
                “
              </span>
              <blockquote className="mt-3 flex-1 italic leading-relaxed text-[var(--text-muted)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-glow)] font-display font-bold text-[var(--accent)]"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display font-bold text-[var(--text-primary)]">{t.name}</p>
                  <p className="mono-accent text-[var(--text-dim)]">{t.title}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
