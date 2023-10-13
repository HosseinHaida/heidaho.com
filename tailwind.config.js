/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out infinite",
      },
    },
    colors: {
      red: "#8a0000",
      red_dark: "#590a05",
      red_light: "#815251",
      red_secondary: "#662521",
      paper: "#d6cfb6",
      grey: "#c0bcaa",
      black: "#000",
      white: "#e6e1e1",
    },
  },
  plugins: [],
}
