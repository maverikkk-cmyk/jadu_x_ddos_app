import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Yeh local development ke liye port hai
  },
  build: {
    outDir: 'dist', // Vercel isi folder ko dhundta hai
  }
})
