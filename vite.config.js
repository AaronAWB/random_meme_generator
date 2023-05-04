import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Utils': path.resolve(__dirname, 'src/utils')
    }
  },
})
