/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      container:{
        center: true
      }
    },
  },
  plugins: [],
}

