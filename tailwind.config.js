/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				Blue: "var(--Blue)",
				DarkBlue: "var(--Dark-Blue)",
			},
		},
	},
	plugins: [],
};
