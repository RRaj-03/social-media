const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'small': '370px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/forms"),],
}