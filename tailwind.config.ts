import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          elevated: 'var(--bg-elevated)',
          subtle: 'var(--bg-subtle)',
          card: 'var(--bg-card)',
        },
        ink: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          dim: 'var(--text-dim)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        line: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        },
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1280px',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter2: '-0.02em',
      },
      boxShadow: {
        glow: '0 0 0 1px var(--accent), 0 0 30px var(--accent-glow)',
        'glow-strong': '0 0 0 1px var(--accent), 0 0 45px var(--accent-glow-strong)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        spin: {
          from: { transform: 'rotateX(60deg) rotateZ(0deg)' },
          to: { transform: 'rotateX(60deg) rotateZ(360deg)' },
        },
        'spin-rev': {
          from: { transform: 'rotateX(60deg) rotateZ(360deg)' },
          to: { transform: 'rotateX(60deg) rotateZ(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 32s) linear infinite',
        float: 'float 2.4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
