module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          0: "#FFFFFF",
          10: "#F9E3E3",
          20: "#F1C8C7",
          30: "#EAAEAD",
          40: "#E59695",
          50: "#E0817E",
          60: "#DE6D69",
          70: "#DD5A56",
          80: "#DE4942",
          90: "#E1261C",
          100: "#C81107",
        },
      },
    },
  },
  plugins: [],
};
