// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/todo-app/", // ✅ لازم السطر ده عشان GitHub Pages تشتغل صح
});
