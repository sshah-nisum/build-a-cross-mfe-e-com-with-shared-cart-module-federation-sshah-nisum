import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "cart_mfe",
      filename: "remoteEntry.js",

      remotes: {
        host_mfe: "http://localhost:5000/assets/remoteEntry.js",
      },

      exposes: {
        "./App": "./src/App.jsx",
      },

      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        "@reduxjs/toolkit": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],

  server: {
    port: 5002,
  },

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
