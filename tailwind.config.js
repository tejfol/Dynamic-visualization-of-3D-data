module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{js,jsx}",
    "./styles/main.scss",
  ],
  theme: {
    extend: {
      spacing: {
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
