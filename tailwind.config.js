export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'set-dark': '#0a0a0a', // Color de fondo oscuro principal
        'set-blue': '#007bff', // Azul de los botones
      }
    },
  },
  plugins: [],
}