/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./ar/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'Inter', 'Tajawal', 'sans-serif'],
                display: ['Manrope', 'Poppins', 'Cairo', 'sans-serif'],
            },
            colors: {
                'brand-teal': '#0D9488',
                'brand-gold': '#F59E0B',
                'brand-blue': '#0EA5E9',
                'brand-navy': '#1E293B',
                'brand-light': '#F8FAFC',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        }
    },
    plugins: [],
}
