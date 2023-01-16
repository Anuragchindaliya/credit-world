/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'tb': '992px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        primary: {
          ...colors.blue,
        },
      },
    },
  },
  plugins: [],
};
