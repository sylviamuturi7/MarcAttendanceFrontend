/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D6B4F",
        accent: "#B8956A",
        background: "#F5F0E8",
        body: "#1a1a1a",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
