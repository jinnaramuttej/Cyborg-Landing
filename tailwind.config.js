/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#0F0F12',
        chassis: '#14141A',
        crimson: {
          DEFAULT: '#D00016',
          dark: '#8C0010',
          glow: '#FF1A35',
          muted: 'rgba(208, 0, 22, 0.25)'
        },
        offwhite: '#F1F0ED',
        muted: '#999999',
        borderCrimson: 'rgba(200, 0, 20, 0.35)',
      },
      fontFamily: {
        raiko: ['Raiko', 'sans-serif'],
        display: ['Raiko', 'sans-serif'],
        headline: ['Raiko', 'sans-serif'],
        tech: ['Chakra Petch', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.25em',
        mega: '0.4em'
      },
      boxShadow: {
        'crimson-glow': '0 0 35px -5px rgba(208, 0, 22, 0.45)',
        'crimson-intense': '0 0 60px 10px rgba(208, 0, 22, 0.35)',
        'crimson-sharp': '0 0 15px 1px rgba(208, 0, 22, 0.65)',
        'quote-border': '0 0 20px rgba(200, 0, 20, 0.3)',
      }
    },
  },
  plugins: [],
}
