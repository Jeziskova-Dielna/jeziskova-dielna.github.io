/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    plugins: [],
};
