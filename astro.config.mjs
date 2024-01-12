import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import ViteYaml from "@modyfi/vite-plugin-yaml";

// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  vite: {
    plugins: [ViteYaml()],
  },
  server: {
    port: 5173,
  },
});
