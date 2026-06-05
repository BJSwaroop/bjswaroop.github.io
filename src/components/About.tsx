'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { fadeUpVariant, staggerParent, EASE } from '@/lib/motionVariants';
import { about } from '@/lib/content';

export default function About() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-[#0A0A0A] py-[var(--section-gap)]"
    >
      <div ref={sectionRef} className="section-shell relative">
        <p className="section-label mb-14">{about.label}</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[45%_55%] md:gap-16">
          {/* Parallax image column */}
          <div className="relative h-full">
            <div className="overflow-hidden">
              <motion.div style={reduce ? undefined : { y: imageY }} className="will-change-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/swaroop.jpg"
                  alt="Swaroop filming on location"
                  className="aspect-[3/4] w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-12"
            >
              <span className="mb-6 block h-[2px] w-[60px] bg-[var(--accent)]" />
              <h2 id="about-heading" className="heading-sub italic text-[var(--text-primary)]">
                “{about.pullQuote}”
              </h2>
            </motion.div>

            <motion.div
              variants={reduce ? undefined : staggerParent}
              initial={reduce ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col gap-6"
            >
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={reduce ? undefined : fadeUpVariant}
                  className="text-[var(--text-muted)] [font-size:clamp(1rem,1.1vw,1.15rem)]"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
