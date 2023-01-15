/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#A8A8A8',
        'light-gray' : '#989898'
      }
    },
  },
  plugins: [],
}