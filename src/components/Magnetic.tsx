'use client';

import { MouseEvent, ReactNode, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** How strongly it pulls toward the cursor (0–1). */
  strength?: number;
}

// Wraps a button/link so it drifts toward the cursor on hover, then springs back.
// Desktop-only (skips touch), and a no-op under prefers-reduced-motion.
export default function Magnetic({ children, className = '', strength = 0.3 }: MagneticProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={reduce ? undefined : reset}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  );
}
