import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './public/index.html',
      },
      port: 8080,
    },
  },
  dev : {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      } 
    },
    rollupOptions: {
      input: {
        app: './public/index.html',
      },
    },
  },
})
