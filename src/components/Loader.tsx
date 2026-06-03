'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Gated entrance overlay. Counts to 100 while the page paints behind it, then
 * invites a click to enter. The hero's CSS reveal is held until "entered" via
 * the `preloading` class on <html> (see globals.css), so the headline animates
 * in *after* the wipe, not behind it.
 *
 * Safety rails: skips entirely for reduced-motion, auto-enters after a few
 * seconds if the visitor doesn't click, and never blocks crawlers (the real
 * content is always in the DOM underneath).
 */
export default function Loader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false); // count finished -> show "Enter"
  const [gone, setGone] = useState(false); // entered -> wipe + unmount
  const entered = useRef(false);

  // Hold the hero reveal + lock scroll for the duration of the gate.
  useEffect(() => {
    if (reduce) return;
    const root = document.documentElement;
    root.classList.add('preloading');
    document.body.style.overflow = 'hidden';
    return () => {
      root.classList.remove('preloading');
      document.body.style.overflow = '';
    };
  }, [reduce]);

  // Count 0 -> 100 over ~1.1s.
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1100, 1);
      // easeOutCubic for a count that decelerates into 100
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setReady(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const enter = () => {
    if (entered.current) return;
    entered.current = true;
    document.documentElement.classList.remove('preloading');
    document.body.style.overflow = '';
    setGone(true);
  };

  // Auto-enter so a distracted visitor is never trapped behind the gate.
  useEffect(() => {
    if (reduce || !ready) return;
    const t = window.setTimeout(enter, 2600);
    return () => window.clearTimeout(t);
  }, [reduce, ready]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#050505]"
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: EASE }}
          onClick={ready ? enter : undefined}
          role={ready ? 'button' : undefined}
          aria-label={ready ? 'Enter site' : undefined}
          style={{ cursor: ready ? 'pointer' : 'default' }}
        >
          {/* Big counter that ticks up while the page loads behind */}
          <motion.div
            className="counter-num text-[var(--text-primary)]"
            animate={{ opacity: ready ? 0 : 1, y: ready ? -20 : 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {count}
            <span className="text-[var(--accent)]">%</span>
          </motion.div>

          {/* Enter prompt, revealed once loaded */}
          <AnimatePresence>
            {ready && (
              <motion.div
                className="absolute flex flex-col items-center gap-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black tracking-[-0.03em] text-[var(--text-primary)]">
                  Swaroop<span className="text-[var(--accent)]">.</span>
                </span>
                <button onClick={enter} className="btn-ghost group">
                  <span className="label-caption text-[var(--accent)]">Enter</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thin progress rail along the bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent)]"
            animate={{ width: `${count}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
