/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: '#090d15',
				fondo:'#0e141f',
				text:'#3bc764'
			}
		},
	},
	plugins: [],
}
