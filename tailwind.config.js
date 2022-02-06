module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{js,jsx}",
    "./styles/main.scss",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      tablet: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      ">desktop": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
