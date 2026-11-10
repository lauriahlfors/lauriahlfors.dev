// prettier.config.js
/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 4,
	singleQuote: false,
	printWidth: 100,
	trailingComma: "es5",
	semi: true,
	proseWrap: "always",
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/app.css",
	tailwindFunctions: ["clsx", "cva"],
	tailwindPreserveWhitespace: true,
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
