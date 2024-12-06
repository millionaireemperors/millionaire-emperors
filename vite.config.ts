import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/millionaire-emperors/', // Add this line
  plugins: [react()],
});

