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
        theme: "#FFD31F",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "xl": "30rem",
        "2xl": "35rem",
        "3xl": "40rem",
      },
      transitionDuration: {
        'long': '1500ms',
      }
    },
  },
  plugins: [],
};
