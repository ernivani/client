import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
      },
      port: 8080,
    },
    // change the output directory to `dist/client`
    outDir: '../rooting/dist',
  },
  dev : {
    port: 8080,
    rollupOptions: {
      input: {
        app: './index.html',
      },
    },
  },
})

