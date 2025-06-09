// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  plugins: [react(),
        viteStaticCopy({
      targets: [
        {
          src: 'static.json', // Path to your static.json
          dest: '.',          // Copy to root of 'dist'
        },
      ],
    }),

  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
     // Copy static.json to dist
    assetsInclude: ['static.json'],
  }
})