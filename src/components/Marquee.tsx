'use client';

import { CSSProperties, ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  className?: string;
}

// Seamless infinite marquee: render the children twice inside a track that
// translates -50%. Pauses on hover. Disabled under prefers-reduced-motion (CSS).
export default function Marquee({ children, speed = 32, className = '' }: MarqueeProps) {
  return (
    <div className={`marquee-group relative flex overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${speed}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
