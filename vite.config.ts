import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // NOTE: See in-source testing: https://vitest.dev/guide/in-source.html
    "import.meta.vitest": "undefined",
  },
  plugins: [react(), tsConfigPaths()],
});
