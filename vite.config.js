// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/netflix/', // ← this is what fixes GitHub Pages routing
  plugins: [react()],
})
