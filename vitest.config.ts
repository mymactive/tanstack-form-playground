/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
    includeSource: ["src/**/*.{js,ts}"],
  },
  plugins: [tsConfigPaths()],
});
