'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import SectionReveal from './SectionReveal';
import { staggerContainer, fadeUpVariant } from '@/lib/motionVariants';
import { work } from '@/lib/content';

type Project = (typeof work.projects)[number];
type Video = (typeof work.flagship.videos)[number];

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-[4px] border border-[var(--border-hover)] bg-black/30 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
      {children}
    </span>
  );
}

function VideoCard({ v }: { v: Video }) {
  return (
    <a
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card group block w-[280px] shrink-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1 sm:w-[340px]"
    >
      <div className="relative">
        <ImagePlaceholder label={v.image} aspect="16/9" className="w-full" />
        <span className="absolute right-3 top-3 rounded-[4px] bg-black/70 px-2 py-1 font-mono text-[0.65rem] text-[var(--accent)]">
          {v.views} views
        </span>
        <span className="absolute bottom-3 right-3 rounded-[4px] bg-black/70 px-2 py-1 font-mono text-[0.65rem] text-[var(--text-muted)]">
          {v.duration}
        </span>
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="var(--accent)" aria-hidden="true">
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
  const featured: Project = work.projects.find((p) => p.featured) ?? work.projects[0];
  const rest = work.projects.filter((p) => p !== featured);

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
        <h2 id="work-heading" className="heading-section mb-14 text-[var(--text-primary)]">
          {work.heading}
        </h2>

        {/* Featured project */}
        <SectionReveal>
          <article className="glow-card group relative overflow-hidden">
            <ImagePlaceholder
              label={featured.image}
              className="h-[clamp(300px,44vh,520px)] w-full"
              overlay
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <h3 className="heading-sub text-[var(--text-primary)]">{featured.title}</h3>
              <p className="mono-accent mt-1 text-[var(--accent)]">{featured.subtitle}</p>
              <p className="mt-3 max-w-[680px] text-[var(--text-muted)]">{featured.description}</p>
            </div>
          </article>
        </SectionReveal>

        {/* Remaining projects */}
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          {rest.map((p, i) => (
            <motion.article
              key={i}
              variants={reduce ? undefined : fadeUpVariant}
              className="glow-card group flex flex-col overflow-hidden"
            >
              <ImagePlaceholder label={p.image} className="h-[200px] w-full" />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {p.title}
                </h3>
                <p className="mono-accent mt-1 text-[var(--accent)]">{p.subtitle}</p>
                <p className="mt-3 text-[var(--text-muted)]">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Flagship film strip */}
      <div ref={stripRef} className="relative mt-[clamp(64px,9vh,110px)]">
        <div className="section-shell mb-8">
          <p className="section-label mb-2">// FLAGSHIP · SCROLL TO PAN</p>
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
