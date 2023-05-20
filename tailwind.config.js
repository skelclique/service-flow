import { colors } from './src/styles/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        dotted: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23437EF7FF' stroke-width='2' stroke-dasharray='11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");`,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
