import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match your GitHub repository name
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/paradise-nursery/' : '/',
}));
