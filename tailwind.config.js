/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/routes/**/*.svelte',
    ],
    theme: {
        extend: {
            colors: {
                'base': {
                    DEFAULT: '#0C0521',
                    50: '#734EE4',
                    100: '#673EE2',
                    200: '#5021DB',
                    300: '#441CBC',
                    400: '#39189D',
                    500: '#2E137E',
                    600: '#230E5F',
                    700: '#170A40',
                    800: '#0C0521',
                    900: '#070314'
                }
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}