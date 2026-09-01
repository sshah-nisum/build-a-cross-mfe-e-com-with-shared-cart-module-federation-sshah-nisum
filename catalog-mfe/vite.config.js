import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "catalog_mfe",
      filename: "remoteEntry.js",

      exposes: {
        "./App": "./src/App.jsx",
      },

      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-redux",
        "@reduxjs/toolkit",
      ],
    }),
  ],

  server: {
    port: 5001,
  },

  build: {
    target: "esnext",
    minify: false,
  },
});
