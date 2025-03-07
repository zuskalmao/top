import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Ensure proper asset handling
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Properly handle CSS assets
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Use a more predictable naming pattern for assets
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // Ensure the manualChunks configuration doesn't interfere with CSS
        manualChunks: undefined
      }
    }
  },
  // Ensure base path is correctly set for assets
  base: './'
})
