/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    safelist: [
        {
            pattern: /^(text|bg|border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    deep: '#0F172A',
                    green: '#059669',
                    'green-dark': '#047857',
                    mint: '#10B981',
                },
                service: {
                    blue: '#3B82F6',
                    pink: '#EC4899',
                    purple: '#8B5CF6',
                    cyan: '#06B6D4',
                    green: '#10B981',
                    orange: '#F97316',
                },
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
