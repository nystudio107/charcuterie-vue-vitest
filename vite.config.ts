/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),eslint(),stylelint()],
  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, './src')},
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
