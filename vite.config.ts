import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile(), ViteYaml()],
});
