/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        coffee: {
          50: '#F5EFE6',
          100: '#E6D5C1',
          500: '#8B4513',
          700: '#5D3A1A'
        }
      }
    }
  },
  plugins: []
}