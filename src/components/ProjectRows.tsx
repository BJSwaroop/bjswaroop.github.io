'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motionVariants';
import { work } from '@/lib/content';

type Campaign = (typeof work.campaigns)[number];

// Pull an 11-char video id out of a watch / youtu.be URL, else null.
function youtubeId(href?: string | null): string | null {
  if (!href) return null;
  const m = href.match(/[?&]v=([\w-]{11})/) || href.match(/youtu\.be\/([\w-]{11})/);
  return m ? m[1] : null;
}

const pad = (n: number) => String(n + 1).padStart(2, '0');

/** Visual half of a row: a real YouTube thumbnail when there's a video,
 *  otherwise a designed amber panel carrying the index + category. */
function Visual({ c, index }: { c: Campaign; index: number }) {
  const id = youtubeId(c.link?.href);
  const [src, setSrc] = useState<string | null>(
    id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : null,
  );

  const frame =
    'relative aspect-video w-full overflow-hidden rounded-lg border border-[var(--border)] transition-[border-color,box-shadow] duration-300 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_44px_var(--accent-glow)]';

  if (src) {
    return (
      <div className={frame}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={c.title}
          loading="lazy"
          onError={() => id && setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg width="15" height="17" viewBox="0 0 14 16" fill="#fff" aria-hidden="true">
            <path d="M0 0l14 8-14 8z" />
          </svg>
        </span>
      </div>
    );
  }

  return (
    <div className={`${frame} flex items-center justify-center bg-[var(--bg-card)]`}>
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 82% 0%, rgba(232,168,56,0.16), transparent 55%)',
        }}
      />
      <span
        className="select-none font-display text-[clamp(4rem,13vw,9rem)] font-black leading-none"
        style={{ color: 'rgba(232,168,56,0.13)' }}
      >
        {pad(index)}
      </span>
      <span className="absolute bottom-4 left-5 mono-accent text-[var(--text-muted)]">
        {c.category}
      </span>
    </div>
  );
}

function Row({ c, i }: { c: Campaign; i: number }) {
  const reduce = useReducedMotion();
  const reversed = i % 2 === 1;

  const visual = c.link ? (
    <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="block">
      <Visual c={c} index={i} />
    </a>
  ) : (
    <Visual c={c} index={i} />
  );

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <div className={reversed ? 'lg:order-2' : ''}>{visual}</div>

      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="mb-1 flex items-center gap-4">
          <span
            className="font-display text-4xl font-black leading-none tabular-nums"
            style={{ color: 'rgba(232,168,56,0.3)' }}
          >
            {pad(i)}
          </span>
          <span className="inline-block rounded-[4px] border border-[var(--border-hover)] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            {c.category}
          </span>
        </div>
        <h3 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.4rem)] font-bold leading-tight tracking-[-0.02em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
          {c.title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-[var(--text-muted)]">{c.summary}</p>
        <p className="mt-5 max-w-[52ch] border-l-2 border-[var(--accent)] pl-4 text-[var(--text-primary)]">
          {c.impact}
        </p>
        {c.link && (
          <a
            href={c.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-accent mt-6 inline-flex items-center gap-2 text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {c.link.label} ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

// Selected Work as full-width alternating rows. Campaigns with a video show
// its real thumbnail; the rest get a designed amber panel.
export default function ProjectRows() {
  return (
    <div className="mt-14 flex flex-col gap-[clamp(56px,8vh,96px)]">
      {work.campaigns.map((c, i) => (
        <Row key={i} c={c} i={i} />
      ))}
    </div>
  );
}
