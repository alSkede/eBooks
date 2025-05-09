import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/html/eBooks/Wiggle/',        // exakt wie URL!
  build: {
    outDir: 'eBooks/Wiggle',           // jetzt nicht mehr „dist“!
    emptyOutDir: true
  }
})
