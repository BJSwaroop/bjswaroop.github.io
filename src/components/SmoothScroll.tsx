'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

// Module-level singleton so nav links / buttons can drive Lenis without a context.
let lenisInstance: Lenis | null = null;

/** Smooth-scroll to an element by id or "#id". Falls back to native smooth scroll. */
export function scrollToId(idOrHash: string) {
  if (typeof document === 'undefined') return;
  const selector = idOrHash.startsWith('#') ? idOrHash : `#${idOrHash}`;
  const el = document.querySelector(selector) as HTMLElement | null;
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: 0, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** Smooth-scroll back to the very top. */
export function scrollToTop() {
  if (typeof window === 'undefined') return;
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Honour the user's motion preference - no JS-driven smoothing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });
    lenisInstance = lenis;

    // Dev-only: expose the instance for tooling/inspection. Tree-shaken in production.
    if (process.env.NODE_ENV === 'development') {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
