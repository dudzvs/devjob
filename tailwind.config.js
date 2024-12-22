/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			blue: {
				thick: '#5964E0',
				soft: '#939BF4',
				veryDark: '#19202D',
				midnight: '#121721',
			},
			pureWhite: '#FFFFFF',
			gray: {
				light: '#F4F6F8',
				neutral: '#9DAEC2',
				dark: '#6E8098',
			},
		},

		extend: {
			fontFamily: {
				sans: ['"Kumbh Sans"', 'sans-serif'],
			},

			backgroundImage: {
				'mobile-pattern-header': "url('/images/mobile/bg-pattern-header.svg')",
				'tablet-pattern-header': "url('/images/tablet/bg-pattern-header.svg')",
				'desktop-pattern-header': "url('/images/desktop/bg-pattern-header.svg')",
				'icon-check': "url('/images/common/icon-check.svg')",
				'icon-filter': "url('/images/common/icon-filter.svg')",
				'icon-location': "url('/images/common/icon-location.svg')",
				'icon-moon': "url('/images/common/icon-moon.svg')",
				'icon-sun': "url('/images/common/icon-sun.svg')",
				logo: "url('/images/common/logo.svg')",
			},
		},
	},
	plugins: [],
};
