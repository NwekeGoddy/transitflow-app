/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krub: ["Krub"],
        rubik: ["Rubik"],
      },

      colors: {
        primary1: "#FFBE34",
        primary2: "#091242",
        secondary1: "#F4F4F4",
        headingcolor: "#1C1F35",
        Paracolor: "#666C89",
      },
    },
  },
  plugins: [],
};
