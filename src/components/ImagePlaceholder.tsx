import { CSSProperties } from 'react';

interface ImagePlaceholderProps {
  /** The `[IMAGE: ...]` string from content.ts - brackets are stripped for display. */
  label: string;
  className?: string;
  /** CSS aspect-ratio, e.g. "3/4" or "16/9". */
  aspect?: string;
  /** Darken further for text-over-image use. */
  overlay?: boolean;
}

// Dark gradient placeholder shown until real photography is dropped in.
// Swap these for <Image> (next/image) once files land in /public/images.
export default function ImagePlaceholder({
  label,
  className = '',
  aspect,
  overlay = false,
}: ImagePlaceholderProps) {
  const text = label.replace(/^\[IMAGE:\s*/i, '').replace(/\]\s*$/, '');
  const style: CSSProperties = aspect ? { aspectRatio: aspect } : {};

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[var(--bg-subtle)] ${className}`}
      style={style}
      role="img"
      aria-label={text}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <span
        aria-hidden="true"
        className="mono-accent absolute left-4 top-4 text-[0.65rem] tracking-[0.2em] text-[var(--text-dim)]"
      >
        [ IMG ]
      </span>
      <span className="mono-accent relative z-10 max-w-[78%] text-center text-[0.7rem] leading-relaxed text-[var(--text-dim)]">
        {text}
      </span>
      {overlay && <div aria-hidden="true" className="absolute inset-0 bg-black/40" />}
    </div>
  );
}
