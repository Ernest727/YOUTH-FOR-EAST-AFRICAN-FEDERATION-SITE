/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#007A33",
          gold: "#D4AF37",
        }
      }
    },
  },
  plugins: [],
}
