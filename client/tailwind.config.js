/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                '7Col': '5% 15% 15% 10% 30% 15% 10%',
                '4Col': '5% 40% 20% 30%'
            }
        },
    },
    plugins: [],
}

