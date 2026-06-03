'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav } from '@/lib/content';
import { scrollToId, scrollToTop } from './SmoothScroll';

const SECTION_IDS = nav.links.map((l) => l.href.replace('#', ''));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Border + background once we've scrolled past most of the hero.
  // Also clear the active link while still in the hero region (no section is "current" there).
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.6);
      if (y < window.innerHeight * 0.5) setActive('');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-section highlighting.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(href), 10);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--border)] bg-[var(--bg-primary)]/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
          <button
            onClick={scrollToTop}
            className="font-display text-[1.1rem] font-bold tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            Swaroop<span className="text-[var(--accent)]">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className={`mono-accent transition-colors ${
                      isActive
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href={nav.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-accent text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
              >
                {nav.resume.label}
              </a>
            </li>
            <li>
              <button onClick={() => go('#contact')} className="btn-primary px-4 py-2 text-sm">
                Work with me
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span className="absolute left-0 top-0 h-[2px] w-full bg-[var(--text-primary)]" />
              <span className="absolute left-0 top-[7px] h-[2px] w-full bg-[var(--text-primary)]" />
              <span className="absolute left-0 top-[14px] h-[2px] w-full bg-[var(--text-primary)]" />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col bg-[var(--bg-primary)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="section-shell flex h-16 items-center justify-between">
              <span className="font-display text-[1.1rem] font-bold text-[var(--text-primary)]">
                Swaroop<span className="text-[var(--accent)]">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center"
                aria-label="Close menu"
              >
                <span className="relative block h-6 w-6">
                  <span className="absolute left-0 top-[11px] h-[2px] w-full rotate-45 bg-[var(--text-primary)]" />
                  <span className="absolute left-0 top-[11px] h-[2px] w-full -rotate-45 bg-[var(--text-primary)]" />
                </span>
              </button>
            </div>

            <nav
              className="section-shell flex flex-1 flex-col justify-center gap-2"
              aria-label="Mobile"
            >
              {nav.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => go(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="py-3 text-left font-display text-4xl font-bold tracking-tight text-[var(--text-primary)]"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={nav.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + nav.links.length * 0.06 }}
                className="py-3 text-left font-display text-4xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                {nav.resume.label}
              </motion.a>
              <motion.button
                onClick={() => go('#contact')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + (nav.links.length + 1) * 0.06 }}
                className="btn-primary mt-8 w-full"
              >
                Work with me
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
