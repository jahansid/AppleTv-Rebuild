/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    colors: {
      background: "#000",
      bgHighlight: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
    },
    extend: {},
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"]
    },
  },
  plugins: [],
}
