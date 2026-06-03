'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

// Thin amber bar pinned to the very top of the viewport that grows 0 → 100%
// as the page is scrolled.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-[var(--accent)]"
    />
  );
}
