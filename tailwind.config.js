/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',  // ⏳ 3s per rotation
        'spin-medium': 'spin 1.5s linear infinite', // ⏳ 1.5s per rotation
        'spin-fast': 'spin 0.5s linear infinite'  // ⚡ 0.5s per rotation
      },
    },
  },
  plugins: [],
}

