import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE lets the same code build for the live domain ("/") or a sub-path preview ("./").
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
});
