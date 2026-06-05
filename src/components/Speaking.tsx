'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { scrollToId } from './SmoothScroll';
import { staggerParent, fadeUpVariant } from '@/lib/motionVariants';
import { speaking } from '@/lib/content';
import SplitReveal from './SplitReveal';

export default function Speaking() {
  const reduce = useReducedMotion();

  return (
    <section
      id="speaking"
      aria-labelledby="speaking-heading"
      className="relative bg-[#0A0A0A] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{speaking.label}</p>
        <SplitReveal as="h2" id="speaking-heading" className="heading-section text-[var(--text-primary)]" text={speaking.heading} />

        <motion.ul
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 border-t border-[var(--border)]"
        >
          {speaking.events.map((ev, i) => (
            <motion.li
              key={i}
              variants={reduce ? undefined : fadeUpVariant}
              className="group -mx-4 grid grid-cols-1 gap-1 border-b border-[var(--border)] px-4 py-6 transition-colors hover:bg-white/[0.02] md:grid-cols-[1fr_auto_auto] md:items-baseline md:gap-10"
            >
              {(ev as { link?: string }).link ? (
                <a
                  href={(ev as { link?: string }).link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                >
                  {ev.name} <span className="text-[var(--accent)]">↗</span>
                </a>
              ) : (
                <span className="font-display text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                  {ev.name}
                </span>
              )}
              <span className="mono-accent text-[var(--text-muted)]">{ev.type}</span>
              <span className="text-sm text-[var(--text-dim)] md:text-right">{ev.location}</span>
            </motion.li>
          ))}
        </motion.ul>

        <SectionReveal className="mt-10">
          <button onClick={() => scrollToId(speaking.cta.href)} className="btn-ghost">
            {speaking.cta.label} →
          </button>
        </SectionReveal>
      </div>
    </section>
  );
}
