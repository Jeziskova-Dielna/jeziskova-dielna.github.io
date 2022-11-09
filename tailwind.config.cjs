/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				dark: "#0D0718",
				darkBlue: "#1F2F47",
				blue: "#29556F",
				white: "#F6EBFF",
			},
		},
	},
};
