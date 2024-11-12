import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  css: {
    preprocessorOptions: {
      scss: {
        // Ativar a nova API do compilador
        api: 'modern-compiler'
      }
    }
  }
})