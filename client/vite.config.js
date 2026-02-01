import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
   server: {
    host: true,        // 👈 enables network access (0.0.0.0)
    port: 5173, 
    allowedHosts: [
    'localhost', 
    'overwild-siena-nontemperately.ngrok-free.dev', // add your ngrok URL here
  ],
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
})
