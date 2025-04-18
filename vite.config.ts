import path from "path";
import { fileURLToPath } from 'url'; // Added import
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the directory name in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      // Use the resolved __dirname
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
