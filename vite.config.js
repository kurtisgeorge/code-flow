import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from a subpath: https://kurtisgeorge.github.io/code-flow/
  // Setting `base` ensures built asset URLs are prefixed correctly (prevents blank white page).
  base: '/code-flow/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
})
