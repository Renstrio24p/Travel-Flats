import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  base: './',
  publicDir: 'src/images',
  server: {
    open: './',
    port: 4600
  },
})
