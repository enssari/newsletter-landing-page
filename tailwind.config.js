/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blueish': {
          light: 'hsl(235, 18%, 26%)',
          dark: 'hsl(234, 29%, 20%)'
        }
      }
    },
  },
  plugins: [],
}

