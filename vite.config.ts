import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [vike(), react()],
  build: {
    target: "es2022",
  },
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/sharedComponents"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
