/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'app-primary': '#414141',
				'app-secondary': '#BF0413',
				'app-terciary': '#FFFFFF'
			  }
		},
	},
	plugins: [],
}
