import { defineConfig, type Plugin } from 'vite'
import preact from '@preact/preset-vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function sitemapPlugin(): Plugin {
  let outDir: string
  return {
    name: 'generate-sitemap',
    configResolved(config) {
      outDir = config.build.outDir
    },
    writeBundle() {
      const today = new Date().toISOString().split('T')[0]
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://kavalikas.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://kavalikas.com/profile.webp</image:loc>
      <image:title>Harry Kavalikas - Software Engineer</image:title>
    </image:image>
  </url>
</urlset>
`
      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap)
    },
  }
}

export default defineConfig({
  plugins: [
    preact(),
    sitemapPlugin(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  base: '/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    target: 'es2022',
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: 10000,
    chunkSizeWarningLimit: 200,
  },
  server: {
    port: 3000,
    open: true,
  },
})
