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
import Magnetic from './Magnetic';
import { scrollToId } from './SmoothScroll';
import { hero } from '@/lib/content';

function Ctas() {
  return (
    <div className="hero-fade mt-9 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.85s' }}>
      <Magnetic className="w-full sm:w-auto">
        <button onClick={() => scrollToId(hero.cta.href)} className="btn-primary w-full">
          {hero.cta.label}
        </button>
      </Magnetic>
      <Magnetic className="w-full sm:w-auto">
        <button onClick={() => scrollToId(hero.ctaSecondary.href)} className="btn-ghost w-full">
          {hero.ctaSecondary.label} ↓
        </button>
      </Magnetic>
    </div>
  );
}

function Wordmark({ className }: { className: string }) {
  return (
    <h1 className={className} aria-label={hero.wordmark}>
      <span aria-hidden="true" style={{ perspective: '700px', display: 'inline-block' }}>
        {hero.wordmark.split('').map((ch, i) => (
          <span
            key={i}
            className="hero-char"
            style={{ animationDelay: `${i * 0.07}s`, transformStyle: 'preserve-3d' }}
          >
            {ch}
          </span>
        ))}
      </span>
    </h1>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const heroStyle: MotionStyle = reduce ? {} : { opacity, scale, y };

  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, var(--accent-glow), transparent 70%)`;
  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  return (
    <motion.section
      id="home"
      style={heroStyle}
      onMouseMove={onMove}
      className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-[#050505]"
      aria-label="Introduction"
    >
      <ParticleCanvas />
      <GridBackground opacity={0.08} size={72} />

      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: glow }}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.8) 95%)',
        }}
      />

      <div className="section-shell relative z-10 flex flex-col items-center text-center">
        <p className="hero-fade section-label mb-7" style={{ animationDelay: '0.05s' }}>
          // Brand &amp; Content Leader
        </p>
        <Wordmark className="heading-display" />
        <p
          className="hero-fade mt-8 max-w-[780px] text-balance font-display text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)]"
          style={{ animationDelay: '0.55s' }}
        >
          {hero.headline}
        </p>
        <p
          className="hero-fade mono-accent mt-7 max-w-[700px] text-[var(--text-muted)]"
          style={{ animationDelay: '0.7s' }}
        >
          {hero.subtitle}
        </p>
        <Ctas />
      </div>

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
