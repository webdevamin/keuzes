/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        theme: "#FFDE59",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "xl": "30rem",
        "2xl": "36rem",
        "3xl": "42rem",
      },
    },
  },
  plugins: [],
};
