import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // todo: allow fetch from status.impin.fr
  server: {
    proxy: {
      '/api': {
        target: 'https://api.impin.fr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  } 
  
})

