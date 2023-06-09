/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '9': 'repeat(9, minmax(0, 0.07fr))',

      }
    },
  },
  plugins: [],
}