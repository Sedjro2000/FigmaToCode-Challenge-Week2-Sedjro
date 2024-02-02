/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'AmstelvarAlpha': ['AmstelvarAlpha', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}