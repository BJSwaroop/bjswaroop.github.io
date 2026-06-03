'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** 0-1 - how much of the element must be visible before triggering. */
  threshold?: number;
  /** Margin around the root, e.g. "-10% 0px". */
  rootMargin?: string;
  /** Fire only the first time it enters (default true). */
  once?: boolean;
}

/**
 * Lightweight IntersectionObserver hook for scroll triggers.
 * Returns a ref to attach and a boolean for whether it is in view.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Graceful fallback for very old browsers / SSR edge cases.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

export default useInView;
