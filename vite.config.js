import { defineConfig } from "vite";
import process from "process";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Kasa" : "",
  plugins: [react()],
});
