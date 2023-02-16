/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merienda: ["Merienda", "cursive"],
      },
      screens: {
        tall: { raw: "(min-height: 1100px)" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
