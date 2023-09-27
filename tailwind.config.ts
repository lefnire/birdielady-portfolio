import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'display': ['League Spartan'],
      'body': ['Poppins']
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [require("daisyui")],
} satisfies Config
