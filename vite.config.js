import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
   server: {
    host: true,        // 👈 enables network access (0.0.0.0)
    port: 5173, 
    allowedHosts: [
    'localhost', 
    'uncontracted-overjudiciously-deanna.ngrok-free.dev', // add your ngrok URL here
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
