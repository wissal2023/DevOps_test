/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#F13F3F',
        'primary-dark': '#03163B',
        'card-dark': '#192D54',
        'bg-light': '#EFF0F7',
        'text-dark': '#03163B',
        'text-light': '#FFFFFF',
        'text-gray-custom': '#616976',
      },
      fontFamily: {
        sans: ['Catamaran', 'sans-serif'],
      },
      fontSize: {
        'heading-44': '44px',
        'paragraph-24': '24px',
        'paragraph-20': '20px',
      },
      lineHeight: {
        '52': '52px',
      },
      letterSpacing: {
        'normal': '0%',
      },
      textTransform: {
        'capitalize-first': 'capitalize',
      },
    },
  },
  plugins: [],
}