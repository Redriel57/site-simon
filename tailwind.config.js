/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: ['dark', 'dark:hover'],
            textColor: ['dark', 'dark:hover'],
            colors: {
                'primary': {
                    DEFAULT: '#FFD000', // Sunlit Yellow
                    dark: '#B0A040'     // Goldenrod
                },
                'background': {
                    DEFAULT: '#271F30', // Charcoal
                    dark: '#1C1624'     // Ebony
                },
                'secondary': {
                    DEFAULT: '#4DBB89', // Aquamarine
                    dark: '#378C66'     // Emerald Green
                },
                'highlight': {
                    DEFAULT: '#574DBD', // Lavender Blue
                    dark: '#403894'     // Indigo Blue
                },
                'accent': {
                    DEFAULT: '#DB504A', // Vermilion
                    dark: '#A53C35'     // Burnt Sienna
                },
            },
        },
    },
    plugins: [],
}
