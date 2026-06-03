'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { whatIDo } from '@/lib/content';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function WhatIDo() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(0);

  return (
    <section id="whatido" className="section-shell scroll-mt-24 py-[var(--section-gap)]">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: sticky title */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.p
            className="section-label mb-5"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {whatIDo.label}
          </motion.p>
          <motion.h2
            className="heading-section text-[var(--text-primary)]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {whatIDo.heading}
          </motion.h2>
          <motion.p
            className="body-lg mt-6 max-w-[42ch] text-[var(--text-muted)]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            {whatIDo.intro}
          </motion.p>
        </div>

        {/* Right: expanding capability rows */}
        <ul className="border-t border-[var(--border)]">
          {whatIDo.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title} className="border-b border-[var(--border)]">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span
                      className={`mono-accent shrink-0 tabular-nums transition-colors ${
                        isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-dim)]'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 font-display text-[clamp(1.4rem,3.2vw,2.4rem)] font-bold leading-tight tracking-[-0.02em] transition-colors ${
                        isOpen ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="mono-accent hidden shrink-0 text-[var(--text-dim)] sm:block">
                      {item.tag}
                    </span>
                    <span
                      className={`shrink-0 text-2xl leading-none text-[var(--accent)] transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-[2.6rem] pr-2">
                          <p className="body-lg max-w-[60ch] text-[var(--text-primary)]/85">
                            {item.body}
                          </p>
                          <ul className="mt-4 flex flex-col gap-2">
                            {item.points.map((p) => (
                              <li
                                key={p}
                                className="flex items-start gap-3 text-[var(--text-muted)]"
                              >
                                <span className="mt-[0.55em] h-1 w-4 shrink-0 bg-[var(--accent)]" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
