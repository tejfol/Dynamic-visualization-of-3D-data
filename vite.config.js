const { createVuePlugin } = require("vite-plugin-vue2");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components"),
      styles: path.resolve(__dirname, "./src/styles"),
      svg: path.resolve(__dirname, "./src/assets/svg"),
      images: path.resolve(__dirname, "./src/assets/images"),
    },
  },
  plugins: [createVuePlugin()],
};
