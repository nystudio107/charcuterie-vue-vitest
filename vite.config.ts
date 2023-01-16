/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
