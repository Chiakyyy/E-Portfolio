import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'username' and 'repo' to your GitHub username and repository
const repo = process.env.REPO_NAME || 'e-portfolio-react';

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
})
