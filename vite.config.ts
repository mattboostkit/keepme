import path from "path";
import { fileURLToPath } from 'url'; // Added import
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the directory name in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom plugin to inject Crisp chat script
function injectCrispScript() {
  return {
    name: 'inject-crisp-script',
    transformIndexHtml(html) {
      const crispScript = `
    <script type="text/javascript">
      window.$crisp=[];window.CRISP_WEBSITE_ID="5c951b5a-4cdc-47c0-b61f-b21b2d6cf903";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
    </script>`;
      
      // Insert before closing body tag
      return html.replace('</body>', `${crispScript}\n  </body>`);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectCrispScript()],
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
