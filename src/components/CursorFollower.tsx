'use client';

import { useEffect, useRef, useState } from 'react';

// A soft amber ring that trails the cursor and grows over interactive elements.
// Additive (the native cursor stays), desktop-only, and disabled for touch /
// reduced-motion users. This is the signature "bespoke site" touch.
export default function CursorFollower() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const ring = ringRef.current;
    if (!ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let targetScale = 1;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        rx = mx;
        ry = my;
        ring.style.opacity = '1';
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      targetScale = t && t.closest('a, button, [role="button"], input, textarea, select, label')
        ? 1.9
        : 1;
    };
    const onLeaveWindow = () => {
      ring.style.opacity = '0';
      visible = false;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      scale += (targetScale - scale) * 0.2;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeaveWindow);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeaveWindow);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-7 w-7 rounded-full border border-[var(--accent)]/70"
      style={{ opacity: 0, willChange: 'transform' }}
    />
  );
}
