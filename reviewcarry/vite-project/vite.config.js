import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import App from './src/components/App'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
