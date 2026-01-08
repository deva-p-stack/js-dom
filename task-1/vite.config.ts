import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/js-dom/task-1/',
  plugins: [
    tailwindcss(),
  ],
})
