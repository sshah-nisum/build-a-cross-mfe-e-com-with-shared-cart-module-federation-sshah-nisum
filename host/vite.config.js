import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),

      federation({
        name: "shell",

        remotes: {
          catalog_mfe:
            process.env.VITE_CATALOG_REMOTE ||
            "http://localhost:5001/assets/remoteEntry.js",
          cart_mfe:
            process.env.VITE_CART_REMOTE ||
            "http://localhost:5002/assets/remoteEntry.js",
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
      port: 5000,
    },

    build: {
      target: "esnext",
    },
  };
});
