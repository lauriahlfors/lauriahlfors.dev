/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	printWidth: 100,
	trailingComma: 'es5',
	semi: true,
	proseWrap: 'always',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/app.css',
	tailwindFunctions: ['tv', 'cn', 'cx'],
	tailwindPreserveWhitespace: true,
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
};

export default config;
