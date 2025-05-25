import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sitemap from 'vite-plugin-sitemap';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(), // Uncomment if using image optimizer
    viteStaticCopy({
      targets: [
        {
          src: 'src/robots.txt',
          dest: ''
        }
      ]
    }),
    sitemap({
      hostname: 'https://www.cybertizegrowth.com/',
      dynamicRoutes: [
        '/',
        '/ServicesPage',
        '/web-development',
        '/web-design',
        '/app-development',
        '/ios-development',
        '/OnPageOptimization',
        '/smm',
        '/google-ads',
        '/meta-ads',
        '/content-creation',
        '/site-audit',
        '/influencer-marketing',
        '/email-marketing',
        '/our-work',
        '/our-work-page',
        '/contact',
        '/Aboutus-page',
        '/blog',
      ],
      outDir: 'dist',
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
