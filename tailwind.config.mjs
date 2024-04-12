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
			},
			keyframes: {
				'width-grow': {
					'0%': { width: '25px' },
					'25%': { width: '50px' },
					'50%': { width: '75px' },
					'75%': { width: '100px' },
					'85%': { width: '150px' },
					'100%': { width: 'fit-content' }
				},
				'width-shrink': {
					'0%': { width: 'fit-content' },
					'25%': { width: '150px' },
					'50%': { width: '100px' },
					'75%': { width: '75px' },
					'85%': { width: '50px' },
					'100%': { width: '25px' }
				}
			},
			animation: {
				'width-grow': 'width-grow .3s linear',
				'width-shrink': 'width-shrink .3s linear',
			}
		},
		fontFamily: {
			valorax: ['valorax',  'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			grotesk: ['Soyuz Grotesk', 'sans-serif']
		},
	},
	plugins: [],
}
