import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// The singlefile plugin makes the production build one self-contained
// index.html (all JS + CSS inlined), so it works offline and in any preview.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false
  }
});
