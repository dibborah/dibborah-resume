import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // server: {
  //   host: "::",
  //   port: 8080,
  // },
  // plugins: [
  //   react(),
  // ].filter(Boolean),
  plugins: [
    react(),
  ],
  base: "/dibborah-resume",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
