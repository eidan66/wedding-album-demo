import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import svgr from 'vite-plugin-svgr';
import vercel from 'vite-plugin-vercel';
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: '/', // <-- this should be '/' for root deployment
  plugins: [react(),svgr(), tailwindcss(), vercel({
    includeFiles: true,
  }),
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});