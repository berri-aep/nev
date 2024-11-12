/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fcbf49",
        secondary: "#2B2B2B",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        homeBanner:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('../img/Banner-img.png')",
        discover:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('../img/bg-trees.png')",
        gradientt: "linear-gradient(rgba(43,43,43,0), rgba(43,43,43,1))",
        gradientt2: "linear-gradient(rgba(43,43,43,1), rgba(43,43,43,0))",
        gradient_black: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))",
        services: "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
      },
    },
  },
  plugins: [],
};

