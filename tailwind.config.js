const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		extend:{
			fontFamily: {
				'inter': ['"Inter var"', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	variants : {},
	plugins  : []
};
