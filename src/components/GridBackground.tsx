// Reusable HUD / blueprint grid-line background.
// Absolutely positioned - drop inside a `relative` parent.

interface GridBackgroundProps {
  className?: string;
  /** 0-1 line visibility. Hero ~0.08, Empire ~0.12. */
  opacity?: number;
  /** Grid cell size in px. */
  size?: number;
}

export default function GridBackground({
  className = '',
  opacity = 0.08,
  size = 64,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        opacity,
        backgroundImage:
          'linear-gradient(to right, rgba(245,240,235,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,235,0.6) 1px, transparent 1px)',
        backgroundSize: `${size}px ${size}px`,
        maskImage: 'radial-gradient(ellipse at center, #000 35%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, #000 35%, transparent 80%)',
      }}
    />
  );
}
