// src/lib/motionVariants.ts
// Shared Framer Motion variants used across the site.
import type { Variants, Transition } from 'framer-motion';

// Signature easing curve (expo-out style) used everywhere.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Standard section reveal (fade + rise).
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Slightly larger travel - used by full-section wrappers.
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

// Stagger container - children animate in sequence.
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Slightly slower stagger for editorial lists.
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Slide in from the left (frameworks list).
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Card rest / hover states.
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.3 } },
};

// Character-split reveal for the hero name. Pass the character index.
export const charReveal = (index: number): Variants => ({
  hidden: { opacity: 0, y: 30, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: index * 0.08, duration: 0.6, ease: EASE },
  },
});

// Count-up timing for AnimatedCounter.
export const counterConfig: Transition = { duration: 2, ease: 'easeOut' };

// A no-op variant set for prefers-reduced-motion (everything starts visible).
export const noMotion: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0 } },
};
