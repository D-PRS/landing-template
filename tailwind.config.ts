import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002060',
          50: '#e6eaf4',
          100: '#ccd5e9',
          200: '#99abd3',
          300: '#6681bd',
          400: '#3357a7',
          500: '#002060',
          600: '#001a4d',
          700: '#00143a',
          800: '#000d26',
          900: '#000713',
        },
        secondary: {
          DEFAULT: '#05dde1',
          50: '#e6fdfd',
          100: '#ccfbfb',
          200: '#99f7f7',
          300: '#66f3f3',
          400: '#33efef',
          500: '#05dde1',
          600: '#04b1b4',
          700: '#038587',
          800: '#02585a',
          900: '#012c2d',
        },
        tertiary: '#05fbe1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,32,96,0.08)',
        'card-hover': '0 8px 30px rgba(0,32,96,0.15)',
        'card-xl': '0 4px 24px rgba(0,32,96,0.12)',
        glow: '0 0 20px rgba(5,221,225,0.3)',
        'glow-lg': '0 0 40px rgba(5,221,225,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
