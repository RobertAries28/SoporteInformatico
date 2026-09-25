/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Azul tech
          dark: '#1e40af',
          light: '#3b82f6'
        },
        accent: {
          DEFAULT: '#f97316', // Naranja urgencia
          dark: '#ea580c',
          light: '#fb923c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
