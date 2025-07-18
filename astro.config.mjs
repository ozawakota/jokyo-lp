// @ts-check
import { defineConfig } from 'astro/config'
import path from 'path'
import react from '@astrojs/react'

import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: '/removal/',

  // アセットファイルを相対パスにする設定
  build: {
    assets: 'assets',
    assetsPrefix: './',
  },

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
    build: {
      // JavaScriptの圧縮設定
      minify: 'esbuild',
      // CSS圧縮を有効化
      cssMinify: true,
      // チャンクサイズの設定
      rollupOptions: {
        output: {
          manualChunks: {
            // vendor チャンクを分離
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  },
  outDir: './docs/removal',
  // 追加の圧縮設定
  compressHTML: true,
})