/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        background: "#09090B",
        primary: "#cfff55",
        primaryDark: "#556F2D",
        card: "#18181B",
        border: "#27272A",
        muted: "#71717A",
        white: "#FAFAFA",
      },
      fontFamily: {
        regular: ["regular"],
        medium: ["medium"],
        bold: ["bold"],
      }
    },
  },

  plugins: [],
};