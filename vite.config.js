import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
	base:"/",
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: 'G-VXNR7RTN2T', 
      },
    })
  ],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
 