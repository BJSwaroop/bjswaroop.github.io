'use client';

import Marquee from './Marquee';
import SectionReveal from './SectionReveal';
import { brands } from '@/lib/content';
import SplitReveal from './SplitReveal';

export default function Brands() {
  return (
    <section
      id="brands"
      aria-labelledby="brands-heading"
      className="relative bg-[#050505] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{brands.label}</p>
        <SplitReveal as="h2" id="brands-heading" className="heading-section text-[var(--text-primary)]" text={brands.heading} />
      </div>

      <div className="mt-14 [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
        <Marquee speed={42}>
          {brands.list.map((brand) => (
            <span key={brand} className="flex items-center">
              <span className="px-7 font-display text-2xl font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:text-3xl">
                {brand}
              </span>
              <span className="text-[var(--text-dim)]">·</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="section-shell mt-14 text-center">
        <SectionReveal>
          <a
            href={brands.cta.href}
            className="mono-accent text-[var(--text-muted)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline"
          >
            {brands.cta.label} →
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
