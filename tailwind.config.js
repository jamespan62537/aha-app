/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#181818",
          800: "#1B1B1B",
        },
        gray: {
          800: "#8A8A8F",
        },
      },
    },
  },
  plugins: [],
};
