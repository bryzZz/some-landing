/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rfdewi: ["RFDewi", "sans-serif"],
      },
    },
    colors: {
      text: {
        100: "#FFFFFF",
        200: "#C8C8C8",
        300: "#4B4B4B",
        400: "#333333",
      },
    },
  },
  plugins: [],
};
