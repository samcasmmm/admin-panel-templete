import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { '/v2': 'http://test.hookfish.co.in' },
    port: 3001,
    host: true,
  },
});
