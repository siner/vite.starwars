/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        starwarsyellow: '#FFE81F',
      },
      fontFamily: {
        starjedi: 'StarJedi',
        starjedihollow: 'StarJediHollow',
        starjedirounded: 'StarJediRounded',
      },
    },
  },
  plugins: [],
}
