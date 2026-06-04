'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Branded entrance splash. Shows the wordmark + a filling progress bar from
 * the very first painted frame (even before hydration), so it never looks
 * like a blank/broken black screen. Counts to 100, then auto-enters with a
 * clip-path wipe. Safety timeout + auto-enter guarantee nobody is ever stuck;
 * reduced-motion skips it entirely.
 */
export default function Loader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);
  const entered = useRef(false);

  // Hold the hero reveal + lock scroll while the splash is up.
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

  // Count 0 -> 100, with a hard safety net so the gate can never hang.
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1000, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setReady(true);
    };
    raf = requestAnimationFrame(tick);
    const safety = window.setTimeout(() => {
      setCount(100);
      setReady(true);
    }, 2200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, [reduce]);

  const enter = () => {
    if (entered.current) return;
    entered.current = true;
    document.documentElement.classList.remove('preloading');
    document.body.style.overflow = '';
    setGone(true);
  };

  // Auto-enter shortly after the count finishes.
  useEffect(() => {
    if (reduce || !ready) return;
    const t = window.setTimeout(enter, 900);
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
          transition={{ duration: 0.8, ease: EASE }}
          onClick={ready ? enter : undefined}
          role={ready ? 'button' : undefined}
          aria-label={ready ? 'Enter site' : undefined}
          style={{ cursor: ready ? 'pointer' : 'default' }}
        >
          <span className="font-display text-[clamp(2.8rem,8vw,5.5rem)] font-black tracking-[-0.03em] text-[var(--text-primary)]">
            Swaroop<span className="text-[var(--accent)]">.</span>
          </span>

          <div className="mt-8 w-[min(300px,64vw)]">
            <div className="relative h-px w-full overflow-hidden bg-[var(--border)]">
              <motion.span
                className="absolute inset-y-0 left-0 block bg-[var(--accent)]"
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
              />
            </div>
            <div className="mono-accent mt-3 flex items-center justify-between">
              <span className="text-[var(--text-dim)]">{ready ? 'Ready' : 'Loading'}</span>
              <span className="text-[var(--accent)]">{count}%</span>
            </div>
          </div>

          <AnimatePresence>
            {ready && (
              <motion.button
                onClick={enter}
                className="btn-ghost group mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <span className="label-caption text-[var(--accent)]">Enter</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
