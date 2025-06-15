/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        mkyviolet: {
          light: "#9e6ffd",
          DEFAULT: "#7c3aed",
          dark: "#4c1d95"
        }
      }
    }
  },
  plugins: [],
}
