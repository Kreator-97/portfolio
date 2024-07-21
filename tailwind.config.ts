import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '720px',
        lg: '1080px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      colors: {
        light: '#eee',
        lightAlt: '#ccc',
        dark: '#292524',
        darkAlt: 'rgb(51,61,85)',
        accent: '#f59e0b',
        accentBlue: '#0b69f5',
        accentDark: '#d97706',
      }
    },
  },
  plugins: [],
}
export default config
