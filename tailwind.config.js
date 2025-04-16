/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#0f4c81",   // navy
        accent:    "#14b8a6",   // teal
        grayLight: "#f3f4f6"
      }
    }
  },
  plugins: [],
};
