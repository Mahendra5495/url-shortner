/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/*.{html,js,css}', './views/*.ejs'],
    theme: {
        colors: {
            primary: '#0C0C0C',
            secondary: '#F2613F',
            white: "#FFF"
        },
        extend: {},
    },
    plugins: [
        {
            tailwindcss: {},
            autoprefixer: {},
        },
    ],
};
