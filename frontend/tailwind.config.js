/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff735c"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],

}