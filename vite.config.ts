import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

<<<<<<< HEAD
export default defineConfig(({ mode }) => ({
  base: "/karthick-raja-new-portfolio/",   // ✅ MUST MATCH REPO NAME
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
=======
export default defineConfig({
  base: "/karthick-raja-portfolio/",
  plugins: [react()],
>>>>>>> b6a946c (Fix basename mismatch)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
