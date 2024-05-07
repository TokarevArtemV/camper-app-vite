import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: '/src/assets',
      styles: '/src/assets/styles',
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      service: '/src/services',
      base: '/',
      build: {
        rollupOptions: {
          external: ['@chatscope/chat-ui-kit-styles'],
        },
      },
    },
  },
});
