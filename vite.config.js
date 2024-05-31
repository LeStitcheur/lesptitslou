import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: './build',
	},
	plugins: [
		react(),
		sitemap({
			outDir: './build',
			hostname: 'https://www.lesptitslou.fr',
			routes: [
				'/',
				'/decouvrir',
				'/objectifs',
				'/contact',
				'/pedagogie',
				'/siestes',
				'/mentions',
				'confidentialite',
			],
		}),
	],
})
