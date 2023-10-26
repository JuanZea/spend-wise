/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E5C0FF',
          100: '#CB81FF',
          200: '#B042FF',
          300: '#9603FF',
          400: '#7200C4',
          500: '#4B0082',
          600: '#40006F',
          700: '#340058',
          800: '#270042',
          900: '#1A002C',
          950: '#0D0016',
        },
        'fox': {
          50: '#FFFAE9',
          100: '#FFF5D3',
          200: '#FFF0BD',
          300: '#FFEAA7',
          400: '#FFE591',
          500: '#FFDF7B',
          600: '#FFD13C',
          700: '#FCC100',
          800: '#BD9100',
          900: '#7E6000',
          950: '#3F3000',
        },
      }
    },
  },
  plugins: [nativewind()],
}

