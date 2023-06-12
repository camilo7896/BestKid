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
        'redBlood': '#9e1b0e',
        'white-ice': {
          '50': '#e5faf1',
          '100': '#d4f7e6',
          '200': '#adedd3',
          '300': '#78ddb9',
          '400': '#41c69b',
          '500': '#1eab82',
          '600': '#118a6a',
          '700': '#0d6f57',
          '800': '#0d5846',
          '900': '#0c483b',
          '950': '#052922',
        }
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