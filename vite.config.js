import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// En local, base = '/'. Para GitHub Pages (https://usuario.github.io/repositorio/):
//   VITE_BASE=/repositorio/ npm run build      (PowerShell: $env:VITE_BASE='/repositorio/'; npm run build)
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
});
