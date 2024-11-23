/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#fffbfa',
                    dark: '#050505',
                },
                title: {
                    DEFAULT: '#0a0d12',
                    dark: '#fffbfa',
                },
                subtitle: {
                    DEFAULT: '#6b7280',
                    dark: '#9ca3af',
                },
            }
        }
    }
}