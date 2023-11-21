/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amethyst': {
          DEFAULT: '#9356C8',
          50: '#ECE1F5',
          100: '#E2D1F0',
          200: '#CEB2E6',
          300: '#BA94DC',
          400: '#A775D2',
          500: '#9356C8',
          600: '#7738AD',
          700: '#5A2B83',
          800: '#3D1D59',
          900: '#200F2E',
          950: '#110819'
        },
      }
    },
  },
  plugins: [],
}

