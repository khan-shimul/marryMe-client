/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, serif",
        playfair: "Playfair Display, serif",
        cinzel: "Cinzel Decorative, serif"
      }
    },
  },
  // plugins: [require('daisyui')],
}

