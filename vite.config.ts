
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures paths work on GitHub Pages sub-folders
  build: {
    outDir: 'dist',
  }
});
