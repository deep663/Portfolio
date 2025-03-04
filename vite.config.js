import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import tailwindcssAnimated from 'tailwindcss-animated'
// import tailwindcssMotion from 'tailwindcss-motion'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
