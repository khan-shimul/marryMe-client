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
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 10s infinite linear',
      },
    },
  },
  plugins: [require('daisyui')],
}

