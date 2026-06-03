'use client';

import { scrollToTop } from './SmoothScroll';
import { contact, footer } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[#030303] py-14">
      <div className="section-shell flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <span className="font-display text-3xl font-black tracking-tight text-[var(--text-primary)]">
            Swaroop<span className="text-[var(--accent)]">.</span>
          </span>
          <button onClick={scrollToTop} className="btn-ghost text-sm">
            Back to top ↑
          </button>
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-2">
          {contact.socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-accent text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-dim)] md:flex-row md:justify-between">
          <span>{footer.copyright}</span>
          <span>{footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
