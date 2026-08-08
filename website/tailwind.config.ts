import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5efe0',
        ink: '#1a1410',
        mustard: '#d4a574',
        sand: '#e8dcc8',
        'warm-gray': '#b8a892',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2' }],
        'display-md': ['2rem', { lineHeight: '1.2' }],
        headline: ['1.5rem', { lineHeight: '1.3' }],
        subheading: ['1.25rem', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        eyebrow: ['0.75rem', { lineHeight: '1.5' }],
        caption: ['0.625rem', { lineHeight: '1.5' }],
      },
      spacing: {
        page: '1.5rem',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
