import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { aliasList } from "./vite.resolve";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  resolve: {
    alias: aliasList,
  },
  define: {
    'process.env': process.env
  }
})
