import { defineConfig } from "vite";

export default defineConfig({
  base: '/axemanofic.github.io/',
  server: {
    port: 3000,
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
  },
  preview: {
    port: 8000
  },
  root: "src",
});
