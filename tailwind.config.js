/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        c1: '#113567',
        c2: "#4682B4",
        c3: '#85AADD',
        c4: '#EBF1FD',
        c5: '#DFEAFF'
      },
    },
  },
  plugins: [],
}

