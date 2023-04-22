import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import domtoimage from "dom-to-image";

export default defineConfig({
plugins: [
            react(),
            laravel({
                  input: ['resources/css/app.css', 'resources/js/app.jsx'],
                  refresh: true,
            }),
],
optimizeDeps: {
    include: [
      // ... (otras dependencias a incluir)
      "dom-to-image",
    ],
  },
});
