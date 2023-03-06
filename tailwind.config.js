/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#f3e1c5',
        'lightgrey': '#f7f7f7',
        'emeraldo': '#C3FFE2',
        'lightblue': '#D2EDF1',
        'mediumblue': '#BBE5EC',
        'darkblue': '#A0DAE4',
        'navhover': '#647AA4'
      }
    },
  },
  plugins: [],
}
