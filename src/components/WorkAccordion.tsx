'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motionVariants';
import { work } from '@/lib/content';

// Single-open accordion of SST campaigns. First one open by default.
export default function WorkAccordion() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-[var(--border)]">
      {work.campaigns.map((c, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[var(--border)]">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-5 py-6 text-left"
            >
              <div className="min-w-0">
                <span className="mb-2 inline-block rounded-[4px] border border-[var(--border-hover)] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {c.category}
                </span>
                <h3
                  className={`font-display text-xl font-bold tracking-tight transition-colors md:text-2xl ${
                    isOpen
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-primary)] group-hover:text-[var(--accent)]'
                  }`}
                >
                  {c.title}
                </h3>
                <p className="mt-1 max-w-[680px] text-[var(--text-muted)]">{c.summary}</p>
              </div>
              <span
                aria-hidden="true"
                className={`mt-1 shrink-0 text-2xl leading-none text-[var(--text-dim)] transition-transform duration-300 group-hover:text-[var(--accent)] ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <ul className="flex flex-col gap-2.5">
                      {c.details.map((d, di) => (
                        <li key={di} className="flex gap-3 text-[var(--text-muted)]">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                          />
                          <span className="max-w-[680px]">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 max-w-[680px] border-l-2 border-[var(--accent)] pl-4 text-[var(--text-primary)]">
                      {c.impact}
                    </p>
                    {c.link && (
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono-accent mt-5 inline-flex items-center gap-2 text-[var(--accent)] underline-offset-4 hover:underline"
                      >
                        {c.link.label} ↗
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
