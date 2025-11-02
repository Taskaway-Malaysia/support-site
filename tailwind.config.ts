import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/pages/**/*.vue',
    './app/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        taskaway: {
          primary: '#FFC333',    // Taskaway brand yellow/gold
          secondary: '#1D1A69',  // Dark blue from logo
          dark: '#2D2D2D',       // Dark gray for text
          light: '#F8F8F8',      // Light gray background
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
