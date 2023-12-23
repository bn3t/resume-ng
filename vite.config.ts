import ViteYaml from "@modyfi/vite-plugin-yaml";
import react from "@vitejs/plugin-react";
import fs from "fs";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { parse } from "yaml";

const resume = parse(fs.readFileSync("./src/resume.yaml", "utf8"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "html-transform",
      transformIndexHtml(html) {
        return html
          .replace(
            "<!-- meta-->",
            `
            <meta property="og:title" content="${resume.basics.name} - ${resume.basics.label}" />
            <meta property="og:description" content="${resume.basics.summary}" />
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:type" content="profile" />
            <meta property="author" content="${resume.basics.name}" />
            <title>${resume.basics.name} - ${resume.basics.label}</title>
            `,
          )
          .replace("<!-- title-->", ``);
      },
    },
    react(),
    viteSingleFile(),
    ViteYaml(),
  ],
});
