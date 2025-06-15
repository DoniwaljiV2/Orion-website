
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f7ff',
        accent: '#ff005c',
        glass: '#0f0f0f'
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [react(),tailwindcss(),],
  
})
