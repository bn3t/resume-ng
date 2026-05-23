import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "static",
  vite: {
    plugins: [ViteYaml(), tailwindcss()],
  },
  server: {
    port: 5173,
  },
});
