import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import { loadEnv } from 'vite'

const config = defineConfig(({ mode }) => {
  // console.log("MODE", mode);
  // const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      devtools(),
      nitro(),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
    ],
    // define: JSON.stringify(env)
  }
})

export default config
