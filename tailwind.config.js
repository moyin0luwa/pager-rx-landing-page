/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: { fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],}// ✅ now available as 'font-sans'
      },
  },
  plugins: [],
};