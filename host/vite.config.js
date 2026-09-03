import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),

      federation({
        name: "host_mfe",
        filename: "remoteEntry.js",

        remotes: {
          catalog_mfe:
            env.VITE_CATALOG_REMOTE ||
            "http://localhost:5001/assets/remoteEntry.js",
          cart_mfe:
            env.VITE_CART_REMOTE ||
            "http://localhost:5002/assets/remoteEntry.js",
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
      port: 5000,
    },

    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
