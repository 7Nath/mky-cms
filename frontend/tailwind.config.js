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
       },
      backgroundImage: {
        "hero-mky":
          "radial-gradient(ellipse 30% 30% at 90% 30%, white 90%, transparent 150%), linear-gradient(160deg, #f7f4fd 0%,rgb(219, 207, 255) 70%, #edeafd 85%, #d7c5f6 100%)",
      },
    },
  },
  plugins: [],
}
