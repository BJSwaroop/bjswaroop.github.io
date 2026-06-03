'use client';

import { FormEvent, useState } from 'react';
import SectionReveal from './SectionReveal';
import { contact, siteConfig } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-[6px] border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-dim)] transition-colors focus:border-[var(--accent)] focus:outline-none';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const formspreeId = siteConfig.formspreeId;
  const configured = Boolean(formspreeId);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // No Formspree backend yet? Fall back to the visitor's email client.
    if (!configured) {
      const data = new FormData(form);
      const name = String(data.get('name') || '');
      const email = String(data.get('email') || '');
      const intent = String(data.get('intent') || '');
      const message = String(data.get('message') || '');
      const subject = encodeURIComponent(`[Portfolio] ${intent} inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nIntent: ${intent}\n\n${message}`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[#050505] py-[var(--section-gap)]"
    >
      <div className="section-shell">
        <p className="section-label mb-3">{contact.label}</p>
        <h2 id="contact-heading" className="heading-section text-[var(--text-primary)]">
          {contact.heading}
        </h2>
        <p className="mt-4 max-w-[620px] text-[var(--text-muted)]">{contact.subheading}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <SectionReveal>
            {status === 'success' ? (
              <div className="rounded-[6px] border border-[var(--accent)] bg-[var(--accent-glow)] p-8 text-center">
                <p className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  Message sent ✓
                </p>
                <p className="mt-2 text-[var(--text-muted)]">
                  Thanks for reaching out. I’ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-6 text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="label-caption text-[var(--text-muted)]">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="label-caption text-[var(--text-muted)]">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@email.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="intent" className="label-caption text-[var(--text-muted)]">
                    Intent
                  </label>
                  <select id="intent" name="intent" className={fieldClass} defaultValue="Hire">
                    <option>Hire</option>
                    <option>Collaborate</option>
                    <option>Speak</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="label-caption text-[var(--text-muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${fieldClass} resize-y`}
                    placeholder="Tell me a bit about what you have in mind…"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email {contact.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
                {!configured && (
                  <p className="text-xs text-[var(--text-dim)]">
                    This opens your email app with the message ready to send.
                  </p>
                )}
              </form>
            )}
          </SectionReveal>

          {/* Contact details + socials */}
          <SectionReveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <div>
                <p className="label-caption text-[var(--text-muted)]">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block font-display text-xl font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="label-caption mb-3 text-[var(--text-muted)]">Find me</p>
                <ul className="flex flex-col gap-2">
                  {contact.socials.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between gap-4 border-b border-[var(--border)] py-2 transition-colors hover:border-[var(--accent)]"
                      >
                        <span className="text-[var(--text-primary)]">{s.platform}</span>
                        <span className="mono-accent text-[var(--text-dim)] transition-colors group-hover:text-[var(--accent)]">
                          {s.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
