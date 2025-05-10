import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/html/eBooks/Wiggle/',
  plugins: [react()],
  resolve: {
    alias: {
      '@scenes': path.resolve(__dirname, 'public/scenes'),
      '@audio': path.resolve(__dirname, 'public/audio')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
