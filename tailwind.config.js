/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'], // Add JetBrains Mono
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: {
        400: colors.emerald[400],
        500: colors.emerald[500],
        600: colors.emerald[600],
        700: colors.emerald[700],
        800: colors.emerald[800],
      },
      secondary: {
        400: colors.teal[400],
        500: colors.teal[500],
        600: colors.teal[600],
      },
    },
  },
  plugins: [],
};
