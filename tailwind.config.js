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
    screens: {
      'sm': {'max': '600px'},
      // => @media (max-width: 640px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'lg': '1024px',
      // => @media (max-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (max-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (max-width: 1536px) { ... }
    }
  },
  plugins: [],
}