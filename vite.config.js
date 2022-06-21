const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [vue()],
});
