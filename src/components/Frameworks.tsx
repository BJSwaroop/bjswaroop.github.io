'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { slideFromLeft, staggerParent } from '@/lib/motionVariants';
import { frameworks } from '@/lib/content';

export default function Frameworks() {
  const reduce = useReducedMotion();

  return (
    <section
      id="frameworks"
      aria-labelledby="frameworks-heading"
      className="relative bg-[#0A0A0A] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{frameworks.label}</p>
        <h2 id="frameworks-heading" className="heading-section text-[var(--text-primary)]">
          {frameworks.heading}
        </h2>
        <p className="mt-3 text-[var(--text-muted)]">{frameworks.subheading}</p>

        <motion.ul
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 border-t border-[var(--border)]"
        >
          {frameworks.items.map((fw, i) => (
            <motion.li
              key={fw.name}
              variants={reduce ? undefined : slideFromLeft}
              className="group border-b border-[var(--border)] py-7"
            >
              <div className="flex items-baseline gap-5">
                <span className="mono-accent shrink-0 text-[var(--text-dim)]">
                  {String(i + 1).padStart(2, '0')} /
                </span>
                <h3 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                  {fw.name}
                </h3>
              </div>
              <div className="max-h-[180px] overflow-hidden pl-[3.2rem] opacity-100 transition-all duration-500 ease-out md:max-h-0 md:opacity-0 md:group-hover:max-h-[180px] md:group-hover:opacity-100">
                <p className="max-w-[680px] pt-3 text-[var(--text-muted)]">{fw.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
