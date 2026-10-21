import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        ink: 'var(--color-ink)',
        primary: 'var(--color-primary)',
        'primary-deep': 'var(--color-primary-deep)',
        secondary: 'var(--color-secondary)',
        'secondary-soft': 'var(--color-secondary-soft)',
        accent: 'var(--color-accent)',
        'accent-glow': 'var(--color-accent-glow)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: 'var(--content-max-width)',
      },
      spacing: {
        section: 'var(--section-spacing)',
      },
    },
  },
  plugins: [],
};

export default config;
