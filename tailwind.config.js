/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: "#353353",
          darker: '#302F4E',
          light: '#6C6CE5',
          grayish: '#454360'
        },
      },
    },
  },
  plugins: [],
};
