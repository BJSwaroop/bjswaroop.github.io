'use client';

import { MouseEvent } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import GridBackground from './GridBackground';
import { scrollToId } from './SmoothScroll';
import { charReveal, EASE } from '@/lib/motionVariants';
import { hero } from '@/lib/content';

export default function Hero() {
  const reduce = useReducedMotion();

  // Scroll-linked dissolve: the hero fades + scales as content scrolls over it.
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const heroStyle: MotionStyle = reduce ? {} : { opacity, scale, y };

  // Cursor-follow glow (desktop / pointer only).
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, var(--accent-glow), transparent 70%)`;
  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  const letters = hero.wordmark.split('');

  return (
    <motion.section
      id="home"
      style={heroStyle}
      onMouseMove={onMove}
      className="sticky top-0 z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]"
      aria-label="Introduction"
    >
      <ParticleCanvas />
      <GridBackground opacity={0.08} size={72} />

      {/* Cursor glow */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: glow }}
        />
      )}

      {/* Vignette so type stays legible over particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 28%, rgba(5,5,5,0.85) 92%)',
        }}
      />

      <div className="section-shell relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="section-label mb-7"
        >
          // Brand &amp; Content Leader
        </motion.p>

        <h1 className="heading-display" aria-label={hero.wordmark}>
          <span aria-hidden="true" style={{ perspective: '700px', display: 'inline-block' }}>
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                variants={charReveal(i)}
                initial={reduce ? false : 'hidden'}
                animate="visible"
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
          className="mt-8 max-w-[780px] text-balance font-display text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)]"
        >
          {hero.headline}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
          className="mono-accent mt-7 max-w-[700px] text-[var(--text-muted)]"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button onClick={() => scrollToId(hero.cta.href)} className="btn-primary w-full sm:w-auto">
            {hero.cta.label}
          </button>
          <button
            onClick={() => scrollToId(hero.ctaSecondary.href)}
            className="btn-ghost w-full sm:w-auto"
          >
            {hero.ctaSecondary.label} ↓
          </button>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="animate-float flex flex-col items-center gap-2 text-[var(--text-dim)]">
          <span className="label-caption text-[0.65rem]">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
            <path d="M7 1v18M1 13l6 6 6-6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
