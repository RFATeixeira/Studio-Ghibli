/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2E63",
        secondary: "#08D906",
        dark: "#0B0A0A",
        light: "#FFFFFF",
        brandcolor: "#F1A5B1",
      },
      backgroundImage: {
        backgroundImg: "url('/src/image/background.png')",
        logo: "url('/src/image/logo.svg')",
      },
      keyframes: {
        floating: {
          "0%, 100%": {
            transform: "translateY(4%)",
          },
          "40%": {
            transform: "translateY(-4%)",
          },
        },
      },
      animation: {
        float: "floating 4s ease infinite",
        float2: "floating 5s ease infinite",
      },
    },
    fontFamily: {
      body: ["Archivo", "ui-sans-serif", "system-ui"],
      emphasis: ["Andada Pro", "serif"],
    },
  },
  plugins: [],
};
