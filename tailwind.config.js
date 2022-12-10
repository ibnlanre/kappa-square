const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFF",
      transparent: "transparent",
      black: "#000",
      file: {
        blue: "#0791F8",
        text: "#374151",
        bg: "#F3F4F6",
        light: "#D6ECFD",
      },
      gray: {
        50: "#E9E9E9",
        100: "#D2D2D2",
        200: "#A4A5A4",
        300: "#777977",
        400: "#494C49",
        500: "#1C1F1C",
        600: "#151715",
        700: "#0E100E",
        800: "#070807",
        900: "#030303",
      },
      primary: {
        50: "#F1F2F1",
        100: "#E2E5E2",
        200: "#C6CBC5",
        300: "#A9B0A9",
        400: "#8D968C",
        500: "#707C6F",
        600: "#545D53",
        700: "#383E38",
        800: "#1C1F1C",
        900: "#0B0C0B",
      },
      accent: {
        50: "#FAF8F6",
        100: "#F3F1ED",
        200: "#E8E2DB",
        300: "#DCD4C8",
        400: "#D1C5B6",
        500: "#C5B7A4",
        600: "#94897B",
        700: "#635C52",
        800: "#312E29",
        900: "#141210",
      },
      kappa: {
        primary: "#4096D0",
        "primary-dark": "#1D509B",
        light: "#92D1FB",
        text: "#666666",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("clump", "@supports (font-size: clamp(1rem,2vw,3rem))");
    }),
  ],
};
