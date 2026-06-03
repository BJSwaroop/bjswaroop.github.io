'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion, type AnimationPlaybackControls } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

// Indian-format grouping per the brief.
const fmt = new Intl.NumberFormat('en-IN');

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  /** Count-up duration in seconds. */
  duration?: number;
  className?: string;
}

// Scroll-triggered counter with a "decryption" scan before it resolves:
//   Phase 1 (~400ms): cycle random digits like a slot machine.
//   Phase 2 (duration): count up 0 → value.
export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3, once: true });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState('0');
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (reduce) {
      setDisplay(fmt.format(value));
      return;
    }

    const digits = Math.max(1, String(value).length);
    const max = Math.pow(10, digits) - 1;
    let controls: AnimationPlaybackControls | null = null;

    // Phase 1 - scanning random digits.
    const scan = setInterval(() => {
      setDisplay(fmt.format(Math.floor(Math.random() * max)));
    }, 50);

    // Phase 2 - resolve + count up.
    const timeout = setTimeout(() => {
      clearInterval(scan);
      controls = animate(0, value, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(fmt.format(Math.floor(v))),
        onComplete: () => setDisplay(fmt.format(value)),
      });
    }, 400);

    return () => {
      clearInterval(scan);
      clearTimeout(timeout);
      controls?.stop();
    };
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix && <span className="text-[var(--accent)]">{suffix}</span>}
    </span>
  );
}
