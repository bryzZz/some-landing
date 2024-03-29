/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
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
          500: "#F2821D",
        },
      },
      boxShadow: {
        100: "0 0 24px 3px rgba(61,61,61,0.04)",
        200: "0 4px 21px 3px rgba(28,28,28,0.07)",
        300: "0px 16px 32px 5px rgba(61, 61, 61, 0.1)",
        400: "0px 9px 24px -8px rgba(34, 41, 47, 0.18)",
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "primary-img": "primary-img 3s ease-in-out infinite",
        "secondary-img": "secondary-img 3s ease-in-out infinite",
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "primary-img": {
          "0%, 100%": { transform: "translateY(4%)" },
          "50%": { transform: "translateY(0%)" },
        },
        "secondary-img": {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(4%)" },
        },
      },
    },
  },
  plugins: [],
};
