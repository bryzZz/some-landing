/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rfdewi: ["RFDewi", "sans-serif"],
      },
      colors: {
        text: {
          100: "#FFFFFF",
          200: "#C8C8C8",
          300: "#4B4B4B",
          400: "#333333",
        },
        primary: {
          100: "#F7971D",
          200: "#F7AD1D",
          300: "#FEC82F",
          400: "#FD9E58",
        },
      },
      boxShadow: {
        100: "0 0 24px 3px rgba(61,61,61,0.04)",
        200: "0 4px 21px 3px rgba(28,28,28,0.07)",
        300: "0px 16px 32px 5px rgba(61, 61, 61, 0.1)",
      },
    },
  },
  plugins: [],
};
