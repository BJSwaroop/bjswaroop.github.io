// Dot-matrix pattern background - used to texture the Systems section.
// Absolutely positioned - drop inside a `relative` parent.

interface DotMatrixProps {
  className?: string;
  opacity?: number;
}

export default function DotMatrix({ className = '', opacity = 0.28 }: DotMatrixProps) {
  return (
    <div
      aria-hidden="true"
      className={`dot-matrix-bg pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
    />
  );
}
