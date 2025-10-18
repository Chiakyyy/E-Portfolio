import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'E-Portfolio';

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
})
