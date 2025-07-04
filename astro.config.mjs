// @ts-check
import { defineConfig } from 'astro/config'
import path from 'path'
import react from '@astrojs/react'

import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/index" as *;`,
        },
      },
    },
    esbuild: {
      jsx: 'automatic',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  build: {
    assets: '_assets',
  }
})
