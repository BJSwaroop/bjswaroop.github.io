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
          {testimonials.items.map((t, i) => {
            const linkedin = (t as { linkedin?: string }).linkedin;
            return (
              <motion.figure
                key={i}
                variants={reduce ? undefined : fadeUpVariant}
                className="glow-card flex flex-col p-7"
              >
                <span aria-hidden="true" className="font-display text-5xl leading-[0.6] text-[var(--accent)]">
                  “
                </span>
                <blockquote className="mt-4 flex-1 text-[0.95rem] italic leading-relaxed text-[var(--text-muted)]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--border)] pt-5">
                  {linkedin ? (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {t.name} ↗
                    </a>
                  ) : (
                    <p className="font-display font-semibold text-[var(--accent)]">{t.name}</p>
                  )}
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{t.title}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
