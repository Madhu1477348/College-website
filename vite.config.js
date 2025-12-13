import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/College-website/", // ✅ MUST end with /
  plugins: [react()],
});
