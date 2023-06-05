/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#ff5a23',
        'darkGreen': '#03624e',
        'lightGreen': '#00b288',
        'redBlood': '#9e1b0e'
      },
      fontFamily: {
        fontGeneral: ['Quicksand', 'sans-serif'],
        fontTitleRegular: ['FontSpringRegular', 'serif'],
        fontTitleBold: ['FontSpringBold', 'serif'],
      }
    },
  },
  plugins: [],
}