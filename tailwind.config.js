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
    fontSize: {
      //12 , 14, 17, 19, 21,24, 28, 48, 72
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1.0625rem", // 17px
      lg: "1.1875rem", // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2.5rem", // 48px
      "5xl": "4.5rem", // 72px
    },
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"]
    },
  },
  plugins: [],
}
