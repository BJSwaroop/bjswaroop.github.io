'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SectionReveal from './SectionReveal';
import ProjectRows from './ProjectRows';
import { work } from '@/lib/content';
import SplitReveal from './SplitReveal';
import PlatformIcon from './PlatformIcon';

type Video = (typeof work.flagship.videos)[number];

function youtubeId(href?: string | null): string | null {
  if (!href) return null;
  const m = href.match(/[?&]v=([\w-]{11})/) || href.match(/youtu\.be\/([\w-]{11})/);
  return m ? m[1] : null;
}

function VideoCard({ v }: { v: Video }) {
  const id = youtubeId(v.url);
  const [src, setSrc] = useState(id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : '');
  return (
    <a
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card group block w-[280px] shrink-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1 sm:w-[340px]"
    >
      <div className="relative aspect-video overflow-hidden bg-[var(--bg-subtle)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={v.title}
          loading="lazy"
          onError={() => id && setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--accent)]/50 bg-black/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg width="15" height="17" viewBox="0 0 14 16" fill="var(--accent)" aria-hidden="true">
            <path d="M0 0l14 8-14 8z" />
          </svg>
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <h4 className="font-display font-bold leading-tight text-[var(--text-primary)]">{v.title}</h4>
        <span className="font-mono text-[var(--text-dim)] transition-colors group-hover:text-[var(--accent)]">
          ↗
        </span>
      </div>
    </a>
  );
}

export default function Work() {
  const reduce = useReducedMotion();

  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-42%']);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative bg-[#0E0E0E] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{work.label}</p>
        <SplitReveal as="h2" id="work-heading" className="heading-section text-[var(--text-primary)]" text={work.heading} />
        <p className="mt-3 max-w-[640px] text-[var(--text-muted)]">{work.intro}</p>

        {/* Channel growth I drove */}
        <SectionReveal className="mt-10">
          <p className="label-caption mb-4 text-[var(--text-muted)]">Channels I grew from scratch</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {work.growth.map((g) => (
              <div key={g.channel} className="glow-card border border-[var(--border)] p-5">
                <p className="label-caption flex items-center gap-2 text-[var(--text-muted)]">
                  <PlatformIcon name={g.channel} className="h-4 w-4 text-[var(--accent)]" />
                  {g.channel}
                </p>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-lg text-[var(--text-dim)]">{g.from}</span>
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    →
                  </span>
                  <span className="font-display text-3xl font-black text-[var(--text-primary)]">
                    {g.to}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Campaigns as alternating rows with real video thumbnails */}
        <ProjectRows />
      </div>

      {/* Flagship strip (personal channel) */}
      <div ref={stripRef} className="relative mt-[clamp(64px,9vh,110px)]">
        <div className="section-shell mb-8">
          <p className="section-label mb-2">// FROM MY CHANNEL</p>
          <h3 className="heading-sub text-[var(--text-primary)]">{work.flagship.heading}</h3>
        </div>

        {/* Desktop: scroll-linked horizontal pan */}
        <div className="hidden overflow-hidden md:block">
          <motion.div
            style={reduce ? undefined : { x }}
            className="flex w-max gap-6 px-[var(--section-pad-x)]"
          >
            {work.flagship.videos.map((v, i) => (
              <VideoCard key={i} v={v} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: native scroll-snap */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--section-pad-x)] pb-4 md:hidden">
          {work.flagship.videos.map((v, i) => (
            <div key={i} className="snap-start">
              <VideoCard v={v} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
