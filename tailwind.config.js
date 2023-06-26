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
          500: "#929292",
          800: "#8A8A8F",
        },
        orange: {
          500: "#FF9B33",
        },
        yellow: {
          500: "#FFD05D",
        },
      },
      gradientColorStopPositions: {
        3: "0%",
        4: "8.3%",
        5: "16.6%",
        6: "24.9%",
        7: "33.2%",
        8: "41.5%",
        9: "49.8%",
        10: "58.1%",
        11: "66.4%",
        12: "74.7%",
        13: "83%",
        14: "91.3%",
        15: "100%",
      },
    },
  },
  plugins: [],
};
