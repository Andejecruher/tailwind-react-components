import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Importa path para resolver rutas

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Configura el alias @ para la carpeta src
    },
  },
  server: {
    port: 3000,
    open: true,
    host: "localhost",
  },
});
