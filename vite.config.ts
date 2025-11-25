import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4', '**/*.MP4'],   // <-- allow video imports
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
