const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
	input: [
		'src/**/*.{js,jsx,ts,tsx}',  // Include all JavaScript and TypeScript files
		'!src/**/*.spec.{js,jsx,ts,tsx}',  // Exclude test files
		'!src/translations/**',  // Exclude the translations directory
		'!**/node_modules/**',  // Exclude node_modules
	],
	output: './',  // Output directory
	options: {
		debug: true,  // Enable debug mode
		func: {
			list: ['i18next.t', 'i18n.t', 't'],  // List of functions to scan for
			extensions: ['.js', '.jsx'],  // Extensions for JavaScript files
		},
		trans: false,  // Disable scanning for <Trans> components
		lngs: ['en', 'es', 'ru'],  // List of languages
		ns: ['common', 'example', 'startup', 'translation', 'welcome'],  // List of namespaces
		defaultLng: 'en',  // Default language
		defaultNs: 'translation',  // Default namespace
		defaultValue: function (lng, ns, key) {
			return `[${lng}] ${key}`;  // Default value format for missing keys
		},
		resource: {
			loadPath: 'src/translations/{{lng}}/index.ts',  // Path to load resources from
			savePath: 'src/translations/{{lng}}/index.ts',  // Path to save resources to
			jsonIndent: 2,  // JSON formatting
			lineEnding: '\n',  // Line ending character
		},
		nsSeparator: false,  // Disable namespace separator
		keySeparator: false,  // Disable key separator
		interpolation: {
			prefix: '{{',
			suffix: '}}',
		},
	},
	transform: typescriptTransform({
		extensions: ['.ts', '.tsx'],  // Extensions for TypeScript files
		tsOptions: {
			target: 'es5',  // Target ES5
			module: 'esnext',  // Module format
		},
	}),
};
