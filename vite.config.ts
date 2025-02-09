import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['lucide-react'],
          'forms': ['./src/components/ContactForm', './src/components/NewsletterForm'],
          'modals': [
            './src/components/AboutUsModal',
            './src/components/TermsModal',
            './src/components/PrivacyModal',
            './src/components/ImprintModal'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true
    },
    sourcemap: false,
    target: 'esnext'
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
