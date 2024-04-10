/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark_purple: '#A092E1',
				light_purple: '#CFC5FF',
				dark_blue: '#97E9FF',
				light_blue: '#B9F0FF',
				white: '#FBFBFB',
				black: '#101010'
			}
		},
		fontFamily: {
			valorax: ['valorax', 'sans-serif'],
		},
	},
	plugins: [],
}
