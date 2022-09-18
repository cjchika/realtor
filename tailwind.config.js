/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#00040a",
      blue: "#3A76DA",
      liteBlue: "#8bace2",
      silver: "#f0f3f7",
      ash: "#666565",
    },
    extend: {
      fontFamily: {
        Poppins: ["'Poppins'", "'sans - serif'"],
      },
    },
  },
  plugins: [],
};
