/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F05A25", // Orange
        secondary: "#3FA9F6", // Blue
        "background-light": "#F8F9FA",
        "background-dark": "#000000",
        "surface-dark": "#121212",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "32px",
        "large": "48px",
      },
    },
  },
  plugins: [],
}
