/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gift:
        {
          50: '#f84464',
          100: '#d2cbe9',
          200: '#b4a8d7',
          300: '#9685c6',
          400: '#2B2D49',
          500: '#5f489b',
          600: '#4a3879',
          700: '#352857',
          800: '#201836',
          900: '#0c0717',
        }
      }
    },
  },
  plugins: [],
}

